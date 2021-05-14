const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
var bodyParser = require("body-parser");

var client = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "rest_api_test",
  multipleStatements: true,
});

var app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

var jsonParser = bodyParser.json();

app.get("/users", (req, res) => {
  return res.json(users);
});

app.post("/users", (req, res, next) => {
  // const name = req.body.name;
  const user = {
    loginid: req.body.loginid,
    password: req.body.password,
    nickname: req.body.nickname,
  };
  var params = [req.body.loginid, req.body.password, req.body.nickname];
  var sql = "Insert into users (loginid,password,nickname) VALUES (?,?,?) ";
  client.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
    }
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});

let users = [
  {
    id: 1,
    name: "Hyun",
  },
  {
    id: 2,
    name: "Kim",
  },
  {
    id: 3,
    name: "Lee",
  },
];

// curl -X GET 'http://127.0.0.1:3000/'
