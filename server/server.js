require("rootpath")();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const errorHandler = require("_middleware/error-handler");
const upload = multer();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(upload.array());

// api routes
app.use("/api/users", require("./users/user.controller"));

//global error handler;
app.use(errorHandler);

// start server;

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;

app.listen(port, () => console.log("Server listening on port " + port));
