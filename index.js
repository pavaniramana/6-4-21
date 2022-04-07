const express = require("express");

const server = express();

const middleware = (req,res,next)=>{
    console.log("hello middleware");
    next()  // block the flow and take it back to the requested route
}

const middleware2 = (req,res,next)=>{
    console.log("middleware2");
    next();
}


server.use(middleware)



server.get("/",(req,res)=>{
    res.send("Pavani")
})
server.get("/user",(req,res)=>{
    res.send("Katasala Pavani")
})
server.listen(8000,()=>{
    console.log("hello");
});


// HTTP methods
// CRUD : create read update delete
// get post update/put delete


// middlewares :::
// It is a function,
// takes 3 parameters (req,res,next)


// why we need middleware:
// HOC in react. middleware is something which wii be executed first before any route gets executed
