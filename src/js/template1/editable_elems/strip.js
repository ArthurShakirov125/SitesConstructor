class Strip{
    editable_elem;
    strip;
    quantity_of_sec = 0;

    strip_layout = `<div class="temp_strip">
    </div>`;

    strip_layout_one_sec = `<div class="strip_one_sec"></div>`;

    strip_layout_two_sec = `
    <div class="strip_two_sec"></div>
    <div class="strip_two_sec"></div>
    `;

    strip_layout_three_sec = `
    <div class="strip_three_sec"></div>
    <div class="strip_three_sec"></div>
    <div class="strip_three_sec"></div>`;

    strip_layout_four_sec = `
    <div class="strip_four_sec"></div>
    <div class="strip_four_sec"></div>
    <div class="strip_four_sec"></div>
    <div class="strip_four_sec"></div>`;

    constructor(){
        this.initialize();
        this.editable_elem = new Editable_elem(this.strip, "strip");
    }

    initialize(){
        this.strip = document.createElement("div");
        this.strip.innerHTML = this.strip_layout;
    }
}

