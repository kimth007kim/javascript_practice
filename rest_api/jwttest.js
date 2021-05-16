const jwt = require("jsonwebtoken");
const secret = "MY-SECRET";
const express = require("express");

const app = express();

app.post("/login", (req, res, next) => {
  const nickname = "kim";
  const password = "1234";

  token = jwt.sign(
    {
      type: "JWT",
      nickname: nickname,
      password: password,
    },
    secret
  );
  return res.status(200).json({
    code: 200,
    message: "토큰이 발급되었습니다.",
    token: token,
  });
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
