const capitalize = (text = "") => {
	if (text?.length > 0) {
		text = text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
	} else {
		text = "N/A";
	}
	return text;
};
export default capitalize;
