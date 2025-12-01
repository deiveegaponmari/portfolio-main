import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

function Navbar(){
    const[togglemenu,setTogglemenu]=useState(false);
    return(
        <>
        <div className="bg-gray-900 text-white flex justify-between p-3 ">
            <a href="#" className="font-bold text-2xl">Deiveegaponmari</a>
            <nav className="hidden md:block">
            <ul className="flex gap-3">
               <a href="#home"><li className="text-lg hover:underline">Home</li></a>
               <a href="#about"> <li className="text-lg hover:underline">About</li></a>
               <a href="#skill"><li className="text-lg hover:underline">Skills</li></a>
               <a href="#project"> <li className="text-lg hover:underline">Projects</li></a>
               <a href="#contact"> <li className="text-lg hover:underline">Contact</li></a>
            </ul>
            </nav>
            { togglemenu && <nav className="block md:hidden">
            <ul className="flex flex-col gap-3 fixed top-12 left-0  bg-gray-600 w-full h-3/4 ">
               <a href="#home"><li className="text-lg hover:underline w-full h-full text-center border-b-2">Home</li></a>
               <a href="#about"> <li className="text-lg hover:underline w-full h-full text-center border-b-2">About</li></a>
               <a href="#skill"><li className="text-lg hover:underline w-full h-full text-center border-b-2">Skills</li></a>
               <a href="#project"> <li className="text-lg hover:underline w-full h-full text-center border-b-2">Projects</li></a>
               <a href="#contact"> <li className="text-lg hover:underline w-full h-full text-center border-b-2">Contact</li></a>
            </ul>
            </nav>}
            <button className="block md:hidden" onClick={()=>setTogglemenu(!togglemenu)}><Bars3Icon className="text-white h-5"/></button>
        </div>
        </>
    )
}
export default Navbar;