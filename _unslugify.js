import { capitalize } from ".";
const unSlugify = (text) => {
	text = text?.trim()?.replaceAll("-", " ");
	return capitalize(text);
};

export default unSlugify;
