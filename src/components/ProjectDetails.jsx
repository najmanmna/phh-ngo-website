import React, { useState } from "react";

export default function ProjectDetails({ project }) {
  const [showEmail, setShowEmail] = useState(false);

  const isFundProject = project.id === "Fund a Patient";

  return (
    <div>
      <h1 className="text-3xl text-primary text-center font-bold mb-10  ">
        {project.title}
      </h1>
      <div className="flex gap-8 flex-col md:flex-row">
        {" "}
        <img
          src={project.detailedimage}
          alt={project.title}
          className="mx-auto h-full w-3/4 md:w-1/2"
          loading="lazy"
        />
        <div className="right-container flex flex-col self-center w-3/4 md:w-1/2">
          {/* Dynamic impact stats */}
          {project.impactStats && (
            <div className="bg-green-50 rounded-xl shadow-md p-6  text-center mb-5 ">
              <h2 className="text-xl font-extrabold mb-6 text-[#3c6130]">
                OUR MONTHLY IMPACT
              </h2>
              <div className="grid grid-cols-1 mt-5 mb-5 sm:grid-cols-3 gap-6 text-center">
                {project.impactStats.map((item, idx) => (
                  <div key={idx}>
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="mx-auto h-24 mb-2"
                    />
                    <p className="text-2xl font-bold text-secondary">
                      {item.value}
                    </p>
                    <p className="text-md font-semibold text-[#3c6130]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-md text-gray-700 mb-6 space-y-4">
            {project.description.split("\n\n").map((block, index) => {
              const lines = block
                .split("\n")
                .filter((line) => line.trim() !== "");
              const isBulletList =
                lines.length > 1 && lines.every((line) => line.length < 50);

              const renderWithBold = (text) =>
                text.split(/(\*\*.*?\*\*)/g).map((chunk, i) => {
                  if (chunk.startsWith("**") && chunk.endsWith("**")) {
                    return <strong key={i}>{chunk.slice(2, -2)}</strong>;
                  }
                  return chunk;
                });

              if (isBulletList) {
                return (
                  <ul key={index} className="list-disc pl-5">
                    {lines.map((line, i) => (
                      <li key={i}>{renderWithBold(line)}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={index}>{renderWithBold(block)}</p>;
            })}
          </div>
        </div>
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
