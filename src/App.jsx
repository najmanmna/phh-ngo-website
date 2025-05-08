import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Donate from "./pages/Donate";
import ProjectDetailsPage from "./pages/ProjectDetails";
import MeetTheTeam from "./pages/MeetTheTeam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/team" element={<MeetTheTeam />} />

      </Routes>
    </Router>
  );
}

export default App;
