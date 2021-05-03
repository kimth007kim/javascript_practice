let user = {
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]);
