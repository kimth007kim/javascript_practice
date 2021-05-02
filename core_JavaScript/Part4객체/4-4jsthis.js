let user = { name: "John" };
let admin = { name: "Kim" };

function sayHi() {
  console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin["f"]();
