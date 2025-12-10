import React from "react";
import web from '../assets/web.jpg';
import develop from '../assets/develop.jpg';
import fullstack from '../assets/fullstack.jpg';

function Card() {
    const data = [
        {
            id: 1,
            image: "https://res.cloudinary.com/djlxdttvr/image/upload/v1764570015/boliviainteligente-IPIwk-Ox1A0-unsplash_c9dn2n.jpg",
            title: "Social Media Platform",
            description: "Developed a full-stack social media platform with real-time chat, posts, comments, likes, and friend requests using React, Node.js, Express, and MongoDB.",
            language: ["HTML,CSS,REACT","NodeJs", "ExpressJs", "MongoDb"],
            frontendlink: "https://github.com/deiveegaponmari/facebook",
            backendcode: "https://github.com/deiveegaponmari/facebook-backend",
            demo: "https://myfirst-socialplatform.netlify.app/"
        },
         {
            id: 2,
            image: "https://res.cloudinary.com/djlxdttvr/image/upload/v1764570032/church-of-the-king-j9jZSqfH5YI-unsplash_jcuwet.jpg",
            title: "Sri Nataraja School App",
            description: "A feature-rich school management application designed for Sri Nataraja School. The app includes real-time announcements, photo and video uploads, and a feedback module for better communication between school and users. The system is fully responsive and built using React for the frontend and Node.js, Express, and MongoDB for backend and database operations.",
            language: ["HTML,CSS,Tailwind CSS,React", "NodeJs", "ExpressJs", "MongoDb"],
            frontendlink: "https://github.com/deiveegaponmari/primary-school",
            backendcode: "https://github.com/deiveegaponmari/backend-school",
            demo: "https://myprimaryschoolapp.netlify.app/"
        },
         {
            id: 3,
            image: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765275679/xt7-core-Qj7qeM7A0Xs-unsplash_wq6v2x.jpg",
            title: "K Selvam Sounds & Hollow blocks App",
            description: "K Selvam Sounds & Hollow Blocks Company is a local manufacturing and service-based business offering high-quality hollow blocks for construction and professional sound system services for events. The platform allows the business to manage customer inquiries, display products/services, and improve digital presence through a clean, responsive user interface.",
            language: ["HTML,CSS,Tailwind CSS,React", "NodeJs", "ExpressJs", "MongoDb"],
            frontendlink: "https://github.com/deiveegaponmari/kselvam_company",
            backendcode: "https://github.com/deiveegaponmari/backend-kselvam_company",
            demo: "https://kselvam.netlify.app/"
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/djlxdttvr/image/upload/v1764570042/farhat-altaf-8Kooarp0aWY-unsplash_heotik.jpg",
            title: "Weather App",
            description: "This Weather App allows users to check the real-time weather conditions of any location using a city search. It displays key weather information such as temperature, humidity, wind speed, and weather status using icons for better clarity. The app fetches accurate live weather data from a public API (OpenWeather API) and updates results dynamically. Built with modern UI, it delivers a clean and user-friendly experience.",
            language: ["HTML,CSS,Tailwind CSS,React"],
            frontendlink: "https://github.com/deiveegaponmari/weatherapp",
            demo: "https://weathermyproject.netlify.app/"
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/djlxdttvr/image/upload/v1764570057/martin-martz-CiQ2qEYVo5U-unsplash_l7s7fn.jpg",
            title: "To Do List App",
            description: "A minimal and responsive To-Do List application that helps users manage tasks efficiently. Users can add new tasks, mark completed items, edit them, and delete tasks once done. Built using React and Tailwind CSS with smooth UI interactions for an organized workflow.",
            language: ["HTML,CSS,Tailwind CSS,React"],
            frontendlink: "https://github.com/deiveegaponmari/todolist",
            demo: "https://todolisttrackerapp.netlify.app/"
        }
    ]
    return (
        <>
            <div className="bg-gray-100 py-10">
                <h1 className="text-center text-4xl font-bold mb-8">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                    {
                        data.map((item) => {
                            return <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ">
                                <img src={item.image} alt="development image" className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h1 className="text-2xl font-semibold mb-2">{item.title}</h1>
                                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {
                                            item.language.map((lang, index) => (
                                                <span key={index}
                                                    className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">{lang}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <a href={item.frontendlink} target="_blank"
                                        className="text-sm text-blue-500 hover:underline">FrontEnd code</a>
                                        {
                                            item.backendcode && (
                                                <a href={item.backendcode} target="_blank"
                                                className="text-sm text-green-500 hover:underline">Backend code</a>
                                            )
                                        }
                                        <a href={item.demo} target="_blank"
                                         className="text-sm text-purple-500 hover:underline">Live Demo</a>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Card;