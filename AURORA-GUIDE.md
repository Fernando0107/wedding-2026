# ✨ Efecto Aurora - Implementación

## 🎨 ¿Qué es el Efecto Aurora?

El efecto Aurora es un fondo animado con gradientes suaves que se mueven lentamente, creando una atmósfera mágica y romántica similar a una aurora boreal, pero con los colores de tu paleta de boda.

## 🌟 Dónde se Usa

El efecto Aurora se ha implementado estratégicamente en **3 secciones clave**:

### 1. **Hero (Portada)**
- Fondo con aurora detrás de la imagen principal
- Crea profundidad y movimiento sutil
- Los gradientes rosados dan vida al inicio

### 2. **Nuestra Historia**
- Aurora suave detrás del texto y fotos
- Añade romanticismo a tu historia
- Movimiento casi imperceptible

### 3. **RSVP (Formulario)**
- Aurora delicada que no distrae
- Hace el formulario más atractivo
- Mantiene la elegancia

## 🎨 Colores Usados

El Aurora usa **exclusivamente** los colores de tu paleta:

```css
- Blush (#f9e9e9) - 30% opacidad
- Vintage Pink (#f5d9d9) - 30% opacidad  
- Dusty Blush (#f7e5e5) - 30% opacidad
```

**Resultado:** Movimiento sutil y romántico sin saturar visualmente.

## ⚙️ Características Técnicas

### Animaciones Suaves
- **3 blobs animados** que se mueven lentamente
- Velocidades diferentes: 20s, 25s, 30s
- Movimientos orgánicos y naturales
- Efecto `blur` para suavidad

### Performance Optimizado
- ✅ GPU-accelerated (usa `transform`)
- ✅ Bajo consumo de recursos
- ✅ No afecta la velocidad de carga
- ✅ Respeta `prefers-reduced-motion`

### Accesibilidad
```css
@media (prefers-reduced-motion: reduce) {
  /* Las animaciones se desactivan automáticamente */
}
```

## 🎛️ Personalización

### Ajustar Intensidad

Edita `components/animations/Aurora.tsx` línea 15:

```tsx
// Más sutil
className="absolute inset-0 opacity-40"

// Actual (balanceado)
className="absolute inset-0 opacity-60"

// Más intenso
className="absolute inset-0 opacity-80"
```

### Cambiar Velocidad

Edita `app/globals.css` líneas con `@keyframes`:

```css
/* Más lento (más sutil) */
.animate-aurora-1 {
  animation: aurora-1 30s ease-in-out infinite;
}

/* Más rápido (más dinámico) */
.animate-aurora-1 {
  animation: aurora-1 15s ease-in-out infinite;
}
```

### Agregar a Más Secciones

Puedes agregar Aurora a cualquier sección:

```tsx
import Aurora from "@/components/animations/Aurora";

<Section id="tu-seccion">
  <Aurora>
    <Container>
      {/* Tu contenido aquí */}
    </Container>
  </Aurora>
</Section>
```

**Recomendación:** Úsalo con moderación (2-4 secciones máximo) para mantener el impacto visual.

## 🎯 Secciones Recomendadas

✅ **Ya implementado:**
- Hero (inicio)
- Story (historia)
- RSVP (formulario)

💡 **Opciones adicionales:**
- Gallery (galería)
- Countdown (cuenta regresiva)
- Footer (cierre)

❌ **No recomendado:**
- FAQ (puede distraer de la lectura)
- Program (información debe ser clara)
- Directions (mapa necesita contraste)

## 🔧 Problemas Comunes

### El efecto no se ve
1. Verifica que tengas `overflow-hidden` en el Section
2. Confirma que los colores CSS estén definidos
3. Refresca con Cmd/Ctrl + Shift + R

### Se ve muy intenso
- Reduce la opacidad en Aurora.tsx (línea 15)
- O reduce la opacidad de los blobs (líneas 26-28)

### Las animaciones se detienen
- Revisa que no tengas `prefers-reduced-motion` activo
- Verifica que no haya errores en la consola

## 💡 Tips de Diseño

1. **Menos es más:** El efecto es sutil por diseño
2. **Colores coherentes:** Usa solo colores de tu paleta
3. **Balance visual:** No lo uses en todas las secciones
4. **Test en móvil:** Verifica que se vea bien en todos los dispositivos

## 🚀 Resultado

El efecto Aurora agrega:
- ✨ **Magia visual** sin ser invasivo
- 💕 **Romanticismo** con movimiento sutil
- 🎨 **Profundidad** a las secciones planas
- ⚡ **Modernidad** manteniendo elegancia

---

**El Aurora está configurado para verse perfecto en tu boda. ¡Disfrútalo!** ✨💗

