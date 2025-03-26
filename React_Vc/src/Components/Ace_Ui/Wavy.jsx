"use client";
import React from "react";
import { WavyBackground } from "./wavy-background";

export function Wavy() {
  return (
    (<WavyBackground  className="max-w-4xl mx-auto pb-40">
      <p 
        className="text-2xl md:text-4xl bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white lg:text-[116px] font-bold inter-var ">
              NEXA AI STUDIO

      </p>
      <p
        className="text-base md:text-lg  font-sans mt-4 text-gray-100  inter-var text-center">
       AI-Powered Assistant For Efficiency, Automation, And Seamless User Experience.
      </p>
    </WavyBackground>)
  );
}
