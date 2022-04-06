class Edit_window{
    edit_window;
    dependent_elem;
    edit_window_layout = `
    <h3>Settings<h3>
    `;


    constructor(elem){
        this.dependent_elem = elem;
        this.edit_window = document.createElement("div");
        this.edit_window.innerHTML = this.edit_window_layout;
        this.edit_window.classList.add("edit_window");
        document.querySelector("main").append(this.edit_window);
    }

    show(){
        this.edit_window.style.display = "block";
    }

    hide(){
        this.edit_window.style.display = "none";
    }
}