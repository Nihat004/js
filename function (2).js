
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(5,8))
// ///////////////////////////////////////
// function cut(number) {
//   return number % 2 === 0;
// }
// console.log(cut(6))

// ///////////////////////////////////////
// function fullName(ad, soyad) {
//   return ad + " " + soyad;
// }
// console.log(fullName("Nihat","Qasimzade"))

// //////////////////////////////////////
// function Positive(number) {
//   return number >= 0;
// }
// console.log(Positive(-7))

// /////////////////////////////////////
// function faktorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * faktorial(number - 1);
//   }
// }
// console.log(faktorial(4))

// ////////////////////////////////////////////////
// function numbers(start, finish) {
//   if (start <= finish) {
//     console.log(start);
//     numbers(start + 1, finish);
//   }
// }
// console.log(numbers(3,7))

// //////////////////////////////////////////////////
//1,1,2,3,5,8
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b; // 3
    b = c; // 5
  }
  return b;
}

console.log(fib(5))

