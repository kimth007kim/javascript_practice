let calculator = {
  read() {
    this.arg1 = +prompt("값을 어떤걸로 하실래요?", 0);
    this.arg2 = +prompt("값을 어떤걸로 하실래요?", 0);
  },
  sum() {
    return this.arg1 + this.arg2;
  },
  mul() {
    return this.arg1 * this.arg2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
