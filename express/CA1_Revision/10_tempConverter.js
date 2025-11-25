import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/tempConverter', (req, res) => {
    res.sendFile(path.join(__dirname, '10_tempConverter.html'));
});

app.post("/converter", (req, res) => {
    const { name, select } = req.body;

    const temp = Number(name);
    let result;

    if (select === 'c_to_f') {
        result = (temp * 9/5) + 32;
        res.send(`<h1>${temp}°C = ${result.toFixed(2)}°F</h1>`);
    } 
    else if (select === 'f_to_c') {
        result = (temp - 32) * 5/9;
        res.send(`<h1>${temp}°F = ${result.toFixed(2)}°C</h1>`);
    } 
    else {
        res.send("<h1>Invalid Option</h1>");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
