// Create an express application that diplays a simple html form asking for a username and poasssword
// when the user submits the form 1. Middleware shoudl chekck if the both username and paossword aare admin 2. if correct -> display "you are logged in "
// if not _> display "You are not a valid user"

import express from 'express'
const app = express();
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const myLogger = (req, res, next) => {
    const{username, password} = req.body;

    if(username === 'admin' && password === 'admin'){
        res.send("Welcome Back ! Admin")
        next()
    }else{
        res.send("Unauthorized User !! ")
    }
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, '06_question.html'))
})

app.post('/submit', myLogger, (req, res) => {
    res.send("Welcome Back ! Admin")
    res.status.send(404)
})

app.listen(3000);