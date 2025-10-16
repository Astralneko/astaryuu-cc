export default async function(eleventyConfig) {
	// Shortcodes used in content templates
	eleventyConfig.addPairedShortcode("textbox", async function(contents){
		if (arguments.length > 1 && (arguments[1].toUpperCase() === "HASLINKS" || arguments[1].toUpperCase() === "HAS LINKS")) {
			return `<div class=textbox>
	<div class=textbox-inner>
		${contents}
	</div>`
		} else {
			return `<div class=textbox>
	<div class=textbox-inner>
		${contents}
	</div>
</div>`
		}
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

