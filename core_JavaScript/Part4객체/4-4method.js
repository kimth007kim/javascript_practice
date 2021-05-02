// let user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log(`Hello ${user.name}`);
// };

// user = {
//   sayHi() {
//     console.log(`Hello ${user.name}`);
//   },
// };

let user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(user.name);
  },
};

user.sayHi();

let admin = user;
user = null;

admin.sayHi();
