import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FalseIdeaCard from '../components/FalseIdeaCard'; 
import ApiService from '../services/ApiService';
import '../assets/home.css';
import '../styles/FausseIdeePage.css';


const FausseIdeePage = () => {
    const navigate = useNavigate();
    const [faussesInfos, setFaussesInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Récupérer les fausses idées depuis l'API
    useEffect(() => {
        const fetchFalseIdeas = async () => {
            try {
                setLoading(true);
                const data = await ApiService.getFalseIdeas();
                setFaussesInfos(data);
                setError(null);
            } catch (err) {
                setError('Erreur lors du chargement des fausses idées');
                console.error('Erreur:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchFalseIdeas();
    }, []); 

    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo">🌱 Climat <span className="highlight">Vrai/Faux</span></div>
                    <div className="nav-links">
                        <button className="nav-link" onClick={() => navigate('/')}>Accueil</button>
                        <button className="nav-link active" onClick={() => navigate('/idees_fausse')}>Idées Fausses</button>
                        <button className="nav-link" onClick={() => navigate('/solutions')}>Solutions Réelles</button>
                        <button className="nav-link" onClick={() => navigate('/quiz')}>Quiz (Vrai/Faux)</button>
                    
                    </div>
                </div>
            </nav>

            <div className="fausses-idees-page-container">
                <motion.header 
                    className="fausses-idees-header"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Déconstruire les Idées Reçues sur le Climat
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Faites le tri entre les arguments climatosceptiques et la réalité
                        scientifique, appuyée par des sources fiables.
                    </motion.p>
                </motion.header>

                {/* État de chargement */}
                <AnimatePresence>
                    {loading && (
                        <motion.div 
                            className="loading-container"
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
                                Chargement des fausses idées...
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* État d'erreur */}
                <AnimatePresence>
                    {error && (
                        <motion.div 
                            className="error-container"
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
                            {/* Compteur de fausses idées */}
                            <motion.div 
                                className="fausses-idees-count"
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
                                    {faussesInfos.length}
                                </motion.span>
                                <span> fausse{faussesInfos.length > 1 ? 's' : ''} idée{faussesInfos.length > 1 ? 's' : ''} trouvée{faussesInfos.length > 1 ? 's' : ''}</span>
                            </motion.div>

                            <motion.main 
                                className="fausses-idees-grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                            {faussesInfos.map((info, index) => (
                                <motion.div
                                    key={info.id || index}
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
                                    <FalseIdeaCard
                                        title={info.titre}
                                        explanation={info.pourquoi_faux}
                                        source={info.source_url}
                                    />
                                </motion.div>
                            ))}
                            
                            {/* Message si aucune fausse idée trouvée */}
                            <AnimatePresence>
                                {faussesInfos.length === 0 && (
                                    <motion.div 
                                        className="no-data-message"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <p>Aucune fausse idée disponible pour le moment.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            </motion.main>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FausseIdeePage;