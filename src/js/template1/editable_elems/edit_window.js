class Edit_window {
    edit_window;
    dependent_elem;

    edit_window_layout_for_strip = `
    <h3>Settings<h3>
    <div class="pallete">
    <div class="darkred"></div>
    <div class="red"></div>
    <div class="darkorange"></div>
    <div class="orange"></div>
    <div class="gold"></div>
    <div class="yellow"></div>
    <div class="green"></div>
    <div class="greenyellow"></div>
    <div class="steelblue"></div>
    <div class="cyan"></div>
    <div class="darkblue"></div>
    <div class="blue"></div>
    <div class="indigo"></div>
    <div class="purple"></div>
    <div class="pink"></div>
    <div class="black"></div>
    <div class="gray"></div>
    <div class="silver"></div>
    <div class="lightgrey"></div>
    <div class="white"></div>
    </div>
    `;

    edit_window_layout_for_gallery = `
    <h3>Настройки<h3>
    <div class="div_choose_picture">
    <p class="choose_picture">Выбор Картинки</p>
    </div>
    <div class= "div_choose_picture">
    <p class="delete_picture">Удаление картинок</p>
    </div>
    `;

    edit_window_layout_for_text = `
    <h3>Настройки<h3>
    <div class="select_font_section">
    <p>Выбор шрифта</p>
    <div>Montserrat <div class="icon_editor"><img class="font_editor_icon" src="images/chevron-vector-style1.png" alt=""></div></div>
    </div>
    <p>Размер шрифта</p>
    <div class="select_font_section"><input class="font_input_size" maxlength="2" value="25" size="1"> <div id="settings_accept" class="icon_editor"><img class="font_editor_check_mate" src="images/sprite.svg#check-solid" alt=""></div></div>
    <p>Эффекты</p>
    <div class="select_font_section"> 
    <button id="bold_button" class="effect_button"><div class="bold_effect">A</div></button>
    <button id="norm_button" class="effect_button"><div class="norm_effect">A</div></button>
    <button id="italic_button" class="effect_button"><div class="italic_effect">A</div></button>
    <button id="underline_button" class="effect_button"><div class="underline_effect">A</div></button>
    </div>
    `;


    constructor() {
        this.edit_window = document.createElement("div");
        this.edit_window.classList.add("edit_window");
        document.querySelector("main").append(this.edit_window);
    }

    show() {
        this.edit_window.style.display = "block";
    }

    hide() {
        this.edit_window.style.display = "none";
    }

    initialize_edit_window(elem, elem_type) {
        this.dependent_elem = elem;
        switch (elem_type) {
            case "strip":
                this.initialize_edit_window_for_strip();
                break;

            case "gallery":
                this.edit_window.innerHTML = this.edit_window_layout_for_gallery;
                break;

            case "text":
                this.initialize_edit_window_for_text();
                break;
            default:
                break;
        }
    }

    initialize_edit_window_for_text() {
        this.edit_window.innerHTML = this.edit_window_layout_for_text;
        this.initialize_font_size_btn();
        this.initialize_font_style_btn();
    }

    initialize_font_size_btn() {
        let font_size_button = new Edit_window(document.getElementById("settings_accept"));
        font_size_button.findDependentElement(document.querySelector(".text_field_text"));

        let font_size_input = document.querySelector(".font_input_size");

        font_size_button.addMethod("click", () => {
            let font_size = font_size_input.value;
            font_size_button.dependent_elem.setAttribute("style", "font-size:" + font_size + "px");
        });

        font_size_input.addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                let font_size = font_size_input.value;
                font_size_button.dependent_elem.setAttribute("style", "font-size:" + font_size + "px");
            }
        });
    }
    

    initialize_font_style_btn() {
      
    }


    initialize_edit_window_for_strip() {
        this.edit_window.innerHTML = this.edit_window_layout_for_strip;
        this.initialize_color_btn();
    }

    initialize_color_btn() {
        let btn = document.querySelector(".darkred");
        btn.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "darkred";
        });

        let btn1 = document.querySelector(".red");
        btn1.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "red";
        });

        let btn2 = document.querySelector(".darkorange");
        btn2.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "darkorange";
        });

        let btn3 = document.querySelector(".orange");
        btn3.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "orange";
        });

        let btn4 = document.querySelector(".gold");
        btn4.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "gold";
        });

        let btn5 = document.querySelector(".yellow");
        btn5.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "yellow";
        });

        let btn6 = document.querySelector(".green");
        btn6.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "green";
        });

        let btn7 = document.querySelector(".greenyellow");
        btn7.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "greenyellow";
        });

        let btn8 = document.querySelector(".steelblue");
        btn8.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "steelblue";
        });

        let btn9 = document.querySelector(".cyan");
        btn9.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "cyan";
        });

        let btn10 = document.querySelector(".darkblue");
        btn10.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "darkblue";
        });

        let btn11 = document.querySelector(".blue");
        btn11.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "blue";
        });

        let btn12 = document.querySelector(".indigo");
        btn12.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "indigo";
        });

        let btn13 = document.querySelector(".purple");
        btn13.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "purple";
        });

        let btn14 = document.querySelector(".pink");
        btn14.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "pink";
        });

        let btn15 = document.querySelector(".black");
        btn15.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "black";
        });

        let btn16 = document.querySelector(".gray");
        btn16.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "gray";
        });

        let btn17 = document.querySelector(".silver");
        btn17.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "silver";
        });

        let btn18 = document.querySelector(".lightgrey");
        btn18.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "lightgrey";
        });

        let btn19 = document.querySelector(".white");
        btn19.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "white";
        });
    }
}