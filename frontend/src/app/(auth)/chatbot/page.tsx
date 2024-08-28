'use client';

import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueConversation } from '@/lib/actions';
import { readStreamableValue } from 'ai/rsc';

// Configure maximum streaming response duration to 30 seconds
export const maxDuration = 30;

export default function Chatbot() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<any>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userMessage: CoreMessage = { content: input, role: 'user' };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');

    const result = await continueConversation(updatedMessages);
    setData(result.data);

    let assistantResponse = '';
    for await (const content of readStreamableValue(result.message)) {
      assistantResponse += content as string;
    }

    setMessages(prev => [
      ...prev,
      { role: 'assistant', content: assistantResponse },
    ]);
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      {messages.map((message, index) => (
        <div key={index} className="whitespace-pre-wrap">
          {message.role === 'user' ? 'User: ' : 'DevHub AI: '}
          {message.content as string}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="fixed bottom-0 w-[80vw] max-w-md p-2 mb-8 border border-gray-300 rounded-l shadow-xl text-black"
          value={input}
          placeholder="Say something..."
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="fixed right-3 bottom-0 p-2 mb-8 bg-blue-500 text-white rounded-r shadow-xl"
        >
          Send
        </button>
      </form>
    </div>
  );
}
