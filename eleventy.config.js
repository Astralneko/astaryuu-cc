export default async function(eleventyConfig) {
	// Enable linkify
	
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
	
	eleventyConfig.addShortcode("placeholder", async function(contents){
	const class_name = (typeof arguments[1] !== 'number' || arguments[1] === 0) ? "textbox" : `grid-colspan-${arguments[1]}`
	
		return `<div class="${class_name}"></div>`
	});
	
	eleventyConfig.addPairedShortcode("textbox-link", async function(contents){
		return `	<div class=textbox-links>
		${contents}
	</div>
</div>`
	});
	
	eleventyConfig.addShortcode("oc-link-div", async function(name, filelink, characterlink, symbol1, symbol2, direction){
		return `	<div class="textbox">
		<div class="textbox-inner">
			<a href=${characterlink}><img src="${filelink}" width=40% style="float:${direction}; margin: 2.5%" class=image-link></a>
			<h2 style="text-align:${direction}">${name}<br>
			<i class="fas fa-${symbol1}"></i><i class="fas fa-${symbol2}"></i></h2>
		</div>
	</div>`
	})
};

// This named export is optional
export const config = {
  dir: {
    input: "_templates",
    output: "."
  }
};

