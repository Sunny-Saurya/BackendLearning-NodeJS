import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send(`
        <h2>Cookie Operations</h2>

        <form method="POST" action="/set-cookie">
            <input type="text" name="fname" placeholder="First Name" required />
            <br><br>
            <input type="text" name="lname" placeholder="Last Name" required />
            <br><br>
            <button type="submit">Set Cookie</button>
        </form>

        <br>
        <a href="/get-cookie">Get Cookie</a>
        <br><br>
        <a href="/delete-cookie">Delete Cookie</a>
    `);
})

app.post("/set-cookie", (req, res) => {
    const { fname, lname } = req.body;

    res.cookie("firstname", fname, { maxAge: 60000 });
    res.cookie("lastname", lname, { maxAge: 60000 });

    res.send(`
        <h3>Cookie Set Successfully</h3>
        <a href="/">Go Back</a>
    `);
});

app.get('/get-cookie', (req, res) => {
    const fname = req.cookies.firstname;
    const lname = req.cookies.lastname;

    res.send(`
        <h3>Stored Cookie Data</h3>
        <p>First Name: ${fname}</p>
        <p>Last Name: ${lname}</p>
        <a href="/">Go Back</a>
    `);
})

app.get("/delete-cookie",(req, res) => {
    res.clearCookie("firstname");
    res.clearCookie("lastname");

    res.send(`
        <h3>Cookie Deleted Successfully</h3>
        <a href="/">Go Back</a>
    `);
})


app.listen(8000, () => {
    console.log("Server running on port 8000");
});