class List{
    list;
    edit_window;
    list_layout = `
    <ul>
    <li>Элемент списка<li/>
    <li>Элемент списка<li/>
    <li>Элемент списка<li/>
    <li>Элемент списка<li/>
    </ul>
    `

    constructor(){
        this.initialize();
    }

    initialize(){
        this.list = document.createElement("div");
        this.list.classList.add("list");
    }
}