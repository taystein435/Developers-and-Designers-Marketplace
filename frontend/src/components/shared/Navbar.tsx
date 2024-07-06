import { BaggageClaim, Menu, UserRound } from "lucide-react";
import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";

export const Navbar = () => {
  const data = [
    {
      id: 0,
      name: "London",
      img: "https://images.unsplash.com/photo-1610390370064-4890cf703fd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9uJTIwYnJpZGdlfGVufDB8fDB8fHwy",
    },
    {
      id: 1,
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDI%3D",
    },
    {
      id: 2,
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGRpdmVzfGVufDB8fDB8fHwy",
    },
    {
      id: 3,
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDI%3D",
    },
    {
      id: 4,
      name: "Newyork",
      img: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3eW9ya3xlbnwwfHwwfHx8Mg%3D%3D",
    },
    {
      id: 5,
      name: "Instabul",
      img: "https://images.unsplash.com/photo-1593544648982-cf4bbfb8fc38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhbmJ1bHxlbnwwfHwwfHx8Mg%3D%3D",
    },
  ];
  return (
    <nav className="flex justify-between items-center">
      <Image
        src="/logo.png"
        width={70}
        height={70}
        alt="logo"
        className="p-2"
      />
      <div className="flex justify-around gap-6 px-6">
        <Sheet>
          <SheetTrigger asChild>
            <UserRound className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button asChild className="bg-pri w-[50vw] my-5 text-white border-none" variant="outline">
                <SignInButton />
              </Button>
            </SignedOut>
            <Link href="/">
              <h1 className="pt-10">Flying Club</h1>
            </Link>
            <Link href="/">
              <p className="pt-5">My account</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Reward seat deals</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Reward seat checker</p>
            </Link>
            <Link href="/">
              <p className="pt-5">About Flying Club</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Join Flying Club</p>
            </Link>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <BaggageClaim className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="">
            <Link href="/">
              <h1 className="pt-10">My booking</h1>
            </Link>
            <Link href="/">
              <p className="pt-5">Manage booking</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Check in</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Flight status</p>
            </Link>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="">
            <Link href="/">
              <h1 className="pt-10">Where we fly</h1>
            </Link>
            <Link href="/">
              <p className="pt-5">Manage booking</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Deals</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Extras</p>
            </Link>
            <Link href="/">
              <p className="pt-5">Help</p>
            </Link>
            <div className="flex overflow-x-auto space-x-4 py-2 mt-10">
              {data.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-48 h-48 relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                  <p className="absolute top-4 left-6 text-2xl text-white text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
