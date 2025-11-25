// create a node.js express appication that tracks how many times a user has visisted the homepage using cokking-seesion

import express from 'express'
const app = express();
import cookieSession from 'cookie-session';
let count = 0;
app.use(cookieSession({
    name: 'mySession',
    keys : ['key1', 'key2']
}))

app.get("/login", (req,res) => {
    req.session.user = 'Sunny',
    count = count+1;
    res.redirect("/dashboard");
    console.log("Number of times user logged in : ", count);
})

app.get("/dashboard", (req, res) => {
    if(req.session.user){
        res.send(`Welcome ${req.session.user} and you have visited ${count = count+1} times`)
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