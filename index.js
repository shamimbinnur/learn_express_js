// Author: Shamim Bin Nur
// Description: Rest api practice with Express JS
// Date: 20-03-2021


const express = require("express");
const app = express();
const students = require('./database/students');

//dependencies

//defining port number
const PORT = process.env.PORT || 5000

//importing middleware functions from separated file.
const demoMiddleware = require('./middlewarefunctions/demoMiddleware');
const secondDemoMiddleware = require('./middlewarefunctions/secondDemoMiddleware');



// Initializing middlewares so that it works
app.use(demoMiddleware,secondDemoMiddleware);



app.get('/api/students', (req, res)=> {
    //sending response as Json format
    res.json(students);
})
app.get('/api/students/:id', (req, res)=> {
    //get the parameter object from client and disctructuring.
    const {id} = req.params;
    const found = students.some((item) => item.id === id );
    
    if(found){
        res.json(students.find((item) => item.id === id ));
    }else{
        res.status(404).json({message: "Student not found"});
    }
    
})


app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
});