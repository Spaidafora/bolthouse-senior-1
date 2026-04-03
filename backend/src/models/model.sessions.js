import pool from '../config/database.js';


async function fetchSessions({tractorId, fieldId, date}){
    let query = `SELECT * FROM sessions WHERE 1=1`;
    const values= [];

    if (tractorId){
        values.push(tractorId);
        query += ` AND tractor_id = $${values.length}`;
    }

    if (fieldId){
        values.push(fieldId);
        query += ` AND field_id = $${values.length}`;
    }

    if (date){
        values.push(date);
        query += ` AND DATE(created_at) = $${values.length}`;
    }

    query += ` ORDER BY created_at DESC`;

    const result = await pool.query(query, values);
    return result.rows;

}


async function fetchSessionsbyId(sessionId){
    let query = `SELECT * FROM sessions WHERE session_id= $1`;
    const values = [sessionId];
    const result = await pool.query(query, values);
    return result.rows[0];

}

export {fetchSessions, fetchSessionsbyId}
