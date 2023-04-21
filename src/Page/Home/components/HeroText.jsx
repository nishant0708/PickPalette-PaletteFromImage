import React from "react";
import Button from "./Button";
import useIsMobile from "../../../hooks/useIsMobile";

export default function HeroText() {
  const isMobile = useIsMobile();
  return (
    <div className="mr-auto mt-20 lg:mt-0 place-self-center z-10">
      <h1 className="text-center md:text-left max-w-2xl mb-4 text-3xl leading-3 font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-[#E8E8E8]">
        Create stunning
      </h1>
      <h1 className="text-center md:text-left max-w-2xl mb-4 text-3xl leading-10 font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-[#E8E8E8]">
        palettes from images
      </h1>
      <p className="max-w-2xl mb-6 text-center md:text-left font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
        Unlock the power of color with our innovative palette generator.
      </p>
      {isMobile && (
        <div className="flex justify-center">
          <Button />
        </div>
      )}
    </div>
  );
}
