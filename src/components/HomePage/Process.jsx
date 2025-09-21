import React from "react";
import Research from "../Research";
import { ChartSpline } from "lucide-react";
import Analyze from "../Analyze";
import Edit from "../Edit";
import Launch from "../Launch";

const Process = () => {
  return (
    // Left Section
    <section className="bg-gray-100 py-16 px-10">
      <div className="space-y-4 ">
        <div className="flex flex-row items-center gap-40">
          <div className="w-1/3 ml-20">
            <h1 className="text-5xl font-bold text-black mb-6">Work Process</h1>
            <p className="text-gray-500 text-lg">
              Driven by design and powered by code, I create digital interfaces
              that feel intuitive and perform seamlessly. Every layout,
              animation, and component is crafted with intention — merging
              usability with visual clarity,
            </p>
            <p className="mt-4 text-lg text-gray-500">
              I blend clean design with efficient code to build engaging,
              user-friendly web experiences that stand out.
            </p>
          </div>
          {/* // Right Section */}

          <div className=" space-y-4 w-[650px] grid grid-cols-2 gap-10 ">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Research />
              <p className="text-xl font-bold mt-4">1.Research</p>
              <p className="text-gray-500 text-base mt-4 max-w-60">
                Design meets function in every pixel, blending clarity with
                intuitive motion.
              </p>
            </div>

            <div className=" p-8 bg-white rounded-lg shadow-lg ">
              <Analyze />
              <p className="text-xl font-bold mt-4">2. Analyze</p>{" "}
              <p className="text-gray-500 text-base  mt-4 max-w-60">
                Crafting clean, thoughtful interfaces where form flows
                seamlessly into function and clarity.{" "}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg ">
              <Edit />
              <p className="text-xl font-bold mt-4">3.Design</p>
              <p className="text-gray-500 text-base mt-4 max-w-60">
                I design seamless digital experiences with precision, purpose,
                and a touch of elegance.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <Launch />
              <p className="text-xl font-bold mt-4">4.Launch</p>{" "}
              <p className="text-gray-500 text-base mt-4 max-w-60">
                I craft digital products where thoughtful design meets
                performance-driven, responsive development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
//  <div className="bg-gray-100 space-y-4 grid sm:grid-cols-3">
//     <div className=" ">
//       <div className="">
//         <h1 className="text-3xl font-bold text-black">Work Process</h1>
//         <p className="text-gray-500">
//           Driven by design and powered by code, I create digital interfaces
//           that feel intuitive and perform seamlessly. Every layout, animation,
//           and component is crafted with intention — merging usability with
//           visual clarity,
//           <p className="mt-4 ">
//             I blend clean design with efficient code to build engaging,
//             user-friendly web experiences that stand out.
//           </p>
//         </p>
//       </div>
//     </div>
//     {/* Right Section */}
//     <div className="flex ">
//       <div className="mx-auto w-1/4 p-4 bg-white">
//         <Research />
//         <p className="text-xl font-bold mt-4">1.Research</p>
//         <p className="text-gray-500 text-base mt-4">
//           Design meets function in every pixel, blending clarity with
//           intuitive motion.
//         </p>
//       </div>
//       <div className="mx-auto w-1/4 p-4 bg-white">
//         <Analyze />
//         <p className="text-xl font-bold mt-4">2. Analyze</p>
//         <p className="text-gray-500 text-base mt-4">
//           Crafting clean, thoughtful interfaces where form flows seamlessly
//           into function and clarity.
//         </p>
//       </div>
//     </div>

//     <div className="flex ">
//       <div className="mx-auto w-1/4 p-4 bg-white">
//         <Edit />
//         <p className="text-xl font-bold mt-4">3. Design</p>
//         <p className="text-gray-500 text-base mt-4">
//           I design seamless digital experiences with precision, purpose, and a
//           touch of elegance.
//         </p>
//       </div>
//       <div className="mx-auto w-1/4 p-4 bg-white">
//         <Launch />
//         <p className="text-xl font-bold mt-4">4.Launch</p>
//         <p className="text-gray-500 text-base mt-4">
//           I craft digital products where thoughtful design meets
//           performance-driven, responsive development.
//         </p>
//       </div>
//     </div>
//   </div>
