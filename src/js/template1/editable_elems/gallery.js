class Gallery{
    //
    gallery;
    img_src = "images/SCANDINAVIA 14 DAYS-4.jpg";
    gallery_layout = `
    <div class="gallery">
        <div><image class="gallery_img" src="${this.img_src}"></div>
        <div><image class="gallery_img" src="${this.img_src}"></div>
        <div><image class="gallery_img" src="${this.img_src}"></div>
    </div>
    `;

    constructor(){
        this.gallery = document.createElement("div");
        this.gallery.innerHTML = this.gallery_layout;
        this.editable_elem = new Editable_elem(this.gallery);
    }
}