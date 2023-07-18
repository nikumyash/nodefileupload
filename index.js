const express = require('express');
const uploadRouter = require('./router/upload.js');
const fileDownload = require('./router/files')
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();


app.use(express.json());
app.use(cors({origin:["http://127.0.0.1:5173","http://localhost:5173"]}));

app.use('/upload',uploadRouter);

app.get('/',(req,res)=>{
    res.send("Hello");
})
app.use('/files',fileDownload);


const start = async () => {
    try {
      await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
};
  
start();


