module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Order", {
    phone: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER && DataTypes.FLOAT,
    },
    // discount: {
    //   type: DataTypes.FLOAT,
    // },
    payment: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    block: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    house: {
      type: DataTypes.STRING,
    },
    ave: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
