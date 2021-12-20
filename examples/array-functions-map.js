import { shoppingCardItems } from "./_data";

// Jedes Objekt im Array austauschen durch einen String
const shoppingCardDisplay = shoppingCardItems.map((item) => {
  return `${item.product}: ${item.quantity * item.price})`;
});

console.log(shoppingCardDisplay);
