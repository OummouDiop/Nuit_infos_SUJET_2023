import React, { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get("/quiz/")
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAnswer = (value) => {
    setAnswer(value);
    setShowExplanation(true);
    if (value === questions[current].reponse_vraie) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setAnswer(null);
    setShowExplanation(false);
    setCurrent(prev => prev + 1);
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Chargement du quiz...</h2>;
  if (questions.length === 0) return <h2 style={{ textAlign: "center" }}>Aucune question disponible.</h2>;

  const q = questions[current];
  const progressPercent = Math.round((current / questions.length) * 100);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Quiz Climat 🌍</h1>

        {current < questions.length ? (
          <div style={styles.card}>
            {/* Barre de progression */}
            <div style={styles.progressBarBackground}>
              <div style={{ ...styles.progressBarFill, width: `${progressPercent}%` }} />
            </div>

            <h2 style={styles.question}>{q.question}</h2>

            {!showExplanation ? (
              <div style={styles.buttons}>
                <button style={styles.btn} onClick={() => handleAnswer(true)}>Vrai</button>
                <button style={styles.btn} onClick={() => handleAnswer(false)}>Faux</button>
              </div>
            ) : (
              <div style={styles.explanationBox}>
                {answer === q.reponse_vraie ? (
                  <p style={styles.correct}>✔ Bonne réponse !</p>
                ) : (
                  <p style={styles.wrong}>✘ Mauvaise réponse</p>
                )}

                <p><strong>Explication :</strong> {q.explication}</p>

                {/* Conteneur des boutons « Voir source » et « Question suivante » */}
                <div style={styles.buttonRow}>
                  <a
                    href={q.source_url}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.sourceBtn}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fb8c00"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ff9800"}
                  >
                    🔗 Voir source
                  </a>

                  <button style={styles.nextBtn} onClick={nextQuestion}>
                    Question suivante →
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div style={styles.end}>
            <h2>🎉 Bravo ! Tu as terminé le quiz.</h2>
            <p>Ton score : {Math.round((score / questions.length) * 100)} %</p>
            <button onClick={() => { setCurrent(0); setScore(0); }} style={styles.restartBtn}>
              Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 60px)",
    paddingTop: 60,
  },
  container: { width: "100%", maxWidth: 600, padding: 20 },
  title: { textAlign: "center", marginBottom: 20 },
  card: {
    background: "white",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginBottom: 15,
    overflow: "hidden",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4caf50",
    borderRadius: 5,
    transition: "width 0.3s ease",
  },
  question: { marginBottom: 20 },
  buttons: { display: "flex", justifyContent: "space-between" },
  btn: {
    width: "45%",
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    background: "#2196f3",
    color: "white",
  },
  explanationBox: { marginTop: 20 },
  correct: { color: "green", fontWeight: "bold" },
  wrong: { color: "red", fontWeight: "bold" },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 15,
  },
  sourceBtn: {
    display: "inline-block",
    padding: "10px 15px",
    backgroundColor: "#ff9800",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: 10,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  nextBtn: {
    padding: "10px 15px",
    borderRadius: 10,
    background: "#4caf50",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  end: { textAlign: "center" },
  restartBtn: {
    marginTop: 50,
    padding: 10,
    background: "#ff9800",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: 10,
   alignSelf: "flex-start",
  },
};
