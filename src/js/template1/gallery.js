class Gallery{
    //
    gallery;
    gallery_layout = `
    <div class="gallery">
        <div><image class="gallery_img" src="images/SCANDINAVIA 14 DAYS-4.jpg"></div>
        <div><image class="gallery_img" src="images/SCANDINAVIA 14 DAYS-4.jpg"></div>
        <div><image class="gallery_img" src="images/SCANDINAVIA 14 DAYS-4.jpg"></div>
    </div>
    `;

    constructor(){
        this.gallery = document.createElement("div");
        this.gallery.innerHTML = this.gallery_layout;
    }
}