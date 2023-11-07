const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, () => {
    console.log("Server started at", PORT);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is Get Call HomePage</h1>`)
})