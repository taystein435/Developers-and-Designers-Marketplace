import AttractionWrapper from "@/components/shared/AttractionWrapper";
import Catchy from "@/components/shared/Catchy";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Navbar } from "@/components/shared/Navbar";
import { Package } from "@/components/shared/Package";
import { Search } from "@/components/shared/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col">
      <Navbar/>
      <Search/>
      <Header/>
      <AttractionWrapper/>
      <Package/>
      <Catchy/>
      <Footer/>
    </main>
  );
}
