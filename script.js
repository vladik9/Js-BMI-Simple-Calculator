//server express
const express = require("express");
// method to acces the element on the server
const bodyParser = require("body-parser");

//create an variable
//whit acces to the server express
const app = express();
// create a acces to the urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// on user call the root / is been redirected to the html page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html"); // __dirname is implicite file location
});
// the same as up but directly whit bmiCalculator name
app.get("/bmiCalculator", function (req, res) {
  // bmiCalculator -> currently page that is called
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//post information from page
app.post("/bmiCalculator", function (req, res) {
  let w = Number(req.body.weight); // get 2 variable via html input name
  let h = Number(req.body.height);
  let bmi = w / (h * h);
  res.send(`Your BMI is: ${bmi}`); // send back a response
});

app.listen(8080, function () {
  // listen to port 8080
  console.log("server start at port: 8080");
});
