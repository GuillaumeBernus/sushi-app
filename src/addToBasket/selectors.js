export const basketCount = (basket) =>
  basket.reduce((total, basketItem) => total + basketItem.quantity, 0);
