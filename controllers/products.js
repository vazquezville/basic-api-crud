const { products } = require("../db.json");

//Object with the controllers' functions used in the routes
module.exports = {
  getProducts: (req, res) => {
    res.json({ products });
  },
  addProduct: (req, res) => {
    const { name } = req.body;
    products.push({
      id: products.length,
      name,
    });
    res.json({
      success: true,
      msg: "successfully added",
    });
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    products.forEach((product, i) => {
      if (product.id === Number(id)) {
        product.name = name;
      }
    });

    res.json({
      success: true,
      msg: "successfully updated",
    });
  },
  deleteProduct: (req, res) => {
    const { id } = req.params;

    products.forEach((product, i) => {
      if (product.id === Number(id)) {
        products.splice(i, 1);
      }
    });

    res.json({
      success: true,
      msg: "successfully deleted",
    });
  },
};
