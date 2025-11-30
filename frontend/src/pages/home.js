import React from "react";
import "../assets/home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Navigation */}
      {/* <nav className="navbar">
        <div className="nav-content">
          <div className="logo">🌱 Climat</div>
          <div className="nav-links">
            <button className="nav-link active" onClick={() => navigate("/")}>Accueil</button>
            <button className="nav-link" onClick={() => navigate("/quiz")}>Quiz</button>
            <button className="nav-link" onClick={() => navigate("/solutions")}>Solutions</button>
          </div>
        </div>
      </nav> */}
      <nav className="navbar">
                <div className="nav-content">
                    <div className="logo">🌱 Climat <span className="highlight">Vrai/Faux</span></div>
                    <div className="nav-links">
                        <button className="nav-link active" onClick={() => navigate('/')}>Accueil</button>
                        <button className="nav-link" onClick={() => navigate('/idees_fausse')}>Idées Fausses</button>
                        <button className="nav-link" onClick={() => navigate('/solutions')}>Solutions Réelles</button>
                        <button className="nav-link" onClick={() => navigate('/quiz')}>Quiz (Vrai/Faux)</button>
                    
                    </div>
                </div>
            </nav>

      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Base sur la science climatique
        </motion.div>
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Climat : Démêlons le <span className="highlight">vrai du faux !</span>
        </motion.h1>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Déconstruisons ensemble les mythes climatiques avec des preuves
          scientifiques et découvrons les vraies solutions pour agir
          efficacement.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button 
            className="btn btn-primary" 
            onClick={() => navigate("/quiz")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ⚡ Commencer le Quiz
          </motion.button>
          <motion.button 
            className="btn btn-secondary" 
            onClick={() => navigate("/solutions")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir les solutions
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="stat-number"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            1247
          </motion.div>
          <div className="stat-label">
            Mythes déconstruits par la communauté
          </div>
          <div className="stat-trend"> +234 Mythes </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -10 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="feature-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            ✓
          </motion.div>
          <h3>Déconstruire les mythes</h3>
          <p>
            Identifiez et comprenez les idées reçues sur le climat avec des
            explications scientifiques claires et accessibles.
          </p>
        </motion.div>
        

        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -10 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="feature-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            ⚡
          </motion.div>
          <h3>Vraies solutions</h3>
          <p>
            Découvrez les actions individuelles ET collectives qui ont un réel
            impact sur le climat, hiérarchisées par efficacité.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -10 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="feature-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            👥
          </motion.div>
          <h3>Approche socialement juste</h3>
          <p>
            Une démarche non-culpabilisante qui promeut l'action collective et
            les politiques publiques ambitieuses.
          </p>
        </motion.div>
      </motion.section>

      {/* Why Important Section */}
      <motion.section 
        className="why-important"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pourquoi c'est important ?
        </motion.h2>
        <div className="reasons-grid">
          <motion.div 
            className="reason bad"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="reason-icon"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              ✗
            </motion.span>
            <h4>La désinformation ralentit l'action</h4>
            <p>
              Les mythes climatiques créent de la confusion et retardent les
              vraies solutions.
            </p>
          </motion.div>

          <motion.div 
            className="reason bad"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="reason-icon"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              ✗
            </motion.span>
            <h4>Culpabilisation individuelle</h4>
            <p>
              Mettre la pression uniquement sur les individus ignore le rôle
              crucial des politiques publiques.
            </p>
          </motion.div>

          <motion.div 
            className="reason good"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="reason-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              ✓
            </motion.span>
            <h4>Information basée sur la science</h4>
            <p>
              Des sources fiables (GIEC, ADEME, RAC) pour comprendre les vrais
              enjeux.
            </p>
          </motion.div>

          <motion.div 
            className="reason good"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="reason-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              ✓
            </motion.span>
            <h4>Action avec optimisme</h4>
            <p>
              Il n'est pas trop tard ! Découvrez comment agir efficacement à
              tous les niveaux.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Prete à démêler le vrai du faux ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Testez vos connaissances sur le climat et découvrez les solutions qui
          font vraiment la différence.
        </motion.p>
        <motion.button 
          className="btn btn-primary btn-large" 
          onClick={() => navigate("/quiz")}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ⚡ Lancer le Quiz
        </motion.button>
        <motion.div 
          className="sources"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sources : GIEC, ADEME, Réseau Action Climat
        </motion.div>
        <motion.div 
          className="tagline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Une application pour comprendre et agir face au changement climatique
        </motion.div>
      </motion.section>
    </div>
  );
}
