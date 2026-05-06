import pool from '../../config/database.js';
import { toSession } from './session.model.js';

function toSessionSummary(row) {
  return {
    ...toSession(row),
    fieldName: row.field_name,
    tractorName: row.tractor_name,
    operatorName: row.operator_name,
    durationSeconds: Number(row.duration_seconds),
    totalSeeds: Number(row.total_seeds),
    status: row.status,
  };
}

const DETAIL_QUERY = `
  SELECT
    s.*,
    f.name AS field_name,
    t.name AS tractor_name,
    o.name AS operator_name,
    EXTRACT(EPOCH FROM (COALESCE(s.ended_at, NOW()) - s.started_at))::int AS duration_seconds,
    COALESCE(sc.total_seeds, 0) AS total_seeds,
    CASE WHEN s.ended_at IS NULL THEN 'Live' ELSE 'Completed' END AS status
  FROM sessions s
  LEFT JOIN fields    f  ON f.field_id    = s.field_id
  LEFT JOIN tractors  t  ON t.tractor_id  = s.tractor_id
  LEFT JOIN operators o  ON o.operator_id = s.operator_id
  LEFT JOIN (
    SELECT session_id, SUM(seed_count)::int AS total_seeds
    FROM telemetry.seed_interval_observations
    GROUP BY session_id
  ) sc ON sc.session_id = s.session_id
`;

async function findById(sessionId) {
  const { rows } = await pool.query(
    'SELECT * FROM sessions WHERE session_id = $1',
    [sessionId]
  );
  return rows[0] ? toSession(rows[0]) : null;
}

async function findAllWithDetails({ tractorId, fieldId, date, status } = {}) {
  let query = DETAIL_QUERY + ' WHERE 1=1';
  const values = [];

  if (tractorId) {
    values.push(tractorId);
    query += ` AND s.tractor_id = $${values.length}`;
  }
  if (fieldId) {
    values.push(fieldId);
    query += ` AND s.field_id = $${values.length}`;
  }
  if (date) {
    values.push(date);
    query += ` AND DATE(s.started_at) = $${values.length}`;
  }
  if (status === 'active') {
    query += ' AND s.ended_at IS NULL';
  }

  query += ' ORDER BY s.started_at DESC';

  const { rows } = await pool.query(query, values);
  return rows.map(toSessionSummary);
}

async function findActive() {
  const query = DETAIL_QUERY + ' WHERE s.ended_at IS NULL ORDER BY s.started_at DESC LIMIT 1';
  const { rows } = await pool.query(query);
  return rows[0] ? toSessionSummary(rows[0]) : null;
}

export { findById, findAllWithDetails, findActive };
