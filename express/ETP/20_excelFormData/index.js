import express from 'express'
import ExcelJS from 'exceljs'
import fs from 'fs'
const app = express();

app.get('/',(req, res) => {
     res.send(`
        <h2>Store Data in Excel</h2>
        <form method="POST" action="/submit">
            <input type="text" name="name" placeholder="Enter name" required />
            <br><br>
            <input type="email" name="email" placeholder="Enter email" required />
            <br><br>
            <button type="submit">Save</button>
        </form>
    `);
})

app.post('/submit', async (req, res) => {
    const {name, email} = req.query
    const workbook = new ExcelJS.Workbook()
    const filename = "data.xlsx"

    if(fs.existsSync('filename')){
        await workbook.xlsx.readFile(filename)
    }

    const sheet = workbook.getWorksheet("Sheet1") || workbook.addWorksheet("Sheet1");

    if (sheet.rowCount === 0) {
        sheet.addRow(["Name", "Email"]);
    }

    sheet.addRow([name, email]);
    await workbook.xlsx.writeFile(fileName);

    res.send("<h3>Data stored in Excel successfully</h3>");
})

app.listen(8000, (req, res) => {
    console.log("Server running on port 8000");
})