const mysql = require("mysql");
require('dotenv').config();

let dbConnection;

const handleDisconnect = () => {
  dbConnection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD  
  });

  dbConnection.connect((err) => {
    if (err) {
      console.log(err);
      setTimeout(handleDisconnect, 2000);
    } else console.log("Connection sucessful");
  });

  dbConnection.on("error", (err) => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") handleDisconnect();
    else throw err;
  });
};

handleDisconnect();

module.exports = dbConnection;
