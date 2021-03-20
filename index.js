const express = require("express");
const app = express();
const students = require('./database/students');

//dependencies
const PORT = process.env.PORT || 5000

app.get('/api/students', (req, res)=> {
    //sending response as Json format
    res.json(students);
})

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
});