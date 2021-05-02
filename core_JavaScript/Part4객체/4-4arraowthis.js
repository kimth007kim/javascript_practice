let user = {
  firstName: "kim",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user.sayHi();
