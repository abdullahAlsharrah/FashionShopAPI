const express = require("express");
const router = express.Router();
const {
  productList,
  productDelete,
  productCreate,
  productUpdate,
  fetchProduct,
} = require("../controllers/productController");
// multer Middleware
const upload = require("../middleware/multer");

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("Product Not Found");
    err.status = 404;
    next(err);
  }
});

// Product List
router.get("/", productList);

// delete a Product
router.delete("/:productId", productDelete);

// update a Product

router.put("/:productId", upload.single("image"), productUpdate);

module.exports = router;
