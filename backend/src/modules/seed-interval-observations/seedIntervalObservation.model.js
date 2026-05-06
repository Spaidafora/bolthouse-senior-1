function toSeedIntervalObservation(row) {
  return {
    observationId: row.observation_id,
    sessionId: row.session_id,
    tractorId: row.tractor_id,
    sensorId: row.sensor_id,
    edgeDeviceId: row.edge_device_id,
    rowNumber: row.row_number,
    edgeRecordId: row.edge_record_id,
    intervalStartAt: row.interval_start_at,
    intervalEndAt: row.interval_end_at,
    intervalMs: row.interval_ms,
    seedCount: row.seed_count,
    confidence: row.confidence,
    sensorStatus: row.sensor_status,
    ingestedAt: row.ingested_at,
  };
}

export { toSeedIntervalObservation };
