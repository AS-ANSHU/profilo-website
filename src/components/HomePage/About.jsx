import { Download, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import SocialIcons from "../SocialIcons";

const About = () => {
  return (
    <section className="bg-gray-100 p-20">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl">
        <div className="grid md:grid-cols-2 items-center p-20">
          <div>
            <Image
              src="/Image/Anshuman Panda.jpeg" // 👈 Replace with your image in /public
              alt="Brooklyn Gilbert"
              width={400}
              height={400}
            />
            <div className="flex gap-4 bg-white shadow-xl p-4 w-50 ml-20 ">
              {" "}
              <SocialIcons />
              {/* <Facebook />
              <Instagram />
              <Github />
              <Linkedin /> */}
            </div>
          </div>
          <div>
            <p className="text-3xl font-bold mb-6">
              I am Professional User Experience Designer
            </p>
            <p className="text-gray-500 text-lg mb-2 leading-relaxed">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences. I design and
              develop services for customers specializing creating stylish,
              modern websites, web services.
            </p>
            <div className="flex gap-4">
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition">
                My Project
              </button>
              <button className="bg-white  text-black font-bold py-2 px-6 rounded-lg shadow-md transition">
                <span className="flex items-center gap-2 font-bold text-gray-900">
                  <Download /> Download CV
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import Image from "next/image"; // Use if you're in Next.js
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaDribbble } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-white">
//       <div className="max-w-7xl w-full bg-gradient-to-br from-white via-yellow-50 to-green-50 rounded-3xl shadow-xl p-8 grid md:grid-cols-2 gap-10 items-center">

//         {/* Left - Image */}
//         <div className="relative flex flex-col items-center">
//           <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
//             <Image
//               src="/profile.jpg" // Make sure your image exists here
//               alt="Anshuman Panda"
//               width={400}
//               height={500}
//               className="rounded-xl object-cover"
//             />
//           </div>

//           {/* Social Icons */}
//           <div className="absolute -bottom-8 w-[80%] bg-white rounded-xl shadow-lg py-3 px-6 flex justify-around items-center">
//             <FaFacebookF className="text-purple-600 text-xl hover:scale-110 transition" />
//             <FaDribbble className="text-purple-600 text-xl hover:scale-110 transition" />
//             <FaInstagram className="text-purple-600 text-xl hover:scale-110 transition" />
//             <FaLinkedinIn className="text-purple-600 text-xl hover:scale-110 transition" />
//             <FaBehance className="text-purple-600 text-xl hover:scale-110 transition" />
//           </div>
//         </div>

//         {/* Right - Text */}
//         <div className="mt-8 md:mt-0">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//             I am Professional User <br /> Experience Designer
//           </h1>

//           <p className="text-gray-600 mb-4 leading-relaxed">
//             I design and develop services for customers specializing in creating stylish,
//             modern websites, web services and online stores. My passion is to design digital
//             user experiences.
//           </p>

//           <p className="text-gray-600 mb-6 leading-relaxed">
//             I design and develop services for customers specializing in creating stylish,
//             modern websites, web services.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4">
//             <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md">
//               My Projects
//             </button>
//             <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg flex items-center gap-2">
//               <FiDownload className="text-lg" />
//               Download CV
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl">
//         ↑
//       </button>
//     </section>
//   );
// }
