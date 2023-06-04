const express=require('express');
const app=express();
require("dotenv").config()

app.use(express.json());

const todoroutes=require('./Routes/todos')
app.use("/api/v1",todoroutes)

app.listen(process.env.PORT,()=>{
    console.group(process.env.PORT,"RUNNING")
})

const DbConnectFn=require('.//config/database')
DbConnectFn();

app.get("/",(req,res)=>{
    res.send("homepage default")
})