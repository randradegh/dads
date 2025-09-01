import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramOverview from './components/ProgramOverview';
import DiplomasSection from './components/DiplomasSection';
import TargetAudience from './components/TargetAudience';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Contexto para el modo oscuro
export const DarkModeContext = React.createContext();

function App() {
  const [activeTab, setActiveTab] = useState('negocios');
  const [darkMode, setDarkMode] = useState(false);

  // Detectar preferencia del sistema al cargar
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                      (!localStorage.getItem('darkMode') && 
                       window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
  }, []);

  // Guardar preferencia en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <Header />
        <Hero />
        <ProgramOverview />
        <DiplomasSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <TargetAudience />
        <CallToAction />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
