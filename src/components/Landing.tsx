function Landing() {
  return (
    <div className="h-screen flex justify-center">
      <div className="relative flex self-center xl:max-w-3xl xl:mx-10">
        <div className="py-10 lg:py-20">
          <h1 className="flex flex-col py-10 text-4xl font-semibold tracking-wide sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="mb-5 block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text py-1 text-3xl text-transparent lg:text-4xl">
              Hello, my name is
            </span>
            <span className="block bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text py-1 text-transparent">
              Yusuf a Full-Stack
            </span>
            <span className="block bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text py-1 text-transparent">
              Web Developer from Turkey.
            </span>
          </h1>
          <p className="my-3 ml-2 text-xl tracking-wide lg:text-2xl">
            I’m a Full-Stack Web Developer that builds beautiful App's via
            React.js & Serverless & Hot technologies. I'm currently open to any
            career opportunities.
          </p>
        </div>
        <div className="absolute right-0 -z-50 rounded-full border-r border-t border-solid border-red-500/90 p-40"></div>
      </div>
    </div>
  );
}

export default Landing;
