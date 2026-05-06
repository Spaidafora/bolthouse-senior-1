function toGpsTelemetryObservation(row) {
  return {
    gpsObservationId: row.gps_observation_id,
    sessionId: row.session_id,
    tractorId: row.tractor_id,
    edgeDeviceId: row.edge_device_id,
    edgeRecordId: row.edge_record_id,
    recordedAt: row.recorded_at,
    latitude: row.latitude,
    longitude: row.longitude,
    altitudeM: row.altitude_m,
    groundSpeedMps: row.ground_speed_mps,
    headingDeg: row.heading_deg,
    gpsAccuracyM: row.gps_accuracy_m,
    fixQuality: row.fix_quality,
    satelliteCount: row.satellite_count,
    location: row.location,
    ingestedAt: row.ingested_at,
  };
}

export { toGpsTelemetryObservation };
