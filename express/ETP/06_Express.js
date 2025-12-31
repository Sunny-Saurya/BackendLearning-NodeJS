import express from'express'

const app = express();
const id = 2;

app.get('/', (req, res) => {
    res.send("Welcome to Home Page ");
    console.log("Welcome to Home Page !");
})

app.get('/about', (req, res) => {
    res.send("Welcome to About Page ");
})

app.get('/blog', (req, res) => {
    res.send("Welcome to Blog Page ");
})
app.get(`/blog${id}`, (req, res) => {
    res.send(` This is blog ${id} `);
})

app.listen(5000, ()  => {
    console.log("Server is running on port 5000");
    
})