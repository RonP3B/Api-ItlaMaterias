const mysql = require("mysql");

const dbConnection = mysql.createConnection({
    host: "ba8a9dodjjx67zfavtzj-mysql.services.clever-cloud.com",
    database: "ba8a9dodjjx67zfavtzj",
    user: "ux4r1oaqqo5hz52q",
    password: "6ZNJnQ7CPy4EoMXbSdzO"
});

dbConnection.connect((err) => {
    if (err) throw err
    else console.log("Connection sucessful")
});

module.exports = dbConnection;