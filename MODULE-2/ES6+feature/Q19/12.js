//a
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city); 

//b
console.log(user?.title?.job);

//c
const employee = {};
console.log(employee?.department?.name);