import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./components/quizpage/QuizPage";
import PreQuiz from "./components/quizpage/PreQuiz";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PreQuiz />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;
