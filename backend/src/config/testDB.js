import pool from './database.js';

async function testDBConnection(){
    try {
        const result = await pool.query( `
           SELECT table_name
        FROM information_schema.tables
        WHERE table_schema NOT IN ('pg_catalog', 'information_schema'); `)
        console.log("Connected to DB");
        console.table(result.rows);

    } catch (err){
        console.error("Failed to connect to DB");
        console.error(err.message);

    } finally {
       await pool.end();
    }
}

testDBConnection();





















