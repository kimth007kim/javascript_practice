// 가비지 컬렉션
// 자바스크립트 에서는 눈에 보이지 않는곳에서 메모리 관리를 수행한다.

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);
