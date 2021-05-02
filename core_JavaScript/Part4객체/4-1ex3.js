let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

sum = 0;

for (key in salaries) {
  sum += salaries[key];
}

console.log(sum);
