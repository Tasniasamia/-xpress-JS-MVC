const express=require('express');
const { userInfo, userView ,HomeView, formFile} = require('../../Controller/UserController');
const route=express.Router();

route.get("/", HomeView);
route.get('/user', userView);
route.post('/UserInfo', userInfo);
route.get('/form',formFile);
module.exports=route

