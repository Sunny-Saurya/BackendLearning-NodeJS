const express = require('express');
const morgan = require("morgan");
const app = express();
const registerRoute = require("./routes/authRoute");
const noteRoute = require("./routes/noteRoute");
const aggregationRoute = require("./routes/aggregationRoute")

const morganMiddleware = require("./middlewares/morganLogMiddleware");
app.use(express.json());

// you can directly import here and use it
// app.use(morgan(":method :url :status :response-time ms")); 

// or you can  make external middleware for morgan and use it
app.use(morganMiddleware);

// users
app.use("/api/auth", registerRoute);
// notes

app.use("/api/notes", noteRoute);

// gettting the notes using tags

app.use("/api/aggregation", aggregationRoute);

module.exports = app;