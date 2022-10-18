/* eslint-disable no-undef */
const mongoose = require("mongoose"); //importing mongoose for defining schema & models
const validator = require("validator"); //importing validator to validator.idate our contact page


//--------------- defining schema/structure---------------
const userSchema = mongoose.Schema({
    name : {
        type : String, //in name it must accept string
        required : true, //name field must be required
        minLength : 3  //name must be atleast 3 character
    },
    email : {
        type : String,
        required : true,
        validate(value){ //validating that value comes mst be valid 
            if(!validator.isEmail(value)){
                throw new Error("invalid email id!");
            }
        }
    },
    phone : {
        type : Number,
        required : true,
        min : 10
    },
    message : {
        type : String, //it must accept string
        required : true, //field value must be required
        minLength : 3  //it must be atleast 3 character
    } ,
    date : {
        type : Date,
        default : Date.now
    }
});
//---------------- we had set our Schema----------------------------------------//

// we need a Collection
const User = mongoose.model("User" , userSchema);
module.exports = User;



