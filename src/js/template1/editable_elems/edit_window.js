class Edit_window {
    window;
    dependent_elem;
    isElemChosen = false;
    chosen_style = "solid blue 4px";


    constructor(elem) {
        this.dependent_elem = elem;
        this.initialize()
        this.window = document.createElement("div");
        this.window.classList.add("edit_window");
        document.querySelector("main").append(this.window);
    }

    initialize(){
        this.dependent_elem.addEventListener("dblclick", () => {
            if(!this.isElemChosen){
                this.dependent_elem.style.border = this.chosen_style;
                this.isElemChosen = true;
                this.show();
            }
            else{
                this.dependent_elem.style.border = "none";
                this.isElemChosen = false;
                this.hide();
            }
        });
    }

    show() {
        this.window.style.display = "block";
    }

    hide() {
        this.window.style.display = "none";
    }
}