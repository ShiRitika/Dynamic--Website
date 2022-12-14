/* eslint-disable no-undef */
const mongoose = require("mongoose");
// const validator = require("validator"); //importing validator to validator.idate our contact page

const registerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    // type : String,
    // required : true,
    // validate(value){ //validating that value comes mst be valid
    //     if(!validator.isEmail(value)){
    //         throw new Error("invalid email id!")
    //     }
    // }
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

const Registration = mongoose.model("Registration", registerSchema);
module.exports = Registration;
