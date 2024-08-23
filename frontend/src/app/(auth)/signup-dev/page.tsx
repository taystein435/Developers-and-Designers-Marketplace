"use client"
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { addUser } from "@/lib/actions";
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState<any>(null);
  const [bannerImage, setBannerImage] = useState<any>(null);
  const [description, setDescription] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState(""); 
  const router = useRouter();

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
        <textarea
          placeholder="Description"
          className="bg-gray-100 text-black rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <CldUploadWidget
          uploadPreset="devhub"
          onSuccess={(result) => setProfilePicture(result.info)}
          onError={(error) => console.error("Image Upload Error:", error)}
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
          onSuccess={(result) => setBannerImage(result.info)}
          onError={(error) => console.error("Image Upload Error:", error)}
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
          Sign Up
        </button>
      </form>

      {showDialog && (
        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{dialogMessage}</AlertDialogTitle>
              <AlertDialogDescription>
                {dialogMessage.includes("Successful") 
                  ? "Your account has been created." 
                  : "An error occurred. Please try again."}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setShowDialog(false)}>
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default SignupForm;
