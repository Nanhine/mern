const dotenv = require("dotenv");
const express=require("express");
const todoRoute = require("./router/todoRouter");
const userRoute = require("./router/userRouter");
const app=express();
const cors=require("cors");
app.use(cors());
const connectDB = require("./config/db");
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/todo",todoRoute);
app.use("/api/user",userRoute);
const port=process.env.port;

// app.get("/",(req,res)=>{
//     res.send("Get route is working")
// })
// app.post("/",(req,res)=>{
//     res.json({
//         message:"post route is working"
//     })
// })
// app.put("/",(req,res)=>{
//     res.status(200).json({
//         message:"put route is working"
//     })
// })
// app.delete("/",(req,res)=>{
//     res.status(200).json({
//         message:"delete route is working"
//     })
// })
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);

})