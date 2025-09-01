import React, { useContext } from 'react';
import { GraduationCap, MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { DarkModeContext } from '../App';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`transition-colors duration-300 ${
      darkMode ? 'bg-gray-950 text-white' : 'bg-gray-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-unam-blue rounded-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DAD - FQ UNAM</h3>
                <p className="text-gray-400 text-sm">Programa Académico en Alta Dirección</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Formamos directivos y consultores de alto nivel con la metodología del caso 
              de Harvard Business School. Certificación oficial de la Facultad de Química de la UNAM.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-unam-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-unam-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-unam-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-unam-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-unam-gold transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#programa" className="text-gray-300 hover:text-unam-gold transition-colors">
                  Programa
                </a>
              </li>
              <li>
                <a href="#diplomados" className="text-gray-300 hover:text-unam-gold transition-colors">
                  Diplomados
                </a>
              </li>
              <li>
                <a href="#publico" className="text-gray-300 hover:text-unam-gold transition-colors">
                  Público Objetivo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-unam-gold transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-unam-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Facultad de Química</p>
                  <p className="text-gray-400 text-sm">Ciudad Universitaria</p>
                  <p className="text-gray-400 text-sm">Ciudad de México</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-unam-gold flex-shrink-0" />
                <span className="text-gray-300">(55) 5622-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-unam-gold flex-shrink-0" />
                <span className="text-gray-300">dad@quimica.unam.mx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-unam-gold flex-shrink-0" />
                <span className="text-gray-300">www.quimica.unam.mx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Programa Académico en Alta Dirección - Facultad de Química UNAM. 
              Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-unam-gold transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-unam-gold transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-unam-gold transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
