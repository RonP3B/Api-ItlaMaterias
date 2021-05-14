const express = require("express");
const subjects = require("./routes/subjects");

const app = express();
const port = "itla-materias.netlify.app";

app.use("/",subjects);

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})