const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
 
const dbConnect = require("./config/database");
dbConnect();

const user = require("./routes/user");

app.use('/api/v1', user);

app.listen(PORT, () => {
    console.log("App is listening at", PORT);
})

app.get('/', (req, res) => {
    res.send(`<h1>Hello Baby!!</h1>`);
})