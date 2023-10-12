const express=require('express');
const app=express();
const port=6066;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const useRoute=require('./Route/User/User')
app.use("/api/route",useRoute)
app.use((req,res,next)=>{
    res.send("404 Not Found Page")
})
app.listen(port,(req,res)=>{
    console.log(`The server is http://localhost:${port}`)
})