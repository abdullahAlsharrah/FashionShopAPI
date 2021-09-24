// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");
const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER && DataTypes.FLOAT,
      defaultValue: 5,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Product;
};
