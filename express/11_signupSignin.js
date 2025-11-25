import express from 'express'
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import cookieSession from 'cookie-session';
const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieSession({
    name: 'LoginSession',
    keys: ['keys1', 'keys2']
}));
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '11_signupSignin.html'))
})

app.post('/submit', (req, res) => {
    req.session.user = {username: req.body.username, password: req.body.password}
    res.redirect('/dashboard');
})

app.get("/dashboard", (req, res) => {
    if(req.session.user){
        res.send(`Welcome ${req.session.user.username}`)
    }
    else{
        res.send("Please Login First :(");
    }
})

app.get("/logout", (req, res) => {
    res.session.user = null;
    res.send("You are Logged OUt Successfylly !!")
})


app.listen(3000, () => {
    console.log("Server running at port 3000");
})