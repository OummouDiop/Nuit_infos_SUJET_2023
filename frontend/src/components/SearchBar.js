import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  try {
    return (
      <div className="mb-8" data-name="search-bar" data-file="components/SearchBar.js">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <div className="icon-search text-xl text-gray-400"></div>
          </div>
          <input
            type="text"
            placeholder="Rechercher une solution..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[var(--primary-color)] transition-colors"
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('SearchBar component error:', error);
    return null;
  }
}

export default SearchBar;