import {  FacebookIcon, InstagramIcon, X, YoutubeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <div className=" bg-slate-900 text-center py-9 md:flex justify-between lg:flex justify-around">
      <div className=" text-white text-2xl py-9 space-y-2">
        <p className="">Where we fly</p>
        <p className="">Experience</p>
        <p className="">Deals</p>
        <p className="">Flyying Club</p>
      </div>
      <div className="text-white py-9">
        <p className="">About Virgin Atlantic</p>
        <p className="">Our story</p>
        <p className="">Business as a force for good</p>
        <p className="">Media centre</p>
        <p className="">Annual reports</p>
        <p className="">Careers</p>
        <p className="">Policies</p>
        <p className="">Canadian tariffs</p>
      </div>
      <div className="text-white py-9">
        <p className="">Israeli Law and Regulations</p>
        <p className="">Air Carrier Access Act</p>
        <p className="">Website security guidance</p>
        <p className="">Help and contact</p>
        <p className="">Special assistance</p>
        <p className="">Flying Club help</p>
        <p className="">Partners</p>
        <p className="">SkyTeam</p>
      </div>
      <div className="flex justify-center md:items-center lg:items:center">
      <FacebookIcon color="white" />
      <InstagramIcon color="white"/>
      < X color="white"/>
      <YoutubeIcon  color="white"/>
      </div>
    </div>
  );
};
