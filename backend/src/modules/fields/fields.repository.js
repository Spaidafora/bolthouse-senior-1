import pool from '../../config/database.js';
import { toField } from './field.model.js';

const FIELD_COLS = `
  field_id, name, acreage, crop_rotation_notes, created_by_user_id, created_at,
  ST_AsGeoJSON(boundary) AS boundary,
  ST_AsGeoJSON(centroid) AS centroid
`;

async function findById(fieldId) {
  const { rows } = await pool.query(
    `SELECT ${FIELD_COLS} FROM fields WHERE field_id = $1`,
    [fieldId]
  );
  return rows[0] ? toField(rows[0]) : null;
}

async function findAll() {
  const { rows } = await pool.query(`SELECT ${FIELD_COLS} FROM fields ORDER BY created_at DESC`);
  return rows.map(toField);
}

export { findById, findAll };
