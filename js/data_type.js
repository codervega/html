let var2 = 'Abhishek shukla';
console.log(typeof var2);
var2 = 21;
console.log(typeof var2);
var2 = 21.2;
console.log(typeof var2);
var2 = true;
console.log(typeof var2);
var2 = NaN;
console.log(typeof var2);

// TYPE CASTING IN JAVASCRIP
// to convert from string  to number we basically have three method in javascript
// 1) parseInt
// 2) Number
// 3) plus AbortSignal(+) 
// will try to understand each of this concept in dept and explore all of this with an example

let num = '12';
let newnum = parseInt(num);
console.log(newnum);

let newnum2 = Number(num);
console.log(newnum2);

let newnum3 = +num;
console.log(newnum3);