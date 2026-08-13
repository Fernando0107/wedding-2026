"use client";

import { useMemo, useSyncExternalStore } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapEmbedProps {
  lat: number;
  lng: number;
  name: string;
}

export default function MapEmbed({ lat, lng, name }: MapEmbedProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const venueMarker = useMemo(
    () =>
      L.divIcon({
        className: "",
        html: '<div style="width:14px;height:14px;background:#8b5a5a;border:2.5px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      }),
    []
  );

  if (!mounted) return null;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
      />
      <Marker position={[lat, lng]} icon={venueMarker} title={name} />
    </MapContainer>
  );
}
