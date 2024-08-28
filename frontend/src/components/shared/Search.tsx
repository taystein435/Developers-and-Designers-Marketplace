"use client"
import { SearchIcon } from "lucide-react";
import Typewriter from 'typewriter-effect';

export const Search = () => {
  return (
    <div className="w-screen h-28 bg-[#f5f5f6] flex justify-center ">
      <div className="flex items-center justify-between rounded-full h-16 px-5 w-[96vw] bg-white mt-8">
        <div>
          <h1 className="font-semibold text-black">
                <Typewriter
              options={{
                strings: ["Looking for talent?","Search for developers or designers"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
      
        </div>
        <SearchIcon className="bg-black rounded-3xl p-2" color="#fff" width={40} height={40} />
      </div>
    </div>
  );
};
