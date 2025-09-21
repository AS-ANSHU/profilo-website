import About from "@/components/HomePage/About";
import Banner from "@/components/HomePage/Banner";
import Blog from "@/components/HomePage/Blog";
import Portfolio from "@/components/HomePage/Portfolio";
import Process from "@/components/HomePage/Process";
import Services from "@/components/HomePage/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="process">
        <Process />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="services">
        <Services />
      </div>
    </div>
  );
}
