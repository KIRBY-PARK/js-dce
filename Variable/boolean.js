// 불리언 타입 (참과 거짓 둘만 있음)
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

// 활용 예
let isFree = true;
let isActivated = false;
let isEntrolled = true;

console.log(isActivated);

// 이전의 콘솔 값은 모두 지움
console.clear();

// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);