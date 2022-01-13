const express = require("express");
// const expressValidator = require('express-validator');
const expressFlash = require('express-flash');
const expressSession = require('express-session');

const mysql = require("mysql");
const app = express();

// configure
app.use(expressSession({
    secret: 'secret_key',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(expressFlash());
// app.use(expressValidator());


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "pnj_db",
});
connection.connect(function (err) {
    err ? console.log(err) : console.log("connection===", connection);
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
    let sql = "SELECT * FROM `danh_muc_hang`";
    if (req.query.filter && req.query.filter !== "undefined") {
        sql = `SELECT * FROM danh_muc_hang WHERE ma_loai_hang = "${req.query.filter}";`
    }
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.json({ data: results });
    });
});

// sort products by some field
app.get("/api/products", (req, res) => {
    res.json({ query: req.query });
});

// get detail of a product
app.get("/api/product/:id", (req, res) => {
    res.json({ query: req.query, params: req.params });
});

// get all orders
app.get("/api/get_orders", (req, res) => {
    var sql = "SELECT * FROM `don_hang`";
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.json({ data: results });
    });
});

app.get("/api/order?a=b&c=d", (req, res) => {
    res.json({ id: req });
});

// user control
//sign up
app.get("/api/user/sign_up", (req, res) => {
    let query = `INSERT INTO nguoi_dung(ten_user, ten_dang_nhap, mat_khau, email) VALUES ("${req.query?.name}","${req.query?.username}","${req.query?.password}","${req.query?.email}");`;
    connection.query(query, function (err, results) {
        if (err) {
            res.json({ err_code: 400, err_msg: "" });
        }
        res.json({ "result": true });
    })
});

// login
app.get("/api/user/login", (req, res) => {
    let query = `SELECT * FROM nguoi_dung WHERE nguoi_dung.ten_dang_nhap = "${req.query?.username}" AND nguoi_dung.mat_khau = "${req.query?.password}";`;
    connection.query(query, function (err, rows, fields) {
        if (err) throw err;
        if (rows.length <= 0) {
            res.json({
                data: {
                    login_result: false,
                }
            })
        } else {
            res.json({
                data: {
                    login_result: true,
                    user_info: rows[0]
                }
            })
        }
    })
});

//get user detail
app.get("api/user/detail", (req, res) => {
    res.json({ query: req.query });
});



app.listen(4000, () => console.log("App listening on port 4000"));
