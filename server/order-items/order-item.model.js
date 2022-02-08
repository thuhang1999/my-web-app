const { DataTypes } = require("sequelize");
module.exports = model;

function model(sequelize) {
  const attributes = {
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    customer_id: { type: DataTypes.INTEGER, allowNull: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.STRING, allowNull: false },
    session_id: { type: DataTypes.INTEGER, allowNull: true },
  };

  const options = {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
  };

  return sequelize.define("order_item", attributes, options);
}
