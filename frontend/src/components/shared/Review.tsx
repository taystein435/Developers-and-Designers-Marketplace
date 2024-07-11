import React from 'react';

type ReviewProps = {
  author: string;
  content: string;
  date: string;
};

const Review: React.FC<ReviewProps> = ({ author, content, date }) => {
  return (
    <div className="border p-4 rounded-lg mb-4">
      <p className="text-xl font-semibold">{author}</p>
      <p className="text-gray-600">{content}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
};

export default Review;
