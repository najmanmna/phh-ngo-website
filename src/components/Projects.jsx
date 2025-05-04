import React, { useState } from "react";
import projectsData from "../data/projects.json";

const tabs = ["Past", "Ongoing", "Future"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const filteredProjects = projectsData.filter(
    (project) => project.type === activeTab.toLowerCase()
  );

  return (
    <section className="py-20 bg-white " style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23224d2f' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      }}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center space-x-4 mb-4">
          <span className="w-10 h-[1px] bg-gray-600"></span>
          <h4 className="uppercase text-xs tracking-widest text-gray-600">
            Our Projects
          </h4>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Our Journey of Service
        </h2>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full shadow-lg overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 focus:outline-none ${
                  activeTab === tab
                    ? "bg-green-400 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-md group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-50 p-6 flex flex-col justify-center text-left">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-white text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-white text-green-600 hover:bg-green-100 transition"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
