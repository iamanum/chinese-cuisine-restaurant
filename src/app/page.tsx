import About from "../app/components/About";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import MenuBar from "../app/components/MenuBar";
import Reservation from "../app/components/Resrvation";

import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <MenuBar />
      <Reservation />
      <About />
      <Footer />
    </main>
  );
}