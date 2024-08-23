"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { addUser } from "@/lib/actions";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { setRequestMeta } from "next/dist/server/request-meta";

// Define types
type Project = {
  title: string;
  description: string;
  images: string[];
  portfolios: string[];
};

const SignupForm = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<any>(null);
  const [bannerImage, setBannerImage] = useState<any>(null);
  const [description, setDescription] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([{ title: "", description: "", images: [], portfolios: [] }]);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = useState<string>(""); 
  const router = useRouter();

  const handleProjectChange = (index: number, field: keyof Project, value: any) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setProjects(updatedProjects);
  };

  const addProjectField = () => {
    setProjects([...projects, { title: "", description: "", images: [], portfolios: [] }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      role,
      firstName,
      lastName,
      profilePicture: profilePicture?.secure_url || "",
      bannerImage: bannerImage?.secure_url || "",
      description,
      projects: projects.map(p => ({
        title: p.title,
        description: p.description,
        images: p.images,
        portfolios: p.portfolios,
      })).filter(p => p.title && p.description), // Filter out empty projects
    };

    const result = await addUser(userData);
    
    if (result.success) {
      setDialogMessage("Signup Successful");
      setShowDialog(true);
      router.push(`/dashboard/${result.userId}`); // Redirect with the user ID
    } else {
      setDialogMessage("Signup Failed. Please try again.");
      setShowDialog(true);
    }
  };

  const handleImageUpload = (index: number, result: any) => {
    const updatedProjects = [...projects];
    updatedProjects[index].images.push(result.info.secure_url);
    setProjects(updatedProjects);
  };

  const handlePortfolioUpload = (index: number, portfolioUrl: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index].portfolios.push(portfolioUrl);
    setProjects(updatedProjects);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col gap-6">
      <h1 className="text-black text-2xl">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
          <input
          type="text"
          placeholder="Role"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        {/* Project Fields */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Project Title"
                className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                value={project.title}
                onChange={(e) => handleProjectChange(index, "title", e.target.value)}
              />
              <textarea
                placeholder="Project Description"
                className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                value={project.description}
                onChange={(e) => handleProjectChange(index, "description", e.target.value)}
              ></textarea>
              
              {/* Image Upload */}
              <CldUploadWidget
                uploadPreset="devhub"
                onSuccess={(result) => handleImageUpload(index, result)}
                onError={(error) => console.error("Image Upload Error:", error)}
              >
                {({ open }) => (
                  <div
                    className="flex items-center text-black gap-2 cursor-pointer p-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-200 transition"
                    onClick={() => open()}
                  >
                    <Image src="/addimage.png" alt="Add Project Image" width={20} height={20} />
                    <span>Add Project Image</span>
                  </div>
                )}
              </CldUploadWidget>
              
              {/* Portfolio Input */}
              <input
                type="text"
                placeholder="Portfolio URL"
                className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                value={project.portfolios.join(", ")}  // Display the joined portfolio URLs, comma-separated
                onChange={(e) => handlePortfolioUpload(index, e.target.value)}
              />
              
              {/* Display Uploaded Images */}
              <div className="flex flex-wrap gap-2">
                {project.images.map((imageUrl, imgIndex) => (
                  <div key={imgIndex} className="relative">
                    <Image
                      src={imageUrl}
                      alt={`Project Image ${imgIndex + 1}`}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Display Portfolio URLs */}
              <div className="flex flex-wrap gap-2">
                {project.portfolios.map((portfolioUrl, portIndex) => (
                  <div key={portIndex} className="relative">
                    <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      {portfolioUrl}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addProjectField}
            className="text-white bg-black p-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add Another Project
          </button>
        </div>

        {/* Profile Picture Upload */}
        <CldUploadWidget
          uploadPreset="devhub"
          onSuccess={(result) => setProfilePicture(result.info)}
          onError={(error) => console.error("Profile Picture Upload Error:", error)}
        >
          {({ open }) => (
            <div
              className="flex items-center text-black gap-2 cursor-pointer p-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-200 transition"
              onClick={() => open()}
            >
              <Image src="/addimage.png" alt="Add Profile Picture" width={20} height={20} />
              <span>Add Banner Image</span>
            </div>
          )}
        </CldUploadWidget>
        {profilePicture && (
          <div className="mt-2">
            <Image src={profilePicture.secure_url} alt="Profile Picture" width={100} height={100} className="rounded-lg" />
          </div>
        )}

        {/* Banner Image Upload */}
        <CldUploadWidget
          uploadPreset="devhub"
          onSuccess={(result) => setBannerImage(result.info)}
          onError={(error) => console.error("Banner Image Upload Error:", error)}
        >
          {({ open }) => (
            <div
              className="flex items-center text-black gap-2 cursor-pointer p-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-200 transition"
              onClick={() => open()}
            >
              <Image src="/addimage.png" alt="Add Banner Image" width={20} height={20} />
              <span>Add Profile Picture</span>
            </div>
          )}
        </CldUploadWidget>
        {bannerImage && (
          <div className="mt-2">
            <Image src={bannerImage.secure_url} alt="Banner Image" width={100} height={100} className="rounded-lg" />
          </div>
        )}

        <button
          type="submit"
          className="text-white bg-black p-3 rounded-lg hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </form>

      {/* Dialog for Success or Failure */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Signup Status</AlertDialogTitle>
            <AlertDialogDescription>{dialogMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDialog(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SignupForm;
