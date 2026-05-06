import pool from '../../config/database.js';
import { toGpsTelemetryObservation } from './gpsTelemetryObservation.model.js';

async function insertBatch(observations) {
  if (!observations.length) return [];

  const cols = [
    'session_id', 'tractor_id', 'edge_device_id', 'edge_record_id',
    'recorded_at', 'latitude', 'longitude', 'altitude_m',
    'ground_speed_mps', 'heading_deg', 'gps_accuracy_m',
    'fix_quality', 'satellite_count',
  ];

  const placeholders = observations.map((_, i) =>
    `(${cols.map((_, j) => `$${i * cols.length + j + 1}`).join(', ')})`
  ).join(', ');

  const values = observations.flatMap(o => cols.map(c => o[c]));

  const { rows } = await pool.query(
    `INSERT INTO telemetry.gps_telemetry_observations (${cols.join(', ')})
     VALUES ${placeholders}
     ON CONFLICT DO NOTHING
     RETURNING *`,
    values
  );
  return rows.map(toGpsTelemetryObservation);
}

async function findBySessionId(sessionId) {
  const { rows } = await pool.query(
    `SELECT * FROM telemetry.gps_telemetry_observations
     WHERE session_id = $1
     ORDER BY recorded_at`,
    [sessionId]
  );
  return rows.map(toGpsTelemetryObservation);
}

export { insertBatch, findBySessionId };
