const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

// DB
// mongoose.connect("mongodb://localhost:auth/auth");
mongoose.connect("mongodb://localhost:27017/mylib");

// App
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server
const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);

console.log("Server listening on:", port);
