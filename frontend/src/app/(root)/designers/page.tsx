
"use client"
import { useUser } from "@clerk/nextjs";
import AddProfile from '@/components/shared/AddProfile';
import { Package } from '@/components/shared/Package';

const Page = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? <AddProfile /> : <Package title='Designers' />}
    </div>
  );
};

export default Page;
