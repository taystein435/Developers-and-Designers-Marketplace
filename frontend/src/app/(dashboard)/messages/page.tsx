import React from 'react';
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Chat from '@/components/shared/Chat';
// Message type definition
type Message = {
  id: string;
  content: string;
  sentAt: string;
  sender: {
    username: string;
  };
};

// Fetch Messages Server-Side
const fetchMessages = async (userId: string): Promise<Message[]> => {
  try {
    const messages = await prisma.message.findMany({
      where: { receiverId: userId },
      include: { sender: true }, // Include sender details
      orderBy: { sentAt: 'desc' }, // Order messages by the date sent
    });

    return messages.map((msg) => ({
      id: msg.id,
      content: msg.content,
      sentAt: msg.sentAt.toISOString(),
      sender: {
        username: msg.sender.username,
      },
    }));
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
};

export default async function MessagesPage() {

  const { userId } = auth();
  // Ensure user is authenticated
  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Authentication Required</h1>
          <p className="text-gray-700">You must be logged in to view your messages.</p>
        </div>
      </div>
    );
  }

  // Fetch user messages
  const messages = await fetchMessages(userId);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Messages</h1>
        {messages.length === 0 ? (
          <p className="text-center text-gray-600">No messages found.</p>
        ) : (
          <ul className="space-y-4">
            {messages.map((message) => (
              <li key={message.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                {/* <p className="text-lg font-semibold text-gray-800">
                  From: <span className="text-blue-600">{message.sender.username}</span>
                </p> */}
                <p className="text-gray-700 mt-2">{message.content}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Sent at: {new Date(message.sentAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Chat receiverId={userId} />
    </div>
  );
}
