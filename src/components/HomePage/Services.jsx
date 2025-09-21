import React from "react";
import { Button } from "../ui/button";

const Services = () => {
  return (
    <div className="bg-gray-100 py-20 px-10">
      <div className=" flex justify-center items-start max-w-7xl mx-auto gap-16">
        <div className="space-y-6  w-1/2">
          <h1 className="text-4xl font-bold ">What I do?</h1>
          <p className="text-gray-500 text-base ">
            I specialize in designing user experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability.
          </p>
          <p className="text-gray-500 leading-relaxed text-lg">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
          <Button variant="destructive">say hello!</Button>
        </div>

        <div className="space-y-4  w-1/2">
          <div className="bg-white p-4 space-y-2 ">
            <p className="text-2xl font-bold ">User Experience (UX)</p>
            <p className="text-gray-500 text-base">
              I design intuitive and enjoyable experiences by understanding user
              needs, conducting research, and creating wireframes and prototypes
              that enhance usability.
            </p>
          </div>
          <div className="bg-white  p-4 space-y-2">
            <p className="text-2xl font-bold">User Interface (UI)</p>
            <p className="text-gray-500 text-base">
              I craft visually appealing and consistent interfaces, focusing on
              layout, color, and typography to ensure a seamless and engaging
              user journey.
            </p>
          </div>
          <div className="bg-white  p-4 space-y-2">
            <p className="text-2xl font-bold">Web Development</p>
            <p className="text-gray-500 text-base">
              I build responsive and high-performance web applications using
              modern technologies, ensuring accessibility, scalability, and
              maintainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
