# Sistema RSVP - Guía de Uso

## ✅ Implementación Completada

El sistema de RSVP está completamente implementado con Upstash Redis y validación por familias mediante JSON.

## 📁 Archivos Creados

1. **`data/families.json`** - JSON con las familias e invitados (lo llenas tú manualmente)
2. **`lib/families.ts`** - Funciones para leer y validar familias desde JSON
3. **`lib/redis.ts`** - Cliente Redis inicializado
4. **`app/api/rsvp/route.ts`** - API para guardar y obtener RSVPs
5. **`app/api/rsvp/admin/route.ts`** - API para panel de administración
6. **`app/admin/page.tsx`** - Página de administración
7. **`app/not-found/page.tsx`** - Página 404 para familias no encontradas
8. **`types/index.ts`** - Tipos TypeScript actualizados
9. **`components/forms/RSVPForm.tsx`** - Formulario con validación por familia
10. **`components/sections/RSVP.tsx`** - Sección RSVP actualizada

## 🎯 Cómo Funciona

### 1. Configurar Familias (TÚ)

Edita `data/families.json` con todas las familias e invitados:

```json
{
  "gonzalez": {
    "guests": ["Juan Fer", "Alice", "Carol"]
  },
  "castillo": {
    "guests": ["María Castillo", "Pedro Castillo"]
  }
}
```

**Importante:**
- La key (ej: `"gonzalez"`) es lo que usarás en el query parameter
- `guests` es un array con los nombres de todos los invitados de esa familia

### 2. Enviar Invitaciones

Crea enlaces de invitación con el query parameter `fam`:

```
https://tu-sitio.com/#rsvp?fam=gonzalez
https://tu-sitio.com/#rsvp?fam=castillo
```

### 3. Para los Invitados

1. El invitado hace clic en el enlace con `?fam=gonzalez`
2. El sistema:
   - Valida que la familia existe en el JSON
   - Si no existe, redirige a `/not-found`
   - Si existe, muestra el formulario con los invitados de esa familia
3. El invitado:
   - Llena sus datos (nombre, email)
   - Selecciona si asistirá o no
   - Si confirma, selecciona qué invitados asistirán (checkboxes)
   - Envía el formulario
4. El sistema guarda en Redis:
   - `familyKey`: "gonzalez"
   - `status`: "confirmed" | "declined" | "maybe"
   - `confirmedGuests`: ["Juan Fer", "Alice"] (solo si confirma)
   - `email`, `representative`, `allergies`, `message`, etc.

### 4. Para el Administrador

1. Ve a `/admin` en tu sitio
2. Ingresa la contraseña (por defecto: `wedding2026`)
3. Verás:
   - Estadísticas generales (total, confirmados, etc.)
   - Lista completa de todos los RSVPs
   - Para cada familia, verás:
     - Todos los invitados (del JSON)
     - Quiénes confirmaron asistencia
     - Estado de la confirmación

## 🔐 Seguridad

**IMPORTANTE**: Cambia la contraseña del admin antes de desplegar a producción:

1. Edita `.env.local` y cambia `ADMIN_PASSWORD`
2. En producción, agrega esta variable en el dashboard de Vercel

## 📊 Estructura de Datos

### En `data/families.json` (TÚ LO LLENAS):
```json
{
  "family-key": {
    "guests": ["Nombre 1", "Nombre 2", ...]
  }
}
```

### En Redis (se guarda automáticamente):
```typescript
{
  familyKey: "gonzalez",
  status: "confirmed" | "declined" | "maybe" | "pending",
  confirmedGuests?: ["Juan Fer", "Alice"], // Solo si status = "confirmed"
  email: "juan@example.com",
  representative: "Juan Fer",
  allergies?: "Sin gluten",
  message?: "¡Nos vemos pronto!",
  submittedAt: "2026-01-26T10:00:00Z",
  updatedAt: "2026-01-26T10:00:00Z"
}
```

**Nota:** Los `guests` completos NO se guardan en Redis, vienen del JSON. Solo se guarda quiénes confirmaron asistencia.

## 🔧 Variables de Entorno

Asegúrate de tener estas variables en `.env.local`:

```
UPSTASH_REDIS_KV_REST_API_URL=...
UPSTASH_REDIS_KV_REST_API_TOKEN=...
ADMIN_PASSWORD=wedding2026
```

## 🧪 Probar el Sistema

1. **Llena el JSON con tus familias:**
   ```bash
   # Edita data/families.json
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Prueba el formulario:**
   - Ve a `http://localhost:3000/#rsvp?fam=gonzalez`
   - Deberías ver los invitados de esa familia
   - Llena el formulario y envía
   - Deberías ver un mensaje de éxito

4. **Prueba familia no encontrada:**
   - Ve a `http://localhost:3000/#rsvp?fam=inexistente`
   - Deberías ser redirigido a `/not-found`

5. **Prueba el panel admin:**
   - Ve a `http://localhost:3000/admin`
   - Ingresa la contraseña: `wedding2026`
   - Deberías ver tu confirmación en la lista

## 📝 Flujo Completo

1. **Tú llenas `data/families.json`** con todas las familias
2. **Creas enlaces de invitación** con `?fam=family-key`
3. **Envías los enlaces** a cada familia
4. **Cada familia confirma** usando su enlace único
5. **Tú revisas confirmaciones** en `/admin`

## ⚠️ Notas Importantes

- **El JSON es la fuente de verdad** para quiénes están invitados
- **Redis solo guarda el estado** de confirmación y quiénes asistirán
- **Si cambias el JSON**, necesitas hacer rebuild del proyecto
- **Los invitados confirmados** deben estar en la lista del JSON (validación automática)
- **Si una familia no existe** en el JSON, se redirige a 404

## 🎯 Ejemplo de Uso

1. Llenas `data/families.json`:
   ```json
   {
     "gonzalez": {
       "guests": ["Juan Fer", "Alice", "Carol"]
     }
   }
   ```

2. Creas el enlace: `https://tu-sitio.com/#rsvp?fam=gonzalez`

3. Juan Fer recibe el enlace y:
   - Ve el formulario con 3 invitados listados
   - Selecciona "Sí asistiré"
   - Marca checkboxes: "Juan Fer" y "Alice" (Carol no puede asistir)
   - Envía el formulario

4. En Redis se guarda:
   ```json
   {
     "familyKey": "gonzalez",
     "status": "confirmed",
     "confirmedGuests": ["Juan Fer", "Alice"],
     "email": "juan@example.com",
     ...
   }
   ```

5. En el admin ves:
   - Familia: Gonzalez
   - Invitados: Juan Fer, Alice, Carol (del JSON)
   - Confirmados: Juan Fer, Alice (de Redis)
   - Estado: Confirmado

## ❓ Problemas Comunes

**Error: "Familia no encontrada"**
- Verifica que la key en el JSON coincida exactamente con el query parameter
- Las keys son case-sensitive

**No se muestran los invitados**
- Verifica que `data/families.json` tenga la estructura correcta
- Reinicia el servidor después de cambiar el JSON

**No puedo acceder al admin**
- Verifica que `ADMIN_PASSWORD` esté en `.env.local`
- Reinicia el servidor después de cambiar variables de entorno

---

¡Listo! Tu sistema RSVP está funcionando con validación por familias. 🎉
