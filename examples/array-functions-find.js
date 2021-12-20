import { shoppingCardItems } from "./_data";

//  Finde das erste zutreffende Element im Array

const hasShippingFee = (item) => item.shippingFee > 0;

const firstItemWithShippingFee = shoppingCardItems.find(hasShippingFee);

console.log(firstItemWithShippingFee);
