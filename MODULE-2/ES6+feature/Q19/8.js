//a
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id);
console.log(status);

//b
const idVal = 101;
const role = "admin";

const user2 = {
  idVal,
  role
};
console.log(user2);

//c
const name = "Laptop";
const price = 50000;

const item = {
  name,
  price,
  show() {
    console.log(`${name} costs ₹${price}`);
  }
};
item.show();