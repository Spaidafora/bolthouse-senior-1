// https://oneuptime.com/blog/post/2026-01-30-nodejs-connection-pooling/view

const { Pool } = require('pg');

// Basic pool configuration
// This creates a pool with default settings suitable for development
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',

  // Pool-specific settings
  max: 10,                    // Maximum connections in the pool
  idleTimeoutMillis: 30000,   // Close idle connections after 30 seconds
  connectionTimeoutMillis: 2000, // Fail fast if connection takes > 2 seconds
});

module.exports = pool;