import pool from '../../config/database.js';
import { toTractor } from './tractor.model.js';

async function findById(tractorId) {
  const { rows } = await pool.query(
    'SELECT * FROM tractors WHERE tractor_id = $1',
    [tractorId]
  );
  return rows[0] ? toTractor(rows[0]) : null;
}

async function findAll() {
  const { rows } = await pool.query('SELECT * FROM tractors ORDER BY created_at DESC');
  return rows.map(toTractor);
}

export { findById, findAll };
