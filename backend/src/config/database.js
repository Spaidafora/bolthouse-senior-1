import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../../');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
dotenv.config({ path: path.join(root, env === 'production' ? '.env' : '.env.local') });

const pool = env === 'production'
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 20,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
      ssl: { rejectUnauthorized: false },
    })
  : new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || 'bolthouse_dev',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'Ilovelarry7!',
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 2_000,
    });

export default pool;
