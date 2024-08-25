"use client";

import React, { useEffect, useState } from "react";
import Review from "./Review";
import { leaveReview, fetchReviews } from "@/lib/actions";

type ReviewType = {
  author: string;
  content: string;
  date: string;
};

const ReviewList: React.FC<{ profileId: string }> = ({ profileId }) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [newReview, setNewReview] = useState({ author: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const existingReviews = await fetchReviews(profileId);
        setReviews(existingReviews);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        setError("Failed to load reviews.");
      }
    };

    loadReviews();
  }, [profileId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError(null);
      const rating = 5; 
      const comment = newReview.content;
      await leaveReview(profileId, rating, comment);
     
      console.log("i am")
      const updatedReviews = await fetchReviews(profileId);
      setReviews(updatedReviews);
      setNewReview({ author: "", content: "" });
    } catch (err) {
      setError("Failed to add review. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 -mt-9">
      <h1 className="text-3xl font-bold mb-4">Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Review
            key={index}
            author={review.author}
            content={review.content}
            date={review.date}
          />
        ))
      ) : (
        <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={newReview.author}
            onChange={handleChange}
            className="w-full border rounded p-2 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Review
          </label>
          <textarea
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleChange}
            className="w-full border rounded p-2 text-black"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-black py-2 px-4 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Review"}
        </button>
      </form>
    </div>
  );
};

export default ReviewList;
