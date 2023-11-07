const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("DB Conncection Successful!!")
    })
    .catch((error) => {
        console.log("DB Conncetion Failed -> ",error.message);
        process.exit(1);
});
    
}

module.exports = dbConnect;