import pool from '../../config/database.js';
import { toSession } from './session.model.js';

async function findById(sessionId) {
  const { rows } = await pool.query(
    'SELECT * FROM sessions WHERE session_id = $1',
    [sessionId]
  );
  return rows[0] ? toSession(rows[0]) : null;
}

async function findAll({ tractorId, fieldId, date } = {}) {
  let query = 'SELECT * FROM sessions WHERE 1=1';
  const values = [];

  if (tractorId) {
    values.push(tractorId);
    query += ` AND tractor_id = $${values.length}`;
  }
  if (fieldId) {
    values.push(fieldId);
    query += ` AND field_id = $${values.length}`;
  }
  if (date) {
    values.push(date);
    query += ` AND DATE(started_at) = $${values.length}`;
  }

  query += ' ORDER BY started_at DESC';

  const { rows } = await pool.query(query, values);
  return rows.map(toSession);
}

export { findById, findAll };
