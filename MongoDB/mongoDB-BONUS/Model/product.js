const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
});

const Procduct = mongoose.model("product", productSchema);

module.exports = Procduct;
