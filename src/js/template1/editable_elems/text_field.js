class Text_field{
    text_field_layout;
    text_field;
    edit_window;
    path = "images/chevron-vector-style1.png";
    path2 = "images/sprite.svg#check-solid";
    path3 = "images/sprite.svg#question-solid";
    reference;
    reference_text = 
    "HTML-элементы — основа языка HTML. Каждый HTML-документ состоит из дерева HTML-элементов и текста. Каждый HTML-элемент обозначается начальным (открывающим) и конечным (закрывающим) тегом. Открывающий и закрывающий теги содержат имя элемента. Например <h1>Заголовок</h1> это тег заголовка. Текст внутри такого тега будет выглядеть вот так";
    reference_header;
    isReferenceShowed = false;
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

        this.initialize_font_size_btn();
        this.initialize_font_style_btn();
        this.initializze_edit_text_btn();
        this.initialize_tags_btn();
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
        let p = document.createElement("p");
        p.innerText = "Размер шрифта";
        this.edit_window.window.append(p);

        let img_accept = document.createElement("img");
        img_accept.classList.add("font_editor_check_mate");
        img_accept.src = this.path2;        

        let input = document.createElement("input");
        input.classList.add("font_input_size");
        input.maxLength = "2";
        input.value = "25";
        input.size = "1";
        this.edit_window.window.append(input)
        

        let div_setting_accept = document.createElement("div");
        div_setting_accept.classList.add("icon_editor");
        this.edit_window.window.append(div_setting_accept);
        div_setting_accept.append(img_accept);

        div_setting_accept.addEventListener("click", () => {
            this.text_field.setAttribute("style", "font-size:"+input.value+"px");
        });

        input.addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                this.text_field.setAttribute("style", "font-size:" + input.value + "px");
            }
        });

        div_setting_accept.append(img_accept);

        let div_font_size = document.createElement("div");
        div_font_size.classList.add("select_font_section");
        this.edit_window.window.append(div_font_size);
        div_font_size.append(input);
        div_font_size.append(div_setting_accept);   
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

    initialize_tags_btn(){

        this.initialize_reference();
        let div = document.createElement("div");
        div.classList.add("select_font_section");
        let btn = document.createElement("p");

        let icon_edit = document.createElement("div");
        icon_edit.classList.add("icon_editor");

        icon_edit.addEventListener("click", () => {
           if(!this.isReferenceShowed){
                this.reference.style.display = "block";
                this.isReferenceShowed = true;
           }
           else{
            this.reference.style.display = "none";
            this.isReferenceShowed = false;
           }
        });

        let img_edit = document.createElement("img");
        img_edit.classList.add("font_editor_check_mate");
        img_edit.src = this.path3;
        icon_edit.append(img_edit);

        btn.classList.add("edit_text");
        btn.innerText = "Применить </html> теги";

        btn.addEventListener("click", () => {
            let text = this.text_field.innerText;
            this.text_field.innerHTML = text;
        });

        div.append(btn);
        div.append(icon_edit);
        this.edit_window.window.append(div);
    }

    initialize_reference(){
        this.reference = document.createElement("div");
        this.reference.classList.add("reference");
        this.reference.innerText = this.reference_text;

        this.reference_header = document.createElement("h1");
        this.reference_header.innerText = "Заголовок";
        this.reference.append(this.reference_header);
        this.edit_window.window.append(this.reference);
    }
}