import express from 'express';
import cors  from 'cors';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';

const app=express();
app.use(cors())
app.use(bodyParser.json())
const secretkey='abcde';

app.get('/',(req,res)=>{
    res.write("from index.js")
})

app.post("/register",(req,res)=>{
    const {name,email,password}=req.body;
    console.log(name)
})

app.listen(3002,()=>{
    console.log("backend was connected and listening in 3002")
})