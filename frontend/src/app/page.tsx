import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <Footer/>
    </main>
  );
}
