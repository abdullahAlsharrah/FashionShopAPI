const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  vendorList,
  //   vendorDelete,
  productCreate,
  vendorCreate,
  //   vendorUpdate,
  fetchVendor,
} = require("../controllers/vendorController");
// param Middleware
const upload = require("../middleware/multer");

router.param("vendorId", async (req, res, next, vendorId) => {
  const vendor = await fetchVendor(vendorId, next);
  if (vendor) {
    req.vendor = vendor;
    next();
  } else {
    const err = new Error("Vendor Not Found");
    err.status = 404;
    next(err);
  }
});

// Vendor List
router.get("/", vendorList);

// delete a Vendor
// router.delete("/:vendorId", vendorDelete);

// create an new Vendor
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  vendorCreate
);

// update a Vendor

// router.put("/:vendorId", upload.single("image"), vendorUpdate);

// create an new Product
router.post("/:vendorId/products", upload.single("image"), productCreate);

module.exports = router;
