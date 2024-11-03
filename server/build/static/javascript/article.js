// import the express library

var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");
app.listen(80);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require("mysql");
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
  res.sendFile(path.join(__dirname, "../", "home.html"));
  // console.log(req.body);
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
    res.send("Data inserted successfully");
  } catch (error) {
    console.log(error);
  }
});
