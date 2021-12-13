const mysql = require("mysql");
require("dotenv").config();

const dbPool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

module.exports = dbPool;
