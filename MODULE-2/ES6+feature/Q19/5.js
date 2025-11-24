for (var i = 0; i < 3; i++) {}
console.log(i);
//var is function scope so it prints 3

//b
for (let j = 0; j < 3; j++) {}
console.log(j);
//let is block scop it gives error

//c
//const is a variable that cannot be reassigned and is safe to use for constants