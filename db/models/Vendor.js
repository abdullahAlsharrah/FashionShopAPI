const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define("Vendor", {
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
  SequelizeSlugify.slugifyModel(Vendor, {
    source: ["name"],
  });

  return Vendor;
};
