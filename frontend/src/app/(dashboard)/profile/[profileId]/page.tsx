import Profile from '@/components/shared/Profile';
import prisma from '@/lib/client';


const UserProfilePage = async ({ params }: { params: { profileId: string } }) => {
  // Fetch user details from the database
  const profile = await prisma.profile.findUnique({
    where: { id: params.profileId },
    include: {
      user: true, // Fetch related user data
    },
  });

  // Handle case where the profile is not found
  if (!profile) {
    return <p>User not found</p>;
  }

  // Pass the profile data to the Profile component
  return <Profile profile={profile} />;
};

export default UserProfilePage;
