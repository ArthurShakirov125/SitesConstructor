class Edit_window {
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
    <div class="select_font_section">
    <p>Выбор шрифта</p>
    <div>Montserrat <div class="icon_editor"><img class="font_editor_icon" src="images/chevron-vector-style1.png" alt=""></div></div>
    </div>
    <p>Размер шрифта</p>
    <div class="select_font_section"><input style="font-size: 20px; text-align: center;" maxlength="5" value="15" size="1"> <div class="icon_editor"><img class="font_editor_check_mate" src="images/sprite.svg#check-solid" alt=""></div></div>
    <p>Эффекты</p>
    <div> 
    <button><div style="font-family: bold; font-size: 20px;">A</div></button>
    <button><div style="font-size: 20px; font-family: italic;">A</div></button>
    <button><div style="font-style: italic; font-size: 20px;">A</div></button>
    <button><div style="font-style: uppercase; font-size: 20px;">A</div></button>
    <div>
    <a href="#"><div><img style="width: 50px" src="images/sprite.svg#palette-solid" alt=""></div></a>
    </div> 
    </div>
    `;


    constructor(elem, elem_type) {
        this.edit_window = document.createElement("div");
        this.edit_window.classList.add("edit_window");
        this.initialize_edit_window(elem_type);
        document.querySelector("main").append(this.edit_window);
        this.dependent_elem = elem;
    }

    show() {
        this.edit_window.style.display = "block";
    }

    hide() {
        this.edit_window.style.display = "none";
    }

    initialize_edit_window(elem_type) {
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