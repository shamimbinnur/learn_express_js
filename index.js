// Author: Shamim Bin Nur
// Description: Rest api practice with Express JS
// Date: 20-03-2021


const express = require("express");
const app = express();
const students = require('./database/students');

//dependencies
const PORT = process.env.PORT || 5000


//creating middleware function that will when get any request
const demoMiddleware = (req, res, next) => {
    console.log("Demo middleware run!");
    next();
}

//creating another middleware function that will run after first middleware(demoMiddleware) function executed
const secondDemoMiddleware = (req, res, next) => {
    console.log("Second demo middleware function run!");
    next();
}




// Initializing middleware so that it works
app.use(demoMiddleware,secondDemoMiddleware);



app.get('/api/students', (req, res)=> {
    //sending response as Json format
    res.json(students);
})

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
});
