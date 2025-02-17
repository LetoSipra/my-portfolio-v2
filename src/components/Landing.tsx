"use client";
import Animate from "@/utility/Animate";

function Landing() {
  Animate("landing");

  return (
    <div className="h-screen flex justify-center" id="welcome">
      <div className="relative flex self-center xl:max-w-3xl xl:mx-10 mx-3 opacity-0 blur-xl filter transition duration-700 landing">
        <div className="py-10 lg:py-20">
          <h1 className="flex flex-col py-10 text-4xl font-semibold tracking-wide sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="mb-5 block bg-gradient-to-r from-red-500 to-cyan-200 bg-clip-text py-1 text-3xl text-transparent lg:text-4xl">
              Hello, my name is
            </span>
            <span className="block bg-gradient-to-r  to-red-500 from-cyan-200 bg-clip-text py-1 text-transparent">
              Yusuf a Full-Stack
            </span>
            <span className="block bg-gradient-to-r from-red-500 to-cyan-200 bg-clip-text py-1 text-transparent">
              Web Developer from Turkey.
            </span>
          </h1>
          <p className="my-3 ml-2 text-xl tracking-wide lg:text-2xl">
            I build pixel-perfect digital experiences for the web with clean and
            efficient code.
          </p>
        </div>
        <div className="absolute right-0 -z-50 rounded-full border-r border-t border-solid border-red-500/90 p-40"></div>
      </div>
    </div>
  );
}

export default Landing;
