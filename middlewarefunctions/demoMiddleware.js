// Author: Shamim Bin Nur
// Description: Rest api practice with Express JS
// Date: 20-03-2021



//creating middleware function that will when get any request
const demoMiddleware = (req, res, next) => {
    console.log("Demo middleware run!");
    next();
}

//exporting middlewarre function so that it can be imported from another file.
module.exports = demoMiddleware;