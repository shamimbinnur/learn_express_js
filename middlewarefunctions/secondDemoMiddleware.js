// Author: Shamim Bin Nur
// Description: Rest api practice with Express JS
// Date: 20-03-2021



//creating another middleware function that will run after first middleware(demoMiddleware) function executed
const secondDemoMiddleware = (req, res, next) => {
    console.log("Second demo middleware function run!");
    next();
}

//exporting middlewarre function so that it can be imported from another file.
module.exports = secondDemoMiddleware;