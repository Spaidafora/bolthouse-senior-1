import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function SessionLeafletMap({ path = [], boundary = null }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView([35.4135, -119.35], 14);
    mapInstanceRef.current = map;

    const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "",
    });

    const satellite = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg",
      { minZoom: 0, maxZoom: 20, attribution: "" }
    );

    osm.addTo(map);
    L.control.layers({ OpenStreetMap: osm, Satellite: satellite }).addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    map.eachLayer((layer) => {
      if (layer instanceof L.Polygon || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    const layers = [];

    if (boundary) {
      layers.push(
        L.polygon(boundary, { opacity: 0.8, fillOpacity: 0.3 }).addTo(map)
      );
    }

    if (path.length > 0) {
      layers.push(
        L.polyline(path, {
          color: "green",
          opacity: 1,
          weight: 3.5,
          lineCap: "round",
          lineJoin: "round",
        }).addTo(map)
      );
    }

    if (layers.length > 0) {
      map.fitBounds(L.featureGroup(layers).getBounds(), { padding: [20, 20] });
    }
  }, [path, boundary]);

  return (
    <div
      ref={mapRef}
      className="h-[520px] w-full rounded-xl border shadow-sm overflow-hidden"
    />
  );
}
