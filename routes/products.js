const express = require("express");
const router = express.Router();

//This const requires the file with the controllers for the CRUD operation
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.js");

router.route("/").get(getProducts).post(addProduct);

router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
