import express from 'express';
import {router} from "./src/routes/router";
const app = express();
import mongoose from 'mongoose';
import bodyParser from "body-parser";
const fileUpload = require('express-fileupload');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/demo_dbC09').then(()=>{
    console.log('Kết nối mongoose thành công')
}).catch(err=>{
    console.log(err.name);
})

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(fileUpload({
    createParentPath:true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('', router);
app.use(express.static('./public'))
app.listen(3000,()=>{
    console.log('server is running http://localhost:3000/home')
})
