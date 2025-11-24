const sum=(...nums)=>{

    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,2,3)); 
console.log(sum(10,20,30,40,50));