// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스라고 부름)가 복사되어 전달됨
let apple = {
    // 0x1234
    name : '사과',
}
let orange = apple; // 0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);

console.clear();

// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// 객체 타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = { // 메모리주소 : 0x1234 라면
    name : '사과'
};
let orange = apple; // 동일한 메모리주소 할당 : 0x1234
orange.name = '오렌지';
console.log(apple); // 결과 : 오렌지
console.log(orange); // 결과 : 오렌지