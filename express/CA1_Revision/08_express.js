import express from 'express'
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

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