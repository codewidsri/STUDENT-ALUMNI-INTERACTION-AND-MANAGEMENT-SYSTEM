import express from 'express';
import cors  from 'cors';

const app=express();
app.use(cors())

app.get('/',(req,res)=>{
    res.write("from index.js")
})

app.post("/register",(req,res)=>{
    console.log("from register")
})

app.listen(3002,()=>{
    console.log("backend was connected and listening in 3002")
})