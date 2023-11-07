
const express = require("express");
const app = express();

// load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for todo API
const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/V1", todoRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// defaault ROute mandatory

app.get("/", (req,res) => {
    res.send(`<h1>This is HomePage Babe!!</h1>`)
})