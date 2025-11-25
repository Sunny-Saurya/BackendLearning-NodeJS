import express from 'express'
const app = express();

app.use(express.static('public'))
app.get('/', (req, res) => {
     res.send(
        `
        <head>
            <link rel = "stylesheet" href = "style.css"
            <body>
                <h1>Node JS</h1>
            </body>
        </head>
        `
     )
})
app.listen(3000);