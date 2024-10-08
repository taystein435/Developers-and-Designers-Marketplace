import prisma from "@/lib/client";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import Chat from '@/components/shared/Chat';

async function getUserData(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      profiles: true,
      messagesReceived: true, // Include messages sent by the user
      reviews: true, // Include reviews written by the user
    },
  });
}

// Server component
const Dashboard = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;

  if (!userId) {
    redirect("/"); // Redirect if no userId is provided
    return null; // Return null to prevent rendering
  }

  const userData = await getUserData(userId); // Fetch user data from the database

  if (!userData) {
    return notFound(); // Return a 404 if user data is not found
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">
        Welcome to your Dashboard, {userData.username}!
      </h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-black">
          Profile Information
        </h2>
        {userData.profiles.length > 0 && (
          <div className="mt-4">
            <Image
              src={userData.profiles[0].bannerImage || "/noBanner.png"}
              alt="Banner Image"
              width={1200}
              height={400}
              className="w-full h-48 object-cover mt-4"
            />
            <div className="flex mt-5">
              <Image
                src={userData.profiles[0].profilePicture || "/noAvatar.png"}
                alt="Profile Picture"
                width={500}
                height={500}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="mt-2 text-black">
                  Name: {userData.profiles[0].firstName}{" "}
                  {userData.profiles[0].lastName}
                </p>
                <p className="mt-1 text-black ">
                  Description: {userData.profiles[0].description}
                </p>
              </div>
            </div>
          </div>
        )}
        {userData.profiles.length === 0 && (
          <p className="mt-4 text-black">No profile information available.</p>
        )}
      </div>

      {/* Messages Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-black">Your Messages</h2>
        {userData.messagesReceived.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {userData.messagesReceived.map((message) => (
              <li
                key={message.id}
                className="p-3 bg-gray-100 rounded-lg text-black"
              >
                <p>{message.content}</p>
                <p className="text-sm text-gray-500">
                  Sent on: {new Date(message.sentAt).toLocaleDateString()}
                </p>
                <Chat receiverId={message.senderId} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-black">No messages sent yet.</p>
        )}
      </div>

      {/* Reviews Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-black">Your Reviews</h2>
        {userData.reviews.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {userData.reviews.map((review: { id: Key | null | undefined; comment: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; createdAt: string | number | Date; }) => (
              <li
                key={review.id}
                className="p-3 bg-gray-100 rounded-lg text-black"
              >
                <p>{review.comment}</p>
                <p className="text-sm text-gray-500">
                  Posted on: {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-black">No reviews written yet.</p>
        )}
      </div>
   
    </div>
  );
};

export default Dashboard;
