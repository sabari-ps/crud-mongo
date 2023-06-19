const express = require("express");

const router = express.Router();

const controller = require("../../controllers/products/index");

router.get("/", controller.getAllProducts);
router.post("/create", controller.createProduct);
router.get("/:id", controller.getProductById);
router.put("/:id", controller.updateProduct);

module.exports = router;
