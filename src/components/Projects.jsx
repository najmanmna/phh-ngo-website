import React from "react";
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

export default function Projects() {
  const ongoingProjects = projectsData
    .filter((project) => project.type === "ongoing")
    .slice(0, 4); // Show 4 projects only

  return (
    <section
      id="projects"
      className="py-20"
      //   style={{
      //     backgroundColor: "#ffffff",
      //     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23224d2f' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      //   }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center space-x-4 mb-4 justify-left">
          <span className="w-10 h-[1px] bg-gray-600"></span>
          <h4 className="uppercase text-xs tracking-widest text-gray-600">
            Our Projects
          </h4>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary">
          Ongoing Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ongoingProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-white transition-transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                {project.link && (
                  <Link to={`/projects/${project.id}`}>
                    <a
                      href={project.link}
                      className="text-sm text-green-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more →
                    </a>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
