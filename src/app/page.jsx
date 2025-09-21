import About from "@/components/HomePage/About";
import Banner from "@/components/HomePage/Banner";
import Portfolio from "@/components/HomePage/Portfolio";
import Process from "@/components/HomePage/Process";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Process />
      <Portfolio />
    </div>
  );
}
