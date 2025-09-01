# Programa Académico en Alta Dirección - Sitio Web Promocional

Un sitio web moderno y responsivo desarrollado con React y Tailwind CSS para promover el Programa Académico en Alta Dirección ofrecido por la Facultad de Química de la UNAM.

## 🎯 Características

- **Diseño Moderno y Responsivo**: Interfaz adaptativa que se ve perfecta en dispositivos móviles, tablets y computadoras
- **Modo Oscuro**: Toggle para cambiar entre modo claro y oscuro con persistencia en localStorage
- **Navegación Intuitiva**: Menú de pestañas para explorar los tres diplomados disponibles
- **Optimizado para Marketing**: Diseño siguiendo las mejores prácticas del funnel de marketing
- **Componentes Reutilizables**: Arquitectura modular con componentes React bien estructurados

## 🏛️ Diplomados Disponibles

### 1. Administración Financiera
Formar directivos y consultores de alto nivel en toma de decisiones estratégicas, aplicando habilidades de negociación, liderazgo y métodos cuantitativos en un marco de ética y responsabilidad social.

### 2. Procesos de Negocios
Preparar directivos para participar en decisiones estratégicas enfocadas en operaciones, cadena de suministro, comercialización y sistemas de información gerenciales.

### 3. Desarrollo Organizacional y Personal
Formar directivos centrados en gestión del talento humano, cambio organizacional, ética, responsabilidad social y dirección estratégica.

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca principal para la interfaz de usuario
- **Tailwind CSS**: Framework CSS utility-first para estilos
- **Lucide React**: Biblioteca de iconos modernos
- **Context API**: Para gestión del estado del modo oscuro
- **LocalStorage**: Para persistencia de preferencias del usuario

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js          # Barra de navegación con toggle de modo oscuro
│   ├── Hero.js            # Sección principal con imagen y CTA
│   ├── ProgramOverview.js # Descripción general del programa
│   ├── DiplomasSection.js # Sección de diplomados con navegación por pestañas
│   ├── TargetAudience.js  # Descripción del público objetivo
│   ├── CallToAction.js    # Sección final de llamada a la acción
│   └── Footer.js          # Pie de página con información de contacto
├── App.js                 # Componente principal con contexto de modo oscuro
├── index.js              # Punto de entrada de la aplicación
└── index.css             # Estilos globales y configuración de Tailwind
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd dads
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone la configuración de webpack (irreversible)

## 🎨 Características de Diseño

### Modo Oscuro
- Toggle automático basado en preferencias del sistema
- Persistencia de preferencias en localStorage
- Transiciones suaves entre modos

### Componentes Principales

#### Header
- Logo de la UNAM
- Navegación principal
- Toggle de modo oscuro
- Botón de llamada a la acción

#### Hero Section
- Imagen de estudiantes en auditorio tipo Harvard
- Título principal del programa
- Estadísticas destacadas
- Botones de acción principales

#### DiplomasSection
- Navegación por pestañas con indicadores visuales
- Contenido dinámico según el diplomado seleccionado
- Información detallada de módulos y horarios
- Diseño responsivo para móviles

## 📱 Responsividad

El sitio está completamente optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Público Objetivo

Estudiantes de la Facultad de Química de la UNAM que están por concluir sus carreras académicas y desean obtener su título profesional a través de la especialización en alta dirección.

## 📞 Información de Contacto

- **Facultad**: Facultad de Química, UNAM
- **Sede**: Tacuba
- **Modalidad**: Mixta
- **Duración**: 240 horas
- **Créditos**: 30 créditos de Educación Continua

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **UNAM Facultad de Química** - *Trabajo inicial* - [UNAM](https://www.unam.mx/)

## 🙏 Agradecimientos

- Facultad de Química de la UNAM
- Equipo de desarrollo del Programa Académico en Alta Dirección
- Comunidad de React y Tailwind CSS

---

**Desarrollado con ❤️ para la UNAM**
