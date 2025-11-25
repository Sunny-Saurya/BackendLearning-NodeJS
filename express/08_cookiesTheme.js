import express from 'express'
const app = express();
import cookieParser from 'cookie-parser';
app.use(express.static('public'))
app.use(cookieParser())

app.get('/set-theme/:mode', (req, res) => {
    const theme = req.params.mode === 'dark'? 'dark': 'light'
    res.cookie('theme', theme);
    res.redirect('/')
})

app.get('/', (req, res) => {
    const theme = req.cookies.theme;
    res.send(`
        <head>
            <link rel = "stylesheet" href = "style.css"
            <body>
                <h1>Node JS</h1>
                <h4> Theme set is ${theme} </h4>
                <a href = "/set-theme/light"> set light theme </a>
                <a href = "/set-theme/dark"> set dark theme </a>
            </body>
        </head>`
        );
})