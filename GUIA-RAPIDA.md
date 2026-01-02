# 🎯 Guía de Personalización Rápida

## ✅ Estado del Proyecto

**¡Tu landing page está completa y funcionando!** 🎉

- ✅ Todos los componentes implementados
- ✅ Diseño premium minimalista con la paleta de colores especificada
- ✅ Animaciones elegantes con Framer Motion
- ✅ Formulario RSVP con validación
- ✅ Galería con lightbox
- ✅ Cuenta regresiva en tiempo real
- ✅ SEO optimizado
- ✅ 100% responsive

## 🌐 Ver tu Sitio

El servidor de desarrollo está corriendo en:
**http://localhost:3000**

Para iniciarlo en el futuro:
```bash
cd wedding-2026
npm run dev
```

## 📝 Personalización Inmediata

### 1. Actualizar Información del Venue

Edita `lib/config.ts` líneas 25-37:

```typescript
venue: {
  name: "Nombre de tu lugar",
  address: "Dirección completa",
  city: "Ciudad, País",
  coordinates: {
    lat: TU_LATITUD,    // Ej: 4.6097
    lng: TU_LONGITUD,   // Ej: -74.0817
  },
  wazeLink: "https://waze.com/ul?ll=LAT,LNG&navigate=yes",
  googleMapsLink: "https://maps.google.com/?q=LAT,LNG",
}
```

**Cómo obtener coordenadas:**
1. Ve a Google Maps
2. Click derecho en el lugar → "¿Qué hay aquí?"
3. Copia los números que aparecen (latitud, longitud)

### 2. Personalizar el Programa del Día

Edita `lib/config.ts` líneas 72-95:

```typescript
events: [
  {
    time: "16:00",
    title: "Ceremonia",
    description: "La ceremonia comenzará puntualmente",
  },
  // Agrega, elimina o modifica eventos
]
```

### 3. Modificar FAQ

Edita `lib/config.ts` líneas 151-176 para agregar/modificar preguntas:

```typescript
questions: [
  {
    question: "Tu pregunta aquí",
    answer: "Tu respuesta aquí",
  },
]
```

### 4. Reemplazar Imágenes Placeholder

**Opción A: Usar tus propias fotos**
1. Coloca tus fotos en `public/placeholders/`
2. Nombra según el tipo:
   - `hero.jpg` (1920x1080 recomendado)
   - `story-1.jpg`, `story-2.jpg` (800x1000 y 800x600)
   - `gallery-1.jpg` a `gallery-6.jpg` (600x800)
   - `rsvp.jpg` (800x600)
   - `footer.jpg` (1200x300)

3. Actualiza las extensiones en `lib/config.ts` líneas 40-54:
```typescript
photos: {
  hero: "/placeholders/hero.jpg",  // cambia .svg a .jpg
  // ... etc
}
```

**Opción B: Mantener placeholders SVG**
Los SVG actuales son elegantes y te permiten lanzar rápido. Puedes reemplazarlos después.

### 5. Ajustar Textos

Todo el contenido está en `lib/config.ts`:

- **Hero** (líneas 56-59): Título y subtítulo
- **Historia** (líneas 61-65): Tu historia como pareja
- **Dress Code** (líneas 105-109): Indicaciones de vestimenta
- **Código de Conducta** (líneas 111-115): Mensaje sobre la celebración

## 🚀 Desplegar a Producción

### Opción 1: Vercel (Más Fácil)

1. Crea cuenta gratis en [vercel.com](https://vercel.com)
2. Conecta tu repositorio Git (GitHub, GitLab, Bitbucket)
3. Click "Deploy" - ¡Listo en 2 minutos!

### Opción 2: Netlify

1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta `wedding-2026` o conecta Git
3. Build command: `npm run build`
4. Publish directory: `.next`

## 🎨 Cambiar Colores (Opcional)

Si quieres ajustar los tonos de rosa, edita `app/globals.css` líneas 4-16:

```css
--dusty-rose: #d4a5a5;  /* Botones principales */
--rosewood: #8b5a5a;     /* Títulos */
--blush: #f9e9e9;        /* Fondos claros */
/* etc. */
```

## 📧 Conectar Formulario RSVP

Por ahora el formulario simula el envío. Para guardar respuestas reales:

**Opción A: Google Forms/Sheets**
1. Usa un servicio como [Formspree](https://formspree.io) o [getform.io](https://getform.io)
2. Modifica `components/forms/RSVPForm.tsx` línea 27

**Opción B: Email**
1. Usa [EmailJS](https://www.emailjs.com/)
2. Configurar en `components/forms/RSVPForm.tsx`

**Opción C: Base de datos**
1. Crea una API route en `app/api/rsvp/route.ts`
2. Conecta con Airtable, Notion, o tu base de datos preferida

## 🔍 Verificar Antes de Lanzar

- [ ] Cambiar información del venue (nombre, dirección, coordenadas)
- [ ] Revisar programa del día (horarios y eventos)
- [ ] Personalizar FAQ con tus preguntas
- [ ] Verificar fecha de la boda (14 de noviembre 2026)
- [ ] Probar formulario RSVP
- [ ] Reemplazar fotos placeholder (o dejarlas por ahora)
- [ ] Verificar que todos los links funcionen
- [ ] Probar en móvil, tablet y desktop

## 📱 Compartir tu Sitio

Una vez desplegado, comparte el link:

- En invitaciones físicas con QR code
- Por WhatsApp/Email
- En tus redes sociales
- Como enlace en tu bio de Instagram

## 🆘 Solución Rápida de Problemas

**El sitio no carga:**
```bash
cd wedding-2026
rm -rf .next
npm run dev
```

**Errores de TypeScript:**
```bash
npm run build
```
Esto te mostrará exactamente qué hay que corregir.

**Cambios no se ven:**
- Refresca con Cmd/Ctrl + Shift + R (hard refresh)
- O para el servidor (Ctrl+C) y reinicia con `npm run dev`

## 📞 Próximos Pasos Recomendados

1. **Ahora:** Personaliza textos y datos del venue
2. **Esta semana:** Reemplaza fotos placeholder con tus fotos
3. **Antes de lanzar:** Conecta el formulario RSVP a un servicio
4. **Al lanzar:** Despliega a Vercel/Netlify
5. **Post-lanzamiento:** Monitorea confirmaciones

---

**¡Tu landing page está lista para personalizar y lanzar!** 💕

Si tienes dudas sobre algún paso específico, revisa el README.md principal para información más detallada.

**Carol & Juan Fernando - 14 de Noviembre, 2026** 🎉

