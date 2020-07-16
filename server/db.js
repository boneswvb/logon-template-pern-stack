const Pool = require("pg").Pool;

const pool = new Pool ({
  user: "postgres",
  password: "Wwim1234",
  host: "localhost",
  port: 5432,
  database: "logon"
});

module.exports = pool;