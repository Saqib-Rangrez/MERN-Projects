// step 1 create a folder
// step 2 move to that folder in terminal
// step 3 npm init -y
// step 4 open that folder using VSCode
// step 5 npm i express
// step 6 create server.js

const express = require("express");
const app = express();

// middleware to parse json request body
// Method-1
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// Method-2
// app.use(express.json());

app.listen(3000, () => {
    console.log("Server Started at Port no. 3000")
});

app.get('/' , (req, res) => {
    res.send("Hello!");
})

app.post("/api/cars" ,(request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Data suubmitted successfully");
})

const mongoose = require('mongoose');

const dbURI = "mongodb://127.0.0.1:27017/Cars"; // Replace with your MongoDB URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose; // Export the mongoose instance
