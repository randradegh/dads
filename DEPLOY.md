# 🚀 Guía de Deploy en Netlify

## ✅ Estado del Proyecto

El proyecto está **listo para deploy** en Netlify. El build se completó exitosamente sin errores.

### 📊 Estadísticas del Build
- **JavaScript**: 56.17 kB (comprimido)
- **CSS**: 4.93 kB (comprimido)
- **Estado**: ✅ Compilado exitosamente

## 🎯 Pasos para Deploy en Netlify

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Subir el código a GitHub**
   ```bash
   git add .
   git commit -m "Preparado para deploy en Netlify"
   git push origin main
   ```

2. **Conectar con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión o crea una cuenta
   - Haz clic en "New site from Git"
   - Selecciona tu repositorio de GitHub

3. **Configuración del Build**
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18` (ya configurado en netlify.toml)

4. **Deploy**
   - Haz clic en "Deploy site"
   - Netlify construirá automáticamente tu sitio

### Opción 2: Deploy Manual (Drag & Drop)

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Subir a Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra la carpeta `build` al área de deploy
   - El sitio se desplegará automáticamente

## ⚙️ Configuración Automática

El proyecto incluye los siguientes archivos de configuración:

### `netlify.toml`
- Configuración del build
- Redirecciones para React Router
- Versión de Node.js

### `public/_redirects`
- Manejo de rutas de React
- Redirección de todas las rutas a index.html

### `public/_headers`
- Headers de seguridad
- Configuración de cache para mejor rendimiento

### `public/robots.txt`
- Configuración para SEO
- Control de indexación

### `public/sitemap.xml`
- Sitemap para motores de búsqueda
- URLs principales del sitio

## 🔧 Configuración Post-Deploy

### 1. Dominio Personalizado
- En Netlify, ve a "Domain settings"
- Agrega tu dominio personalizado
- Configura DNS según las instrucciones

### 2. Variables de Entorno (si las necesitas)
- En Netlify, ve a "Site settings" > "Environment variables"
- Agrega cualquier variable de entorno necesaria

### 3. Formularios (si agregas formularios)
- Netlify detecta automáticamente formularios HTML
- Los datos se envían a tu dashboard de Netlify

## 📱 Verificación Post-Deploy

Después del deploy, verifica:

1. **Funcionalidad básica**
   - Navegación entre secciones
   - Modo oscuro/claro
   - Responsividad en móviles

2. **SEO y Performance**
   - Meta tags correctos
   - Imágenes optimizadas
   - Tiempo de carga

3. **Enlaces y navegación**
   - Todos los enlaces funcionan
   - Navegación por pestañas en diplomados
   - Enlaces de redes sociales

## 🐛 Solución de Problemas

### Error: "Build failed"
- Verifica que Node.js 18 esté disponible
- Revisa los logs de build en Netlify
- Asegúrate de que todas las dependencias estén en package.json

### Error: "Page not found"
- Verifica que `public/_redirects` esté presente
- Confirma que `netlify.toml` tenga la configuración correcta

### Error: "Assets not loading"
- Verifica que las rutas en `public/` sean correctas
- Confirma que las imágenes estén en la carpeta `public/`

## 📞 Soporte

Si encuentras problemas:

1. Revisa los logs de build en Netlify
2. Verifica la configuración en `netlify.toml`
3. Confirma que el build local funcione: `npm run build`

## 🎉 ¡Listo!

Tu sitio web del Programa Académico en Alta Dirección estará disponible en:
`https://tu-sitio.netlify.app`

---

**Desarrollado con ❤️ para la UNAM**
