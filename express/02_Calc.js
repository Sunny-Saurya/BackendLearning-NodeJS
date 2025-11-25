import express from 'express'
const app = express();
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/calc", (req, res) => {
    res.sendFile(path.join(__dirname, '02_calc.html'))
})

app.post("/submit", (req, res) => {
    const {number1, operator, number2} = req.body;

    if(operator == '+'){
        res.send(`Ans: ${Number(number1) + Number(number2)}`)
    }
     if(operator == '-'){
        res.send(`Ans: ${number1 - number2}`)
    }
     if(operator == '*'){
        res.send(`Ans: ${number1 * number2}`)
    }
     if(operator == '/'){
        res.send(`Ans: ${number1 / number2}`)
    }
    if(operator == '%'){
        res.send(`Ans: ${Number(number1) % Number(number2)}`)
    }
})
app.listen("3000", () => {
     console.log('Server is running on http://localhost:3000');
})
