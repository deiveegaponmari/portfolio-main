import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skill" },
    { name: "Certifications", href: "#certification" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      {/*  <div className="bg-gray-900 text-white flex justify-between p-3 ">
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
        </div> */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide text-teal-400">
            Deiveegaponmari
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group text-lg cursor-pointer"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Btn */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-7" />
            ) : (
              <Bars3Icon className="h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gray-800 text-center transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-5 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-400 transition duration-300 text-lg"
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
export default Navbar;
