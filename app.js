const express = require("express");
const mainRoute = require("./Routes/mainRoute");
const studentRoute = require("./Routes/studentRoute");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

//create express app
const app = express();
const port = 5000;

app.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
});

//configuring the use of static files
app.use(express.static("public"));
//configure EJS Engine as Default view engine
app.set("view engine", "ejs");
//configure flash message
app.use(cookieparser("AbcEdfGJH"));
app.use(
  session({
    secret: "AbcEdfGJH",
    saveUninitialized: true,
    resave: false,
  })
);
app.use(flash());

//Middleware to access the form that has been sent
app.use(express.urlencoded({ extended: true }));
app.use(mainRoute);
app.use("/student", studentRoute);
app.use((req, res) => {
  res.send("<h1>Page not found</h1>");
});
