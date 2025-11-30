import React, { useState } from 'react';

const FalseIdeaCard = ({ title, explanation, source }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="false-idea-card">
            {/* Header rouge */}
            <div className="card-header-red" onClick={toggleExpanded}>
                <h3 className="card-title">{title}</h3>
                <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
            </div>
            
            {/* Description courte visible */}
            <div className="card-description">
                <p>Cliquez sur "Pourquoi c'est faux" pour voir l'explication</p>
            </div>
            
            {/* Contenu expansible */}
            {isExpanded && (
                <div className="card-expanded-content">
                    <div className="explanation-section">
                        <h4>Pourquoi c'est faux :</h4>
                        <p>{explanation}</p>
                    </div>
                    
                    <div className="source-section">
                        <button 
                            onClick={() => window.open(source, '_blank')}
                            className="source-button"
                        >
                            Voir la source
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FalseIdeaCard;