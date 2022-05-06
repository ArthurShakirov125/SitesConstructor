class Text_field{
    text_field_layout;
    text_field;
    edit_window;
    path = "images/chevron-vector-style1.png";

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
    
    constructor(){
        this.initialize();
    }

    initialize(){
        this.text_field = document.createElement("div");
        this.text_field.classList.add("text_field");
        this.text_field_layout = `
        <p class="text_field_text">Это текст. Просто кликните дважды, чтобы
        добавить свой текст и настроить шрифт. Здесь вы можете рассказать посетителям подробнее о себе</p>
        `;
        this.text_field.innerHTML = this.text_field_layout;
        this.initialize_edit_window_for_text();

    }




    initialize_edit_window_for_text() {
        this.edit_window = new Edit_window(this.text_field);

        let head = document.createElement("h3");
        head.innerText = "Настройки";
        this.edit_window.window.append(head);

        this.initialize_font_btn();
        this.initialize_font_size_btn();
        //this.initialize_font_style_btn();
        this.initialize_font_style_btn();
        this.initializze_edit_text_btn();
    }

    initialize_font_btn(){
        let p = document.createElement("p");
        p.innerText = "Выбор шрифта";
        this.edit_window.window.append(p);

       

        let icon_edit = document.createElement("div");
        icon_edit.classList.add("icon_editor");
        this.edit_window.window.append(icon_edit);

        

        let img_edit = document.createElement("img");
        img_edit.classList.add("font_editor_icon");
        img_edit.src = this.path;
        icon_edit.append(img_edit);

        let montserrat = document.createElement("div");
        montserrat.innerText = "Montserrat";
        this.edit_window.window.append(montserrat);
        montserrat.append(icon_edit);


        let sel_font_sec = document.createElement("div");
        sel_font_sec.classList.add("select_font_section");
        this.edit_window.window.append(sel_font_sec);

       
        

    }

    initialize_font_size_btn() {
        
    }

    clearStyles(){
        this.text_field.classList.remove("bold");
        this.text_field.classList.remove("italic");
        this.text_field.classList.remove("underline");
    }

    initialize_font_style_btn() {


        let p = document.createElement("p");
        p.innerText = "Эффекты";
        this.edit_window.window.append(p);

        let select_font_section = document.createElement("div");
        select_font_section.classList.add("select_font_section");

        this.initialize_bold_button(select_font_section);
        this.initialize_norm_button(select_font_section);
        this.initialize_underline_button(select_font_section);
        this.initialize_italic_button(select_font_section);

        this.edit_window.window.append(select_font_section);
    }

    initialize_bold_button(select_font_section){

        let div = document.createElement("div");
        div.classList.add("bold_effect");
        div.innerText = "A";

        let button_bold = document.createElement("button");
        button_bold.append(div);
        button_bold.classList.add("effect_button");

        button_bold.addEventListener("click", () => {
            this.text_field.classList.add("bold");
        });

        select_font_section.append(button_bold);
    }

    initialize_norm_button(select_font_section){

        let div = document.createElement("div");
        div.classList.add("norm_effect");
        div.innerText = "A";

        let btn = document.createElement("button");
        btn.append(div);
        btn.classList.add("effect_button");

        btn.addEventListener("click", () => {
            this.clearStyles();
        });

        select_font_section.append(btn);
    }

    initialize_underline_button(select_font_section){

        let div = document.createElement("div");
        div.classList.add("underline_effect");
        div.innerText = "A";

        let btn = document.createElement("button");
        btn.append(div);
        btn.classList.add("effect_button");

        btn.addEventListener("click", () => {
            this.text_field.classList.add("underline");
        });

        select_font_section.append(btn);
    }

    initialize_italic_button(select_font_section){
        let div = document.createElement("div");
        div.classList.add("italic_effect");
        div.innerText = "A";

        let btn = document.createElement("button");
        btn.append(div);
        btn.classList.add("effect_button");

        btn.addEventListener("click", () => {
            this.text_field.classList.add("italic");
        });

        select_font_section.append(btn);
    }

    initializze_edit_text_btn(){
        let btn = document.createElement("p");
        btn.classList.add("edit_text");
        btn.innerText = "Редактировать текст";
        let isEditable = false;
        btn.addEventListener("click", () => {
            if(!isEditable){
                this.text_field.setAttribute("contenteditable", "true");
                isEditable = true;
            }
            else{
                this.text_field.setAttribute("contenteditable", "false");
                isEditable = false;
            }   
        });

        this.edit_window.window.append(btn);
    }
}