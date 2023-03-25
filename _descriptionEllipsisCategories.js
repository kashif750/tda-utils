const descriptionEllipsisCategories = (text = "") => {
	if (text?.length > 190) {
		text = `${text?.substring(0, 190)} ...`;
	} else if (text?.length === 0) {
		text = "N/A";
	}
	return text;
};
export default descriptionEllipsisCategories;
