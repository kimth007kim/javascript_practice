// 여러 단어를 조합해서 프로퍼티 키를 만든경우에는 점표기법으로 프로퍼티를 읽을수 없다

let user = {};

// user["likes birds"] = true;
console.log(user["likes birds"]);

let key = "like birds";
user[key] = true;

// user.likes birds =true      //문법에러 발생
