const express = require("express");
const router = express.Router();
const {
  productList,
  productDelete,
  productCreate,
  productUpdate,
} = require("../controllers/productController");

// Product List
router.get("/", productList);

// delete a Product
router.delete("/:productId", productDelete);

// create an new Product
router.post("/", productCreate);

// update a Product

router.put("/:productId", productUpdate);

module.exports = router;
