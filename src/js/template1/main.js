let editor = document.querySelector(".editor");
let display_btn = document.querySelector(".btn_hide");
let add_strip_btn;
let strip_layout = `<div class="temp_strip"></div>`;


display_btn.addEventListener("click", () => {
    editor.style.display = "none";
})

let isEditorExist = false;
let isEditorShowed = false;
let editor_layout = document.createElement("div");
let editor_content = `  <h3>Инструменты</h3>
                        <li>
                        <ul class="add_strip">Добавить элемент</ul>
                        <ul class="add_list">Добавить элемент</ul>
                        <ul class="add_form">Добавить элемент</ul>
                        <ul class="add_gallery">Добавить элемент</ul>
                        </li>`;

function CreateEditor(){
    if(!isEditorExist){
        editor_layout = document.createElement("div");
        editor_layout.classList.add("editor_window");
        editor_layout.innerHTML = editor_content;
        isEditorExist = true;
    }
}

let btn_show_editor = document.querySelector(".btn_show_menu");

btn_show_editor.addEventListener("click", () => {
    CreateEditor();
    if(!isEditorShowed){
        editor.append(editor_layout);
        engage_add_strip_btn();
        isEditorShowed = true;
    }
    else{
        editor.querySelector(".editor_window").remove();
        isEditorShowed = false;
    }
});


function engage_add_strip_btn(){
    add_strip_btn = document.querySelector(".add_strip");
    console.log(add_strip_btn);
    add_strip_btn.addEventListener("click", () =>{
        
        let strip = document.createElement("div");
        strip.innerHTML = strip_layout;
        console.log(strip);
        document.querySelector("main").append(strip);
    });
}





