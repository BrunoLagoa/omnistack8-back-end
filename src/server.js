const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://omnistack8:omnistack8@cluster0-22wpj.mongodb.net/omnistack8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(express.json());
server.use(routes);

server.listen(3333);
