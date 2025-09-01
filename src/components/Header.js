import React, { useState, useContext } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { DarkModeContext } from '../App';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Programa', href: '#programa' },
    { name: 'Diplomados', href: '#diplomados' },
    { name: 'Público Objetivo', href: '#publico' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-lg transition-colors duration-300 ${
      darkMode ? 'bg-gray-900/95 text-white' : 'bg-white/95 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primera fila: Logos y controles */}
        <div className="flex justify-between items-center h-36">
          {/* Logo UNAM - Extrema Izquierda */}
          <div className="flex items-center">
            <img 
              src="/png-transparent-unam-hd-logo-thumbnail.png" 
              alt="Logo UNAM" 
              className="h-32 w-auto"
            />
          </div>

          {/* Centro - Título del Programa */}
          <div className="hidden sm:block text-center">
            <h1 className="text-lg font-bold text-unam-blue">DAD</h1>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>FQ UNAM</p>
          </div>

          {/* Logo Facultad de Química - Extrema Derecha */}
          <div className="flex items-center">
            <img 
              src="/images.png" 
              alt="Logo Facultad de Química" 
              className="h-32 w-auto"
            />
          </div>
        </div>

        {/* Segunda fila: Navegación y controles */}
        <div className="flex justify-between items-center h-12 border-t border-gray-200 dark:border-gray-700">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  darkMode ? 'text-gray-300 hover:text-unam-gold' : 'text-gray-700 hover:text-unam-blue'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-unam-gold hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* CTA Button */}
            <button className="btn-primary">
              ¡Inscríbete Ahora!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-unam-gold' 
                  : 'bg-gray-100 text-gray-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:text-unam-gold' : 'text-gray-700 hover:text-unam-blue'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
              darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:text-unam-gold' : 'text-gray-700 hover:text-unam-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  ¡Inscríbete Ahora!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
