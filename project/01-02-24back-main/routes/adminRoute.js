const app = require('express').Router()
const adminmodel = require("../model/Admin");

// signupRoute.js
app.get('/Anew', (request, response) => {
    new adminmodel(request.body).save();
    response.send("Record saved Successfully");
});

app.post('/tnew', (request, response) => {
        new adminmodel(request.body).save();
        response.send("Record saved Successfully");
});

app.get('/tfetch', async (request, response) => {
    try {
      const pets = await adminmodel.find();
      response.json(pets);
    } catch (error) {
      console.error('Error fetching pet data:', error);
      response.status(500).send('Internal Server Error');
    }
  });

  app.delete('/tdelete/:petId', async (request, response) => {
    try {
      const { petId } = request.params;
      await adminmodel.findByIdAndDelete(petId);
      response.send('Record deleted Successfully');
    } catch (error) {
      console.error('Error deleting pet data:', error);
      response.status(500).send('Internal Server Error');
    }
  });



module.exports = app