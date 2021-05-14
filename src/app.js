const express = require("express");
const subjects = require("./routes/subjects");

const app = express();
const port = process.env.PORT || 5000;

app.use("/",subjects);

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})