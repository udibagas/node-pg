const { Pool } = require("pg"); // common js module syntax

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost", // local hostname
  // host: "127.0.0.1", // local ip address
  port: 5432, // default postgres port
  database: "tokoku", // database name
  idleTimeoutMillis: 100,
});

module.exports = pool;
