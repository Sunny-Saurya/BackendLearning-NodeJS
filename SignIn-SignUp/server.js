const dotenv = require("dotenv");
const connectDB = require("./src/db/db");

dotenv.config();

const PORT = 8000;


const app = require("./src/app");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



connectDB();