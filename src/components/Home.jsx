import React from "react";
import vector from '../assets/vector.jpg';
function Home() {
    return (
        <>
            <div id="home" className="flex px-5 py-32 bg-gray-100 text-gray-900 justify-center">
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
            </div>
        </>
    )
}
export default Home;