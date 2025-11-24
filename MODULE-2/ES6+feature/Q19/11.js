//a
const arr = [10, 20, 30, 40, 50];
const arr2=[...arr];
console.log(arr2);

//b
const array1 = [1, 2, 3];
const array2=[100,...array1];
console.log(array2);

//c
const a1 = ["x", "y"];
const b1 = ["z"];
const combined = [...a1, ...b1];
console.log(combined);