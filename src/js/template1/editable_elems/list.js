class List{
    list;
    edit_window;
    list_layout;
    listItems = [];

    arrows = [
        "images/sprite.svg#chevron-up-solid",
        "images/sprite.svg#angle-right-solid",
        "images/sprite.svg#chevron-down-solid",
        "images/sprite.svg#angle-left-solid"
    ]

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
            let li = document.createElement("li");
            li.innerText = "Элемент списка";
            this.list_layout.append(li);
            this.listItems[i] = li;
        }

        this.list.append(this.list_layout);
    }
    initialize_edit_window(){
        let head = document.createElement("h3");
        head.innerText = "Настройки";
        this.edit_window.window.append(head);

        this.initialize_display_btn();
        this.initializze_edit_text_btn();
        this.initialize_margin();

    }

    initialize_display_btn(){
        let p = document.createElement("p");
        p.innerText = "Расположение элементов";
        this.edit_window.window.append(p);

        let div = document.createElement("div");
        div.classList.add("select_font_section");

        let btn_horiz = document.createElement("div");
        let btn_vert = document.createElement("div");

        btn_horiz.innerText = "Горизонтальное выравнивание";
        btn_vert.innerText = "Вертикальное выравнивание";

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

    initialize_margin(){
        let p = document.createElement("p");
        p.innerText = "Отступы";
        this.edit_window.window.append(p);

        let div = document.createElement("div");
        div.classList.add("select_margin_section");

        let fourMargins = [];

        for(let i = 0; i < 4; i++){
            let input = document.createElement("input");
            input.classList.add("font_input_size");
            input.value = "0";
            input.size = "1";
            input.maxLength = "2";
            fourMargins[i] = input;

            let wrap = document.createElement("div");
            let arrw = document.createElement("img");
            arrw.classList.add("ArrowPic");
            arrw.src = this.arrows[i];
            wrap.append(arrw);
            wrap.append(input);

            input.addEventListener("keydown", (e) => {
                if (e.code == "Enter") {
                    let top = fourMargins[0].value + "px ";
                    let right = fourMargins[1].value + "px ";
                    let bottom = fourMargins[2].value + "px ";
                    let left = fourMargins[3].value + "px";

                    this.listItems.forEach(element => {
                        element.setAttribute("style", "margin:" + top + right + bottom + left);
                    }); 
                }
            })

            div.append(wrap);
        };



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