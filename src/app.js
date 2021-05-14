const express = require("express");
const serverless = require("serverless-http")
const subjects = require("./routes/subjects");

const app = express();

app.use("/.netlify/functions/app",subjects);

module.exports.handler = serverless(app);