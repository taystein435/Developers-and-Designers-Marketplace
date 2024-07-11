"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const Details = () => {
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
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2VuZCUyMGVuZ2luZWVyfGVufDB8fDB8fHwy"
        width={500}
        height={500}
        className='w-screen h-[50vh] rounded-2xl px-1 object-cover'
        alt="Picture of the author"
      />
      <div className="flex p-5">
        <Image
          src="https://images.unsplash.com/photo-1639747280929-e84ef392c69a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy"
          width={500}
          height={500}
          className='w-16 h-16 rounded-full object-cover'
          alt="Picture of the author"
        />
        <div className="p-1 mx-3 w-[40vw]">
          <h2 className="text-xl">Taiwo Babatunde</h2>
          <h2 className="text-l text-slate-300">Backend Engineer</h2>
          <p className="text-sm text-slate-400 ">{followers} followers</p>
        </div>
        <Button
          className="bg-white w-[40vw] my-2 text-black border-none rounded-2xl md:ml-[40vw] md:w-[20vw] lg:w-[20vw]lg:ml-[40vw] xl:ml-[60vw] "
          variant="outline"
          onClick={handleFollow}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </div>
      <p className="px-5 text-sm text-slate-400">
        Developed an image recognition system for identifying products in user-uploaded photos, using deep learning techniques. 5 years of experience. Developed an image recognition system for identifying products in user-uploaded photos, using deep learning techniques. 5 years of experience.
      </p>
    </div>
  )
}

export default Details;
