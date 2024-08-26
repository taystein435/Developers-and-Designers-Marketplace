import Link from "next/link";
import { FacebookIcon, InstagramIcon, X, YoutubeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-24 md:mt-30 xl:30 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left space-y-4 md:space-y-2">
          <Link href="/">
            <p className="hover:text-gray-400 cursor-pointer">Home</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-gray-400 cursor-pointer">About Us</p>
          </Link>
          <Link href="/features">
            <p className="hover:text-gray-400 cursor-pointer">Features</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-gray-400 cursor-pointer">Contact</p>
          </Link>
        </div>
        <div className="text-center md:text-left space-y-4 md:space-y-2">
          <Link href="/terms">
            <p className="hover:text-gray-400 cursor-pointer">Terms of Service</p>
          </Link>
          <Link href="/privacy">
            <p className="hover:text-gray-400 cursor-pointer">Privacy Policy</p>
          </Link>
          <Link href="/faq">
            <p className="hover:text-gray-400 cursor-pointer">FAQs</p>
          </Link>
          <Link href="/support">
            <p className="hover:text-gray-400 cursor-pointer">Support</p>
          </Link>
        </div>
        <div className="text-center md:text-left space-y-4 md:space-y-2">
          <Link href="/developers">
            <p className="hover:text-gray-400 cursor-pointer">Developers</p>
          </Link>
          <Link href="/designers">
            <p className="hover:text-gray-400 cursor-pointer">Designers</p>
          </Link>
          <Link href="/portfolio">
            <p className="hover:text-gray-400 cursor-pointer">Portfolio</p>
          </Link>
          <Link href="/blog">
            <p className="hover:text-gray-400 cursor-pointer">Blog</p>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end items-center space-x-6">
          <FacebookIcon color="white" className="hover:text-gray-400 cursor-pointer w-6 h-6" />
          <InstagramIcon color="white" className="hover:text-gray-400 cursor-pointer w-6 h-6" />
          <X color="white" className="hover:text-gray-400 cursor-pointer w-6 h-6" />
          <YoutubeIcon color="white" className="hover:text-gray-400 cursor-pointer w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};
