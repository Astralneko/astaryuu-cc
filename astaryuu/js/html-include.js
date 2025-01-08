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