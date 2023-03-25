const formatPrice = (price, noFree = false) => {
	price = price?.toString()?.replace(",", ".");
	price = parseFloat(price)?.toFixed(2)?.replace(".", ",");
	if (!noFree) {
		return price === "0,00" ? (
			"FREE"
		) : (
			<div style={{ display: "flex", alignItems: "center" }}>
				<div style={{ marginRight: "5px" }}>€</div>
				<div>{` ${price}`}</div>
			</div>
		);
	}
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div>€</div>
			<div>{` ${price}`}</div>
		</div>
	);
};
export default formatPrice;
