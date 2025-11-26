import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./quiz/Quiz";
import Home from "./pages/home";
import "./App.css";
function App() {
  return (
     
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
