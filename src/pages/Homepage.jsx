import About from "../components/About";
import ContactUs from "../components/ContactUs";
import CTA from "../components/CTA";
import ExecutiveBoard from "../components/ExecutiveBoard";
import Hero from "../components/Hero";
import ProjectHighlights from "../components/HighlightedProjects";
import MessagesCarousel from "../components/MessagesCarousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ProjectHighlights />
      <ExecutiveBoard />
      <CTA />
      <MessagesCarousel />
      <ContactUs />
    </>
  );
}

export default Homepage;
