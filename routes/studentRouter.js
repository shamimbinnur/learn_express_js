//importing express for working with it
const express = require('express');
const students = require('../database/students');

//initializing student router
const studentRouter = express.Router();


//get all students
studentRouter.get("/", (req, res)=>{
    res.json(students)
})

//get individual student
studentRouter.get('/students/:id', (req, res)=> {
    //get the parameter object from client and disctructuring.
    const {id} = req.params;
    const found = students.some((item) => item.id === id );
    
    if(found){
        res.json(students.find((item) => item.id === id ));
    }else{
        res.status(404).json({message: "Student not found"});
    }
    
})

//exporting studentRouter so that it can be import in main app file(index.js)
module.exports = studentRouter;