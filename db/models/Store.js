const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define("Store", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    // description: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  SequelizeSlugify.slugifyModel(Store, {
    source: ["name"],
  });

  return Store;
};
