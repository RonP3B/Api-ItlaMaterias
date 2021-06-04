const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const subjects = require("./routes/subjects");

const app = express();
const port = process.env.PORT || 5000;

app.set("port", port);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use("/carreras", subjects);

app.listen(port, () => console.log(`Server running on port ${port}...`));
