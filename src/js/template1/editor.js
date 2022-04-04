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
    <ul class="add_strip">Добавить элемент</ul>
    <ul class="add_list">Добавить элемент</ul>
    <ul class="add_form">Добавить элемент</ul>
    <ul class="add_gallery">Добавить элемент</ul>
    </li>`;
    

    constructor(editor){
        this.editor = editor;
        this.menu_layout = document.createElement("div");
        this.menu_layout.classList.add("editor_window");
        this.menu_layout.style.display = "none";
        this.menu_layout.innerHTML = this.menu_content;
        editor.append(this.menu_layout);
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




}