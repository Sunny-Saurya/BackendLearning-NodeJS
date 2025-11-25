const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to this page")
})
app.get("/home", (req, res) => {
    res.send("Welcome to home page")
})
app.get("/about", (req, res) => {
    res.send("Welcome to about page")
})
app.get("/resume", (req, res) => {
    res.send("Welcome to resume page")
})
app.get("/work", (req, res) => {
    res.send("Welcome to work page")
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})