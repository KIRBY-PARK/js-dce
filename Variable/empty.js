// null, undefined
let variable; // undefined : 있는지 없는지, 변수인지 아닌지 확정되지 않은 상태
console.log(variable);

// 이 변수에는 아무것도 담고 있지 않다.
variable = null; // 비어있다
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

console.log(typeof null); // 비어있는 상태
console.log(typeof undefined); // 정해져있지 않은 상태