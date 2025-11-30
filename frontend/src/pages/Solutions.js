import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SolutionCard from '../components/SolutionCard';
import ApiService from '../services/ApiService';
import '../assets/home.css';

function Solutions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupérer les solutions depuis l'API
  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getSolutions();
        setSolutions(data);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des solutions');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  const filteredSolutions = useMemo(() => {
    if (!searchTerm) return solutions;
    return solutions.filter(solution =>
      solution.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, solutions]);

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
                <div className="nav-content">
                    <div className="logo">🌱 Climat <span className="highlight">Vrai/Faux</span></div>
                    <div className="nav-links">
                        <button className="nav-link" onClick={() => navigate('/')}>Accueil</button>
                        <button className="nav-link " onClick={() => navigate('/idees_fausse')}>Idées Fausses</button>
                        <button className="nav-link active" onClick={() => navigate('/solutions')}>Solutions Réelles</button>
                        <button className="nav-link" onClick={() => navigate('/quiz')}>Quiz (Vrai/Faux)</button>
                    
                    </div>
                </div>
            </nav>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
      </motion.div>

      <motion.main 
        className="solutions-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="solutions-search"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </motion.div>
        
        {/* État de chargement */}
        <AnimatePresence>
          {loading && (
            <motion.div 
              className="solutions-loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="loading-text"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Chargement des solutions...
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* État d'erreur */}
        <AnimatePresence>
          {error && (
            <motion.div 
              className="solutions-error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="error-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {error}
              </motion.div>
              <motion.button 
                onClick={() => window.location.reload()}
                className="retry-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Réessayer
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenu principal */}
        <AnimatePresence>
          {!loading && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="solutions-count"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.span 
                  className="count-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  {filteredSolutions.length}
                </motion.span>
                <span> solution{filteredSolutions.length > 1 ? 's' : ''} trouvée{filteredSolutions.length > 1 ? 's' : ''}</span>
              </motion.div>

              <motion.div 
                className="solutions-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {filteredSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id || index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100 
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <SolutionCard solution={solution} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Message si aucune solution trouvée */}
              <AnimatePresence>
                {filteredSolutions.length === 0 && solutions.length > 0 && (
                  <motion.div 
                    className="solutions-no-results"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="no-results-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Aucune solution trouvée pour "{searchTerm}"
                    </motion.div>
                    <motion.button 
                      onClick={() => setSearchTerm('')}
                      className="show-all-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Voir toutes les solutions
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

export default Solutions;