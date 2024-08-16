"use client"
import { useUser } from "@clerk/nextjs";
import AddProfile from '@/components/shared/AddProfile';

const Page = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <AddProfile /> 
    </div>
  );
};

export default Page;
