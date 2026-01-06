import express from 'express';
const app = express();

const myMiddleware = (req, res, next) => {
    console.log("Middleware executed");
    next(); 
};

app.use(myMiddleware);

app.get("/", (req, res) => {
    res.send("<h2>Home Page</h2>");
});

app.get("/about", (req, res) => {
    res.send("<h2>About Page</h2>");
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
