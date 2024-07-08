import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
const data = [
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
  
const Catchy = () => {
  return (
    <div>
        <div className="">
            <h1 className="text-5xl px-10 py-10 md:text-center lg:text-center  ">Our main goal is to set your business on the hills</h1>
           <div className="flex p-10 gap-10 ">
           {data.map((item) => (
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
           <Button
            className="w-[40vw] mx-10 mt-5 text-black bg-white border-none rounded-full md:flex md:mx-auto lg:mx-auto"
            variant="outline"
          >
            Get Started
          </Button>
        </div>

    </div>
  )
}

export default Catchy