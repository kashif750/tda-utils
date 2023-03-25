const formatPriceCalculation = (price) => {
	price = price?.replace(",", ".");
	return parseFloat(price);
};
export default formatPriceCalculation;
