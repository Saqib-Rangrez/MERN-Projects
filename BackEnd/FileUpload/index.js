const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// middlewares
const fileUplaod = require("express-fileupload");
// const bodyParser = require('body-parsser');
// app.use(bodyParser());
app.use(express.json());


// databases
const dbConnect = require("./config/database");
dbConnect();
const cloudinaryConnect = require("./config/cloudinary");
cloudinaryConnect();

// routes
const fileUplaodRoute = require("./routes/FileUpload");
app.use("/api/v1/upload" , fileUplaodRoute);


app.listen(PORT, () => {
    console.log("Server started at", PORT);
});

app.get('/', (req,res) => {
    res.send(`<h1>Default Request</h1>`);
});