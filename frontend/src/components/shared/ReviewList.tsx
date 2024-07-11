"use client";
import React, { useState } from 'react';
import Review from './Review';



type ReviewType = {
  author: string;
  content: string;
  date: string;
};

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([
    { author: 'John Doe', content: 'Great product!', date: '2024-07-11' },
    { author: 'Jane Smith', content: 'Good quality and fast shipping.', date: '2024-07-10' }
  ]);

  const [newReview, setNewReview] = useState({ author: '', content: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date().toISOString().split('T')[0];
    setReviews([...reviews, { ...newReview, date }]);
    setNewReview({ author: '', content: '' });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 -mt-9">
      <h1 className="text-3xl font-bold mb-4">Reviews</h1>
      {reviews.map((review, index) => (
        <Review key={index} author={review.author} content={review.content} date={review.date} />
      ))}
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newReview.author}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Review</label>
          <textarea
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-white text-black py-2 px-4 rounded hover:bg-blue-600">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default ReviewList;
