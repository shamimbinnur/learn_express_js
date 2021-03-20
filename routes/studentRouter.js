// Author: Shamim Bin Nur
// Description: Rest api practice with Express JS
// Date: 20-03-2021

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
studentRouter.get('/:id', (req, res)=> {
    //get the parameter object from client and disctructuring.
    const {id} = req.params;
    const found = students.some((student) => student.id === id );
    
    if(found){
        res.json(students.find((student) => student.id === id ));
    }else{
        res.status(404).json({message: "Student not found"});
    }
    
})

// add new student using post reaquest from client
studentRouter.post('/', (req, res) => {
    const {id, name, program, university } = req.body;

    if(!id || !name || !program || !university){
        console.log(id)
        return res.status(400).json({message: "Please provide all informations"})
    }

    const data = {
        id,
        name,
        program,
        university
    }
    students.push(data);
    res.json(students)
})


//dele user using delete reaquest from client
studentRouter.put('/:id', (req, res)=> {
    //get the parameter object from client and disctructuring.
    const {id} = req.params;
    const found = students.some((item) => item.id === id );
    
    if(found){
        students.forEach( (student)=> {
            if(student.id === id ){
                student.id = id;
                student.name = req.body.name;
                student.program =  req.body.program;
                student.university = req.body.university;
            }
        } )
        res.json(students.find((student) => student.id == id));
    }else{
        res.status(404).json({message: "Student not found"});
    } 
})


studentRouter.delete('/:id', (req, res)=> {
    //get the parameter object from client and disctructuring.
    const {id} = req.params;
    const found = students.some((item) => item.id === id );
    
    if(found){
        res.json({message: "Deleted", students: students.filter((student) => student.id != id)});
    }else{
        res.status(404).json({message: "Student not found"});
    } 
})



//exporting studentRouter so that it can be imported in main app file(index.js)
module.exports = studentRouter;