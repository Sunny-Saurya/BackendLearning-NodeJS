import cookieParser from 'cookie-parser';
import express from 'express'
import session from 'cookie-session'
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(cookieParser());


app.use(session({
    secret: "secureSecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 5 // 5 minutes
    }
}));

// dummy user
const USER = {
    email:"san@gmail.com",
    password: "1234567890"
}

app.get("/", (req, res) => {
    res.send(`
           <h2>Login</h2>
        <form method="POST" action="/login">
            <input name="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        `)
})

app.post("/login", (req, res) => {

    const {email, password} = req.body

    if(email == USER.email && password === USER.password){
        req.session.user = email,
        res.redirect("/dashboard");
    }
    else{
        console.log("Invalid Credentials !!");
        
    }
})

app.get("/dashboard", (req, res) => {
    if(req.session.user){
        res.send(`
                        <h2>Welcome ${req.session.user}</h2>
            <a href="/logout">Logout</a>
`)
    }else{
        res.redirect('/')
    }
})

app.get("/logout", (req, res) => {
    req.session = null
    res.redirect('/')
    
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});