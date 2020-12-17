//SERVER SETUP FILE
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const productsRoutes = require("./routes/products.js");

//Settings
app.set("json space", 4);

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/products", productsRoutes);

//Start server
app.listen(3000, () => {
  console.log("Server on port 3000");
});
