import React from "react";
import { MdUpdate } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaPaintRoller, FaTools } from "react-icons/fa";
import discovimg from "../assets/discov.png";
import logo from "../assets/logo.png";
import image_1 from "../assets/Img-1.webp";
import Search_bar from "../assets/Search.webp";
import Search_bar_2 from "../assets/img-4.webp";

const Discover = () => {
  return (
    <>
      <div className="pt-12 pl-9 flex flex-col items-center w-full h-full">
        <h1 className="text-6xl font-semibold">Discover the latest</h1>
        <br />
        <div className="text-6xl font-semibold text-center">
          <span className="inline-flex items-center text-6xl font-semibold rounded-full text-blue-800 bg-blue-50 p-2">
            <MdUpdate className="mr-2" /> updates
          </span>{" "}
          from Chrome
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-16 px-12 md:px-24 pt-12">
        <div className="bg-blue-50 rounded-3xl pb-1 p-9">
          <p className="mb-4 text-sm">UPDATES</p>
          <h1 className="text-5xl font-semibold">Automatic updates</h1>
          <p className="mb-4 pt-4 text-lg">
            There’s a new Chrome release every four weeks, making it easy to
            have the newest features and a faster, safer web browser.
          </p>
          <p className="mb-4 pt-3 font-semibold text-blue-900 text-lg">
            Learn about automatic updates
          </p>
          <img src={discovimg} alt="Discover image" className="w-full" />
        </div>
        <div className="bg-yellow-50 rounded-3xl pb-1 p-9">
          <p className="mb-4 text-sm">LATEST</p>
          <h1 className="text-5xl font-semibold">New from Chrome</h1>
          <p className="mb-4 pt-4 text-lg">
            Chrome regularly updates with tools and features that make it faster
            and easier to use.
          </p>
          <p className="mb-4 inline-flex pt-3 font-semibold text-blue-900 text-lg">
            Learn what’s new on Chrome <GoArrowUpRight className="mt-1.5" />
          </p>
          <div className="pt-16 flex justify-end">
            <img src={logo} className="w-40 h-40" alt="Logo" />
          </div>
        </div>
      </div>

      <div className="pt-24 pl-9 flex flex-col items-center w-full h-full">
        <h1 className="text-6xl p-5 font-semibold text-center">
          Make it{" "}
          <span className="inline-flex items-center text-6xl font-semibold rounded-full text-red-800 bg-red-50 p-2">
            <FaPaintRoller className="mr-2 w-11 h-11" /> yours
          </span>{" "}
          and take <br />
        </h1>
        <div className="text-6xl font-semibold text-center">it with you</div>
      </div>

      <div className="pt-20 flex justify-center">
        <img
          className="h-full w-[70vw] rounded-lg object-cover shadow-xl shadow-blue-gray-900/50"
          src={image_1}
          alt="Nature image"
        />
      </div>

      <div className="pt-24 pl-9 flex flex-col items-center w-full h-full">
        <h1 className="text-6xl p-5 font-semibold text-center">
          The Browser{" "}
          <span className="inline-flex items-center text-6xl font-semibold rounded-full text-yellow-800 bg-yellow-50 p-2">
            <FaTools className="mr-2 w-11 h-11" /> built
          </span>
          <br />
        </h1>
        <div className="text-6xl font-semibold text-center">by Google</div>
      </div>

      <div className="pt-10 mx-11 mt-14 flex flex-col md:flex-row bg-yellow-50 h-full rounded-3xl p-9 items-center">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-sm font-semibold text-gray-800 mb-4">
            GOOGLE AI
          </h1>
          <h2 className="text-4xl font-bold text-black">
            Access AI <br /> superpowers while <br /> you browse.
          </h2>
        </div>
        <div className="flex-1 pl-0 md:pl-32">
          <p className="text-xl text-gray-700">
            Google is integrating artificial intelligence to make our products{" "}
            more useful. We use AI for features like Search, Google Translate,{" "}
            and more, and we’re innovating new technologies responsibly.
          </p>
          <p className="text-xl pt-5 text-blue-800 inline-flex items-center">
            Explore Google AI <GoArrowUpRight className="ml-2" />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-16 px-12 md:px-24 pt-12">
        <div className="bg-yellow-500 rounded-3xl pb-1 p-9">
          <p className="mb-4 text-sm">GOOGLE SEARCH</p>
          <h1 className="text-4xl font-semibold">
            The search bar you love, <br /> built right in.
          </h1>
          <img
            src={Search_bar}
            className=" hover:scale-110 transition-all duration-500 cursor-pointer"
            alt=""
          />
        </div>
        <div className="bg-white-50 rounded-3xl shadow-sm border pb-1 p-9">
          <p className="mb-4 text-sm">GOOGLE WORKSPACE</p>
          <h1 className="text-4xl font-semibold">
            Get things done, with or without Wi-Fi.
          </h1>

          <div className="pt-16 flex justify-end">
            <img
              src={Search_bar_2}
              className=" hover:scale-110 transition-all duration-500 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
