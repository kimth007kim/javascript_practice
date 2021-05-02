let message = "Hello!";
let pharase = message;

let user = { name: "John" };
let admin = user;
admin.name = "Pete";

console.log(user.name);

let clone={};

for (let key in user){
    clone[key]=user[key]
    console.log(clone[key])
}