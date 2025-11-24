//a
const nums = [1,2,3];
const newarr=[...nums,4,5];
console.log(newarr);

//b
const a1 = ["x", "y"];
const b1 = ["z"];
const combined = [...a1, ...b1];
console.log(combined);
//c
const printNames = (...names) => names;
console.log(printNames("Alice", "Bob", "Charlie"));
