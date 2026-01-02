# 💒 Save the Date - Carol & Juan Fernando

Landing page premium y minimalista para la boda de Carol Castillo Córdova y Juan Fernando González Díaz el 14 de noviembre de 2026.

## ✨ Características

### Diseño
- **Estética Premium Minimalista**: Diseño romántico y atemporal
- **Paleta de Colores Exclusiva**: Dusty Rose, Mauve, Rosewood, Soft Berry, Mulberry, Old Rose, Blush, Vintage Pink, Dusty Blush
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones Elegantes**: Transiciones suaves con Framer Motion
- **Accesible**: Cumple con estándares WCAG

### Secciones

1. **Hero** - Imagen de bienvenida con overlay suave y CTAs
2. **Nuestra Historia** - Texto emotivo con grid asimétrico de fotos
3. **Galería** - Grid responsive con lightbox elegante (6 fotos)
4. **Cuenta Regresiva** - Timer en tiempo real hasta el día de la boda
5. **Programa** - Timeline del evento con horarios
6. **Cómo Llegar** - Mapa integrado y direcciones
7. **Waze** - Botón de navegación directa
8. **Código de Vestimenta** - Indicaciones formales
9. **Código de Conducta** - Información sobre la celebración
10. **RSVP** - Formulario completo con validación
11. **Agregar al Calendario** - Botones para Google, iCal, Outlook
12. **FAQ** - Preguntas frecuentes con acordeón
13. **Footer** - Mensaje de la pareja

### Tecnología

- **Next.js 15** (App Router)
- **TypeScript** - Type-safety completo
- **Tailwind CSS v4** - Estilos modernos
- **Framer Motion** - Animaciones fluidas
- **React Hook Form + Zod** - Validación de formularios
- **next/font** - Optimización de tipografías (Playfair Display + Inter)
- **next/image** - Optimización de imágenes

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio (si aplica)
cd wedding-2026

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Configuración

### Personalizar Contenido

Todo el contenido está centralizado en `lib/config.ts`:

```typescript
export const siteConfig = {
  couple: {
    name1: "Carol Castillo Córdova",
    name2: "Juan Fernando González Díaz",
    // ...
  },
  wedding: {
    date: new Date("2026-11-14T00:00:00"),
    venue: {
      name: "[Nombre del lugar]",
      address: "[Dirección]",
      // ...
    },
  },
  // ... más configuración
}
```

### Reemplazar Imágenes

Las imágenes están en `public/placeholders/`:

- `hero.svg` - Imagen principal del hero
- `story-1.svg`, `story-2.svg` - Sección historia
- `gallery-1.svg` a `gallery-6.svg` - Galería
- `rsvp.svg` - Sección RSVP
- `footer.svg` - Footer

**Para reemplazar:**
1. Coloca tus fotos en `public/placeholders/`
2. Usa formatos `.jpg`, `.png`, o `.webp`
3. Actualiza las rutas en `lib/config.ts` si cambias los nombres

### Configurar Mapa

En `lib/config.ts`, actualiza las coordenadas:

```typescript
venue: {
  coordinates: {
    lat: TU_LATITUD,
    lng: TU_LONGITUD,
  },
  wazeLink: "https://waze.com/ul?ll=LAT,LNG&navigate=yes",
  googleMapsLink: "https://maps.google.com/?q=LAT,LNG",
}
```

### Formulario RSVP

El formulario actualmente simula el envío. Para conectar con un backend:

Edita `components/forms/RSVPForm.tsx`:

```typescript
const onSubmit = async (data: RSVPFormData) => {
  // Aquí integra tu API/servicio
  const response = await fetch('/api/rsvp', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
```

## 🎨 Personalización de Colores

Los colores están definidos en `app/globals.css`:

```css
:root {
  --dusty-rose: #d4a5a5;
  --mauve: #c9a4a4;
  /* ... más colores */
}
```

Puedes modificarlos manteniendo la estética suave y romántica.

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start

# Linting
npm run lint
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Crea cuenta en [Vercel](https://vercel.com)
2. Importa el repositorio
3. Deploy automático

### Otros Servicios

Compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📂 Estructura del Proyecto

```
wedding-2026/
├── app/
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales + Tailwind
├── components/
│   ├── ui/                 # Componentes UI base
│   │   ├── Button.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   ├── sections/           # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── Story.tsx
│   │   ├── Gallery.tsx
│   │   ├── Countdown.tsx
│   │   ├── Program.tsx
│   │   ├── Directions.tsx
│   │   ├── Waze.tsx
│   │   ├── DressCode.tsx
│   │   ├── CodeOfConduct.tsx
│   │   ├── RSVP.tsx
│   │   ├── Calendar.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── forms/
│   │   └── RSVPForm.tsx    # Formulario con validación
│   └── animations/         # Componentes de animación
│       ├── FadeIn.tsx
│       ├── ImageReveal.tsx
│       └── Parallax.tsx
├── lib/
│   ├── config.ts           # ⭐ Configuración centralizada
│   ├── utils.ts            # Utilidades
│   └── validations.ts      # Schemas de validación
├── types/
│   └── index.ts            # Tipos TypeScript
└── public/
    └── placeholders/       # Imágenes placeholder
```

## 🔧 Solución de Problemas

### Las imágenes no se muestran

Verifica que las rutas en `lib/config.ts` coincidan con los archivos en `public/placeholders/`.

### El countdown no funciona

Asegúrate de que la fecha en `lib/config.ts` sea correcta:
```typescript
date: new Date("2026-11-14T00:00:00")
```

### Errores de TypeScript

Ejecuta:
```bash
npm run build
```

Esto mostrará los errores específicos para corregir.

## 📱 SEO y Redes Sociales

Los metadatos están configurados en `app/layout.tsx`:

- ✅ Title y Description optimizados
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Idioma: español

Para personalizar la imagen de preview social, agrega:
```typescript
openGraph: {
  images: ['/og-image.jpg'],
}
```

## ⚡ Performance

- Imágenes optimizadas con `next/image`
- Lazy loading automático (excepto hero)
- Code splitting de Next.js
- Fuentes optimizadas con `next/font`
- Animaciones con `prefers-reduced-motion`

## 🎯 Próximos Pasos

1. **Reemplazar imágenes placeholder** con fotos reales
2. **Completar datos del venue** (nombre, dirección, coordenadas)
3. **Configurar formulario RSVP** con tu backend
4. **Personalizar FAQ** con tus preguntas específicas
5. **Agregar Google Analytics** (opcional)
6. **Desplegar a producción**

## 📄 Licencia

Proyecto personal para Carol & Juan Fernando.

---

**Hecho con ❤️ para Carol & Juan Fernando**

*Fecha de la boda: 14 de Noviembre, 2026*
