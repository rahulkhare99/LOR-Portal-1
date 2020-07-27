const express = require("express");
const app = express();
let cors = require("cors");
require("./database/db")();
require("./startup/routes")(app);

app.use(cors());
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});

module.exports = server;
