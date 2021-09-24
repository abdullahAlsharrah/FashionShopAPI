const express = require("express");

const router = express.Router();
const {
  checkout,
  orderss,
  fetchOrder,
  updateOrder,
} = require("../controllers/orderController");

router.post("/checkout", checkout);
router.get("/", orderss);

router.param("orderId", async (req, res, next, orderId) => {
  const order = await fetchOrder(orderId, next);
  if (order) {
    req.order = order;
    next();
  } else {
    const err = new Error("Sorry Invoice's Not Found");
    err.status = 404;
    next(err);
  }
});

//   router.delete("/destroy", destroy);
router.put("/:orderId", updateOrder);
//   router.delete("/:invoiceId", deleteInvoice);
module.exports = router;
