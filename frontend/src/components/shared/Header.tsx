import { Code, PenTool } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  const data = [
    {
      id: 0,
      title: "Hire Top Developers",
      description: "Find experienced developers for your project needs.",
      link: "/developers",
    },
    {
      id: 1,
      title: "Discover Talented Designers",
      description: "Connect with creative designers to enhance your projects.",
      link: "/designers",
    },
    {
      id: 2,
      title: "Browse Featured Projects",
      description: "Explore the latest projects from our talented community.",
      link: "/projects",
    },
  ];

  return (
    <>
      <header
        className="h-[60vh] w-screen bg-cover bg-center relative px-5 flex justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute bottom-3 w-[96vw] h-[20vh] rounded-xl bg-white p-5">
          <h1 className="font-bold text-xl text-center  text-black m-2">
            Welcome to DevHub
          </h1>
          <p className="text-l m-1 text-center  text-black">
            Connecting top developers and designers with exciting projects.
          </p>
          <Button
            className="w-[80vw] mx-auto flex text-white border-none"
            variant="outline"
          >
            Get Started
          </Button>
        </div>
      </header>
      <section className="px-5 mt-10  py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            {item.id === 0 ? <Code className="my-6  text-black" /> : <PenTool className="my-6  text-black" />}
            <h4 className="font-bold text-sm text-center text-black">{item.title}</h4>
            <p className="text-sm text-center my-1  text-black">{item.description}</p>
            <Link href={item.link}>
              <p className="underline cursor-pointer text-center  text-black">Learn more</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};
