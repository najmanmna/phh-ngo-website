import React, { useEffect, useState } from "react";
import { client } from "../utils/sanityClient";
import { urlFor } from "../utils/sanityImageUrl";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  const [ongoingProjects, setOngoingProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "ongoingProject"]{
            _id,
            title,
            "slug": slug.current,
            coverImage,
            detailedImage,
            description,
            impactStats[]{
              value,
              label,
              icon
            }
          } | order(_createdAt desc)[0...8]`
        );
        setOngoingProjects(data);
      } catch (err) {
        console.error("Sanity fetch error:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="py-20"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23224d2f' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
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
          {ongoingProjects.map((project) => (
            <div
              key={project._id}
              className="rounded-xl overflow-hidden shadow-lg bg-white transition-transform hover:-translate-y-1"
            >
              <img
                src={urlFor(project.coverImage).width(600).format("webp").url()}
                alt={project.title}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-sm text-green-600 hover:underline inline-flex items-center gap-1"
                >
                  Learn more <FaArrowUpRightFromSquare />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
