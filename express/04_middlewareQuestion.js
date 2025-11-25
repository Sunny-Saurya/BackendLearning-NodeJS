// impolement a custom middleware acalled authentication in express.js that checks whether the user is an admin or not. if the url contains ? admin = true, allow access to the /user router and print Welcome , Admin ! in the consolve and send "Welcome Admin as a response toerh wise respond with you are not authenticated"

import express from 'express';
const app = express();

const myLogger = (req, res, next) => {
    if(req.query.admin === 'true'){
        next();
    }
    else{
        res.send(`<h4>Permission Denied !! </h4>`)
    }
}

app.get("/user",myLogger,(req, res) => {
    res.send(`<h4>Permission Granted !! Welcome back Admin !!</h4>`)
})

app.listen("3000", () => {
     console.log('Server is running on http://localhost:3000');
})
