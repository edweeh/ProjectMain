
const mongoose=require("mongoose")
let sc=mongoose.Schema;
const adminSchema = new sc({
    PetName: String,
    Species: String,
    Petcode: String,
    Age: String,
    Gender: String,
    Breed: String,
    Color: String,
    Image: {
        data : Buffer,
        contentType:String,
    }, 
    Description: String,

    
  });
  
  var adminmodel =mongoose.model("Admin",adminSchema)
  module.exports =adminmodel;

