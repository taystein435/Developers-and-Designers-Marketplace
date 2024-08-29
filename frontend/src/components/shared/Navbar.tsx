import { Menu, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from 'lucide-react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 text-white">
         <Link href="/">
         <Image
        src="/logo.png"
        width={70}
        height={70}
        alt="logo"
        className="p-2"
      />
            </Link>
      <div className="flex justify-around gap-6 px-6 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <UserRound className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button asChild className="bg-white w-[50vw] my-5 text-black border-none rounded-xl" variant="outline">
                <SignInButton />
              </Button>
            </SignedOut>
            <Link href="/messages">
              <p className="pt-5">Messages</p>
            </Link>
            <Link href="/signin-dev">
              <p className="pt-5">Developers and Designers</p>
            </Link>
            <Link href="/payment">
              <p className="pt-5">Payments</p>
            </Link>
            <Link href="/admin">
              <p className="pt-5">Admin</p>
            </Link>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <Link href="/">
              <h1 className="pt-10">Home</h1>
            </Link>
            <Link href="/about">
              <p className="pt-5">About Us</p>
            </Link>
            <Link href="/developers">
              <p className="pt-5">Developers</p>
            </Link>
            <Link href="/designers">
              <p className="pt-5">Designers</p>
            </Link>
            <Link href="/contact">
              <p className="pt-5">Contact</p>
            </Link>
            <Link href="/faq">
              <p className="pt-5">FAQs</p>
            </Link>
            <Link href="/chatbot">

            <div className="flex items-center">
            <Sparkles size={14} />
            <p className="pt-5">AI Assistant</p>
            </div>
         
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
