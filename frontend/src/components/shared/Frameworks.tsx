import React from 'react';
import Image from 'next/image';

const frameworks = [
  {
    id: 0,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 1,
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
  },
  {
    id: 2,
    name: "Vue.js",
    description: "The Progressive JavaScript Framework.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    id: 4,
    name: "Ruby on Rails",
    description: "A server-side web application framework written in Ruby.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
  },
  {
    id: 5,
    name: "Laravel",
    description: "A PHP framework for web artisans.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 6,
    name: "Spring",
    description: "Provides a comprehensive programming and configuration model for Java-based enterprise applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
  },
  {
    id: 7,
    name: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },

  {
    id: 9,
    name: "Figma",
    description: "A powerful design tool for creating interfaces and experiences.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/128px-Figma-logo.svg.png",
  },

];

const Frameworks = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-5xl px-10 py-10 mt-10 text-center">The world’s destination for creatives</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 p-10 overflow-x-auto">
          {frameworks.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={90}
                height={90}
                className="w-20 h-20 rounded-full object-cover"
              />
              <h2 className="text-center mt-5">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
