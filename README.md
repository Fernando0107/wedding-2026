# 💒 Save the Date - Carol & Juan Fernando

Landing page elegante para la boda de Carol Castillo y Juan Fernando González. 14 de noviembre de 2026.

## ✨ Características

- **Diseño Premium**: Estética minimalista, romántica y atemporal con paleta de colores en tonos rosa
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones Elegantes**: Transiciones suaves con Framer Motion
- **Formulario RSVP**: Validación con React Hook Form + Zod
- **Calendario**: Integración con Google Calendar, Apple Calendar y Outlook
- **Accesible**: Cumple con estándares de accesibilidad
- **SEO Optimizado**: Meta tags y Open Graph configurados

## 🛠 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Fuentes**: Playfair Display (títulos) + Lora (texto)

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Dusty Rose | `#d4a5a5` | Botones y acentos |
| Mauve | `#c9a4a4` | Texto secundario |
| Rosewood | `#8b5a5a` | Títulos |
| Soft Berry | `#b87f7f` | Acentos |
| Mulberry | `#7a4a4a` | Títulos alternativos |
| Old Rose | `#c08787` | Texto terciario |
| Blush | `#f9e9e9` | Fondos claros |
| Vintage Pink | `#f5d9d9` | Fondos |
| Dusty Blush | `#f7e5e5` | Fondos |

## 📁 Estructura del Proyecto

```
wedding-2026/
├── app/
│   ├── globals.css      # Estilos globales y paleta
│   ├── layout.tsx       # Layout principal con SEO
│   └── page.tsx         # Página principal
├── components/
│   ├── animations/      # Componentes de animación
│   │   ├── Aurora.tsx
│   │   ├── FadeIn.tsx
│   │   ├── ImageReveal.tsx
│   │   └── Parallax.tsx
│   ├── forms/
│   │   └── RSVPForm.tsx # Formulario de confirmación
│   ├── sections/        # Secciones de la página
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
│   └── ui/              # Componentes reutilizables
│       ├── Button.tsx
│       ├── Container.tsx
│       └── Section.tsx
├── lib/
│   ├── config.ts        # Configuración centralizada
│   ├── utils.ts         # Utilidades
│   └── validations.ts   # Esquemas de validación
├── public/
│   └── placeholders/    # Imágenes placeholder
└── types/
    └── index.ts         # Tipos TypeScript
```

## 🚀 Instalación

```bash
# Navegar al directorio
cd wedding-2026

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Personalización

### Cambiar Información de la Boda

Edita `lib/config.ts` para actualizar:

- Nombres de los novios
- Fecha y hora
- Lugares (ceremonia y recepción)
- Textos de todas las secciones
- Preguntas frecuentes

### Reemplazar Fotos

1. Coloca tus fotos en `public/` (o usa un servicio de imágenes)
2. Actualiza las rutas en `lib/config.ts`:

```typescript
photos: {
  hero: "/tu-foto-hero.jpg",
  story: ["/historia-1.jpg", "/historia-2.jpg"],
  gallery: ["/galeria-1.jpg", ...],
  rsvp: "/foto-rsvp.jpg",
  footer: "/foto-footer.jpg",
}
```

### Conectar Formulario RSVP

El formulario actualmente simula el envío. Para conectarlo a un backend:

1. Edita `components/forms/RSVPForm.tsx`
2. Reemplaza la simulación en `onSubmit` con tu API:

```typescript
const onSubmit = async (data: RSVPFormData) => {
  const response = await fetch('/api/rsvp', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  // ...
};
```

## 📱 Secciones

1. **Hero** - Imagen principal con nombres y fecha
2. **Nuestra Historia** - Texto romántico con fotos
3. **Galería** - Grid de fotos con lightbox
4. **Cuenta Regresiva** - Contador animado
5. **Programa** - Timeline del día
6. **Direcciones** - Información de ceremonía y recepción
7. **Waze** - Links de navegación
8. **Código de Vestimenta** - Etiqueta formal
9. **Código de Conducta** - Solo adultos
10. **RSVP** - Formulario de confirmación
11. **Calendario** - Agregar a calendarios
12. **FAQ** - Preguntas frecuentes
13. **Footer** - Mensaje final

## 🎯 Performance

- Imágenes optimizadas con `next/image`
- Fuentes precargadas
- Animaciones respetuosas con `prefers-reduced-motion`
- Lazy loading en secciones

## ♿ Accesibilidad

- Semántica HTML correcta
- Navegación por teclado
- Roles ARIA donde aplica
- Skip link para contenido principal
- Contraste de colores adecuado

## 📄 Licencia

Este proyecto es privado y está destinado al uso personal de Carol y Juan Fernando.

---

Con amor, Carol & Juan Fernando 💕
