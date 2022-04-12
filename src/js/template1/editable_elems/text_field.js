class Text_field{
    text_field_layout;
    text_field;

    constructor(){
        this.initialize();
        this.editable_elem = new Editable_elem(this.text_field, "text");
    }

    initialize(){
        this.text_field = document.createElement("div");
        this.text_field.classList.add("text_field");
        this.text_field_layout = `
        <p class="text_field_text">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы
        добавить свой текст и настроить шрифт. Здесь вы можете рассказать посетителям подробнее о себе</p>
        `;

        this.text_field.innerHTML = this.text_field_layout;
    }
}