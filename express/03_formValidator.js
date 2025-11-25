import express from 'express'
const app = express();
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { body, validationResult } from 'express-validator';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/validator", (req, res) => {
    res.sendFile(path.join(__dirname, '03_formValidation.html'))
})

app.post("/validator", [
    body('name').notEmpty().withMessage(),
    body('lname').notEmpty().withMessage(),
    body('email').isEmail().withMessage()

],(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.send("Please fill all the fields correctly <a href= '/validator'> Go Back </a>")
    }
    res.send(`<h3>Success</h2> <p> Name: ${req.body.name} LastName: ${req.body.lname} Email: ${req.body.email} </p>`)
})


app.listen("3000", () => {
     console.log('Server is running on http://localhost:3000');
})

