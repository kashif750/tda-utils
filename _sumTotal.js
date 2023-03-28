import round from "./_round";

function sumTotal(a, b, ...c) {
	let sum = a + b;
	for (let num of c) {
		sum += num;
	}
	return round(sum, 2);
}
export default sumTotal;
