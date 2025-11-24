//a
const square=(n)=>{
    return n*n;
}
console.log(square(5));

//b
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
//this will log 'undefined' because arrow functions do not have their own 'this' context
//c
const obj1 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj1.test();
