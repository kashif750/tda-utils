const round = (num, decimalPlaces = 0) => {
	if (num < 0) {
		return -round(-num, decimalPlaces);
	}
	var p = Math.pow(10, decimalPlaces);
	var n = (num * p).toPrecision(15);
	return Math.round(n) / p;
};

export default round;
