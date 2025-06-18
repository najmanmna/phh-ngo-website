import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../utils/sanityClient";
import ProjectDetails from "../components/ProjectDetails";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import ScrollToTop from "../components/Scrolltotop";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const query = `*[_type == "ongoingProject" && slug.current == $slug][0]{
          _id,
          title,
          slug,
          "detailedimage": detailedImage.asset->url,
          "coverImage": coverImage.asset->url,
          description,
          impactStats[]{
            value,
            label,
            "icon": icon.asset->url
          }
        }`;

        const data = await client.fetch(query, { slug: projectId });
        setProject(data);
      } catch (err) {
        console.error("Failed to fetch project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!project) return <div className="text-center py-20 text-red-500">Project not found.</div>;

  return (
    <div className="pt-20">
      <ScrollToTop />
      <Navbar variant="project" />
      <div className="py-10 px-6 max-w-7xl mx-auto">
        <ProjectDetails project={project} />
      </div>
      <ContactUs />
    </div>
  );
}
