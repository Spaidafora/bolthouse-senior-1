import pool from '../../config/database.js';
import { toOperator } from './operator.model.js';

async function findById(operatorId) {
  const { rows } = await pool.query(
    'SELECT * FROM operators WHERE operator_id = $1',
    [operatorId]
  );
  return rows[0] ? toOperator(rows[0]) : null;
}

async function findAll() {
  const { rows } = await pool.query('SELECT * FROM operators ORDER BY created_at DESC');
  return rows.map(toOperator);
}

export { findById, findAll };
