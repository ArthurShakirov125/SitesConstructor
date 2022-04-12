class Edit_window{
    edit_window;
    dependent_elem;


    edit_window_layout_for_strip = `
    <h3>Settings<h3>
    <div class="pallete">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    `;

    edit_window_layout_for_gallery = `
    <h3>Settings<h3>
    `;

    edit_window_layout_for_text = `
    <h3>Settings<h3>
    `;


    constructor(elem, elem_type){
        this.edit_window = document.createElement("div");
        this.edit_window.classList.add("edit_window");
        this.initialize_edit_window(elem_type);
        document.querySelector("main").append(this.edit_window);
        this.dependent_elem = elem;
    }

    show(){
        this.edit_window.style.display = "block";
    }

    hide(){
        this.edit_window.style.display = "none";
    }

    initialize_edit_window(elem_type){
        switch (elem_type) {
            case "strip":
                this.edit_window.innerHTML = this.edit_window_layout_for_strip;
                break;

            case "gallery":
                this.edit_window.innerHTML = this.edit_window_layout_for_gallery;
            break;

            case "text":
                this.edit_window.innerHTML = this.edit_window_layout_for_text;
            break;
            default:
                break;
        }
    }
}