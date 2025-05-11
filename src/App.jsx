import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Donate from "./pages/Donate";
import ProjectDetailsPage from "./pages/ProjectDetails";
import MeetTheTeam from "./pages/MeetTheTeam";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preloader timeout (or you could use animationend listener)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // or however long your animation takes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-white"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23224d2f' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      {/* Preloader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-700">
          <Preloader />
        </div>
      )}

      <div
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/donate" element={<Donate />} />
            <Route
              path="/projects/:projectId"
              element={<ProjectDetailsPage />}
            />
            <Route path="/team" element={<MeetTheTeam />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
