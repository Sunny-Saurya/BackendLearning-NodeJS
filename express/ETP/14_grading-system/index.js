import express from 'express'
import path from  'path'
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

app.post('/grade', (req, res) => {
    const {marks} = req.body;
    const score = Number(marks);
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else if (score >= 0) {
        grade = "Fail";
    } else {
        grade = "Invalid Marks";
    }
     res.send(`
        <h2>Your Marks: ${score}</h2>
        <h2>Your Grade: ${grade}</h2>
        <a href="/">Go Back</a>
    `);
})


app.listen(8000, () => {
    console.log("Server running on port 8000");
});