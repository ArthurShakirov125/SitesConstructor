class Editable_elem{
    html_elem;
    chosen_style = "solid blue 4px";
    isElemChosen = false;
    edit_window;

    constructor(elem){
        this.html_elem = elem;
        this.edit_window = new Edit_window(this.html_elem);
        this.initialize_elem();
        
    }

    initialize_ele(){
        this.html_elem.addEventListener("dblclick", () => {
            if(!this.isElemChosen){
                this.html_elem.style.border = this.chosen_style;
                this.isElemChosen = true;
                this.edit_window.show()
            }
            else{
                this.html_elem.style.border = "none";
                this.isElemChosen = false;
                this.edit_window.hide();
            }
        });
    }




}