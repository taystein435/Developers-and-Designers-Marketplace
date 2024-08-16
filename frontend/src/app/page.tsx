import Catchy from "@/components/shared/Frameworks";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Navbar } from "@/components/shared/Navbar";
import { Package } from "@/components/shared/Package";
import { Search } from "@/components/shared/Search";
import CookiesPrompt from "@/components/shared/CookiesPrompt";
import RowWrapper from "@/components/shared/RowWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col">
      <Navbar/>
      <Search/>
      <Header/>
      <RowWrapper/>
      <Package title="Popular Services"/>
      <Catchy/>
      <Footer/>
      <CookiesPrompt />
    </main>
  );
}
