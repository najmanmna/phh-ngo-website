import React from "react";

export default function ProjectDetails({ project }) {
  return (
    <div>
      <img src={project.image} alt={project.title} className="rounded-xl mb-6 w-full" />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      {/* Example of impact stats if included later */}
      {project.impact && (
        <div className="bg-green-50 rounded-lg p-4 mt-6 shadow-sm">
          <h3 className="font-semibold mb-2 text-green-700">Impact</h3>
          <ul className="list-disc ml-6 text-sm text-gray-600">
            {project.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
