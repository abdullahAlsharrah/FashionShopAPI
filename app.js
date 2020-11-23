const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/products");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/products", productRoutes);

app.listen(8000, () => {
  console.log("hellooooo");
});
