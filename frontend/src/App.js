import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./quiz/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
