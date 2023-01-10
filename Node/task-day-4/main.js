const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

let users = fs.readFileSync("users.json", "utf-8");
let todos = fs.readFileSync("todos.json", "utf-8");
users = JSON.parse(users);
todos = JSON.parse(todos);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", (req, res) => {
    if (req.body.username != "" && req.body.password != "" && req.body.firstName != "") {
        users.push(req.body);
        fs.writeFileSync("users.json", JSON.stringify(users, null, 2), "utf-8");
        res.send("user was registered successfully");
    } else {
        res.status(401).send("All fields must be filled");
    }
});

app.post("/todos", (req, res) => {
    todos.push(req.body);
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2), "utf-8");
    res.send("todo created successfully");
});

app.post("/login", (req, res) => {
    for (let i = 0; i <= users.length; i++) {
        if (req.body.username == users[i].username) {
            res.send("Successfully Logged in");
        }
    }
    res.status(401).send("The username or password is incorrect");
});

app.get("/printusers", (req, res) => {
    res.sendFile(path.join(__dirname, "users.json"));
});

app.get("/todos", (req, res) => {
    res.sendFile(path.join(__dirname, "todos.json"));
});

app.get("/todos/:id", (req, res) => {
    if (req.params.id <= todos.length) {
        res.send(JSON.stringify(todos[req.params.id - 1]));
    } else {
        res.status(404).send("not found");
    }
});

app.listen(4000, (req, res) => {
    console.log("Server is connected");
});
