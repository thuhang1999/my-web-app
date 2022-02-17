const config = require("config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
const db = {};

module.exports = db;

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to database
  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
  });

  // init models and add them to the exported db object
  db.User = require("../users/user.model")(sequelize);

  // init models and add them to the exported db object
  db.Product = require("../products/product.model")(sequelize);

  // init models and add them to the exported db object
  db.Order = require("../orders/order.model")(sequelize);

  // init models and add them to the exported db object
  db.OrderItem = require("../order-items/order-item.model")(sequelize);

  // init models and add them to the exported db object
  db.ProductType = require("../product-types/product-types.model")(sequelize);

  // init models and add them to the exported db object
  db.Contact = require("../contacts/contact.model")(sequelize);

  // init models and add them to the exported db object
  db.BookOrderItem = require("../book-items/book-item.model")(sequelize);

  // create relationships between models.
  db.Order.hasMany(db.OrderItem, {
    foreignKey: "order_id",
    as: "order_items",
  });
  db.OrderItem.belongsTo(db.Order, {
    foreignKey: "order_id",
  });

  db.Order.belongsTo(db.User, {
    foreignKey: "customer_id",
  });

  //db.Contact ~ db.User
  db.Contact.belongsTo(db.User, {
    foreignKey: "customer_id",
  });

  //db.product ~ db. ProductType.
  db.Product.belongsTo(db.ProductType, {
    foreignKey: "product_type_id",
  });
  // db.orderItem ~ db.Product.
  db.OrderItem.belongsTo(db.Product, {
    foreignKey: "product_id",
  });

  // sync all models with database
  await sequelize.sync();
}

initialize();
