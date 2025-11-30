import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../assets/home.css";

export default function Quiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get("/quiz/")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAnswer = (value) => {
    setAnswer(value);
    setShowExplanation(true);
    if (value === questions[current].reponse_vraie) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setAnswer(null);
    setShowExplanation(false);
    setCurrent((prev) => prev + 1);
  };

  if (loading)
    return <h2 style={{ textAlign: "center" }}>Chargement du quiz...</h2>;
  if (questions.length === 0)
    return (
      <h2 style={{ textAlign: "center" }}>Aucune question disponible.</h2>
    );

  const q = questions[current];
  const progressPercent = Math.round((current / questions.length) * 100);

  return (
    <>
      {/* NAVBAR */}
<nav className="navbar">
                <div className="nav-content">
                    <div className="logo">🌱 Climat <span className="highlight">Vrai/Faux</span></div>
                    <div className="nav-links">
                        <button className="nav-link" onClick={() => navigate('/')}>Accueil</button>
                        <button className="nav-link " onClick={() => navigate('/idees_fausse')}>Idées Fausses</button>
                        <button className="nav-link" onClick={() => navigate('/solutions')}>Solutions Réelles</button>
                        <button className="nav-link active" onClick={() => navigate('/quiz')}>Quiz (Vrai/Faux)</button>
                    
                    </div>
                </div>
            </nav>

      {/* CONTENU DU QUIZ */}
      <div className="quiz-wrapper">
        <div className="quiz-container">
          <div className="quiz-header">
            <h1 className="quiz-title">Quiz Climat 🌍</h1>
            <div className="quiz-progress-info">
              Question {current + 1} sur {questions.length}
            </div>
          </div>

          {current < questions.length ? (
            <div className="quiz-card">
              {/* Barre de progression */}
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <h2 className="quiz-question">{q.question}</h2>

              {!showExplanation ? (
                <div className="quiz-buttons">
                  <button
                    className="quiz-btn quiz-btn-true"
                    onClick={() => handleAnswer(true)}
                  >
                    <span className="quiz-btn-icon">✓</span>
                    Vrai
                  </button>
                  <button
                    className="quiz-btn quiz-btn-false"
                    onClick={() => handleAnswer(false)}
                  >
                    <span className="quiz-btn-icon">✗</span>
                    Faux
                  </button>
                </div>
              ) : (
                <div className="quiz-explanation">
                  <div className={`quiz-result ${answer === q.reponse_vraie ? 'correct' : 'wrong'}`}>
                    {answer === q.reponse_vraie ? (
                      <div className="quiz-result-content">
                        <span className="quiz-result-icon">🎉</span>
                        <span>Excellente réponse !</span>
                      </div>
                    ) : (
                      <div className="quiz-result-content">
                        <span className="quiz-result-icon">😔</span>
                        <span>Pas tout à fait...</span>
                      </div>
                    )}
                  </div>

                  <div className="quiz-explanation-content">
                    <h4>💡 Explication</h4>
                    <p>{q.explication}</p>
                  </div>

                  <div className="quiz-actions">
                    <a
                      href={q.source_url}
                      target="_blank"
                      rel="noreferrer"
                      className="quiz-source-btn"
                    >
                      <span>📖</span>
                      Voir la source
                    </a>

                    <button className="quiz-next-btn" onClick={nextQuestion}>
                      {current === questions.length - 1 ? 'Voir les résultats' : 'Question suivante'}
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="quiz-results">
              <div className="quiz-results-header">
                <div className="quiz-results-icon">🏆</div>
                <h2>Félicitations !</h2>
                <p className="quiz-results-subtitle">Vous avez terminé le quiz climat</p>
              </div>
              
              <div className="quiz-score">
                <div className="quiz-score-circle">
                  <span className="quiz-score-value">{Math.round((score / questions.length) * 100)}%</span>
                </div>
                <p className="quiz-score-text">
                  {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {questions.length}
                </p>
              </div>

              <div className="quiz-final-actions">
                <button
                  onClick={() => {
                    setCurrent(0);
                    setScore(0);
                    setAnswer(null);
                    setShowExplanation(false);
                  }}
                  className="quiz-restart-btn"
                >
                  🔄 Recommencer le quiz
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="quiz-home-btn"
                >
                  🏠 Retour à l'accueil
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


