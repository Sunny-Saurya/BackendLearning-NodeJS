import express from 'express'
const app = express();
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/cookies", (req, res) => {
    res.sendFile(path.join(__dirname, '07_cookies.html'))
})

app.post('/set-cookies', (req, res) => {
    const {course, username} = req.body;

    res.cookie('course',course, {maxAge: 10000})
    res.cookie('username', username, {maxAge: 10000})
    res.send("Cookies have been seet for 1 minute !!")
    res.redirect('/cookies')

})

app.get('/clear-cookies', (req, res) => {
    // const{course, username} = req.body;
    res.clearCookie("course");
    res.clearCookie("username");
    res.send("Cookies Cleared !!")
    res.redirect('/cookies')
})

app.listen(3000, () => {
    console.log('Server is running on port : http://localhost:3000/');  
})

