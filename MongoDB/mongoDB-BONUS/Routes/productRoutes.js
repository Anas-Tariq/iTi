const express = require("express");
const route = express.Router();
const productController = require("../Controllers/productController");

route.get("/", async (req, res) => {
    let data = await productController.getAllProduct();
    res.send(data);
});

route.post("/new", async (req, res) => {
    let data = await productController.addProduct(req.body);
    res.redirect("/");
});

route.patch("/edit/:id", async (req, res) => {
    let data = await productController.editProduct(req.params.id, req.body);
    res.redirect("/");
});

route.delete("/delete/:id", async (req, res) => {
    let data = await productController.deleteProducut(req.params.id);
    res.redirect("/");
});

module.exports = route;
