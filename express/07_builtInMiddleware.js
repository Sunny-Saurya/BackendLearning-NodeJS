// how we can store data in cookie parser
import express from 'express';
import cookie from 'cookie-parser'
const app = express();
app.use(cookie())

app.get('/set', (req, res) => {
    res.cookie('coursecode', 'INT222', {maxAge:15000});
    res.send("Cookies Set !!")
})

app.get('/fetch', (req, res) => {
    console.log(req.cookies);
    res.send( "Cooking Fetched !!"
    )
})

app.get('/clear', (req, res) => {
    res.clearCookie('coursecode')
    res.send("The cookie is deleted !!")
})

app.listen(3000, () => {
    console.log("Server is running at : http://localhost:3000/");
});