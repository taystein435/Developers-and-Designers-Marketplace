import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { UserJSON, WebhookEvent } from '@clerk/nextjs/server';
import prisma from '@/lib/client';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', { status: 400 });
  }

  const { data } = evt;
  const eventType = evt.type;
  console.log(`Webhook with an ID of ${data.id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  function isUserJSON(data: any): data is UserJSON {
    return (data as UserJSON).first_name !== undefined;
  }

  if (isUserJSON(data)) {
    const email = data?.email_addresses?.[0]?.email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const username = firstName && lastName ? `${firstName} ${lastName}` : null;
    const role =  'user'; // Use a default value or adjust based on your data

    if (!username || !email) {
      console.error('Missing required user fields', { username, email });
      return new Response('Missing required user fields', { status: 400 });
    }

    if (eventType === "user.created") {
      try {
        await prisma.user.create({
          data: {
            id: data.id,
            username,
            email,
            role, // Add the role field here
          },
        });
        return new Response("User has been created!", { status: 200 });
      } catch (err) {
        console.error('Failed to create the user:', err);
        return new Response("Failed to create the user!", { status: 500 });
      }
    }

    if (eventType === "user.updated") {
      try {
        await prisma.user.update({
          where: { id: data.id },
          data: { username, email, role }, // Add the role field here
        });
        return new Response("User has been updated!", { status: 200 });
      } catch (err) {
        console.error('Failed to update the user:', err);
        return new Response("Failed to update the user!", { status: 500 });
      }
    }
  } else {
    console.error('Webhook data is not of type UserJSON', { data });
    return new Response('Webhook data is not of type UserJSON', { status: 400 });
  }

  return new Response("Webhook received", { status: 200 });
}
