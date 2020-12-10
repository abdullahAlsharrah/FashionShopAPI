const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/models");
const path = require("path");
//middleware
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
// Routes
const productRoutes = require("./routes/products");
const vendorRoutes = require("./routes/vendors");
const userRouters = require("./routes/users");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use("/products", productRoutes);
app.use("/vendors", vendorRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(userRouters);

// IF PATH WAS NOT FOUND
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

// ERROR HANDELING
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
