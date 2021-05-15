const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const tokenizer = require("./tokenizer");

// var tokenKey = "TEST_KEY11"; //토큰키 서버에서 보관 중요
// var token =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjE0NTU0LCJpYXQiOjE0MzUxMzA4NzMsImV4cCI6MTQzNTIxNzI3M30.EWNUjnktCWxlqAAZW2bb0KCj5ftVjpDBocgv2OiypqM";

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
      res.send({ result: true });
    }
  });
  // res.json(user);
});
app.get("/", (req, res) => {
  res.send("HEllo");

  var token = jwt.sign(
    {
      test: "Test",
    },
    secret
  );
});

app.post("/login", (req, res) => {
  const loginid = req.body.loginid;
  const password = req.body.password;

  var sql = "SELECT * FROM users where loginid=?";
  client.query(sql, [loginid], (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results[0]) {
      return res.send("아이디를 확인해봐요");
    }
    var user = results[0];
    const hash = crypto.createHmac("sha256", secret);
    return res.send(user.loginid);
  });
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
