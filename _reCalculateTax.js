export const taxPercentage = parseFloat(21 / 121);

const reCalculateTax = (value) => {
	return parseFloat(value * taxPercentage);
};

export default reCalculateTax;
