"use server";

import { auth } from "@clerk/nextjs/server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "./client";

// Function to toggle follow/unfollow a profile
export const switchFollow = async (profileId) => {
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

// Function to send a message
export const sendMessage = async (receiverId, content) => {
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
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

// Function to add a project
export const addProject = async (profileId, title, description) => {
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
export const addProjectImage = async (projectId, imageUrl) => {
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
export const bookService = async (profileId, bookingDate, status) => {
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
export const leaveReview = async (profileId, rating, comment) => {
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
