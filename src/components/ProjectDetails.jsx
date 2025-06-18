import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

export default function ProjectDetails({ project }) {
  const [showEmail, setShowEmail] = useState(false);
  const isFundProject = project.slug?.current === "fund-a-patient";

  return (
    <div>
      <h1 className="text-3xl text-primary text-center font-bold mb-10">
        {project.title}
      </h1>

      <div className="flex gap-8 flex-col md:flex-row">
        <img
          src={project.detailedimage}
          alt={project.title}
          className="mx-auto h-full w-3/4 md:w-1/2 object-cover"
          loading="lazy"
        />

        <div className="right-container flex flex-col self-center w-3/4 md:w-1/2">
          {project.impactStats && (
            <div className="bg-green-50 rounded-xl shadow-md p-6 text-center mb-5">
              <h2 className="text-xl font-extrabold mb-6 text-[#3c6130]">
                OUR MONTHLY IMPACT
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
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

          {project.description && (
            <div className="text-md text-gray-700 mb-6 space-y-4 prose max-w-none">
              <PortableText value={project.description} />
            </div>
          )}
        </div>
      </div>

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
