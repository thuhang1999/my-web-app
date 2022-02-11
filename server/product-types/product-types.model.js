const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    product_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    product_type_name: { type: DataTypes.STRING, allowNull: false },
  };

  const options = {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    id: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    freezeTableName: true,
  };

  return sequelize.define("product_type", attributes, options);
}
