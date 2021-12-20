import { shoppingCardItems } from "./_data";

const sum = (sum, item) => {
  console.log("---", sum, item);
  return sum + item.price;
};

const totalPrice = shoppingCardItems(sum, 0);

console.log(totalPrice);
