import pool from '../../config/database.js';
import { toSensor } from './sensor.model.js';

async function findById(sensorId) {
  const { rows } = await pool.query(
    'SELECT * FROM sensors WHERE sensor_id = $1',
    [sensorId]
  );
  return rows[0] ? toSensor(rows[0]) : null;
}

async function findByTractorId(tractorId) {
  const { rows } = await pool.query(
    'SELECT * FROM sensors WHERE tractor_id = $1 ORDER BY row_number',
    [tractorId]
  );
  return rows.map(toSensor);
}

export { findById, findByTractorId };
