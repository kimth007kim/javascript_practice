// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(arr) {
  for (key in arr) {
    if (typeof arr[key] == "number") {
      arr[key] = arr[key] * 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu);
// // 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
