import pool from '../../config/database.js';
import { toSeedIntervalObservation } from './seedIntervalObservation.model.js';

async function insertBatch(observations) {
  if (!observations.length) return [];

  const cols = [
    'session_id', 'tractor_id', 'sensor_id', 'edge_device_id',
    'row_number', 'edge_record_id', 'interval_start_at', 'interval_end_at',
    'interval_ms', 'seed_count', 'confidence', 'sensor_status',
  ];

  const placeholders = observations.map((_, i) =>
    `(${cols.map((_, j) => `$${i * cols.length + j + 1}`).join(', ')})`
  ).join(', ');

  const values = observations.flatMap(o => cols.map(c => o[c]));

  const { rows } = await pool.query(
    `INSERT INTO telemetry.seed_interval_observations (${cols.join(', ')})
     VALUES ${placeholders}
     ON CONFLICT DO NOTHING
     RETURNING *`,
    values
  );
  return rows.map(toSeedIntervalObservation);
}

async function findTimeline(sessionId, bucketMs = 60_000) {
  const { rows } = await pool.query(
    `SELECT
       date_bin($2::interval, interval_start_at, '2000-01-01'::timestamptz) AS bucket,
       sum(seed_count)::int                                                  AS total_seeds,
       count(*)::int                                                         AS observation_count
     FROM telemetry.seed_interval_observations
     WHERE session_id = $1
     GROUP BY bucket
     ORDER BY bucket`,
    [sessionId, `${bucketMs} milliseconds`]
  );
  return rows;
}

async function findRowSummary(sessionId) {
  const { rows } = await pool.query(
    `WITH stats AS (
       SELECT
         row_number,
         count(*)                                                            AS total_observations,
         sum(seed_count)::int                                                AS total_seeds,
         avg(interval_ms)::numeric(10,2)                                     AS avg_interval_ms,
         (sum(CASE WHEN seed_count = 0 THEN 1 ELSE 0 END)::float
           / count(*))::numeric(5,4)                                         AS dropout_rate
       FROM telemetry.seed_interval_observations
       WHERE session_id = $1
       GROUP BY row_number
     ),
     session_avg AS (
       SELECT avg(interval_ms) AS session_avg_ms
       FROM telemetry.seed_interval_observations
       WHERE session_id = $1
     )
     SELECT
       s.row_number,
       s.total_observations,
       s.total_seeds,
       s.avg_interval_ms,
       s.dropout_rate,
       s.dropout_rate > 0.30                        AS dropout_flag,
       s.avg_interval_ms > (sa.session_avg_ms * 2)  AS jam_flag
     FROM stats s
     CROSS JOIN session_avg sa
     ORDER BY s.row_number`,
    [sessionId]
  );
  return rows;
}

async function findHeatmap(sessionId) {
  const { rows } = await pool.query(
    `SELECT
       sio.observation_id,
       sio.row_number,
       sio.interval_start_at,
       sio.seed_count,
       sio.interval_ms,
       sio.sensor_status,
       gps.latitude,
       gps.longitude
     FROM telemetry.seed_interval_observations sio
     CROSS JOIN LATERAL (
       SELECT latitude, longitude
       FROM telemetry.gps_telemetry_observations
       WHERE session_id = sio.session_id
       ORDER BY abs(extract(epoch from (recorded_at - sio.interval_start_at)))
       LIMIT 1
     ) gps
     WHERE sio.session_id = $1`,
    [sessionId]
  );
  return rows;
}

export { insertBatch, findTimeline, findRowSummary, findHeatmap };
