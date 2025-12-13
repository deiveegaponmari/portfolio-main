import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "Software Web Develoment & Android Application Development",
      platform: "UIT Educational Trust",
      year: "2022",
      logo: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765606063/images-uit_sk9vwr.jpg",
      link: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765546502/WhatsApp_Image_2025-12-11_at_13.39.17_3b64184d_dwsj1o.jpg",
    },
      {
      id: 2,
      title: "Android Application Development",
      platform: "Talent Zone",
      year: "2017",
      logo: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765606064/talent_zone_lsubow.png",
      link: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765546435/WhatsApp_Image_2025-12-11_at_13.39.14_68bbc4d0_dyekbb.jpg",
    },
      {
      id: 3,
      title: "Inplant Training Programme",
      platform: "SSPR Software Services",
      year: "2017",
      logo: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765606064/sspr_ej8rlw.png",
      link: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765546451/WhatsApp_Image_2025-12-11_at_13.39.15_2a51f526_bvbpvk.jpg",
    },
    {
      id: 4,
      title: "Soft Skill Development Program",
      platform: "SPMR TECHNOS",
      year: "2016",
      logo: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765606065/spm_ueotai.png",
      link: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765546467/WhatsApp_Image_2025-12-11_at_13.39.16_490c6af4_kz8jis.jpg",
    },
      {
      id: 5,
      title: "Technical Symposium -Paper Presentation & Quiz",
      platform: "Tech Cruz",
      year: "2015",
      logo: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765606064/sym2_kl1f90.jpg",
      link: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765546410/WhatsApp_Image_2025-12-11_at_13.39.13_4faacf88_r4s3dl.jpg",
    },
     
    {
      id: 6,
      title: "Diploma In Computer Application",
      platform: "Easy Computer Education",
      year: "2013",
      logo: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765606064/computer_vv2f58.jpg",
      link: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765546482/WhatsApp_Image_2025-12-11_at_13.39.17_b1362f96_xoftdr.jpg",
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
