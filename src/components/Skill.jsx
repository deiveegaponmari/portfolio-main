import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiGithub} from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { VscVscode } from "react-icons/vsc";
function Skill() {
     const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "MongoDB Compass", icon: <CiDatabase /> },
    { name: "MongoDB Atlas", icon: <SiMongodb /> },
  ];
  return (
    <>
      {/*  <div id="skill" className="bg-gray-100 p-3">
            <h1 className="text-center text-4xl font-bold p-3">Skills</h1>
            <div className="flex gap-5 flex-3 flex-wrap text-center">
            <h2>HTML</h2>
            <h2>Css</h2>
            <h2>Javascript</h2>
            <h2>Tailwind css</h2>
            <h2>Bootstrap</h2>
            <h2>React Js</h2>
            <h2>Node Js</h2>
            <h2>Express Js</h2>
            <h2>MongoDB</h2>
            <h2>GIT</h2>
            <h2>GitHub</h2>
            <h2>Visual studio code</h2>
            <h2>MongoDB compass</h2>
            <h2>MongoDb Atlas</h2>
            </div>
        </div> */}
      <section id="skill" className="bg-gray-50 py-16 px-6">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-10">
          Skills
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl p-5 hover:scale-105 transition transform cursor-pointer"
            >
              <div className="text-4xl mb-3 text-gray-800">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Skill;
