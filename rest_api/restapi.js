const { response } = require("express");
var express = require("express");

var app = express();

app.get("/", (req, res) => {
  req.send("Hello world!");
});

app.get("/users", (req, res) => {
  return res.json(users);
});
app.post("/user", (req, res) => {
  id = req.loginid;
  password = req.password;
  nickname = req.nickname;
  try {
    const {};
  } catch (error) {
    console.log(err);
    response(res, 500, "서버에러");
  }
  return true;
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
