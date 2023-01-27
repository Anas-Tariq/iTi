const Procduct = require("../Model/product");

async function addProduct(data) {
    let res = await Procduct.create(data);
    return res;
}

async function editProduct(id, data) {
    let res = await Procduct.updateOne({ _id: id }, data);
    return res;
}

async function deleteProducut(id) {
    let res = await Procduct.findByIdAndDelete(id);
    return res;
}

async function getAllProduct() {
    let res = await Procduct.find();
    return res;
}

module.exports = { addProduct, editProduct, deleteProducut, getAllProduct };
