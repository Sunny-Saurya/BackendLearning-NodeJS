import express from 'express'
const app = express();

const myLogger = (req, res, next) => {
    console.log("Before Logging");
    console.log("After logging");
    next();
}

app.get("/", (req, res) => {
    res.send(`<h4>Welcome Back ! Sunny</h4>`)
    console.log("Welcome Sunny !!");
    res.end();
})

app.get("/home", myLogger, (req, res) => { 
    res.send(`<h4>Welcome to Hoem Page Sunny</h4>`)
    console.log("Welcome Home Sunny !!");
    res.end();
})

app.get("/about", (req, res) => {
    res.send(`<h4>Welcome to About Page ! Sunny</h4>`)
    console.log("Welcome About Sunny !!");
    res.end();
})

app.listen("3000", () => {
     console.log('Server is running on http://localhost:3000');
})
