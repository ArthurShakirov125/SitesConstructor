class Text_field{
    text_field_layout;
    text_field;

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
    <p class="edit_text">Редактировать текст</p>
    `;
    
    constructor(){
        this.initialize();
        this.editable_elem = new Editable_elem(this.text_field, "text");
    }

    initialize(){
        this.text_field = document.createElement("div");
        this.text_field.classList.add("text_field");
        this.text_field_layout = `
        <p class="text_field_text">Это текст. Просто кликните дважды, чтобы
        добавить свой текст и настроить шрифт. Здесь вы можете рассказать посетителям подробнее о себе</p>
        `;
        this.text_field.innerHTML = this.text_field_layout;

    }


    initialize_edit_window_for_text() {
        this.window.innerHTML = this.edit_window_layout_for_text;
        this.initialize_font_size_btn();
        this.initialize_font_style_btn();
        this.initializze_edit_text_btn();
    }

    initialize_font_size_btn() {
        let font_size_btn = document.querySelector("#settings_accept");

        let font_size_input = document.querySelector(".font_input_size");

        font_size_btn.addEventListener("click", () => {
            this.dependent_elem.setAttribute("style", "font-size:" + font_size_input.value + "px");
        });

        font_size_input.addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                this.dependent_elem.setAttribute("style", "font-size:" + font_size_input.value + "px");
            }
        });
    }

    clearStyles(){
        this.dependent_elem.classList.remove("bold");
        this.dependent_elem.classList.remove("italic");
        this.dependent_elem.classList.remove("underline");
    }

    initialize_font_style_btn() {
        let button_bold = document.querySelector("#bold_button");
        button_bold.addEventListener("click", () => {
            this.dependent_elem.classList.add("bold");
        })

        let button_norm = document.querySelector("#norm_button");
        button_norm.addEventListener("click", () => {
            this.dependent_elem.setAttribute("style", "font-style: none")
            this.clearStyles();
        })

        
        let button_underline = document.querySelector("#underline_button");
        button_underline.addEventListener("click", () => {
            this.dependent_elem.classList.add("underline");
        })

       let btn_italic = document.querySelector("#italic_button");
       
       btn_italic.addEventListener("click", () => {
            this.dependent_elem.classList.add("italic");
       });
    }

    initializze_edit_text_btn(){
        let btn = document.querySelector(".edit_text");
        let isEditable = false;
        btn.addEventListener("click", () => {
            if(!isEditable){
                this.dependent_elem.setAttribute("contenteditable", "true");
                isEditable = true;
            }
            else{
                this.dependent_elem.setAttribute("contenteditable", "false");
            }
            
        });
    }
}