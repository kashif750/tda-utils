const slugify = (text) => {
	text = text
		?.trim()
		?.replaceAll(/[ |\/]/g, "-")
		?.toLowerCase();
	return text;
};

export default slugify;
