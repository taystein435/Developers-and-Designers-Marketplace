import { FacebookIcon, InstagramIcon, X, YoutubeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <div className="text-center py-9 md:flex justify-between lg:flex justify-around text-white">
      <div className="text-2xl py-9 space-y-2">
        <p className="hover:text-gray-400 cursor-pointer">Home</p>
        <p className="hover:text-gray-400 cursor-pointer">About Us</p>
        <p className="hover:text-gray-400 cursor-pointer">Features</p>
        <p className="hover:text-gray-400 cursor-pointer">Contact</p>
      </div>
      <div className="py-9 space-y-2">
        <p className="hover:text-gray-400 cursor-pointer">Terms of Service</p>
        <p className="hover:text-gray-400 cursor-pointer">Privacy Policy</p>
        <p className="hover:text-gray-400 cursor-pointer">FAQs</p>
        <p className="hover:text-gray-400 cursor-pointer">Support</p>
      </div>
      <div className="py-9 space-y-2">
        <p className="hover:text-gray-400 cursor-pointer">Developers</p>
        <p className="hover:text-gray-400 cursor-pointer">Designers</p>
        <p className="hover:text-gray-400 cursor-pointer">Portfolio</p>
        <p className="hover:text-gray-400 cursor-pointer">Blog</p>
      </div>
      <div className="flex justify-center items-center space-x-4 py-9">
        <FacebookIcon color="white" className="hover:text-gray-400 cursor-pointer" />
        <InstagramIcon color="white" className="hover:text-gray-400 cursor-pointer" />
        <X color="white" className="hover:text-gray-400 cursor-pointer" />
        <YoutubeIcon color="white" className="hover:text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};
