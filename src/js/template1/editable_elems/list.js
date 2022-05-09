class List{
    list;
    edit_window;
    list_layout;

    constructor(){
        this.initialize();
    }

    initialize(){
        this.list = document.createElement("div");
        this.list.classList.add("list");
        this.initialize_list_layout();
        this.edit_window = new Edit_window(this.list);
        this.initialize_edit_window();
    }

    initialize_list_layout(){
        this.list_layout = document.createElement("ul");

        for(let i = 0; i < 4; i++){
            console.log(i);
            let li = document.createElement("li");
            li.innerText = "Элемент списка";
            this.list_layout.append(li);
        }

        this.list.append(this.list_layout);
    }
    initialize_edit_window(){
        let head = document.createElement("h3");
        head.innerText = "Настройки";
        this.edit_window.window.append(head);

        this.initialize_display_btn();
        this.initializze_edit_text_btn();

    }

    initialize_display_btn(){
        let p = document.createElement("p");
        p.innerText = "Расположение элементов";
        this.edit_window.window.append(p);

        let div = document.createElement("div");
        div.classList.add("select_font_section");

        let btn_horiz = document.createElement("div");
        let btn_vert = document.createElement("div");

        btn_horiz.innerText = "==";
        btn_vert.innerText = "||";

        btn_horiz.classList.add("effect_button");
        btn_vert.classList.add("effect_button");

        btn_horiz.addEventListener("click", () => {
            this.list_layout.setAttribute("style", "display:" + "flex");
        });

        btn_vert.addEventListener("click", () => {
            this.list_layout.setAttribute("style", "display:" + "block");
        });

        div.append(btn_horiz, btn_vert);
        this.edit_window.window.append(div);


    }

    initializze_edit_text_btn(){
        let btn = document.createElement("p");
        btn.classList.add("edit_text");
        btn.innerText = "Редактировать текст";
        let isEditable = false;
        btn.addEventListener("click", () => {
            if(!isEditable){
                this.list_layout.setAttribute("contenteditable", "true");
                isEditable = true;
            }
            else{
                this.list_layout.setAttribute("contenteditable", "false");
                isEditable = false;
            }   
        });

        this.edit_window.window.append(btn);
    }
}