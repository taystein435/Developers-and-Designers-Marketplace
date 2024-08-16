"use server";

import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "./client";

// Define types for the functions
type SwitchFollow = (profileId: string) => Promise<void>;
type SendMessage = (receiverId: string, content: string) => Promise<void>;
type AddProject = (profileId: string, title: string, description: string) => Promise<void>;
type AddProjectImage = (projectId: string, imageUrl: string) => Promise<void>;
type BookService = (profileId: string, bookingDate: Date, status: string) => Promise<void>;
type LeaveReview = (profileId: string, rating: number, comment: string) => Promise<void>;
type AddProfile = (profileData: {
  userId: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  bannerImage: string;
  description: string;
}) => Promise<void>;

// Function to toggle follow/unfollow a profile
export const switchFollow: SwitchFollow = async (profileId) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const existingFollow = await prisma.follow.findFirst({
      where: {
        userId: currentUserId,
        followingId: profileId,
      },
    });

    if (existingFollow) {
      await prisma.follow.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      await prisma.follow.create({
        data: {
          userId: currentUserId,
          followingId: profileId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

export const sendMessage: SendMessage = async (receiverId, content) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    await prisma.message.create({
      data: {
        senderId: currentUserId,
        receiverId,
        content,
        sentAt: new Date(),
      },
    });
  } catch (err) {
    console.error('Failed to send message:', err); 
    throw new Error("Something went wrong!"); 
  }
};



// Function to add a project
export const addProject: AddProject = async (profileId, title, description) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    await prisma.project.create({
      data: {
        profileId,
        title,
        description,
        createdAt: new Date(),
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

// Function to add an image to a project
export const addProjectImage: AddProjectImage = async (projectId, imageUrl) => {
  try {
    await prisma.projectImage.create({
      data: {
        projectId,
        imageUrl,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

// Function to book a service from a profile
export const bookService: BookService = async (profileId, bookingDate, status) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    await prisma.booking.create({
      data: {
        userId: currentUserId,
        profileId,
        bookingDate,
        status,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

// Function to leave a review for a profile
export const leaveReview: LeaveReview = async (profileId, rating, comment) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    await prisma.review.create({
      data: {
        userId: currentUserId,
        profileId,
        rating,
        comment,
        createdAt: new Date(),
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

// Function to add a profile
export const addProfile: AddProfile = async ({ userId, firstName, lastName, profilePicture, bannerImage, description }) => {
  try {
    await prisma.profile.create({
      data: {
        userId,
        firstName,
        lastName,
        profilePicture,
        bannerImage,
        description,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
