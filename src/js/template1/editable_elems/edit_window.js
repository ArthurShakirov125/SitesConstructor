class Edit_window {
    window;
    dependent_elem;
    isElemChosen = false;
    chosen_style = "solid blue 4px";
    close_wnd_btn;
    close_wnd_btn_img_path = "images/sprite.svg#xmark-solid";


    constructor(elem) {
        this.dependent_elem = elem;
        this.initialize()
        this.window = document.createElement("div");
        this.window.classList.add("edit_window");
        document.querySelector("main").append(this.window);
        this.initialize_close_wnd_btn();
    }

    initialize_close_wnd_btn(){
        this.close_wnd_btn = document.createElement("button");
        this.close_wnd_btn.classList.add("close_wnd_btn");
        let img = document.createElement("img");
        img.src = this.close_wnd_btn_img_path;
        this.close_wnd_btn.append(img);
        
        this.close_wnd_btn.addEventListener("click", () => {
            this.hide();
        });

        this.window.append(this.close_wnd_btn);
    }

    initialize(){
        this.dependent_elem.addEventListener("dblclick", () => {
            if(!this.isElemChosen){
                this.show();
            }
            else{
                this.hide();
            }
        });
    }

    show() {
        this.dependent_elem.style.border = this.chosen_style;
        this.isElemChosen = true;
        this.window.style.display = "block";
    }

    hide() {
        this.dependent_elem.style.border = "none";
        this.isElemChosen = false;
        this.window.style.display = "none";
    }
}