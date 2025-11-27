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

function parseCookie(req, name) {
    const header = req.headers && req.headers.cookie;
    if (!header) return null;
    const cookies = header.split(';').map(c => c.trim());
    for (const c of cookies) {
        const [k, ...v] = c.split('=');
        if (k === name) return decodeURIComponent(v.join('='));
    }
    return null;
}

app.get("/", (req, res) => {
    const remembered = parseCookie(req, 'username');
    if (remembered) {
        return res.send(`Welcome back ${remembered}. <a href="/logout">Logout</a>`);
    }
    res.sendFile(path.join(__dirname, 'Input.html'))
})
app.post("/submit", (req, res) => {
    const username = req.body.username;
    const existing = parseCookie(req, 'username');
    const maxAge = 7 * 24 * 60 * 60; 
    res.setHeader('Set-Cookie', `username=${encodeURIComponent(username)}; Max-Age=${maxAge}; Path=/; HttpOnly`);
    if (existing && existing === username) {
        return res.send(`Welcome back ${username}. <a href="/logout">Logout</a>`);
    }
    if (existing && existing !== username) {
        return res.send(`Hello ${username}. Previous user ${existing} was remembered; cookie updated. <a href="/logout">Logout</a>`);
    }
    res.send(`User ${username} logged in. <a href="/logout">Logout</a>`);
});
app.get("/logout", (req, res) => {
    res.clearCookie('username', { path: '/' });
    res.send("Logged out.");
});


app.listen(3000, () => {
    console.log("Server is running at port 3000");
    
})