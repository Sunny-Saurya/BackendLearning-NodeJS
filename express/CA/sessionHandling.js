// import express from 'express'
// const app = express();
// import path from 'path'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import fs from 'fs'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'Input.html'))
// })
// app.post("/submit", (req, res) => {
//     const username = req.body.username;
//     req.session = { username: username };
//     res.send(`Welcome Back ${username}. <a href="/logout">Logout</a>`);
// });
// app.get("/logout", (req, res) => {
//     if (req.session && req.session.username) {
//         const username = req.session.username; 
//         req.session = null;
//         res.send(`User ${username} logged out. <a href="/">Login again</a>`);
//     }
//     else {
//         res.send('No user is currently logged in. <a href="/">Login</a>');
//     }
// });

// app.listen(3000, () => {
//     console.log("Server is running at port 3000");
    
// })