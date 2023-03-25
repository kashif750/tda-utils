const formatPriceDB = (price) => {
	price = price?.toString()?.replace(",", ".");
	price = parseFloat(price)?.toFixed(2);
	return parseFloat(price);
};
export default formatPriceDB;
