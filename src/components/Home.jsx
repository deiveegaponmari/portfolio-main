import React from "react";
import vector from "../assets/vector.jpg";
function Home() {
  return (
    <>
      {/*  <div id="home" className="flex px-5 py-32 bg-gray-100 text-gray-900 justify-center">
                <div className="flex flex-col">
                <h1 className="text-4xl w-1/2">Hi,<br/>Im Deiveegaponmari M
               <p className="text-2xl">I am MERN Stack Developer</p>
               </h1>
               <div className="flex gap-3 ">
               <button className="bg-gray-600 rounded-b-lg hover:bg-gray-900 text-white">Download Resume</button>
               <button className="bg-gray-600 rounded-b-lg  hover:bg-gray-900 text-white">View Resume</button>
               </div>
                </div>
               
               <img src={vector} alt="animatedvectorImage" className="w-1/3"/>
            </div> */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-gray-50 text-gray-900"
      >
        {/* Left Side Text */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-lg text-gray-600">👋 Hello, I'm</h2>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Deiveegaponmari M
          </h1>

          <p className="text-2xl text-teal-600 font-semibold">
            MERN Stack Developer
          </p>

          <p className="text-gray-600">
            Passionate about building scalable web applications and interactive
            user experiences using MongoDB, Express, React, and Node.js.
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="/Resume/Deiveegaponmari_MERN_Developer.pdf"
              download="Deiveegaponmari_MERN_Developer_Resume.pdf"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium
               hover:bg-teal-700 shadow-md transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="/Resume/Deiveegaponmari_MERN_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-medium
               hover:bg-teal-600 hover:text-white shadow-md transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-teal-100 blur-2xl rounded-xl opacity-40"></div>
          <img
            src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765544765/ChatGPT_Image_Dec_12_2025_06_35_07_PM_loh85i.png"
            className="relative mt-10 md:mt-0 w-64 sm:w-72 md:w-[420px] lg:w-[480px] drop-shadow-xl rounded-xl"
          />
        </div>
      </section>
    </>
  );
}
export default Home;
