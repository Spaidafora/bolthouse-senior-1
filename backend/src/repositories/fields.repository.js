import pool from '../config/database.js';
import { toField } from '../models/field.model.js';

async function findById(fieldId) {
  const { rows } = await pool.query(
    'SELECT * FROM fields WHERE field_id = $1',
    [fieldId]
  );
  return rows[0] ? toField(rows[0]) : null;
}

async function findAll() {
  const { rows } = await pool.query('SELECT * FROM fields ORDER BY created_at DESC');
  return rows.map(toField);
}

export { findById, findAll };
