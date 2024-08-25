"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyUser } from "@/lib/actions";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>(""); // State for user-entered password
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const fixedPassword = "Password"; // Replace with the actual fixed password

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Compare the user-entered password with the fixed password
    if (password !== fixedPassword) {
      setError("Login Failed. Incorrect password.");
      return;
    }

    const result = await verifyUser({ email, password });

    if (result.success) {
      router.push(`/dashboard/${result.userId}`);
    } else {
      setError("Login Failed. Please check your email and try again.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col gap-6">
      <h1 className="text-black text-2xl">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-black p-3 rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <Link href="/signup-dev">
        <p className="pt-5 text-black cursor-pointer">Sign Up As Developer or Designer</p>
      </Link>
    </div>
  );
};

export default LoginForm;
