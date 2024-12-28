const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
    .then(() => console.log("MongoDB connection success!"))
    .catch((err) => console.error("MongoDB connection error:", err.message));

// mongoose.connect(URL,{
    
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
   
    
// });

// const connection = mongoose.connection;
// connection.once("open",()=>{
//     console.log("mongodb Connection success!");
// });

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
});