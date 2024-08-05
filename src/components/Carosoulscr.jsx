import { Carousel } from "@material-tailwind/react";
import React from "react";
import banner_1 from "../assets/Img-1.webp";
import banner_2 from "../assets/img-4.webp";
import banner_3 from "../assets/img-5.webp";

export function Carouselscr() {
  console.log("Banner 1 path:", banner_1); // Debugging line
  console.log("Banner 2 path:", banner_2); // Debugging line
  console.log("Banner 3 path:", banner_3); // Debugging line

  return (
    <>
      <div className="flex flex-col bg-cover pt-12 px-36 h-[100vh]">
        <Carousel className="rounded-xl">
          <img
            src={banner_1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={banner_2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={banner_3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  );
}
