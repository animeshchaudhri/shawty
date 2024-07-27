"use client";

import { Backy } from "../ui/hero-highlight";
import { TypewriterEffectSmooth } from "../ui/typo";
export function Creation() {
  const words = [
    {
      text: "Create",
    },
    {
      text: "content",
    },
    {
      text: "with",
    },
    {
      text: "Shawty",
      className:
        "text-pink-500 dark:text-pink-400 text-2xl md:text-6xl font-bold text-center",
    },
  ];
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Backy
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col -z-1 justify-center px-2 md:px-10 gap-7 py-4 w-full h-full"
      >
        <TypewriterEffectSmooth words={words} />

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <input
            type="text"
            className="w-80 h-10 px-3 rounded-lg border-2 border-purple-500 bg-gray-900 text-purple-500 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="What's on your mind?"
          />
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Generate
          </button>
        </div>
      </Backy>
    </div>
  );
}
