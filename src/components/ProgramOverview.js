import React, { useContext } from 'react';
import { Target, Users, BookOpen, Award } from 'lucide-react';
import { DarkModeContext } from '../App';

const ProgramOverview = () => {
  const { darkMode } = useContext(DarkModeContext);

  const features = [
    {
      icon: Target,
      title: 'Objetivo Principal',
      description: 'Formar directivos y consultores de alto nivel capaces de participar en procesos de toma de decisiones estratégicas.'
    },
    {
      icon: Users,
      title: 'Metodología del Caso',
      description: 'Aprendizaje basado en casos reales de empresas, desarrollando habilidades prácticas de liderazgo y negociación.'
    },
    {
      icon: BookOpen,
      title: 'Modalidad Mixta',
      description: 'Combinación de sesiones presenciales y virtuales para mayor flexibilidad y alcance.'
    },
    {
      icon: Award,
      title: 'Certificación UNAM',
      description: 'Diploma oficial de la Facultad de Química de la UNAM con 30 créditos de Educación Continua.'
    }
  ];

  return (
    <section id="programa" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Programa Académico en{' '}
            <span className="text-gradient">Alta Dirección</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            El programa está diseñado para formar profesionales capaces de desempeñarse como 
            directivos o consultores de alto nivel, participando en los procesos de toma de 
            decisiones y formulación de estrategias para la creación, organización, dirección 
            y desarrollo de organizaciones.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className={`card p-6 text-center transition-colors duration-300 ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-unam-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="bg-gradient-to-r from-unam-blue to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                ¿Por qué elegir nuestro programa?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Metodología del caso desarrollada por Harvard Business School</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Profesores con amplia experiencia en el sector empresarial</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Red de networking con los egresados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Diplomado oficial de la Máxima Casa de Estudios de México</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-unam-gold">
                Información del Programa
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-200">Duración:</span>
                  <span className="font-semibold">240 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Créditos:</span>
                  <span className="font-semibold">30 ECE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Modalidad:</span>
                  <span className="font-semibold">Mixta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Sede:</span>
                  <span className="font-semibold">Tacuba</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Inicio:</span>
                  <span className="font-semibold">Febrero 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
