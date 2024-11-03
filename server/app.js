// import the express library

var express = require("express");
var app = express();
const PORT = process.env.PORT || 8080;
var path = require("path");

var bodyParser = require("body-parser");
app.listen(PORT, () => console.log("Server started"));
// serve everything from build folder
app.use(express.static("build/static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require("mysql");
const { clear } = require("console");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3303",
  password: "password",
  database: "bulanbymannatvij",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/static/home.html"));
  console.log(req.body);
});
app.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/static/home.html"));
  console.log(req.body);
});

app.post("/enquire", function (req, res) {
  try {
    // Get the request body
    const reqBody = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    };
    console.log(req.body);
    const sql =
      "INSERT INTO contact_us (name, email, phone , message) VALUES (?,?,?,?)";

    con.query(sql, [
      reqBody.name,
      reqBody.email,
      reqBody.phone,
      reqBody.message,
    ]);
    console.log("1 record inserted");
    let rpath = "/";
    console.log(rpath);
    res.redirect(307, rpath);
    // res.send("Data inserted successfully");
  } catch (error) {
    console.log(error);
  }
});
