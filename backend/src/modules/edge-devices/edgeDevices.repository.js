import pool from '../config/database.js';
import { toEdgeDevice } from '../models/edgeDevice.model.js';

async function findById(edgeDeviceId) {
  const { rows } = await pool.query(
    'SELECT * FROM edge_devices WHERE edge_device_id = $1',
    [edgeDeviceId]
  );
  return rows[0] ? toEdgeDevice(rows[0]) : null;
}

async function findByTractorId(tractorId) {
  const { rows } = await pool.query(
    'SELECT * FROM edge_devices WHERE tractor_id = $1 ORDER BY created_at DESC',
    [tractorId]
  );
  return rows.map(toEdgeDevice);
}

export { findById, findByTractorId };
