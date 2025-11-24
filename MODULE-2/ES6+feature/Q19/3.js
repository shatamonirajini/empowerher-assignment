//a
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product, price: 12 };
console.log(copyProduct);
//b
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

//c
const maxValue=(...nums)=>{
    return Math.max(...nums);

}
console.log(maxValue(3,5,1,8,2));