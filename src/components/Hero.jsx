import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div>
      <div className="pt-28  flex flex-col items-center">
        <img src={logo} className="w-16 h-16 " alt="" />
        <h1 className="text-6xl font-extrabold tracking-tight">The browser</h1>
        <h1 className="text-6xl pt-4 font-extrabold tracking-tight">
          built to be yours
        </h1>
      </div>
      <div className="pt-8">
        <div className="block w-[32vw] px-6 py-3 mx-auto bg-white border shadow-md rounded-3xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
          <div className="flex items-center justify-between">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
              <li class="block p-1 font-sans text-base antialiased font-medium leading-normal text-blue-gray-900 hover:bg-gray-100 rounded-3xl">
                <a href="#" class="flex items-center transition-colors ">
                  Updates
                </a>
              </li>
              <li class="block p-1 font-sans text-base antialiased font-medium leading-normal text-blue-gray-900 hover:bg-gray-100 rounded-3xl">
                <a href="#" class="flex items-center transition-colors ">
                  Yours
                </a>
              </li>
              <li class="block p-1 font-sans text-base antialiased font-medium leading-normal text-blue-gray-900 hover:bg-gray-100 rounded-3xl">
                <a href="#" class="flex items-center transition-colors ">
                  Safe
                </a>
              </li>
              <li class="block p-1 font-sans text-base antialiased font-medium leading-normal text-blue-gray-900 hover:bg-gray-100 rounded-3xl">
                <a href="#" class="flex items-center transition-colors ">
                  Fast
                </a>
              </li>
              <li class="block p-1 font-sans text-base antialiased font-medium leading-normal text-blue-gray-900 hover:bg-gray-100 rounded-3xl">
                <a href="#" class="flex items-center transition-colors  ">
                  By Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  pt-5">
        <p>
          Need the Chrome installer?{" "}
          <span className="text-blue-600 cursor-pointer">Download here</span>.
        </p>
      </div>
    </div>
  );
};

export default Hero;
