import AttractionWrapper from "@/components/shared/AttractionWrapper";
import Catchy from "@/components/shared/Catchy";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Navbar } from "@/components/shared/Navbar";
import { Search } from "@/components/shared/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <Search/>
      <Header/>
      <Catchy/>
      <AttractionWrapper/>
      <Footer/>
    </main>
  );
}
