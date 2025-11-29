import React from 'react';

function SolutionCard({ solution }) {
  try {
    return (
      <div 
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
        data-name="solution-card" 
        data-file="components/SolutionCard.js"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
            <div className="icon-lightbulb text-xl text-[var(--primary-color)]"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.titre}</h3>
            <p className="text-gray-600 text-sm mb-3">{solution.description}</p>
            <div className="flex items-center gap-2 mb-3">
              <div className="icon-trending-down text-lg text-[var(--accent-color)]"></div>
              <span className="text-[var(--accent-color)] font-semibold text-sm">
                {solution.impact_chiffre}
              </span>
            </div>
            <a 
              href={solution.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--accent-color)] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              <span>Voir la source</span>
              <div className="icon-external-link text-base"></div>
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SolutionCard component error:', error);
    return null;
  }
}

export default SolutionCard;