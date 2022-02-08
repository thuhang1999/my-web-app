const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    product_id: { type: DataTypes.INTEGER, primaryKey: true },
    product_name: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: true },
    product_type_id: { type: DataTypes.STRING, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.DATE, allowNull: true },
  };

  const options = {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    id: false,
  };

  return sequelize.define("products", attributes, options);
}
