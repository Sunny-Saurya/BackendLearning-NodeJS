import express from 'express'
const app = express();
import cookieSession from 'cookie-session';
app.use(cookieSession({
    name: 'mySession',
    keys: ['key1', 'key2'],
    // maxAge: 60000;
}))


app.get('/login', (req, res) => {
    req.session.user = 'Sunny';
    res.redirect('/dashboard')
    res.send("The session is set. You are logged in !!");
})

app.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.send(`Welcome ${req.session.user}`);
    }
    else res.send("Login First To Access Dashboard!")
})

app.get('/logout',(req, res) => {
    res.session = null
    res.send("Logged Out Successfully !!")
})

app.listen(3000);