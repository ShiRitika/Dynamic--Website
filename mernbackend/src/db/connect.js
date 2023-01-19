/* eslint-disable no-undef */
const mongoose = require("mongoose"); //importing mongoose

//-----------------connection creation and creating a new db------------------------
mongoose
  .connect("mongodb://127.0.0.1/UserRegistration", {
    useNewUrlParser: true, //for neglacting duplication warning
    useUnifiedTopology: true,
  })
  .then(() =>
    //this connection always return promise so we need to get it
    console.log("connection successfull")
  )
  .catch(
    (
      error //when promise return error
    ) => console.log(error)
  );

  