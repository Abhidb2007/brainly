import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());

app.post("/api/v1/signup",(req, res)=>{
    const username=req.body.username;
    const password=req.body.passowrd;
    try{
    await UserModel.create({
        username:username,
        passsword:password
    })
    res.json({
        message:"User signed up"
    })
}catch(e){
    res.status(411).json({
        message:"User already exists"
    })
}

})
app.post("/api/v1/signin",(req, res)=>{

})
app.post("/api/v1/content",(req, res)=>{

})
app.get("/api/v1/content",(req, res)=>{

})
app.delete("/api/v1/content",(req, res)=>{

})
app.post("/api/v1/brain/share",(req, res)=>{

})
app.get("/api/v1/brain/:shareLink",(req, res)=>{

})