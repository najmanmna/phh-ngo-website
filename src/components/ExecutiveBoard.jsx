import React from "react";
import boardData from "../data/executive_board.json";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function ExecutiveBoard() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Executive Board
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {boardData.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-60 h-60 object-cover rounded-2xl shadow-md"
              />
              <h4 className="text-lg font-semibold mt-4 text-gray-900">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500 mb-3">{member.role}</p>
              <div className="flex space-x-4">
                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <FaFacebookF />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="text-gray-500 hover:text-blue-400"
                  >
                    <FaTwitter />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="text-gray-500 hover:text-blue-700"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
