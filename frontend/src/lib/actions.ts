"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "./client";
import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';


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
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture: string;
  bannerImage: string;
}

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

    revalidatePath(`/profile/${profileId}`);
  } catch (err) {
    console.error("Error toggling follow:", err);
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

    revalidatePath(`/messages`);
  } catch (err) {
    console.error('Failed to send message:', err); 
    throw new Error("Something went wrong!"); 
  }
};

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

    revalidatePath(`/profile/${profileId}/projects`);
  } catch (err) {
    console.error("Error adding project:", err);
    throw new Error("Something went wrong!");
  }
};

export const addProjectImage: AddProjectImage = async (projectId, imageUrl) => {
  try {
    await prisma.projectImage.create({
      data: {
        projectId,
        imageUrl,
      },
    });

    revalidatePath(`/project/${projectId}`);
  } catch (err) {
    console.error("Error adding project image:", err);
    throw new Error("Something went wrong!");
  }
};

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

    revalidatePath(`/profile/${profileId}/bookings`);
  } catch (err) {
    console.error("Error booking service:", err);
    throw new Error("Something went wrong!");
  }
};

export const leaveReview = async (
  profileId: string,
  rating: number,
  comment: string
) => {
  try {
    const { userId: currentUserId } = auth(); // Assuming auth() returns { userId: string }
    
    if (!currentUserId) {
      throw new Error('User is not authenticated!');
    }

    await prisma.review.create({
      data: {
        userId: currentUserId,   
        profileId,               
        rating,                 
        comment,
        createdAt: new Date(),   
      },
    });

    // Revalidate the cache or path if necessary
    revalidatePath(`/profile/${profileId}/reviews`);
  } catch (error) {
    console.error('Error leaving review:', error);
    throw new Error('Something went wrong while leaving the review.');
  }
};


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

    revalidatePath(`/profile/${userId}`);
  } catch (err) {
    console.error("Error adding profile:", err);
    throw new Error("Something went wrong!");
  }
};

// Fetch all users with related data
export const fetchUsers = async () => {
  try {
    return await prisma.user.findMany({
      include: {
        profiles: true,
        messagesSent: true,
        messagesReceived: true,
        bookings: true,
        reviews: true,
        likes: true,
        follows: {
          include: {
            following: true
          }
        },
        followings: {
          include: {
            user: true
          }
        }
      }
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users.");
  }
};

// Update user and profile details
export const updateUser = async (id: string, userData: { username: string, email: string, role: string }) => {
  try {
    await prisma.user.update({
      where: { id },
      data: userData
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user.");
  }
};

// Update profile details
export const updateProfile = async (profileId: string, profileData: { firstName: string, lastName: string, profilePicture: string, bannerImage: string, description: string }) => {
  try {
    await prisma.profile.update({
      where: { id: profileId },
      data: profileData
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    throw new Error("Failed to update profile.");
  }
};


// Create, update, and delete user functions
export const createUser = async (userData: { username: string, email: string, role: string }) => {
  try {
    await prisma.user.create({ data: userData });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
};

export const deleteUser = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user.");
  }
};

export async function continueConversation(messages: CoreMessage[]) {
  'use server';
  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages,
  });
  const data = { test: 'hello' };
  const stream = createStreamableValue(result.textStream);
  return { message: stream.value, data };
}

export async function addUser(userData: {
  username: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  bannerImage?: string;
  description: string;
  projects?: {
    title: string;
    description: string;
    images?: string[]; 
    portfolios?: string[]; 
  }[];
}) {
  const { username, email, role, firstName, lastName, profilePicture, bannerImage, description, projects } = userData;

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        role,
      },
    });


    const profile = await prisma.profile.create({
      data: {
        userId: user.id,
        firstName,
        lastName,
        profilePicture: profilePicture || '',
        bannerImage: bannerImage || '',
        description,
      },
    });


    if (projects && projects.length > 0) {
      for (const project of projects) {
        const createdProject = await prisma.project.create({
          data: {
            profileId: profile.id,
            title: project.title,
            description: project.description,
          },
        });

        if (project.images && project.images.length > 0) {
          await prisma.projectImage.createMany({
            data: project.images.map((imageUrl) => ({
              projectId: createdProject.id,
              imageUrl,
            })),
          });
        }

        if (project.portfolios && project.portfolios.length > 0) {
          await prisma.portfolio.createMany({
            data: project.portfolios.map((portfolioUrl) => ({
              projectId: createdProject.id,
              portfolioUrl,
            })),
          });
        }
      }
    }

    return { success: true, userId: user.id };
  } catch (error) {
    console.error('Error signing up user:', error);
    return { success: false };
  }
}

export const fetchReviews = async (profileId: string) => {
  try {
    const reviews = await prisma.review.findMany({
      where: { profileId },
      include: { user: true }, 
      orderBy: { createdAt: 'desc' }, 
    });
    
    return reviews.map(review => ({
      author: review.user.username, 
      content: review.comment,
      date: review.createdAt.toISOString().split('T')[0],
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw new Error('Failed to fetch reviews.');
  }
};


export async function verifyUser(loginData: { email: string; password: string }) {
  const { email, password } = loginData;

  const fixedPassword = "Password"; // Replace with the actual fixed password

  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return { success: false }; // User not found
    }

    // Here, we only compare the password with a fixed value
    if (password === fixedPassword) {
      return { success: true, userId: user.id };
    } else {
      return { success: false }; // Incorrect password
    }
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false };
  }
}