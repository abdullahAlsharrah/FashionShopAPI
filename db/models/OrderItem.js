module.exports = (sequelize, DataTypes) => {
  return sequelize.define("OrderItem", {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    souce: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
    },
  });
};
