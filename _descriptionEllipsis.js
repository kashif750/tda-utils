const descriptionEllipsis = (text = "") => {
	if (text?.length > 303) {
		text = `${text?.substring(0, 300)} ...`;
	} else if (text?.length === 0) {
		text = "N/A";
	}
	return text;
};
export default descriptionEllipsis;
