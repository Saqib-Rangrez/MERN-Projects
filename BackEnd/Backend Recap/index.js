
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Started");
});

app.get("/", (req, res) => {
    res.send(`<h1>Habibi App bangya re!</h1>`)
})