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
    // set session then redirect to dashboard
    return res.redirect('/dashboard');
})

app.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.send(`Welcome ${req.session.user}`);
    }
    else res.send("Login First To Access Dashboard!")
})

app.get('/logout',(req, res) => {
    // clear session
    req.session = null;
    res.send("Logged Out Successfully !!");
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'));