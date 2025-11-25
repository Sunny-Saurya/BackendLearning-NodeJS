import express from 'express'
import Users from './08_structuringRoutes.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Mounting the router on different paths
app.use("/users", Users) // Mounting the router on /users path

app.use("/home", Users); // Mounting the router on /home path
app.use("/about", Users); // Mounting the router on /about path

// Defining other routes directly in the main app
app.get('/', (req, res) => {
    res.send("Hello from Express ");
})

app.get('/sunny', (req, res) => {
    res.send("Hello from Sunny !!")
})

app.get('/yoyo', (req, res) => {
    console.log(req.body);
    res.send("Data Received !!")
})


app.listen(3000, () => {
    console.log("Server running in port 3000");
})