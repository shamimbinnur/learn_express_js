// Author: Shamim Bin Nur
// Description: Rest api practice with Express JS
// Date: 20-03-2021


const express = require("express");
const app = express();


//defining port number
const PORT = process.env.PORT || 5000

//importing middleware functions from separated file.
const demoMiddleware = require('./middlewarefunctions/demoMiddleware');
const secondDemoMiddleware = require('./middlewarefunctions/secondDemoMiddleware');

//importing routers from external file
const studentRouter = require('./routes/studentRouter');


// Initializing middlewares so that it works 
app.use(demoMiddleware,secondDemoMiddleware);

//set studentRouters
app.use('/students',studentRouter)


app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
});