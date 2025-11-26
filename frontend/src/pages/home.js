import React from "react";
import "../assets/home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">🌱 Climat</div>
          <div className="nav-links">
            <button className="nav-link active" onClick={() => navigate("/")}>Accueil</button>
            <button className="nav-link" onClick={() => navigate("/quiz")}>Quiz</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">Base sur la science climatique</div>
        <h1 className="hero-title">
          Climat : Démêlons le <span className="highlight">vrai du faux !</span>
        </h1>
        <p className="hero-description">
          Déconstruisons ensemble les mythes climatiques avec des preuves
          scientifiques et découvrons les vraies solutions pour agir
          efficacement.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate("/quiz")}>⚡ Commencer le Quiz</button>
          <button className="btn btn-secondary">Découvrir les solutions</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-number">1247</div>
          <div className="stat-label">
            Mythes déconstruits par la communauté
          </div>
          <div className="stat-trend"> +234 Mythes </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">✓</div>
          <h3>Déconstruire les mythes</h3>
          <p>
            Identifiez et comprenez les idées reçues sur le climat avec des
            explications scientifiques claires et accessibles.
          </p>
        </div>
        

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Vraies solutions</h3>
          <p>
            Découvrez les actions individuelles ET collectives qui ont un réel
            impact sur le climat, hiérarchisées par efficacité.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Approche socialement juste</h3>
          <p>
            Une démarche non-culpabilisante qui promeut l'action collective et
            les politiques publiques ambitieuses.
          </p>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="why-important">
        <h2>Pourquoi c'est important ?</h2>
        <div className="reasons-grid">
          <div className="reason bad">
            <span className="reason-icon">✗</span>
            <h4>La désinformation ralentit l'action</h4>
            <p>
              Les mythes climatiques créent de la confusion et retardent les
              vraies solutions.
            </p>
          </div>

          <div className="reason bad">
            <span className="reason-icon">✗</span>
            <h4>Culpabilisation individuelle</h4>
            <p>
              Mettre la pression uniquement sur les individus ignore le rôle
              crucial des politiques publiques.
            </p>
          </div>

          <div className="reason good">
            <span className="reason-icon">✓</span>
            <h4>Information basée sur la science</h4>
            <p>
              Des sources fiables (GIEC, ADEME, RAC) pour comprendre les vrais
              enjeux.
            </p>
          </div>

          <div className="reason good">
            <span className="reason-icon">✓</span>
            <h4>Action avec optimisme</h4>
            <p>
              Il n'est pas trop tard ! Découvrez comment agir efficacement à
              tous les niveaux.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Prête à démêler le vrai du faux ?</h2>
        <p>
          Testez vos connaissances sur le climat et découvrez les solutions qui
          font vraiment la différence.
        </p>
        <button className="btn btn-primary btn-large" onClick={() => navigate("/quiz")}>⚡ Lancer le Quiz</button>
        <div className="sources">
          Sources : GIEC, ADEME, Réseau Action Climat
        </div>
        <div className="tagline">
          Une application pour comprendre et agir face au changement climatique
        </div>
      </section>
    </div>
  );
}
