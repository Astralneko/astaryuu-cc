class HTMLInclude extends HTMLElement {
	constructor(src) {
		super();
		this.attachShadow({mode: "open"});
		if (src) { 
			this.textContent = src;
		}
		setTimeout(() => this._load());
	}
	async _load() {
		let src = this.textContent.trim();
		
		if (!src) {
			throw new Error("URL missing between <html-import> tags.");
		} 
		let rsp = await fetch(src);
		
		if (rsp.status != 200) {
			throw new Error(`Failed to load file (${src}) for <html-import>.`);
		}
		this.shadowRoot.innerHTML = await rsp.text();
	}
}
customElements.define("html-include", HTMLInclude);

class NguhLink extends HTMLElement {
	static observedAttributes = ["href"];
	
	constructor(src) {
		super();
		this._href = null;
	}
	
	_load_link() {
		this.innerHTML = "<a href=\"https://mc.nguh.org/wiki/" + this.getAttribute("href") + "\">" + this.innerHTML + "</a>";
	}
	attributeChangedCallback(name, oldValue, newValue) {
		this._href = newValue;
		_load_link();
		console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
		);
	}
}
customElements.define("nguh-link", NguhLink);