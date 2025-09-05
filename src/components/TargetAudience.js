import React, { useContext } from 'react';
import { GraduationCap, Target, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { DarkModeContext } from '../App';

const TargetAudience = () => {
  const { darkMode } = useContext(DarkModeContext);

  const targetCharacteristics = [
    {
      icon: GraduationCap,
      title: 'Estudiantes de la Facultad de Química',
      description: 'Alumnos que están por concluir sus carreras académicas y buscan especialización profesional.'
    },
    {
      icon: Target,
      title: 'Interés en Alta Dirección',
      description: 'Profesionales que desean obtener su título profesional mediante la especialización en áreas directivas.'
    },
    {
      icon: TrendingUp,
      title: 'Aspiración de Liderazgo',
      description: 'Personas con vocación para desempeñarse como directivos o consultores de alto nivel.'
    },
    {
      icon: Users,
      title: 'Desarrollo Organizacional',
      description: 'Profesionales interesados en la gestión estratégica y el desarrollo de organizaciones.'
    }
  ];

  const benefits = [
    'Título profesional por especialización',
    'Metodología del caso de Harvard',
    'Red de networking con egresados',
    'Diploma oficial UNAM',
    'Horarios accesibles y modalidad mixta',
    'Profesores con amplia experiencia empresarial'
  ];

  return (
    <section id="publico" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            ¿Para <span className="text-gradient">Quién</span> es este Programa?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Este programa está diseñado para estudiantes de la Facultad de Química 
            que están por concluir sus carreras académicas y desean obtener su título profesional 
            mediante la especialización en alguna de las áreas de alta dirección.
          </p>
          <br />
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            También es ideal para estudiantes de otras facultades y profesionales que desean especializarse en alguna de las áreas de alta dirección.
          </p>
        </div>

        {/* Target Characteristics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {targetCharacteristics.map((characteristic, index) => (
            <div key={index} className={`card p-6 text-center transition-colors duration-300 ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-unam-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <characteristic.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {characteristic.title}
              </h3>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {characteristic.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-unam-blue to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Público Objetivo Específico
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  El programa está dirigido principalmente a <strong>estudiantes de la Facultad de Química de la UNAM</strong> 
                  que se encuentran en las etapas finales de sus carreras académicas y buscan:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Obtener su título profesional mediante la especialización</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Desarrollar competencias en alta dirección</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Acceder a oportunidades de liderazgo empresarial</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-unam-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Formar parte de una red de profesionales de alto nivel</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`rounded-2xl p-8 transition-colors duration-300 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                ¿Por qué elegir este programa?
              </h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-unam-blue flex-shrink-0" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-unam-gold to-yellow-500 rounded-2xl p-8 text-unam-blue">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Perfil del Aspirante Ideal
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Formación Académica</h4>
                      <p className="text-sm">Estudiante de la Facultad de Química UNAM en proceso de titulación</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Intereses Profesionales</h4>
                      <p className="text-sm">Alta dirección, consultoría, desarrollo organizacional</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Objetivos</h4>
                      <p className="text-sm">Obtener título profesional y desarrollar competencias directivas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <Target className="w-6 h-6 text-unam-blue" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-unam-blue rounded-full p-3 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-unam-blue to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Te identificas con este perfil?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Si eres estudiante de la Facultad de Química y buscas especializarte en alta dirección, 
              este programa es perfecto para ti.
            </p>
            <p className="text-lg mb-6 text-blue-100">
              Además, si eres estudiante de otra facultad o profesional que busca especializarse en alguna de las áreas de alta dirección, esta es una excelente oportunidad para ampliar
              tus conocimientos y habilidades para especializarse en alguna de las áreas de alta dirección.
            </p>

            <button className="bg-unam-gold hover:bg-yellow-500 text-unam-blue font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              ¡Aprovecha esta fabulosa opción académica!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
