const { DataTypes, NOW } = require("sequelize");
module.exports = model;

function model(sequelize) {
  const attributes = {
    book_order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: { type: DataTypes.INTEGER, allowNull: true },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    customer_quantity: { type: DataTypes.INTEGER, allowNull: false },
    order_time: { type: DataTypes.DATE, allowNull: true, defaultValue: NOW },
    content: { type: DataTypes.TEXT, allowNull: true, defaultValue: "" },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: NOW },
    status: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    deposit: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  };

  const options = {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    id: false,
    freezeTableName: true,
  };

  return sequelize.define("book_order", attributes, options);
}
