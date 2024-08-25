import Profile from '@/components/shared/Profile';
import prisma from '@/lib/client';


const UserProfilePage = async ({ params }: { params: { profileId: string } }) => {

  const profile = await prisma.profile.findUnique({
    where: { id: params.profileId },
    include: {
      user: true, 
    },
  });

  if (!profile) {
    return <p>User not found</p>;
  }


  return <Profile profile={profile} />;
};

export default UserProfilePage;
