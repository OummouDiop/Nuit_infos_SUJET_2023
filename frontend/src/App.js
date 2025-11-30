import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./quiz/Quiz";
import Home from "./pages/home";
import Solutions from "./pages/Solutions";
import FausseIdeePage from "./pages/FausseIdeePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/idees_fausse" element={<FausseIdeePage />} />
      </Routes>
    </Router>
  );
}

export default App;
