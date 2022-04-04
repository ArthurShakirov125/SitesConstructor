class Strip{
    strip;
    strip_layout = `<div class="temp_strip"></div>`;

    constructor(){
        this.strip = document.createElement("div");
        this.strip.innerHTML = this.strip_layout;
    }
}

