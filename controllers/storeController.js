const { Store, Product } = require("../db/models");

exports.fetchStore = async (storeId, next) => {
  try {
    const store = await Store.findByPk(storeId);
    return store;
  } catch (error) {
    next(error);
  }
};
exports.storeList = async (req, res, next) => {
  try {
    const stores = await Store.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Product,
          as: "products",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    res.json(stores);
  } catch (error) {
    next(error);
  }
};

// exports.storeDelete = async (req, res, next) => {
//   try {
//     await req.store.destroy();
//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// };

exports.storeCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    const newStore = await Store.create(req.body);
    res.status(201).json(newStore);
  } catch (error) {
    next(error);
  }
};

// exports.storeUpdate = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `${req.protocol}://${req.get("host")}/media/${
//         req.file.filename
//       }`;
//     }
//     await req.store.update(req.body);
//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// };

exports.productCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    req.body.storeId = req.store.id;
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
