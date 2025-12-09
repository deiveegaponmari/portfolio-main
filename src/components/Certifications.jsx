import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "Full Stack MERN Developer",
      platform: "GUVI",
      year: "2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Guvi-logo.png",
      link: "https://www.guvi.in/verify/yourcertificate",
    },
    {
      id: 2,
      title: "React Frontend Development",
      platform: "Udemy",
      year: "2023",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      link: "https://www.udemy.com/certificate/yourlink",
    },
    {
      id: 3,
      title: "MongoDB Database Essentials",
      platform: "Coursera",
      year: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Coursera-Logo.png",
      link: "https://coursera.org/verify/yourcertificate",
    },
  ];
  return (
    <div id="certifications" className="bg-gray-100 py-12 px-6">
      <h1 className="text-center text-4xl font-bold mb-10">Certifications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={cert.logo}
              alt={cert.platform}
              className="w-24 h-16 object-contain mb-4"
            />

            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p className="text-gray-600 text-sm mt-1">
              {cert.platform} • {cert.year}
            </p>

            <FaCheckCircle className="text-green-500 text-2xl mt-3" />

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
