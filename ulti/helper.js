export const getDiscountedPricePercentage = (oriPrice, price) => {
  const discount = oriPrice - price;

  const discountPercentage = (discount / oriPrice) * 100;

  return discountPercentage.toFixed(2);
};
