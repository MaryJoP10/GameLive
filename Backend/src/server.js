const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { port } = require("./config");

//Inicializacion
const server = express();

//Settings
server.set("port", port);

//Middlewares
server.use(cors())
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//rutas
server.use(require("./routes/auth.js"));

server.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});

module.exports = server;
