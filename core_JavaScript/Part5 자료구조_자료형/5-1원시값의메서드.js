// 자바스크립트에서는 원시값String ,Number 등을 마치 객체처럼 다룰수 있게해준다.

// 원시형 != 객체

// 원시형: string,number,bigint,boolean,symbol,null,undefined 총 7개

// 객체: 프로퍼티에 다양한 종류의 값을 저장 가능
// 객체의 장점중 하나는 함수를 프로퍼티로 저장가능

let str = "Hello";
str.test = 5;
alert(str.test);

// 원시값은 추가 데이터를 저장할수없다.
