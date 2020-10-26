const { Pool } = require('pg')

module.exports = new Pool({
  user: 'postgres',
  password: "yuri",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
})