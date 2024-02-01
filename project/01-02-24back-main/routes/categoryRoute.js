const app = require('express').Router()
const categorymodel = require("../model/Category");


app.post('/cnew', (request, response) => {
    console.log("Saved")
    new categorymodel(request.body).save();
    response.send("Record saved Successfully");
});

module.exports = app