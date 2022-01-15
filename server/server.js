const express = require("express");
// const expressValidator = require('express-validator');
const expressFlash = require("express-flash");
const expressSession = require("express-session");
const cors = require("cors");

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

app.use(cors());
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
  let sortType = req.query["sort_type"];
  let sortName = req.query["sort_name"];

  let sql = "SELECT * FROM `products` WHERE ";

  // Lọc sản phẩm theo Loại sản phẩm
  let filterBaseonCondition = (type) => {
    if (type) {
      return `product_type_id = "${type}"`;
    }
    return "1";
  };

  // phân trang

  let productType = req.query["product_type_id"];

  // Thêm điều kiện lọc sản phẩm theo Loại sản phẩm.
  sql += filterBaseonCondition(productType);

  /**
   * Sắp xếp theo các điều kiện:
   * theo sản phẩm bán chạy: undefined;
   * theo bảng chữ cái: name
   * theo giá: price
   *  theo mới nhất: created_at
   * @param {'name' | 'price' | 'created_at' | undefined} sortName 'name' | 'price' | 'created_at';
   * @param {'asc' | 'desc' | undefined} sortingType asc | desc | undefined;
   */
  let sortBaseonCondition = (sortName, sortingType) => {
    switch (sortName) {
      case "name":
        return `\nORDER BY product_name ${sortingType === "asc" ? "" : "DESC"}`;
      case "price":
        return `\nORDER BY price ${sortingType === "asc" ? "" : "DESC"}`;
      default:
        return null;
    }
  };

  // Sắp xếp theo điều các điều kiện;
  let sortSqlQuery = sortBaseonCondition(sortName, sortType);
  if (sortSqlQuery) {
    sql += sortSqlQuery;
  }

  // Phân trang sản phẩm.
  let pageNumber = req.query["page"] ?? 1;
  let numberPerPage = req.query["per_page"] ?? 10;
  sql += `\nLIMIT ${numberPerPage} OFFSET ${(pageNumber - 1) * numberPerPage}`;
  console.log("{RNLog} TCL --> sql:", sql);

  console.log("{RNLog} TCL --> query:", req.query, req.params);

  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

app.get("/api/get_product_type", (req, res) => {
  let sql = "SELECT * FROM `product_type`";

  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results, req: req.params });
  });
});

app.listen(4000, () => console.log("App listening on port 4000"));
// export default app;
