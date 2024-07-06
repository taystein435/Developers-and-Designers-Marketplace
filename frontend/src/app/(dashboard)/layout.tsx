import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { ReactNode } from 'react';



const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
        <Navbar/>
    {children}
    <Footer/>
    </main>
  
  );
};

export default RootLayout;