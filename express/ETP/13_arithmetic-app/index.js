import express from 'express'
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
            <h2>Calculator</h2>
            <form method="POST" action="/answer">
            <input name='number1' placeholder="Enter first Number" type="number" />
            <input type="text" placeholder ="Enter operator" name= "operator" />
            <input name='number2' placeholder="Enter second Number" type="number" />
            <button type="submit" onclick= window.location.href='/answer'>Calculate</button>
            </form>
        `)
})

app.post('/answer', (req, res) => {
    const {number1, operator, number2} = req.body;
    switch(operator){
        case '+':
            return res.send(`The number1 ${operator} number2 =  ${Number(number1) + Number(number2)}`) 
        case '-':
            return res.send(`The number1 ${operator} number2 = ${Number(number1) - Number(number2)}`)
        case '*':
            return res.send(`The number1 ${operator} number2 = ${Number(number1) * Number(number2)}`)
        case '/':
            return res.send(`The number1 ${operator} number2 = ${Number(number2) != 0 ? Number(number1) / Number(number2) : Number(number2) / Number(number1)}`)
        case '%':
            return res.send(`The number1 ${operator} number2 = ${Number(number2) != 0 ? Number(number1) % Number(number2) : Number(number2) % Number(number1)}`)
    }

})

app.listen(8000, () => {
    console.log("Server is running on port 5000");
})