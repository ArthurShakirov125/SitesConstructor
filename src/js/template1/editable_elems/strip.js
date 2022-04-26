class Strip{
    editable_elem;
    strip;

    strip_layout = `<div class="temp_strip">
    </div>`;

    constructor(){
        this.initialize();
        this.editable_elem = new Editable_elem(this.strip, "strip");
    }

    initialize(){
        this.strip = document.createElement("div");
        this.strip.innerHTML = this.strip_layout;
    }
}

