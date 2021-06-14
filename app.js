const express = require('express')
const ex = express()
const jwt=require("jsonwebtoken");
const dotev=require("dotenv");
const router=require('./routes/api')
const mongooose=require("mongoose")
const bodyParser = require('body-parser')
ex.use(bodyParser.json())
// const { Mongoose } = require('mongoose');
dotev.config();


const connectionParams = {
   // newUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
   useNewUrlParser: true 
}
mongooose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
   console.log("connected to db");
})
.catch((err)=>{
   console.log("error: "+err);
   
})
ex.use('/',router);
ex.listen(2000, () => {
    console.log('listening on to port 2000')
})