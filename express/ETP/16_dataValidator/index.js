import express from 'express'
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`
        <h2>User Registration</h2>
        <form method="POST" action="/submit">
            <input type="text" name="username" placeholder="Enter username" />
            <br><br>

            <input type="email" name="email" placeholder="Enter email" />
            <br><br>

            <input type="password" name="password" placeholder="Enter password" />
            <br><br>

            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const { username, email, password } = req.body;

    if (!username) {
        return res.send(`
            <p style="color:red;">Username is required</p>
            <a href="/">Go Back</a>
        `);
    }

    if (!email || !email.includes('@')) {
        return res.send(`
            <p style="color:red;">Valid email is required</p>
            <a href="/">Go Back</a>
        `);
    }

    if (!password || password.length < 6) {
        return res.send(`
            <p style="color:red;">Password must be at least 6 characters</p>
            <a href="/">Go Back</a>
        `);
    }

    // if everything is correct
    res.send(`
        <h3>Registration Successful</h3>
        <p>Welcome, ${username}</p>
    `);
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
