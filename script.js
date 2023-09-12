const express=require("express");
const app=express();
const path=require("path");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("views"));
const emailDB="nakshathra1712001@gmail.com";
const passwordDB="123";
app.post("/login",(req,res)=>{
const {email,password}=req.body;
if(email===emailDB && password===passwordDB){
    res.sendFile(path.join(__dirname,"views","home.html"));
}else{
    res.send("<h1>Login Failed<h1>")
}
})
app.get("/logout",(req,res)=>{
    
     res.sendFile(path.join(__dirname,"views","index.html"));
    
    })
const PORT=process.env.PORT || 3001;
app.listen(PORT);