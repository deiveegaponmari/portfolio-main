import React from "react";
function About(){
    return(
        <>
       {/*  <div id="about" className="bg-gray-100 mx-2 my-10 p-10">
            <h1 className="text-3xl font-bold text-center m-3">About Me</h1>
            <p className="m-2 text-xl text-center">I am a passionate MERN Stack Developer with experience in building dynamic,
                 user-friendly web applications. Skilled in MongoDB, Express.js, React, and Node.js, I enjoy creating efficient solutions that deliver great user experiences. I’m eager to apply 
                my skills to real-world projects and continuously grow as a developer.</p>
        </div> */}
         <section id="about" className="bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I'm a passionate <span className="font-semibold text-gray-900">MERN Stack Developer</span> 
          with hands-on experience in building full-stack web applications. I enjoy transforming ideas 
          into interactive, efficient, and user-friendly digital experiences.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I work with technologies like <strong>MongoDB, Express.js, React, and Node.js</strong>, and I’m 
          continuously improving my skills in frontend design and backend architecture. My goal is to 
          contribute to real-world projects, learn from industry challenges, and grow into a highly 
          skilled software engineer.
        </p>
        </div>
        </section>
        </>
    )
}
export default About;