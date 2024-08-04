import { Carousel } from "@material-tailwind/react";
import React from "react";
import banner_1 from "../assets/Img-1.webp";
import banner_2 from "../assets/img-4.webp";
import banner_3 from "../assets/img-5.webp";

export function Carouselscr() {
  return (
    <>
      <div className="flex flex-col bg-cover pt-12  px-36 h-[100vh]">
        <Carousel
          className="rounded-2xl flex items-center justify-center"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
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
