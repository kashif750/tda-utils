const titleEllipse = (text = "") => {
	if (text?.length > 41) {
		text = `${text?.substring(0, 41)} ...`;
	} else if (text?.length === 0) {
		text = "N/A";
	}
	return text;
};
export default titleEllipse;
