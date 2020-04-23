Paint(그림판)만들면서 모르는기술들, 들어간기술들

#2.0 Canvas Events
*offset: 캔버스 부분과 관련이 있는 값이다.

*offsetX, offsetY
위 메서드는 이벤트 대상이 기준이 됩니다. ( 화면 중간에 있는 박스 내부에서 클릭한 위치를 찾을 때 해당 박스의 왼쪽 모서리 좌표가 0이됩니다. 화면의 기준이 아닙니다)
전체 문서를 기준으로 합니다(스크롤 화면 포함)

-offsetX : 이벤트 대상 객체에서의 상대적 마우스 x좌표 위치를 반환합니다.

-offsetY : 이벤트 대상 객체에서의 상대적 마우스 y좌표 위치를 반환합니다.

clientX,Y는 이 윈도우 전체 범위내에서 마우스의 위치값을 나타낸다.

*var, let, const의 차이점

-var:변수를 한번 선언하고 또 선언하면 에러가 나오지 않고 각기 다른값이 출력
	유연한 변수 선언으로 간단한 테스트에 편리함
	단점: 1. 코드량이 많아지면 어디서 사용될지 파악힘듬
	        2. 값이 바뀔 우려가 있다.

-let: 변수의 재선언은 불가능하지만 재 할당(값을 다시준다)는 가능하다.
ex) let name = 'bathingape'
    console.log(name) // bathingape

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) //react

-const:변수 재선언, 변수 재할당 모두 불가능하다.
    const name = 'bathingape'
    console.log(name) // bathingape

    const name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) 
    //Uncaught TypeError: Assignment to constant variable.

그러므로 테스트할때는 var을 사용하고 변수를 재할당할때는 let을 주자 그리고 상수를 선언할떄는 const를주자.

#2.1 2D Context

*canvas: context를 가진 HTML의 요소
*context: canvas안에서 픽셀을 다루는 것
*Strokestyle: 색상이나 스타일을 라인에 사용할수 있다.

*Path: 기본적인 선을 나타낸다.
-.beginpath():  선을 시작한다.
-.closepath(): 선을 끝낸다.
-.moveto():x,y로 subpath를 옮긴다.
-.lineto(): 현재의 subpath의 마지막 점을 특정 좌표와 직선으로 연결한다.
-.storke()-현재의 fillStyle로 sub-path에 획을 긋는다.

#2.2 Recap!(복습)

*우리는기본적으로 canvas를 css로 만든다.
pixel을 다룰수있는 element로 만드는거니까 width 와height를 지정해줘야한다.

canvas는 어마어마한 능력(픽셀을 다루는 능력)을 갖고있는 html5의 한요소이다.
우리가 다루는 픽셀을 다루는 윈도우가 얼마나큰지 canvas에게 width와 height를 알려줘야한다.
canvas의 context를 갖는것도 v필요하다.
canvas의 context는 이 안에서 픽셀들을 컨트롤 하는것이다.
이경우엔 2d이다.

*ctx.strokeStyle은 우리가 그릴 선들이 모두 이색을 갖는다고 말해주는것이다.
*stroke-영어로 획을 긋는다는 뜻이다.

*onMouseMove-마우스를 움직이는 어떠한 순간에도 동작을 한다.
path는 마우스를땔때까지 다른path가 생성되지 않는다 계속 이을 뿐!

*.lineTo : 현재의 sub-path에서 마지막 지점을 특정좌표로 연결한다.

*canvas에대해서 더 알고싶으면 CanvasRenderingContext2D,Canvas  API를 확인해보자
https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D

#2.3 Changing Color
array에 대해서 공부해보기
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);


*Array.from() 이란?
유사 배열객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만듭니다.

1)구문
Array.from(arrayLike)
-arrayLike: 배열로 변환하고자하는 유사 배열 객체나 반복 가능한 객체

*Array.prototype.forEach()란?

1)구문
arr.forEach(callback)
-callback- 각 요소에 대해 실행할 함수.

foreach()는 주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한번 씩 실행합니다.
삭제했거나 초기화 하지않은 인덱스 속성에 대해서는 실행하지 않습니다.

foreach()메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.



*화살표 함수란?
화살표 함수 표현은 function 표현에 비해 구문이 짧고 자신의 this,argument,super또는 new.target을
바인딩 하지 않는다. 화살표함수는 항상익명이다. 이 함수 표현은 메소드함수가 아닌곳에 가장 적합하다.
그래서 생성자로서 사용할수 없다.

() => { ... } // 매개변수가 없을 경우
x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

1)예시
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

materials.map(function(material) { 
  return material.length; 
}); // [8, 6, 7, 9]

// 위에 있는 함수를 화살표 함수를 이용해 아래와 같이 표현할 수 있다
materials.map((material) => {
  return material.length;
}); // [8, 6, 7, 9]



*함수표현식: Function Expressions 이란?
자바스크립트에서 표현식이란, 값을 반환하는 식 또는 코드이다.
ex)
const sayHello = function(){ console.log('hello') };

여기에서는 SayHello라는 변수로 참조값이 저장된다.

#2.4 Brush Size

*Override 란?
부모의 메소드를 재정의 하는것이다.

*InnerText() 이란?
1)개념
 html 문서의 내용을 바꾼다.
2)예제

var HTML = '<table><tr><td></td></tr></table>';

1.document.getElementByid("content").innerHTML=HTML;
2.document.getElementByid("content").innerText=HTML;
 
1번결과: 테스트
2번결과: <table><tr><td></td></tr></table>;

*매개변수가 없는 이유?
function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}
if (mode) {
  mode.addEventListener("click", handleModeClick);
}

1)이유
event라는 변수는 있지만 쓸일이 없어서 매개변수로 쓰지 않았다.

#2.5 Filling Mode
*canvas의 적용방식
-canvas는 항상 위에서 부터 아래로 적용이 된다.

*ctx.fillRect();
-사각형을그린다.

*정리
ctx.strokeStyle()-도형의 윤곽선 색을 설정합니다.
ctx.fillStyle() -도형을 채우는 색을 설정합니다.
ctxRect()-사각형을 그린다.

#2.6 Saving the Image

*event.preventDefault();
1)개요
이벤트를 취소 할수 있는 경우,이벤트의 전파를 막지 않고 그 이벤트를 취소한다.
2)주의
이벤트를 취소하는 도중에 preventDefault를 호출하게 되면, 일반적으로 브라우저의 구현에 의해
처리되는 기존의 액션이 동작하지 않게되고, 그 결과 이벤트가 발생하지 않게 됩니다.

*HTMLCanvasElement.toDataURL()
1)개요
HTMLCanvasElement.toDataURL()는  나타내는 이미지의 특정한  포맷 담고있는 dataURI를 리턴한다.
(기본값은 PNG이다)

2)구문
canvas.toDataURL(type, encoderOptions);
인자 
-type
이미지의 포맷을 가리킨다. 기본값은 image/png이다.


                                     

















































