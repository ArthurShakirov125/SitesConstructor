class Editable_elem{
    html_elem;
    chosen_style = "solid blue 4px";
    isElemChosen = false;

    constructor(elem){
        this.html_elem = elem;
        this.initialize_elem();
    }

    initialize_elem(){
        this.html_elem.addEventListener("dblclick", () => {
            if(!this.isElemChosen){
                this.html_elem.style.border = this.chosen_style;
                this.isElemChosen = true;
            }
            else{
                this.html_elem.style.border = "none";
                this.isElemChosen = false;
            }
        });
    }

    sing_event(event_type, event_method){
        this.html_elem.addEventListener(event_type, event_method);
    }


}