const jwt = require("jsonwebtoken");

const secret_key = "TEST_KEY11";

exports.createToken = async function (req, res, next) {
  try {
    var user = results[0];
    const token = jwt.sign(
      {
        user_id: user[0].user_id,
      },
      YOUR_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("user", token);
    res.status(201).json({
      result: "ok",
      token,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.createNewUser = async function (req, res, next) {
  try {
    client.query(sql, [loginid], (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results[0]) {
        return res.send("아이디를 확인해봐요");
      }
      var user = results[0];
    });
    res.status(201).json({
      result: "ok",
      user: user,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
