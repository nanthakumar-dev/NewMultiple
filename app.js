const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

// Use Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

module.exports = app;
