const { Pool } = require('pg');

// Create a new pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',       // Correct property name
  host: 'localhost',      // Correct property name
  database: 'postgres',
  password: 'Alagu',
  port: 5432,
});

// Connect to the pool and handle errors
pool.connect((err, client, release) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
   
  }
});

