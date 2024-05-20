import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-centre mt-4 lg:mt-20 text-center">
       
        <h1 className="text-5xl sm:text-6xl lg:text-6.5xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            for Developers
          </span>
        </h1>

        <p className="mt-6 text-center text-neutral-400 px-8 text-lg mx-auto max-w-4xl">
          Empower your Creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>

        {/* Buttons ki jgh A tag ko Style kiya howa */}
        <div className="flex justify-center my-7">
          <a href="#"className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-lg"
          >
            Start for free
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>

        {/* Videos */}
        <div className="flex mt-6 justify-center">
            
        <video autoPlay loop muted className="rounded-xl w-2/5 border border-orange-700 shadow-orange-700 mx-2 my-3">
        <source src={video1} type="video/mp4"/>
        Your Browser does not support the video tag
        </video>

         <video autoPlay loop muted className="rounded-xl w-2/5 border border-orange-700 shadow-orange-700 mx-2 my-3">
        <source src={video2} type="video/mp4"/>
        Your Browser does not support the video tag
        </video>

        </div>


      </div>
    </>
  );
};

export default HeroSection;
 