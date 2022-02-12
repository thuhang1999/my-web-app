const { DataTypes, NOW } = require("sequelize");
module.exports = model;

function model(sequelize) {
  const attributes = {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: { type: DataTypes.INTEGER, allowNull: true },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    total_price: { type: DataTypes.INTEGER, allowNull: false },
    order_time: { type: DataTypes.DATE, allowNull: true, defaultValue: NOW },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: NOW },
    payment_method: { type: DataTypes.BOOLEAN, allowNull: true },
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

  return sequelize.define("order", attributes, options);
}
