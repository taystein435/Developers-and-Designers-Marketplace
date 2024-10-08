import Details from '@/components/shared/Details';
import Gigs from '@/components/shared/Gigs';
import Chat from '@/components/shared/Chat';
import ReviewList from '@/components/shared/ReviewList';
import React from 'react';

type ProfileProps = {
  profile: {
    id: string;
    userId:string;
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

const Profile = ({ profile }: ProfileProps) => {
  return (
    <div>
      <Details profile={profile} />
      <Gigs />
      <Chat receiverId={profile.userId} />

      <ReviewList profileId={profile.id} />
    </div>
  );
};

export default Profile;
