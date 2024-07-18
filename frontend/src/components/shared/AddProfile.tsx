"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

import { addProfile } from "@/lib/actions"; 
import { toast } from "sonner";

const AddProfile = () => {
  const { user, isLoaded } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState<any>();
  const [bannerImage, setBannerImage] = useState<any>();
  const [description, setDescription] = useState("");

  if (!isLoaded) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center text-red-500">User is not authenticated</div>;
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const profileData = {
      userId: user.id,
      firstName,
      lastName,
      profilePicture: profilePicture?.secure_url || "",
      bannerImage: bannerImage?.secure_url || "",
      description,
    };
    await addProfile(profileData);
    toast("Profile Updated Successfully", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col gap-6">
      <h1 className="text-black text-2xl">Edit Profile</h1>
      <div className="flex justify-center">
        <Image
          src={user.imageUrl || "/noAvatar.png"}
          alt="User Avatar"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder={user.firstName || "First Name"}
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder={user.lastName || "Last Name"}
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <CldUploadWidget
          uploadPreset="devhub"
          onSuccess={(result, { widget }) => {
            setProfilePicture(result.info);
            widget.close();
          }}
        >
          {({ open }) => (
            <div
              className="flex text-black items-center gap-2 cursor-pointer p-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-200 transition"
              onClick={() => open()}
            >
              <Image src={profilePicture?.secure_url || "/addimage.png"} alt="Add Profile Picture" width={20} height={20} />
              <span>Profile Picture</span>
            </div>
          )}
        </CldUploadWidget>
        <CldUploadWidget
          uploadPreset="devhub"
          onSuccess={(result, { widget }) => {
            setBannerImage(result.info);
            widget.close();
          }}
        >
          {({ open }) => (
            <div
              className="flex items-center text-black gap-2 cursor-pointer p-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-blue-200 transition"
              onClick={() => open()}
            >
              <Image src="/addimage.png" alt="Add Banner Image" width={20} height={20} />
              <span>Banner Image</span>
            </div>
          )}
        </CldUploadWidget>
        <button
          type="submit"
          className="bg-black text-white rounded-lg p-3 hover:bg-grey transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default AddProfile;
