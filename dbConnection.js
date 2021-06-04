const mysql = require("mysql");

let dbConnection;

const handleDisconnect = () => {
  dbConnection = mysql.createConnection({
    host: "ba8a9dodjjx67zfavtzj-mysql.services.clever-cloud.com",
    database: "ba8a9dodjjx67zfavtzj",
    user: "ux4r1oaqqo5hz52q",
    password: "6ZNJnQ7CPy4EoMXbSdzO",
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
