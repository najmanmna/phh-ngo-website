import "./App.css";
import About from "./components/About";
import ExecutiveBoard from "./components/ExecutiveBoard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ExecutiveBoard />
    </>
  );
}

export default App;
