const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Define Routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

module.exports = router;
