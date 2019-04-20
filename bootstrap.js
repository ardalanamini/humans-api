const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();

const app = express();

app.use(cors(), helmet());

app.use(routes);

module.exports = app;
