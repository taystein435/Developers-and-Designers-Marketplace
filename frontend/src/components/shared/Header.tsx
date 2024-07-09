import { Code, PenTool } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const datax = [
    {
      id: 0,
      role: "Mobile Developer",
      note: "Specializing in Android and iOS app development, proficient in Kotlin and Swift. 5 years of experience.",
      img: "https://images.unsplash.com/photo-1639747280929-e84ef392c69a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy"
    },
    {
      id: 1,
      role: "UI/UX Designer",
      note: "Creating user-centered designs for web and mobile applications, skilled in Figma and Sketch. 7 years of experience.",
      img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDI%3D"
    },
    {
      id: 2,
      role: "Backend Engineer",
      note: "Specializing in server-side development, proficient in Node.js, Python, and Java. 6 years of experience.",
      img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy"
    },
    {
      id: 3,
      role: "Frontend Developer",
      note: "Specializing in building responsive web interfaces, skilled in React, Angular, and Vue.js. 4 years of experience.",
      img: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy"
    },
    {
      id: 4,
      role: "Cloud Engineer",
      note: "Specializing in cloud infrastructure and services, proficient in AWS, Azure, and Google Cloud Platform. 5 years of experience.",
      img: "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy"
    }
  ];
  
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
      <div className="">
            <h1 className="text-5xl px-10 py-10 mt-20 md:text-center md:mt-10 lg:mt-10 lg:text-center  ">Our main goal is to set your business on the hills</h1>
           <div className="flex p-10 gap-10 overflow-auto ">
           {datax.map((item) => (
               <div  key={item.id} className='w-[30vw] h-[20vh]  '>
               <Image
                 src={item.img}
                 alt=""
                 width={90}
                 height={90}        
                 className="w-20 h-20 rounded-full object-cover flex mx-auto"
               />
               <h1 className="text-center mt-5">{item.role}</h1>
               </div>
           ))}
           
           </div>
        </div>
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
