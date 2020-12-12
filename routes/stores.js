const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  storeList,
  //   storeDelete,
  productCreate,
  storeCreate,
  //   storeUpdate,
  fetchStore,
} = require("../controllers/storeController");
// param Middleware
const upload = require("../middleware/multer");

router.param("storeId", async (req, res, next, storeId) => {
  const store = await fetchStore(storeId, next);
  if (store) {
    req.store = store;
    next();
  } else {
    const err = new Error("Store Not Found");
    err.status = 404;
    next(err);
  }
});

// Store List
router.get("/", storeList);

// delete a Store
// router.delete("/:storeId", storeDelete);

// create an new Store
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  storeCreate
);

// update a Store

// router.put("/:storeId", upload.single("image"), storeUpdate);

// create an new Product
router.post("/:storeId/products", upload.single("image"), productCreate);

module.exports = router;
