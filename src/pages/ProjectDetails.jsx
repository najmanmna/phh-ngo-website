import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../data/projects.json"; // Assuming your JSON is exported from here
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import ScrollToTop from "../components/Scrolltotop";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20 text-red-500">Project not found.</div>
    );
  }

  return (
    <div className="pt-20">
      <ScrollToTop />

      <Navbar variant="donate" />
      <div className="py-10 px-6 max-w-5xl mx-auto">
        <ProjectDetails project={project} />
      </div>
      <ContactUs />
    </div>
  );
}
