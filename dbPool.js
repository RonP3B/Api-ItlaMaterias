const mysql = require("mysql2");
require("dotenv").config();

const dbPool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: 3306,
});

module.exports = dbPool;
