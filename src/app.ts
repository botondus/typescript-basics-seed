const pizza = {
  name: "Pepperoni",
  price: 15,
  getName() {
    return this.name;
  }
};

const toppings = ["pepperoni"];

console.log(pizza.getName());

function createOrder(pizza, toppings) {
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));
