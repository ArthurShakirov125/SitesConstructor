class Editor{
    editor;
    tools_menu;
    hide_btn;
    show_tools_btn;

    constructor(){
        this.editor = document.querySelector(".editor");
        this.initialize_buttons();
        this.tools_menu = new Tools_menu(this.editor);
        
    }

    initialize_buttons(){
        this.initialize_hide_btn();
        this.initialize_menu_btn();
    }

    initialize_hide_btn(){
        this.hide_btn = document.querySelector(".btn_hide");
        this.hide_btn.addEventListener("click", () => {
            this.editor.style.display = "none";
        });
    }

    initialize_menu_btn(){
        this.show_tools_btn = document.querySelector(".btn_show_menu");
        this.show_tools_btn.addEventListener("click", () =>{
            this.tools_menu.show_or_hide();
        });
    }
}

class Tools_menu{
    isMenuShowed = false;
    menu_layout;
    editor;
    menu_content =`<h3>Инструменты</h3>
    <li>
    <ul class="add_strip">Добавить блок</ul>
    <ul class="add_text">Добавить текст</ul>
    <ul class="add_list">Добавить список</ul>
    <ul class="add_gallery">Добавить галлерею</ul>
    </li>`;

    add_strip_btn;
    add_text_field_btn;
    add_gallery_btn;
    add_list_btn;

    constructor(editor){
        this.editor = editor;
        this.menu_layout = document.createElement("div");
        this.menu_layout.classList.add("editor_window");
        this.menu_layout.style.display = "none";
        this.menu_layout.innerHTML = this.menu_content;
        editor.append(this.menu_layout);
        this.initialize_buttons();
    }

    show_or_hide(){
        if(!this.isMenuShowed){
            this.menu_layout.style.display = "block";
            this.isMenuShowed = true;
        }
        else{
            this.menu_layout.style.display = "none";
            this.isMenuShowed = false;
        }
    }

    initialize_buttons(){
        this.initialize_add_strip_btn();
        this.initialize_add_text_field_btn();
        this.initialize_add_gallery_btn();
        this.initialize_add_list_btn();
    }

    initialize_add_strip_btn(){
        this.add_strip_btn = document.querySelector(".add_strip");
        this.add_strip_btn.addEventListener("click", () => {
            let strip = new Strip();
            document.querySelector("main").append(strip.strip);
        });
    }

    initialize_add_text_field_btn(){
        this.add_text_field_btn = document.querySelector(".add_text");
        this.add_text_field_btn.addEventListener("click", () => {
            let text_field = new Text_field();
            document.querySelector("main").append(text_field.text_field);
        })
    }

    initialize_add_gallery_btn(){
        this.add_gallery_btn = document.querySelector(".add_gallery");
        this.add_gallery_btn.addEventListener("click", () => {
            let gallery = new Gallery();
            document.querySelector("main").append(gallery.gallery);
        })
    }

    initialize_add_list_btn(){
        this.add_list_btn = document.querySelector(".add_list");
        this.add_list_btn.addEventListener("click", () => {
            let list = new List();
            document.querySelector("main").append(list.list);
        })
    }
}