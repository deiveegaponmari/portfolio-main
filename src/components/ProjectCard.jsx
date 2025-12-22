import React from 'react'

function ProjectCard({item}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />

    <div className="p-5">
      {/* Badge */}
      <span
        className={`inline-block mb-2 text-xs font-semibold px-3 py-1 rounded-full ${
          item.type === "mern"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {item.type === "mern" ? "Full Stack MERN" : "Frontend Project"}
      </span>

      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{item.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {item.language.map((lang, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
          >
            {lang}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a href={item.frontendlink} target="_blank" className="text-sm text-blue-500 hover:underline">
          Frontend
        </a>

        {item.backendcode && (
          <a href={item.backendcode} target="_blank" className="text-sm text-green-500 hover:underline">
            Backend
          </a>
        )}

        <a href={item.demo} target="_blank" className="text-sm text-purple-500 hover:underline">
          Live
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;