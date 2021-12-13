const mysql = require("mysql");
require("dotenv").config();

// const dbPool = mysql.createPool({
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
// });

let dbPool;

const handleDisconnect = () => {
  dbPool = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  dbPool.connect((err) => {
    if (err) {
      console.log(err);
      setTimeout(handleDisconnect, 2000);
    } else console.log("Connection sucessful");
  });

  dbPool.on("error", (err) => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") handleDisconnect();
    else throw err;
  });
};

handleDisconnect();

module.exports = dbPool;
