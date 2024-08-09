"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';

type DetailsProps = {
  profile: {
    firstName: string;
    lastName: string;
    profilePicture: string;
    bannerImage: string;
    description: string;
    user: {
      role: string;
    };
  
  };
};

const Details = ({ profile }: DetailsProps) => {
  const [followers, setFollowers] = useState(100);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    if (isFollowing) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <Image
        src={profile.bannerImage}
        width={500}
        height={500}
        className='w-screen h-[50vh] rounded-2xl px-1 object-cover'
        alt={`${profile.firstName} ${profile.lastName}`}
      />
      <div className="flex p-5">
        <Image
          src={profile.profilePicture}
          width={500}
          height={500}
          className='w-16 h-16 rounded-full object-cover'
          alt={`${profile.firstName} ${profile.lastName}`}
        />
        <div className="mx-2 w-[40vw]">
          <h2 className="text-xl">{profile.firstName} {profile.lastName}</h2>
          <h2 className="text-l text-slate-300">{profile.user.role}</h2>
          <p className="text-sm text-slate-400">{followers} followers</p>
        </div>
        <Button
          className="bg-white w-[30vw] my-2 text-black border-none rounded-2xl md:ml-[40vw] md:w-[20vw] lg:w-[20vw] lg:ml-[40vw] xl:ml-[60vw]"
          variant="outline"
          onClick={handleFollow}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </div>
      <p className="px-5 text-sm text-slate-400">
        {profile.description}
      </p>
    </div>
  );
};

export default Details;
