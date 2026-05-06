function toField(row) {
  return {
    fieldId: row.field_id,
    name: row.name,
    boundary: row.boundary,
    acreage: row.acreage,
    centroid: row.centroid,
    cropRotationNotes: row.crop_rotation_notes,
    createdByUserId: row.created_by_user_id,
    createdAt: row.created_at,
  };
}

export { toField };
