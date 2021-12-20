import { shoppingCardItems } from "./_data";

// Klassischer Ansatz
// const withoutShippingFee = [];
// for (let i = 0; i < shoppingCardItems.length; i++) {
//   if (shoppingCardItems[i].shippingFee > 0) {
//     withShippingFee.push(shoppingCardItems[i]);
//   }
// }

const hasShippingFee = (item) => item.shippingFee > 0;

const withShippingFee = shoppingCardItems.filter(hasShippingFee);

const withoutShippingFee = shoppingCardItems.filter(
  (item) => !hasShippingFee(item)
);

console.log(withShippingFee);
console.log(withoutShippingFee);
