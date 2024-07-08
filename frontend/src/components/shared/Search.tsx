/* eslint-disable react/no-unescaped-entities */
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="w-screen h-28 bg-[#f5f5f6] flex justify-center ">
      <div className="flex items-center justify-between rounded-full h-16 px-5 w-[96vw] bg-white mt-8">
        <div>
          <p className="font-semibold text-black">Looking for talent?</p>
          <p className="text-sm text-black">Search for developers or designers</p>
        </div>
        <SearchIcon className="bg-black rounded-3xl p-2" color="#fff" width={40} height={40} />
      </div>
    </div>
  );
};
