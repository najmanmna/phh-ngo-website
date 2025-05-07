import React, { useState } from "react";

export default function ProjectDetails({ project }) {
  const [showEmail, setShowEmail] = useState(false);

  const isFundProject = project.id === "Fund a Patient";

  return (
    <div>
      <h1 className="text-3xl text-primary text-center font-bold mb-4">
        {project.title}
      </h1>
      <img
        src={project.image}
        alt={project.title}
        className="mx-auto rounded-xl mb-6 w-3/4"
      />
      {/* Dynamic impact stats */}
      {project.impactStats && (
        <div className="bg-green-50 rounded-xl shadow-md p-6 mt-10 text-center mb-5 ">
          <h2 className="text-xl font-semibold mb-6 text-primary">
            OUR IMPACT
          </h2>
          <div className="grid grid-cols-1 mt-5 mb-5 sm:grid-cols-3 gap-6 text-center">
            {project.impactStats.map((item, idx) => (
              <div key={idx}>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="mx-auto h-24 mb-2"
                />
                <p className="text-2xl font-bold text-primary">{item.value}</p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-lg text-gray-700 mb-6 space-y-4">
        {project.description.split("\n\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      {/* Fund a Patient button */}
      {isFundProject && (
        <div className="text-center mt-10">
          {!showEmail ? (
            <button
              onClick={() => setShowEmail(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Fund a Patient Now
            </button>
          ) : (
            <p className="text-lg text-green-700 font-medium">
              Please reach out at:{" "}
              <a href="mailto:office.phh@gmail.com" className="underline">
                office.phh@gmail.com
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
