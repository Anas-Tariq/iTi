const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const productRoute = require("./Routes/productRoutes");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/productDB").then(() => {
    console.log("Connect to DB");
});

const port = 3000;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use("/dist", express.static("./node_modules/bootstrap/dist"));
app.use("/font", express.static("./node_modules/bootstrap-icons/font"));
app.use("/product", productRoute);

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
