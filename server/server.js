const express = require("express");
// const expressValidator = require('express-validator');
const expressFlash = require("express-flash");
const expressSession = require("express-session");

const mysql = require("mysql");
const app = express();

// configure
app.use(
  expressSession({
    secret: "secret_key",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
app.use(expressFlash());
// app.use(expressValidator());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "webclient",
  password: "123456",
  database: "restaurant1_db",
});
connection.connect(function (err) {
  console.log("{RNLog} TCL --> errr:");
  // err ? console.log(err) : console.log("connection===", connection);
});
connection.on("error", function (err) {
  console.log("db error", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    // Connection to the MySQL server is usually
    // handleDisconnect(); // lost due to either server restart, or a
  } else {
    // connnection idle timeout (the wait_timeout
    throw err; // server variable configures this)
  }
});

connection.on("connection", (stream) => {
  console.log("connected");
});

// products control
app.get("/api/get_products", (req, res) => {
  let sql = "SELECT * FROM `products` WHERE 1";
  // if (req.query.filter && req.query.filter !== "undefined") {
  //   sql = `SELECT * FROM danh_muc_hang WHERE ma_loai_hang = "${req.query.filter}";`;
  // }
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

app.listen(4000, () => console.log("App listening on port 4000"));
// export default app;
