import About from "../components/About";
import ContactUs from "../components/ContactUs";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import ProjectHighlights from "../components/HighlightedProjects";
import MessagesCarousel from "../components/MessagesCarousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

function Homepage() {
  return (
    <div className="pt-16 sm:pt-20 z-40">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ProjectHighlights />
      <CTA />
      <MessagesCarousel />
      <ContactUs />
    </div>
  );
}

export default Homepage;
