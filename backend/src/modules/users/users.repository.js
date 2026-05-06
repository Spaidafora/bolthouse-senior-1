import pool from '../../config/database.js';
import { toUser } from './user.model.js';

async function findById(userId) {
  const { rows } = await pool.query(
    'SELECT * FROM profiles WHERE user_id = $1',
    [userId]
  );
  return rows[0] ? toUser(rows[0]) : null;
}

async function findByEmail(email) {
  const { rows } = await pool.query(
    'SELECT * FROM profiles WHERE email = $1',
    [email]
  );
  return rows[0] ? toUser(rows[0]) : null;
}

export { findById, findByEmail };
