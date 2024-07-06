const Pool = require("pg").Pool;
require('dotenv').config();
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "noirgamezone",
  password: "pranshu",
  port: 5432,
});

module.exports = pool;
