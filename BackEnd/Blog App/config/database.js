const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Server Connected to Database");
    })
    .catch((error) => {
        console.error(error);
        console.log("Database facing connection issues",error);
        process.exit(1);
    })
}

module.exports = dbConnect;