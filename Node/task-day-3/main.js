const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));

let product = [
    { name: "Realme X2", color: "red", price: 100 },
    { name: "Pocophone", color: "blue", price: 200 },
    { name: "Z-Flip", color: "black", price: 300 },
    { name: "P50 Pro", color: "white", price: 400 },
    { name: "iPhone X", color: "orange", price: 500 },
];

app.post("/login", (req, res) => {
    res.redirect(`/welcome/${req.body.username}`);
});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/users/:username", (req, res) => {
    console.log(req);

    console.log(req.params.username);
    res.send("Hello " + req.params.username);
});
app.get("/welcome", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    if (req.query.username == undefined) {
        res.send("Please enter your name");
    }
    res.send("Welcome " + req.query.username);
});
app.get("/welcome/:username", (req, res) => {
    res.send("Hello " + req.params.username);
});
app.get("/product/:id", (req, res) => {
    let item = parseInt(req.params.id) - 1;
    if (req.params.id.length == 2) {
        console.log(req.params.id);
        res.send(`Hello ${product[item].name}`);
    } else {
        res.status(404).send("The id must contain 2 digits");
    }
});

/*
 * Middleware is like a firewall to validate and authorize the data that being sent from the client side and decrypt it
 * We can use middleware when sending data from client to server through POST method
 */

app.listen(4000, function (req, res) {
    console.log("Connected");
});
