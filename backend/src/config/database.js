// https://oneuptime.com/blog/post/2026-01-30-nodejs-connection-pooling/view
import { Pool } from "pg";


const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'bolthouse_dev',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',


  max: 10,                    
  idleTimeoutMillis: 30000,  
  connectionTimeoutMillis: 2000, 
});

export default pool;