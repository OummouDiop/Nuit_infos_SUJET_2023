import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./quiz/Quiz";
import Home from "./pages/home";
import Solutions from "./pages/Solutions";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
