class Gallery{
    gallery;
    img_src = "images/SCANDINAVIA 14 DAYS-4.jpg";
    gallery_layout = `
    <div class="gallery">
        <div><image class="gallery_img" src="${this.img_src}"></div>
        <div><image class="gallery_img" src="${this.img_src}"></div>
        <div><image class="gallery_img" src="${this.img_src}"></div>
    </div>
    `;

    edit_window_layout_for_gallery = `
    <h3>Настройки<h3>
    <div class="div_choose_picture">
    <p class="choose_picture">Выбор Картинки</p>
    </div>
    <div class= "div_choose_picture">
    <p class="delete_picture">Удаление картинок</p>
    </div>
    `;

    constructor(){
        this.gallery = document.createElement("div");
        this.gallery.innerHTML = this.gallery_layout;
    }
}