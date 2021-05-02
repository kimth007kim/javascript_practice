// 중괄호 안에는 키 (key) 값(value),쌍으로 구성된 프로퍼티(property)를 여러개 넣을수 있다.

// 빈 객체를 만드는 방법은 두가지

let user = new Object(); // 객체 생성자 문법
let user = {}; // 객체 리터럴 문법

let user = {
  //객체
  name: "John", //키:name,값:"John"
  age: 30, //키:name,값:30
};

// 객체 user에는 property 가 두개 있다. 1. 키:name,값:"John" 2.키:name,값:30

// delete user.age;  // 프로퍼티 삭제
console.log(user.name);
console.log(user.age);
