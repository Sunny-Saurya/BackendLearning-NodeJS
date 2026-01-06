import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); 

app.get("/", (req, res) => {
    res.send(`
        <h2>Cookie Example</h2>
        <form method="POST" action="/set-cookie">
            <input type="text" name="name" placeholder="Enter name" required />
            <input type="email" name="email" placeholder="Enter email" required />
            <br><br>
            <button type="submit">Save in Cookie</button>
        </form>
        <br>
        <a href="/get-cookie">View Cookie Data</a>
    `); 
});

app.post('/set-cookie', (req, res) => {
    const { name, email } = res.body;

    res.cookie("username", name, { maxAge: 60000 });
    res.cookie("email", email, { maxAge: 60000 });

    res.send(`
        <h3>Cookies Saved Successfully</h3>
        <a href="/">Go Back</a>
    `);
});

app.get("/get-cookie", (req, res) => {
    const name = req.cookies.username;
    const email = req.cookies.email;

    res.send(`
        <h2>Stored Cookie Data</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
