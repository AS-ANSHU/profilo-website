import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Portfolio = () => {
  return (
    <div className="p-20">
      <h1 className="text-5xl font-bold text-black text-center">Portfolio</h1>
      <p className="text-gray-500 w-1/3 mx-auto text-base mt-2">
        Here's a selection of my recent work, showcasing my skills in creating
        user-centric and visually appealing interfaces.
      </p>
      <div className="flex  justify-center gap-10 mt-10">
        <div className="max-w-sm  shadow-md rounded-lg">
          <Image
            id="myImage"
            src="/image/perfume.jpg"
            alt="Portfolio"
            width={500}
            height={300}
            className="mt-10 w-full h-60 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500 mt-4 tracking-wide">
              UI-UX DESIGN
            </p>
            <h1 className="text-xl font-bold">Product Admin Dashboard</h1>
            <p className="text-sm text-gray-500 ">
              I focus on crafting smooth, responsive interfaces that balance
              aesthetic appeal with practical functionality.
            </p>

            <button className="bg-gray-100 hover:bg-gray-50 text-black font-medium py-3 px-6 mt-4 rounded-lg">
              Case Study
            </button>
          </div>
        </div>

        <div className="max-w-sm  shadow-md rounded-lg">
          <Image
            id="myImage"
            src="/image/perfume.jpg"
            alt="Portfolio"
            width={500}
            height={300}
            className="mt-10 w-full h-60 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500 mt-4 tracking-wide">
              UI-UX DESIGN
            </p>
            <h1 className="text-xl font-bold">Product Admin Dashboard</h1>
            <p className="text-sm text-gray-500 ">
              I focus on crafting smooth, responsive interfaces that balance
              aesthetic appeal with practical functionality.
            </p>

            <button className="bg-gray-100 hover:bg-gray-50 text-black font-medium py-3 px-6 mt-4 rounded-lg">
              Case Study
            </button>
          </div>
        </div>

        <div className="max-w-sm shadow-md rounded-lg">
          <Image
            id="myImage"
            src="/image/perfume.jpg"
            alt="Portfolio"
            width={500}
            height={300}
            className="mt-10 w-full h-60 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500 mt-4 tracking-wide">
              UI-UX DESIGN
            </p>
            <h1 className="text-xl font-bold">Product Admin Dashboard</h1>
            <p className="text-sm text-gray-500 ">
              I focus on crafting smooth, responsive interfaces that balance
              aesthetic appeal with practical functionality.
            </p>

            <Button variant="destructive">
              Case Study
              <MoveRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
