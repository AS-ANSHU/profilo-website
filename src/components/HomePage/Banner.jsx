import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-100 to-violet-200 px-8 py-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Hello, I’m
            <br />
            <span className="text-violet-700">Anshuman Panda</span>
          </h1>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            I'm a Freelance{" "}
            <span className="font-semibold">UI/UX Designer</span> and{" "}
            <span className="font-semibold">Frontend Developer</span> based in
            Bhubaneswar, India. I strive to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition">
            Say Hello!
          </button>
          <div className="flex gap-4 pt-20">
            <div className="p-4 bg-pink-200  w-1/4">
              <p className="text-2xl font-bold text-gray-900">6 M.</p>
              <p className="text-gray-600 mt-1 text-sm font-medium">
                Experience
              </p>
            </div>
            <div className="p-4 bg-pink-200 shadow-lg w-1/4">
              <p className="text-2xl font-bold text-gray-900">4+</p>
              <p className="text-gray-600 mt-1 text-sm font-medium">
                Project Complete
              </p>
            </div>
            <div className="p-4 bg-pink-200 shadow-lg w-1/4">
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-gray-600 mt-1 text-sm font-medium">
                Happy Client
              </p>
            </div>
          </div>
        </div>

        {/* Right Image with Gradient Background */}
        <div className="bg-white p-4 rounded-3xl shadow-lg">
          <Image
            src="/Image/Anshuman Panda.jpeg" // 👈 Replace with your image in /public
            alt="Brooklyn Gilbert"
            width={800}
            height={800}
            className="rounded-2xl object-contain w-[400px] h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
