const express=require("express")
const app =express()
const mongoose=require("mongoose")
require("dotenv").config()
const PORT=process.env.PORT||5555   
app.use(express.json())
const db=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Database connection established"))
    .catch((err)=>{
        console.log("Database connection failed")
    })
}
db();
const route=require("./routes/employee");
app.use("/employee",route);
app.listen(PORT,()=>{
    console.log("App Listening on port " + PORT)})
app.get('/',(req,res)=>{
    res.send("<h1>App is Live</h1>")
})



    