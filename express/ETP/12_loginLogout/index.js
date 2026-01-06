import cookieParser from 'cookie-parser';
import express from 'express'
import session from 'express-session';
import mongoose from 'mongoose';
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/Registraction").then(() => {
    console.log("Database Connected !!");
    
})
.catch((error)=> {
    console.log("Failed Connected", error);
    
})


// creating schema
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password:String
})
const User = mongoose.model("User", UserSchema)


app.use(cookieParser())

app.use(session({   
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 5 // 5 minutes
    }
}))

app.get('/', (req, res) => {
    res.send(   
        `
        <h2> Home Page </h2>
            <button onclick = window.location.href='/login'>Sign in</button>
            <button onclick = window.location.href='/signup' >Sign up</button>
        `
    )
})

app.get('/login', (req, res) => {
    res.send(`
            <h2> Login Here </h2>
             <form method="POST" action="/api/login">
                <input name="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
<a href="/signup">Don't have an account?</a>
<br>
                <button type="submit">Sign in</button>
            </form>
        `)
})

app.get('/signup', (req, res) => {
    res.send(`
        <h2>Create Account </h2>
             <form method="POST" action="/api/signup">
                <input name = "username" placeholder="username..." required/>
                <input name="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
<a href="/login">Have an account?</a>
<br>
                <button type="submit">Sign up</button>
            </form>
        `)
})

app.post('/api/signup', async (req,res) => {
    const {username, email, password} = req.body
    if(!username || !email || !password){
        console.log("Invalid Credentials !!");
    }
    const user = new User({
        name:username,
        email,
        password
    })
    await user.save()
    res.send("Account Created Successfully!!")
    res.redirect("/dashboard");
})

app.post('/api/login', async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email, password})
    if(!user){
        return res.send("Invalid Login");

    }
    else{
        req.session.userId = user._id;
  res.send("Login Successful");
    }
})

app.post("/dashboard", (req, res) => {
    if(req.session.user){
        res.send(`
            Welcome to dashboard ${req.session.user}
            <button onclick = window.location.href='/login' >Logout</button>
            `

        )
    }
})

app.listen(5000 ,()=> {
    console.log("Server is running at port 5000");
})
