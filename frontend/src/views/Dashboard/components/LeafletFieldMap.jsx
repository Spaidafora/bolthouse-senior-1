import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletFieldMap({ session, fields }) {
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
      {
        minZoom: 0,
        maxZoom: 20,
        attribution: "",
      }
    );

    osm.addTo(map);

    L.control.layers({
      OpenStreetMap: osm,
      Satellite: satellite,
    }).addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !session || !fields) return;

    // remove old polygon/polyline layers before redrawing
    map.eachLayer((layer) => {
      if (layer instanceof L.Polygon || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    const field = fields.find((f) => f.fieldId === session.fieldId);
    if (!field) return;

    const polygon = L.polygon(field.boundary, {
      opacity: 0.8,
      fillOpacity: 0.3,
    }).addTo(map);

    const plantingLine = L.polyline(session.telemetry, {
      color: "green",
      opacity: 1,
      weight: 3.5,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);

    const group = L.featureGroup([polygon, plantingLine]);
    map.fitBounds(group.getBounds(), { padding: [20, 20] });
  }, [session, fields]);

  if (!session) {
    return (
      <div className="h-[520px] w-full rounded-xl border bg-gray-100 flex items-center justify-center">
        No session selected
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="mb-3 text-lg font-semibold text-gray-800">
        {fields?.find((f) => f.fieldId === session.fieldId)?.name || "Field Map"}
      </h3>
      <div
        ref={mapRef}
        className="h-[520px] w-full rounded-xl border shadow-sm overflow-hidden"
      />
    </div>
  );
}