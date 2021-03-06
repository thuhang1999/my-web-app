const express = require("express");
// const expressValidator = require('express-validator');
const expressFlash = require("express-flash");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const cors = require("cors");

const mysql = require("mysql");
const app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

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
  console.log("{RNLog} TCL --> errr:", err);
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

/**
 * Lấy danh sách sản phẩm được xếp theo các tiêu chí,
 * lọc theo loại sản phẩm
 */
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

/**
 * Lấy danh sách sản phẩm theo từ khoá tìm kiếm
 */
app.get("/api/products/search", (req, res) => {
  let name = req.query["name"];

  let sql = `SELECT * FROM \`products\` WHERE product_name LIKE '%${name}%' ORDER BY product_name`;

  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results, req: req.params });
  });
});

/**
 * Lấy danh sách loại sản phẩm
 */
app.get("/api/get_product_type", (req, res) => {
  let sql = "SELECT * FROM `product_type`";

  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results, req: req.params });
  });
});

/**
 * Lấy danh sách khách hàng
 */
app.get("/api/users", (req, res) => {
  let sql = "SELECT * FROM `customers`";

  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

/**
 * Lấy danh sách thông tin liên hệ user đã nhập
 */
app.get("/api/contacts", (req, res) => {
  let sql = "SELECT * FROM `contact_data`";

  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

/**
 * Đăng kí tài khoản
 */
app.post("/api/user/sign_up", (req, res) => {
  console.log(req.body);
  let userName = req.body["user_name"];
  let userPhone = req.body["phone"];
  let userPassword = req.body["password"];
  let sql = `INSERT INTO customers (name, phone_number, password) VALUES ("${userName}", "${userPhone}", "${userPassword}")`;
  console.log(`{RNLog} ~ file: server.js ~ line 187 ~ app.post ~ sql`, sql);
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

/**
 * Cập nhật thông tin của người dùng
 */
app.post("/api/user/update_info/:cust_id", (req, res) => {
  let sql = "UPDATE customers\nSET";
  let customer_id = req.params.cust_id;
  /**
   * UPDATE Customers
      SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
      WHERE CustomerID = 1;
   */
  let userName = req.body["name"];
  let userPhone = req.body["phone"];
  let userAddress = req.body["address"];
  let password = req.body["password"];
  let rank = req.body["rank"];

  if (userName) {
    sql += ` name = "${userName}", `;
  }
  if (userPhone) {
    sql += ` phone = "${userPhone}", `;
  }
  if (userAddress) {
    sql += ` address = "${userAddress}", `;
  }

  if (password) {
    sql += ` password = "${password}", `;
  }
  if (rank) {
    sql += ` rank = "${rank}", `;
  }

  sql = sql.slice(0, sql.length - 2);

  sql += `\nWHERE customer_id = ${customer_id}`;
  console.log("{RNLog} TCL --> sql:", sql);
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

/**
 * Đăng nhập tài khoản
 */
app.post("/api/user/login", (req, res) => {
  let userPhone = req.body["phone"];
  let password = req.body["password"];

  let sql = `SELECT id, phone, password FROM users WHERE username = ${userPhone}} AND password = ${password}`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ data: results });
  });
});

app.post("/api/orders/create", (req, res) => {
  let customer_id = req.body["customer_id"];
  let total_price = req.body["total_price"];
  let payment_method = req.body["payment_method"];
  let listData = req.body["list_orders"];
  let phone_number = req.body["phone_number"] ?? "";
  let address = req.body["address"] ?? "";

  // list order
  let listOrders = [];
  if (Array.isArray(listData)) {
    listData.forEach((e) => {
      listOrders.push(JSON.parse(e));
    });
  }

  /**
   * create order;
   */
  let sql = `
  INSERT INTO \`order\` (\`customer_id\`, \`total_price\`, \`payment_method\`, \`phone_number\`, \`address\`) VALUES (${customer_id}, ${total_price}, ${payment_method},"${phone_number}", "${address}");
  `;
  connection.query(sql, (err, results) => {
    if (err) {
      console.log("{RNLog} TCL --> err:", err);
      res.json({ status: 400, success: false });
    } else {
      let orderId = results.insertId;
      let new_sql =
        "INSERT INTO `order_item` (`order_id`, `product_id`, `amount`, `session_id`) VALUES ";
      let values = listOrders
        .map((e) => {
          if (e) {
            let product_id = e.product_id;
            let amount = e.amount;
            let sessionId = e.session_id ?? "test-a8";

            return `(${orderId}, ${product_id}, ${amount}, "${sessionId}")`;
          }
        })
        .join(",");
      new_sql += values;
      // new_sql = `INSERT INTO \`order_item\` (\`order_id\`, \`product_id\`, \`amount\`, \`session_id\`) VALUES (21, 1, 1, "test-a8"); INSERT INTO \`order_item\` (\`order_id\`, \`product_id\`, \`amount\`, \`session_id\`) VALUES (21, 1, 1, "test-a8")`;
      console.log("{RNLog} TCL --> new sql:", new_sql);
      connection.query(new_sql, (err, results) => {
        console.log(
          `{RNLog} ~ file: server.js ~ line 295 ~ connection.query ~ results`,
          results
        );
        if (err) {
          console.log("{RNLog} TCL --> err:", err);
          res.json({ status: 400, success: false });
        } else {
          res.json({ status: 200, success: true });
        }
      });
    }
  });
});

app.post("/api/test", (req, res) => {
  let listData = req.body["list_orders"];
  console.log(
    `{RNLog} ~ file: server.js ~ line 275 ~ app.post ~ listData`,
    listData
  );
  let listOrders = [];
  if (Array.isArray(listData)) {
    listData.forEach((e) => {
      listOrders.push(JSON.parse(e));
    });
  }
  console.log("{RNLog} TCL --> listOrder:", listOrders);
  res.json({ data: [] });
});

app.listen(4000, () => console.log("App listening on port 4000"));
// export default app;
