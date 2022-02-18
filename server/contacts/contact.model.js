const { DataTypes, NOW } = require("sequelize");
module.exports = model;

function model(sequelize) {
  const attributes = {
    contact_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.INTEGER, allowNull: true },
    note: { type: DataTypes.STRING, allowNull: false },
    customer_id: { type: DataTypes.INTEGER, allowNull: true },
    created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: NOW },
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

  return sequelize.define("contact_data", attributes, options);
}
