# Design: Embedded Maps in Directions Section

**Date:** 2026-06-16
**Branch:** feat/maps

## Summary

Add an embedded interactive map to each venue card in the "Cómo Llegar" section, showing a single pin at the venue location. One map per venue (iglesia + hotel), embedded inline within the existing card layout.

## Dependencies

Install via npm:
- `react-leaflet`
- `leaflet`
- `@types/leaflet`

## New Component: `components/ui/MapEmbed.tsx`

A reusable client component that renders a Leaflet map with a single venue marker.

**Props:**
```ts
interface MapEmbedProps {
  lat: number;
  lng: number;
  name: string;
}
```

**Tile layer:** CartoDB Positron (`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`) — light gray, minimal, clean aesthetic that complements the wedding palette.

**Marker:** Custom `divIcon` — a small circle in rosewood (`#8b5a5a`) with a white border and subtle shadow. No default Leaflet marker (avoids webpack icon path issues).

**Interaction constraints:**
- Scroll-wheel zoom: disabled — prevents accidental zoom when scrolling the page
- Dragging on touch: disabled — prevents map from hijacking page scroll on mobile
- Double-click zoom: disabled — keeps map static for casual viewers
- Zoom controls: visible (top-left), allows intentional zoom
- Initial zoom: 15

**Dimensions & styling:**
- Height: `h-44` on mobile, `h-48` on md+ — slightly shorter on small screens
- Width: `w-full`
- Border radius: `rounded-xl overflow-hidden` to match card style
- No border

**SSR:** The component file uses `"use client"` and is imported in `Directions.tsx` via `next/dynamic` with `{ ssr: false }` to prevent server-side render errors from Leaflet's `window` dependency.

**Leaflet CSS:** Imported inside the component file via `import "leaflet/dist/leaflet.css"`.

## Changes to `components/sections/Directions.tsx`

- Import `MapEmbed` using `next/dynamic` with `ssr: false`
- In the ceremony card: add `<MapEmbed>` below the city line (`siteConfig.wedding.ceremony.city`), above the nav buttons div, wrapped in `<div className="mb-6 rounded-xl overflow-hidden">`
- In the reception card: same placement using reception coordinates
- Pass `siteConfig.wedding.ceremony.coordinates.lat`, `.lng`, and `siteConfig.wedding.ceremony.name` as props (same pattern for reception)

## Mobile Considerations

- Map height reduced on mobile (`h-44`) to leave more room for text content
- Touch dragging disabled — user can still zoom with pinch-to-zoom if needed
- Scroll-wheel zoom disabled — no scroll hijack on desktop either
- Full-width map fits naturally inside the existing card padding

## No Config Changes

`lib/config.ts` already contains `coordinates: { lat, lng }` for both ceremony and reception venues. No additions needed.
