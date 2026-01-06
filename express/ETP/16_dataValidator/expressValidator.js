import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Validation middleware
const validateUser = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Must be a valid email address'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];  

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

app.post(
    "/submit", validateUser,
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.send(`
                <h3>Validation Errors</h3>
                <ul>
                    ${errors.array().map(err => `<li>${err.msg}</li>`).join("")}
                </ul>
                <a href="/">Go Back</a>
            `);
        }

        const { username } = req.body;

        res.send(`
            <h2>Registration Successful</h2>
            <p>Welcome, ${username}</p>
        `);
    }
);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
