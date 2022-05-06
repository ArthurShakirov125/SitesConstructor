class Strip{
    editable_elem;
    strip;
    edit_window;

    colors = [
        "darkred",
        "red",
        "darkorange",
        "orange",
        "gold",
        "yellow",
        "green",
        "greenyellow",
        "steelblue",
        "cyan",
        "darkblue",
        "blue",
        "indigo",
        "purple",
        "pink",
        "black",
        "gray",
        "silver",
        "lightgrey",
        "white",
    ]

    strip_layout = `<div class="temp_strip">
    </div>`;

    constructor(){
        this.initialize();
    }

    initialize(){
        this.strip = document.createElement("div");
        this.strip.innerHTML = this.strip_layout;
        this.edit_window = new Edit_window(this.strip);
        this.initialize_edit_window();
    }

    initialize_edit_window(){
        let header = document.createElement("h3");
        header.innerText = "Изменение цвета";
        this.edit_window.window.append(header);

        let pallete = document.createElement("div");
        pallete.classList.add("pallete");

        this.colors.forEach(color => {
            let btn = document.createElement("div");
            btn.classList.add(color);
            btn.addEventListener("click", () =>{
                this.strip.style.backgroundColor = color;
            });
            pallete.append(btn);
        });

        this.edit_window.window.append(pallete);
    }



}

