export default async function(eleventyConfig) {
	// Shortcodes used in content templates
	eleventyConfig.addPairedShortcode("textbox", async function(contents){
	const class_name = (typeof arguments[1] !== 'number' || arguments[1] === 0) ? "textbox" : `textbox grid-colspan-${arguments[1]}`
		const last_argument = arguments.length - 1
		if (arguments.length > 1 && (typeof arguments[last_argument] === 'string' || arguments[last_argument] instanceof String)) {
			if (arguments[last_argument].toUpperCase() === "HASLINKS" || arguments[last_argument].toUpperCase() === "HAS LINKS") {
				return `<div class="${class_name}">
	<div class=textbox-inner>
		${contents}
	</div>`
			}
		}
		return `<div class="${class_name}">
	<div class=textbox-inner>
		${contents}
	</div>
</div>`
	});
	eleventyConfig.addPairedShortcode("textbox-link", async function(contents){
		return `	<div class=textbox-links>
		${contents}
	</div>
</div>`
	});
};

// This named export is optional
export const config = {
  dir: {
    input: "_templates",
    output: "."
  }
};

