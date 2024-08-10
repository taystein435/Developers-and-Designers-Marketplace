"use client"
import React, { useState } from 'react';
import { sendMessage } from '@/lib/actions';

const Chat = ({ receiverId }:{receiverId:string}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleMessageSend = async () => {
    if (message.trim()) {
      try {
        await sendMessage(receiverId, message);
        setMessage(''); // Clear the message input after sending
        setIsInputVisible(false); // Optionally hide the input after sending
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message');
      }
    } else {
      alert('Please enter a message');
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button 
        className="bg-green-500 text-white p-4 rounded-full"
        onClick={handleButtonClick}
      >
        Message
      </button>
      {isInputVisible && (
        <div className="mt-2 flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="p-2 border border-gray-300 rounded-md text-black"
          />
          <button
            onClick={handleMessageSend}
            className="ml-2 bg-blue-500 text-white p-2 rounded-md"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
