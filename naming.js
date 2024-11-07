// 코멘트가 필요할 땐 주석을 달면 됨

/*
* 이렇게 적어도 주석이 되기에
* 여러줄도 작성이 가능하다.
*/

// 변수 규칙!
// 라틴문자(0-9, a-z, A-Z, _)를 사용해야 한다.
// 변수는 대소문자를 구분한다
// 추천 : camelCase 표기법을 사용하는 것을 추천 (likeThis)
// 한국어 X 영어 O
// 예약어 X
// 숫자로 시작 X
// 특수문자 X (_ 와 $는 예외)
// 이모지 X
// 여러개의 변수를 1,2,3 숫자로 구분 X, 구체적인 이름으로 작성
// 한국 프로젝트라면 주석정도는 한국어로 작성해도 괜찮다.

let apple;
let redApple;

// 나쁜 예제
let number = 20;

// 좋은 예제
let muAge = 20;

// 나쁜 예제
let audio1;
let audio2;

// new old 도 안좋음

// 좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁! : 조금 더 구체적으로 작성
let audioBackground;
let audioWind;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
// https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Variables