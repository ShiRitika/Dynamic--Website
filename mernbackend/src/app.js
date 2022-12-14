/* eslint-disable no-undef */
const express = require("express"); //importing express built-in func
const path = require("path"); //importing path
const dotenv = require("dotenv");
require("./db/connect"); //importing connection file to connect wid mongodb
const User = require("./models/usermessage"); //importing
const Registration = require("./models/registration");
const app = express(); //making it executable
const hbs = require("hbs"); //telling express we require hbs(template engine)

dotenv.config({ path: "config.env" });
const port = process.env.PORT || 8080;

const static_path = path.join(__dirname, "../public"); //seting path for public folder
const templates_path = path.join(__dirname, "../templates/views"); //setting the path of templates folder
const partials_path = path.join(__dirname, "../templates/partials"); //adding path of partoals folder
console.log(static_path);

//middleware
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
); //we had passed route to /css
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(
  "/jq",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

app.use(express.urlencoded({ extended: false })); //to get data whatever we had enter in contact page
app.use(express.static(static_path)); //tell express to use static app
app.set("view engine", "hbs"); //setting our template engine(hbs)
app.set("views", templates_path); //we are telling our express that views folder is now templatespath
hbs.registerPartials(partials_path); //we need to register our partial file

app.get("/index", (req, res) => {
  res.render("index"); //render(display) file index
});

//--------------code to get register page---------------
app.get("/register", (req, res) => {
  res.render("register"); //render(display) register file
});

//app.get(path, callback func)
app.get("/", (req, res) => {
  //rounting with respond
  res.send("hello welcome to my page");
});

app.get("/login", (req, res) => {
  res.render("login"); //render(display) register file
});

//--------------- create a new user in database---------
app.post("/registration", async (req, res) => {
  //wehen data get enter submit button click send data to contact page
  try {
    const password = req.body.password;
    const confirm_password = req.body.confirmpassword;
    if (password === confirm_password) {
      // const registerUser = new Registration({
      //     name : req.body.name,
      //     email : req.body.email,
      //     phone : req.body.phone,
      //     password : req.body.password,
      //     confirmpassword : confirm_password
      // })

      const registered = new Registration(req.body);
      await registered.save();
      // const registered = await registerUser.save();
      res.status(201).render("register");
    } else {
      res.send("password are not matching");
    }
  } catch (error) {
    res.sendStatus(400).send(error); //otherwise error
  }
});

app.post("/contact", async (req, res) => {
  //wehen data get enter submit button click send data to contact page
  try {
    // res.send(req.body); //if try then send data
    const userData = new User(req.body); //sending data to db
    await userData.save();
    res.status(201).render("contact");
  } catch (error) {
    res.send(500).send(error); //otherwise error
  }
});

// ----------login form post-------------------
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    // console.log(`${email} and pass is ${password}`);
    const userEmail = await Registration.findOne({ email: email });
    // res.send(userEmail);
    // console.log(userEmail);
    // console.log(userEmail.password);
    if (userEmail.password === password) {
      res.status(201).render("index");
    } else {
      res.send("password is not matching!");
    }
  } catch (error) {
    res.status(400).send("invalid! Email");
  }
});

// app.listen(4000);//port set (server creation)
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
