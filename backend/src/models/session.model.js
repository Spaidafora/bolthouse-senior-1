function toSession(row) {
  return {
    sessionId: row.session_id,
    tractorId: row.tractor_id,
    operatorId: row.operator_id,
    fieldId: row.field_id,
    startedAt: row.started_at,
    endedAt: row.ended_at,
    cropType: row.crop_type,
    seedVariety: row.seed_variety,
    notes: row.notes,
  };
}

export { toSession };
