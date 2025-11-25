import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '01_form.html'))
})

app.post('/submit', (req, res) => {

    const {email, password} = req.body

    if(!email || !password){
        res.send("Invalid Credential!!")
    }

    // Data to save
    
    const userData = `Email: ${email} ,Password : ${password} `
    
    fs.appendFile("01_formData.txt", userData,(err) => {
        if(err){
            console.log("Error Saving Data !!");            
        }
        console.log("Data Saved Successfully !!");
    })
    
    console.log(req.body);
    res.send(`<h4>You have submitted : <br> Email: ${email} <br> Password : ${password} </h4>`)
})
app.listen("3000", () => {
     console.log('Server is running on http://localhost:3000');
})



// we can do this when we are using require instead of import 

// const express = require('express');
// const path = require('path');

// const app = express();

// app.get("/login", (req, res) => {
//     res.sendFile(path.join(__dirname, '01_form.html'));
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
