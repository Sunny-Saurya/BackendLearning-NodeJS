import express from 'express';
import path from 'path'
import bodyParser from 'body-parser';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __dirname = path.resolve();


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '07_formData.html'))
});

app.post('/submit', (req, res) => {
    const { username, email } = req.body;
    

    if (!username || !email) {
        res.send("Invalid Credentials!");
    } else {
        res.send(`Welcome ${username} - Your email is ${email}`);
    }
});

app.listen(5000, () => {
    console.log("The server is running on port 5000");
});
