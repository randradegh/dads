import React from 'react';
import { ArrowRight, Calendar, Star, Users, Award } from 'lucide-react';

const CallToAction = () => {
  const urgencyElements = [
    {
      icon: Calendar,
      text: 'Inicio: Febrero 2026',
      highlight: '¡Últimas plazas disponibles!'
    },
    {
      icon: Star,
      text: 'Metodología Harvard',
      highlight: 'Casos reales de empresas'
    },
    {
      icon: Users,
      text: '+500 Egresados',
      highlight: 'Red de networking exclusiva'
    },
    {
      icon: Award,
      text: 'Certificación UNAM',
      highlight: 'Diploma oficial con validez'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-unam-blue via-blue-700 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¡Transforma tu <span className="text-gradient">Futuro Profesional</span> Hoy!
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            No dejes pasar esta oportunidad única de especializarte en alta dirección 
            con la metodología de Harvard y la certificación de la UNAM.
          </p>
        </div>

        {/* Urgency Elements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {urgencyElements.map((element, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-12 h-12 bg-unam-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <element.icon className="w-6 h-6 text-unam-blue" />
              </div>
              <p className="text-white font-semibold mb-2">{element.text}</p>
              <p className="text-unam-gold text-sm font-medium">{element.highlight}</p>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              ¿Listo para dar el siguiente paso?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full"></div>
                  <span className="text-blue-100">Inscripciones abiertas para febrero 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full"></div>
                  <span className="text-blue-100">Juntas informativas en febrero</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full"></div>
                  <span className="text-blue-100">Cupos limitados por diplomado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unam-gold rounded-full"></div>
                  <span className="text-blue-100">Descuentos por inscripción anticipada</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¡No esperes más para transformar tu carrera!
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Únete a cientos de profesionales que ya han transformado sus carreras 
              con nuestro programa de Alta Dirección.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-unam-gold hover:bg-yellow-500 text-unam-blue font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>¡Pide Informes Ahora!</span>
                <ArrowRight className="w-5 h-5" />
              </button>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
