////////////////////////// Task 1 //////////////////////////
const fs = require("fs");
let productDB = fs.readFileSync("productDB.json", "utf-8");
// console.log(JSON.parse(productDB));
////////////////////////// Task 1 //////////////////////////

////////////////////////// Task 2 //////////////////////////
const http = require("http");
http.createServer(function (req, res) {
    // console.log(req.url);
    // res.write("Welcome to the server");
    let id = req.url.split("/");
    let productId = parseInt(id[2]);
    if (req.url == "/home") {
        res.write("<b>Welcome to our APIs</b>");
    } else if (req.url == "/product") {
        res.write(productDB);
        console.log(id);
    } else if (req.url == "/product/" + productId && productId <= JSON.parse(productDB).length) {
        let product = JSON.parse(productDB)[productId - 1];
        res.write(JSON.stringify(product));
    } else {
        res.write("404 || Page not found");
    }
    // }
    res.end();
}).listen(4000, function () {
    console.log("Port is online");
});
////////////////////////// Task 2 //////////////////////////

////////////////////////// Task 3 //////////////////////////
// npm is a shortcut for Node Package Manager which a tool to create and setup a packages that is ready to use with relible features
// To use node package manager to install new package we can simply use the 'npm' at the beginning and follow it with 'i' from install and then with the package manager
// we can initiate new package by writing the following code 'npm init' and then answer few question to initilize our package
////////////////////////// Task 3 //////////////////////////
