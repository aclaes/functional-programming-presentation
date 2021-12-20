import { shoppingCardItems } from "./_data";

const sum = (a, b) => {
  return a + b;
};

const hasShippingFee = (item) => item.shippingFee > 0;

const totalShippingFee = shoppingCardItems
  .filter(hasShippingFee)
  .map((item) => item.shippingFee)
  .reduce(sum, 0);

console.log(totalShippingFee);
