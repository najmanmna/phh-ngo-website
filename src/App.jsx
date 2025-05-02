import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donate" element={<Donate />} />
  
      </Routes>
    </Router>
  );
}

export default App;
