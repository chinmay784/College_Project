import React from "react";

function LinesBg() {
  return (
    <>
      <h2 className=" mt-[300px] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-semibold py-2 md:py-10 relative z-20  tracking-tight">
        We're Nexa. We Develop Custom AI Solutions <br />
      </h2>
      <h2 className=" -mt-[65px] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        {" "}
        For Innovation Technology.
      </h2>

      <div className="flex gap-5 lg:justify-center lg:mt-4 ">
        <button class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group">
          <div class="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#c6c6c6]">
            <div class="absolute inset-0 bg-[#dfdfdf] rounded-lg opacity-90"></div>
          </div>
          <div class="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
          <div class="absolute inset-[2px] bg-gradient-to-r from-[#020104] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
          <div class="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
          <div class="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
          <div class="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
          <div class="relative flex items-center justify-center gap-2">
            <span class="text-lg font-normal bg-gradient-to-b from-[#ffffff] to-[#5a5a5b] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
              Get In Touch{" "}
            </span>
          </div>
          <div class="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
        </button>
      </div>
    </>
  );
}

export default LinesBg;
