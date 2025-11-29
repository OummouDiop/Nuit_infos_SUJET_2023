import React from 'react';

function Header() {
  try {
    return (
      <header className="gradient-bg text-white py-16" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <div className="icon-leaf text-4xl text-white"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions Climatiques</h1>
            <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
              Découvrez des actions concrètes pour réduire les émissions de CO2 et lutter contre le changement climatique
            </p>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}

export default Header;