const {userData} =require('../Modules/UserModules');
const path=require("path")
exports.userView=(req,res)=>{
    res.sendFile(__dirname+"../View/userView.html")
}
exports.userInfo=(req,res)=>{
    const user=req.body;
    userData.push(user);
    res.status(201).json({
        success:true,
        userData
    })
}

exports.formFile=(req,res)=>{
    res.sendFile(path.join(__dirname, "../View/Form.html"));
}

exports.HomeView=(req,res)=>{
    res.sendFile(path.join(__dirname, "../View/index.html"));
    // res.send("This is user Home Page")
}