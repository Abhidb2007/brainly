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
    const username=req.body.username;
    const password=req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password,
    })
    if(existingUser){
        const token=jwt.sign({
            id:existingUser._id
        },JWT_PASSWORD)
        res.json({
            token
        })
    }else{
        res.status(401).json({
            message:"Invalid credentials"
        })
    }

})
app.post("/api/v1/content",userMiddleware, async(req, res)=>{
    (property) Response<any, Record<string,any>,number>,json;
    (body?:any)=> Response<any, Record<string, any>, number>
    Send JSON response.
    Examples:
    res.json(null);
    res.json({user:"tj"});
    res.status(500).json("oh noes!");
    res.status(401).json("I don't have that");
    res.json({
        message: "Content added"
    })

})
app.get("/api/v1/content",usemiddleware, aync(req, res)=>{
    const userId=requestAnimationFrame.userId;
    const content=await ContentModel.find({
        userId: userId
    }).populate("userId","username");
    res.json({
        content
    })

})
app.delete("/api/v1/content",(req, res)=>{

})
app.post("/api/v1/brain/share",(req, res)=>{

})
app.get("/api/v1/brain/:shareLink",(req, res)=>{

})