// Author: Shamim Bin Nur
// Description: Rest api practice with Express JS
// Date: 20-03-2021

const ejs = require('ejs');
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

//Initializing template engine
app.set("view engine", ejs);

//setting node built-in middleware functions to parse json data sent from cliend
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//set studentRouters
app.use('/students',studentRouter)

//Usinging template engine
app.get('/html', (req, res)=>{
    res.render("home.ejs", { students:
        [ 
            {name:"Shamim Bin Nur", id: "011"},
            {name:"Abdur Rahim Bin Nur", id: "022"},
        ]
    })
})


app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
});