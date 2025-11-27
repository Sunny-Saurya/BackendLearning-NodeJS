import express from 'express'
const app = express();
import cookieSession from 'cookie-session';
let count = 0;

app.use(cookieSession({
    name: 'mySession',
    keys : ['key1', 'key2']
}))

app.get("/login", (req,res) => {
    req.session.user = {username : "Sunny", email : "san@gmail.com"},
    res.redirect("/dashboard");
})

app.get("/dashboard", (req, res) => {
    if(req.session.user.username && req.session.user.email){
        res.send(`Welcome ${req.session.user.username}`)
    }
    else{
        res.send("Please Login First !!")
    }
})

app.get("/logout", (req, res) => {
    res.session = null;
    res.send('Logged Out Successfully !!')
})

app.listen(3000)