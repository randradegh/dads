import React, { useContext } from 'react';
import { TrendingUp, Settings, Users, Calendar, Clock, MapPin } from 'lucide-react';
import { DarkModeContext } from '../App';

const DiplomasSection = ({ activeTab, setActiveTab }) => {
  const { darkMode } = useContext(DarkModeContext);

  const diplomados = [
    {
      id: 'financiera',
      title: 'Administración Financiera',
      color: 'blue',
      colorClass: 'text-blue-600',
      borderClass: 'border-blue-600',
      bgClass: 'bg-blue-600',
      gradientClass: 'from-blue-600 to-blue-700',
      icon: TrendingUp,
      description: 'Formar personas capaces de desempeñarse como directivos o consultores de alto nivel, participando en la toma de decisiones y en la formulación e implantación de estrategias para la creación y desarrollo de organizaciones; aplicando habilidades de negociación y liderazgo, así como métodos cuantitativos y principios de ética y responsabilidad social.',
      modules: [
        'Métodos Cuantitativos y Finanzas',
        'Economía de la Empresa y Macroeconomía',
        'Valuación de Proyectos de Inversión',
        'Dirección Financiera'
      ],
      schedule: 'Lunes y Martes de 16:00 a 22:00 h',
      dates: 'Del 16 de febrero al 28 de julio de 2026',
      infoMeeting: 'Lunes 2 de febrero de 2026',
      coordinator: 'MEDE. José Luis González García'
    },
    {
      id: 'negocios',
      title: 'Procesos de Negocios',
      color: 'green',
      colorClass: 'text-green-600',
      borderClass: 'border-green-600',
      bgClass: 'bg-green-600',
      gradientClass: 'from-green-600 to-green-700',
      icon: Settings,
      description: 'Preparar a directivos o consultores para participar en decisiones estratégicas y en la formulación e implantación de estrategias para la organización y desarrollo óptimo, aplicando negociación, liderazgo y métodos cuantitativos, enfocado en operaciones, cadena de suministro, comercialización y sistemas de información gerenciales.',
      modules: [
        'Dirección de Operaciones',
        'Dirección de la Cadena de Suministro',
        'Comercialización',
        'Sistemas de Información Gerenciales'
      ],
      schedule: 'Miércoles y Jueves de 16:00 a 22:00 h',
      dates: 'Del 18 de febrero al 30 de julio de 2026',
      infoMeeting: 'Miércoles 4 de febrero de 2026',
      coordinator: 'IQM. Roberto Andrade Fonseca'
    },
    {
      id: 'organizacional',
      title: 'Desarrollo Organizacional y Personal',
      color: 'purple',
      colorClass: 'text-purple-600',
      borderClass: 'border-purple-600',
      bgClass: 'bg-purple-600',
      gradientClass: 'from-purple-600 to-purple-700',
      icon: Users,
      description: 'Formar personas para desempeñarse como directivos o consultores de alto nivel, centrados en la gestión del talento humano, cambio organizacional, ética, responsabilidad social y dirección estratégica, aplicando negociación y liderazgo en un marco ético y responsable.',
      modules: [
        'Dimensión Humana y Procesos de Cambio',
        'Ética, Responsabilidad Social y Liderazgo',
        'Dirección del Talento Humano',
        'Dirección Estratégica'
      ],
      schedule: 'Viernes de 16:00 a 22:00 y sábados de 8:00 a 14:00 h',
      dates: 'Del 20 de febrero al 8 de agosto de 2026',
      infoMeeting: 'Viernes 6 de febrero de 2026',
      coordinator: 'MAD. Lilia Angélica Duarte Michel'
    }
  ];

  const activeDiploma = diplomados.find(d => d.id === activeTab);

  return (
    <section id="diplomados" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Nuestros <span className="text-gradient">Diplomados</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Especialízate en el área que mejor se adapte a tus objetivos profesionales. 
            Cada diplomado está diseñado para desarrollar competencias específicas en alta dirección.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className={`flex flex-col sm:flex-row justify-center mb-12 rounded-xl shadow-lg p-2 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          {diplomados.map((diploma) => (
            <button
              key={diploma.id}
              onClick={() => setActiveTab(diploma.id)}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 relative ${
                activeTab === diploma.id
                  ? 'bg-white shadow-2xl transform scale-105 border z-10'
                  : darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700 border-2 border-transparent hover:border-gray-600 opacity-75 hover:opacity-100'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 border-2 border-transparent hover:border-gray-300 opacity-75 hover:opacity-100'
              }`}
              style={activeTab === diploma.id ? {
                borderColor: diploma.color === 'blue' ? '#3b82f6' : diploma.color === 'green' ? '#22c55e' : '#a855f7'
              } : {}}
            >
              <diploma.icon className={`w-5 h-5 transition-all duration-300 ${
                activeTab === diploma.id ? 'scale-110' : 'scale-100'
              }`}
              style={activeTab === diploma.id ? {
                color: diploma.color === 'blue' ? '#2563eb' : diploma.color === 'green' ? '#16a34a' : '#9333ea'
              } : {}}
              />
              <span className={`hidden sm:inline transition-all duration-300 ${
                activeTab === diploma.id ? 'font-bold' : 'font-semibold'
              }`}
              style={activeTab === diploma.id ? {
                color: diploma.color === 'blue' ? '#2563eb' : diploma.color === 'green' ? '#16a34a' : '#9333ea'
              } : {}}
              >
                {diploma.title}
              </span>
              <span className={`sm:hidden transition-all duration-300 ${
                activeTab === diploma.id ? 'font-bold' : 'font-semibold'
              }`}
              style={activeTab === diploma.id ? {
                color: diploma.color === 'blue' ? '#2563eb' : diploma.color === 'green' ? '#16a34a' : '#9333ea'
              } : {}}
              >
                {diploma.title.split(' ')[0]}
              </span>
              
              {/* Indicador de activo */}
              {activeTab === diploma.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-transparent rounded-lg pointer-events-none"></div>
              )}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {activeDiploma && (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {activeDiploma.title}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {activeDiploma.description}
                </p>
              </div>

              <div>
                <h4 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Módulos del Diplomado
                </h4>
                <div className="grid gap-3">
                  {activeDiploma.modules.map((module, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg shadow-sm transition-colors duration-300 ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      <div className={`w-3 h-3 ${activeDiploma.bgClass} rounded-full`}></div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-xl p-6 shadow-lg transition-colors duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h4 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Información Importante
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className={`font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>Horario:</span>
                      <span className={`ml-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{activeDiploma.schedule}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className={`font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>Fechas:</span>
                      <span className={`ml-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{activeDiploma.dates}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className={`font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>Junta Informativa:</span>
                      <span className={`ml-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{activeDiploma.infoMeeting}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${activeDiploma.gradientClass} rounded-2xl p-8 text-white h-full`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <activeDiploma.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{activeDiploma.title}</h3>
                    <p className="text-white/80">Diplomado de Titulación</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">Responsable Académico</h4>
                    <p className="text-white/90">{activeDiploma.coordinator}</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">Características</h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• Modalidad Mixta</li>
                      <li>• 240 horas de duración</li>
                      <li>• 30 créditos ECE</li>
                      <li>• Método del caso</li>
                      <li>• Sede: Tacuba</li>
                    </ul>
                  </div>

                  <button className={`w-full bg-white ${activeDiploma.colorClass} font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    ¡Inscríbete en {activeDiploma.title}!
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiplomasSection;
