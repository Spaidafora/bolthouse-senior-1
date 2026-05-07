function parseGeoJsonPolygon(geojsonStr) {
  if (!geojsonStr) return null;
  const geojson = JSON.parse(geojsonStr);
  // GeoJSON polygon: coordinates[0] is outer ring as [[lng, lat], ...]
  // Leaflet expects [[lat, lng], ...]
  return geojson.coordinates[0].map(([lng, lat]) => [lat, lng]);
}

function toField(row) {
  return {
    fieldId: row.field_id,
    name: row.name,
    boundary: parseGeoJsonPolygon(row.boundary),
    acreage: row.acreage,
    centroid: row.centroid ? JSON.parse(row.centroid) : null,
    cropRotationNotes: row.crop_rotation_notes,
    createdByUserId: row.created_by_user_id,
    createdAt: row.created_at,
  };
}

export { toField };
