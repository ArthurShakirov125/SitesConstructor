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

    <div class="sec_btn add_sec">Добавить блок</div>
    <div class="sec_btn del_sec">Удалить блок</div>
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
    <div class="select_font_section"><input class="font_input_size" maxlength="5" value="15" size="1"> <div class="icon_editor"><img class="font_editor_check_mate" src="images/sprite.svg#check-solid" alt=""></div></div>
    <p>Эффекты</p>
    <div class="select_font_section"> 
    <button class="effect_button"><div style="font-weight: bold; font-size: 20px; cursor: pointer;">A</div></button>
    <button class="effect_button"><div style="font-weight: 100; font-size: 20px; cursor: pointer;">A</div></button>
    <button class="effect_button"><div style="font-style: italic; font-size: 20px; cursor: pointer;">A</div></button>
    <button class="effect_button"><div style="font-style: uppercase; font-size: 20px; cursor: pointer;">A</div></button>
    <a href="#"><img class="palette_button_foreground" src="images/sprite.svg#palette-solid" alt=""></a>
    <a href="#"><img class="palette_button_background" src="images/sprite.svg#palette-solid" alt=""></a>
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
                this.edit_window.innerHTML = this.edit_window_layout_for_text;
                break;
            default:
                break;
        }
    }


    initialize_edit_window_for_strip(){
        this.edit_window.innerHTML = this.edit_window_layout_for_strip;
        this.initialize_color_btn();
        //let add_btn = new Add_section_btn(this.dependent_elem);
    }

    initialize_color_btn(){
        let btn = document.querySelector(".darkred");
        btn.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "darkred";
        });

        let btn1 = document.querySelector(".red");
        btn1.addEventListener("click", () => {
            this.dependent_elem.style.backgroundColor = "red";
        });
    }
}

class Add_section_btn{
    strip;
    btn;
    constructor(strip){
        this.btn = document.querySelector(".add_sec");
        console.log(this.btn);
        this.strip = strip;
        this.initialize();
    }

    initialize(){
        this.btn.addEventListener("click", () => {
            this.add_section();
        });
    }

    add_section(){
        if(this.strip.quantity_of_sec == 0){
            this.strip.quantity_of_sec = 1;
            this.strip.innerHTML = this.strip.strip_layout_one_sec;
        }
        if(this.strip.quantity_of_sec == 1){
            this.strip.quantity_of_sec = 2;
            this.strip.innerHTML = this.strip.strip_layout_two_sec;
        }
        if(this.strip.quantity_of_sec == 2){
            this.strip.quantity_of_sec = 3;
            this.strip.innerHTML = this.strip.strip_layout_three_sec;
        }
        if(this.strip.quantity_of_sec == 3){
            this.strip.quantity_of_sec = 4;
            this.strip.innerHTML = this.strip.strip_layout_four_sec;
        }
        if(this.strip.quantity_of_sec == 4){
            return;
        }
    }

}