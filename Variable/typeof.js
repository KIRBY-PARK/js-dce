// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable); // Type : undefined

variable = '';
console.log(typeof variable); // Type : String

variable = 123; // 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable); // Type : Number

variable = {};
console.log(typeof variable); // Type : Object

variable = function (){};
console.log(typeof variable); // Type : Function

variable = Symbol();
console.log(typeof variable); // Type : Symbol

// C나 Java
// Int variable = 0; 컴파일할 때 이건 int타입이다! 정적타입이라고 결정됨, 한 번 명시되어있다면 다른 타입으로 할당할 수 없음