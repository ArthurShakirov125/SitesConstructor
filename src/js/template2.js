class HelpButton{
    

    dependent_element;
    button;
    button_id;
    pop_up_window;
    isEditable = true;
    isPopUp = true;
    popUpwindowSide;
    iterator = 0;

    constructor(button){
        this.button = button;
    }
    findDependentElement(dependent_element){
        this.dependent_element = dependent_element;
    }
    createPopUpWindow(side){
        this.popUpwindowSide = side;
            this.pop_up_window = document.createElement("div");
            if(side === "left")
            this.pop_up_window.classList.add("pop-up_window-l");
            else
            this.pop_up_window.classList.add("pop-up_window-r");
            
    }

    addPopUpWindow(){
        if (this.isPopUp) {
            this.button.append(this.pop_up_window);
            this.isPopUp = false;
        }
    }

    removePopUpWindow(){
        if (!this.isPopUp) {
            if(this.popUpwindowSide === "left"){
                this.button.querySelector(".pop-up_window-l").remove();
            }
            else{
                this.button.querySelector(".pop-up_window-r").remove();
            }
            
            this.isPopUp = true;
        }
    }
    
    addMethod(EventType,Method){
        this.button.addEventListener(EventType, Method);
    }

    clearColors(){
        this.dependent_element.classList.remove("red");
        this.dependent_element.classList.remove("green");
        this.dependent_element.classList.remove("yellow");
        this.dependent_element.classList.remove("blue");
        this.dependent_element.classList.remove("bisque");

        this.dependent_element.classList.remove("red1");
        this.dependent_element.classList.remove("green1");
        this.dependent_element.classList.remove("yellow1");
        this.dependent_element.classList.remove("blue1");
        this.dependent_element.classList.remove("bisque1");

        this.dependent_element.classList.remove("red2");
        this.dependent_element.classList.remove("green2");
        this.dependent_element.classList.remove("yellow2");
        this.dependent_element.classList.remove("blue2");
        this.dependent_element.classList.remove("bisque2");
    }

    ClearFonts(){
        this.dependent_element.classList.remove("Montserrat");
        this.dependent_element.classList.remove("Oswald");
        this.dependent_element.classList.remove("Manrope");
        this.dependent_element.classList.remove("Roboto");
    }

    ClearFontStyle(){
        this.dependent_element.classList.remove("normal");
        this.dependent_element.classList.remove("bold");
        this.dependent_element.classList.remove("italic");
        this.dependent_element.classList.remove("underline");
    }
    ClearFontColor(){
        this.dependent_element.classList.remove("red_text");
        this.dependent_element.classList.remove("blue_text");
        this.dependent_element.classList.remove("green_text");
        this.dependent_element.classList.remove("black_text");
        this.dependent_element.classList.remove("white_text");
    }
}


    let header_h1 = new HelpButton(document.querySelector("#h1_button"));
    console.log(header_h1.button);
    header_h1.findDependentElement(document.querySelector(".template_h2"));
    
    

    header_h1.addMethod("click", () => {
            header_h1.dependent_element.setAttribute("contenteditable", header_h1.isEditable);
            console.log("click");
            header_h1.dependent_element.focus();
            header_h1.isEditable = !header_h1.isEditable;
            console.log(header_h1.isEditable);
    });

    header_h1.addMethod("mouseover", () =>{
            header_h1.createPopUpWindow("right");
            header_h1.pop_up_window.innerHTML = `<p>Изменение названия сайта<p>`;
            header_h1.addPopUpWindow();
    })
    
    header_h1.addMethod("mouseleave", () => {
        header_h1.removePopUpWindow();
    })

    let header_btn = new HelpButton(document.querySelector("#header_button"));
    header_btn.findDependentElement(document.querySelector(".main_header"));

    header_btn.addMethod("mouseleave", () => {
        header_btn.removePopUpWindow();
    })


    header_btn.addMethod("click", () =>{
        header_btn.createPopUpWindow("left");
        header_btn.addPopUpWindow();

        header_btn.pop_up_window.innerHTML = `<p>Изменение цвета шапки сайта<p>
        <div class="color_palette"> 
        <button class="palette_btn yellow"></button>
        <button class="palette_btn red"></button>
        <button class="palette_btn blue"></button>
        <button class="palette_btn green"></button>
        <button class="palette_btn bisque"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow");
        let red = document.querySelector(".red");
        let blue = document.querySelector(".blue");
        let green = document.querySelector(".green");
        let bisque = document.querySelector(".bisque");

        yellow.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("yellow");
        });

        red.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("red");
        });

        blue.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("blue");
        });

        green.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("green");
        });

        bisque.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("bisque");
        });
    })

    let main_btn = new HelpButton(document.querySelector("#main_button"));
    main_btn.findDependentElement(document.querySelector(".main_div"));

    main_btn.addMethod("mouseleave", () => {
        main_btn.removePopUpWindow();
    })


    main_btn.addMethod("click", () =>{
        main_btn.createPopUpWindow("left");
        main_btn.addPopUpWindow();

        main_btn.pop_up_window.innerHTML = `<p>Изменение цвета главного раздела сайта<p>
        <div class="color_palette"> 
        <button class="palette_btn yellow1"></button>
        <button class="palette_btn red1"></button>
        <button class="palette_btn blue1"></button>
        <button class="palette_btn green1"></button>
        <button class="palette_btn bisque1"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow1");
        let red = document.querySelector(".red1");
        let blue = document.querySelector(".blue1");
        let green = document.querySelector(".green1");
        let bisque = document.querySelector(".bisque1");

        yellow.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("yellow1");
        });

        red.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("red1");
        });

        blue.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("blue1");
        });

        green.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("green1");
        });

        bisque.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("bisque1");
        });
    })

    let footer_btn = new HelpButton(document.querySelector("#footer_button"));
    footer_btn.findDependentElement(document.querySelector(".main_footer"));

    footer_btn.addMethod("mouseleave", () => {
        footer_btn.removePopUpWindow();
    })


    footer_btn.addMethod("click", () =>{
        footer_btn.createPopUpWindow("left");
        footer_btn.addPopUpWindow();

        footer_btn.pop_up_window.innerHTML = `<p>Изменение цвета подвала раздела сайта<p>
        <div class="color_palette"> 
        <button class="palette_btn yellow2"></button>
        <button class="palette_btn red2"></button>
        <button class="palette_btn blue2"></button>
        <button class="palette_btn green2"></button>
        <button class="palette_btn bisque2"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow2");
        let red = document.querySelector(".red2");
        let blue = document.querySelector(".blue2");
        let green = document.querySelector(".green2");
        let bisque = document.querySelector(".bisque2");

        yellow.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("yellow2");
        });

        red.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("red2");
        });

        blue.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("blue2");
        });

        green.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("green2");
        });

        bisque.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("bisque2");
        });
    })

    let main_text_btn = new HelpButton(document.querySelector("#main_text_button"));
    main_text_btn.findDependentElement(document.querySelector(".main_div__title_and_text"));

    main_text_btn.addMethod("mouseover", () =>{
        main_text_btn.createPopUpWindow("right");
        main_text_btn.pop_up_window.innerHTML = `<p>Изменение подписи к картинке</p>`
        main_text_btn.addPopUpWindow();
    })

    main_text_btn.addMethod("click", () =>{
        main_text_btn.dependent_element.setAttribute("contenteditable",  main_text_btn.isEditable);
        main_text_btn.isEditable = !main_text_btn.isEditable;
        main_text_btn.dependent_element.focus();
    })

    main_text_btn.addMethod("mouseleave", () =>{
        main_text_btn.removePopUpWindow();
    })

    let main_img_btn = new HelpButton(document.querySelector("#main_img_button"));
    main_img_btn.findDependentElement(document.querySelector(".main_div__image"));

    let images = [
        {
            path:"templates_img/7.jpg"
        },
        {
            path:"templates_img/8.jpg"
        },
        {
            path:"templates_img/9.jfif"
        },
        {
            path:"templates_img/10.jpg"
        },
        {
            path:"templates_img/11.jfif"
        },
        {
            path:"templates_img/12.jpg"
        },
    ]

    main_img_btn.addMethod("mouseover", () =>{
        main_img_btn.createPopUpWindow("right");
        main_img_btn.pop_up_window.innerHTML = `<p>Щелкни чтобы поменять картинку</p>`;
        main_img_btn.addPopUpWindow();
    })

    main_img_btn.addMethod("click", () => {
        console.log(main_img_btn.iterator);  
        main_img_btn.dependent_element.style.background = "url(" + images[main_img_btn.iterator].path +  ")";
        main_img_btn.iterator++;
        if(main_img_btn.iterator > images.length - 1){
            main_img_btn.iterator = 0;
        }
    })

    main_img_btn.addMethod("mouseleave", () =>{
        main_img_btn.removePopUpWindow();
    })

    let result_button = document.querySelector("#result_button");

    let buttons = document.querySelectorAll(".button_style");
    let header = document.querySelector(".header");
    let footer = document.querySelector(".footer__template");
    let setting = document.querySelector(".advanced_settings_wrapper")

    let restore_button = document.querySelector("#restore_button");

    result_button.addEventListener("click", () =>{
        
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.add("hide_element");
        }
        header_h1.dependent_element.setAttribute("contenteditable", false);
        main_text_btn.dependent_element.setAttribute("contenteditable",  false);
        header.classList.add("hide_element");
        footer.classList.add("hide_element");
        setting.classList.add("hide_element");
        restore_button.classList.remove("hide_element");
    });

    restore_button.addEventListener("click", () =>{
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove("hide_element");
        }
        header.classList.remove("hide_element");
        footer.classList.remove("hide_element");
        setting.classList.remove("hide_element");
        restore_button.classList.add("hide_element");
    });

    let advanced_settings_exit_button = new HelpButton(document.querySelector(".settings-exit"));
    advanced_settings_exit_button.findDependentElement(document.querySelector(".advanced_settings_wrapper"));

    advanced_settings_exit_button.addMethod("click", () => {
        advanced_settings_exit_button.dependent_element.style.display = "none";
    });

    let setting_button = new HelpButton(document.querySelector("#main_setting_button"));
    setting_button.findDependentElement(document.querySelector(".advanced_settings_wrapper"))

    setting_button.addMethod("click", () => {
        setting_button.dependent_element.style.display = "block";
    });

    setting_button.addMethod("mouseover", () =>{
        setting_button.createPopUpWindow("left");
        setting_button.pop_up_window.innerHTML = `<p>Щелкни чтобы настроить текст</p>`;
        setting_button.addPopUpWindow();
    })

    setting_button.addMethod("mouseleave", () =>{
        setting_button.removePopUpWindow();
    })
    
    let font_buttons = document.querySelectorAll(".fonts_family_list--font");

    let Montserrat_button = new HelpButton(document.querySelector(".Montserrat"));
    Montserrat_button.findDependentElement(document.querySelector(".title_and_text"));

    Montserrat_button.addMethod("click", () => {
        Montserrat_button.ClearFonts();
        Montserrat_button.dependent_element.classList.add("Montserrat");

        for(let i = 0; i < font_buttons.length; i++){
            font_buttons[i].classList.remove("selected_style");
        }
        Montserrat_button.button.classList.add("selected_style");
    });

    let Oswald_button = new HelpButton(document.querySelector(".Oswald"));
    Oswald_button.findDependentElement(document.querySelector(".title_and_text"));

    Oswald_button.addMethod("click", () => {
        Oswald_button.ClearFonts()
        Oswald_button.dependent_element.classList.add("Oswald");

        for(let i = 0; i < font_buttons.length; i++){
            font_buttons[i].classList.remove("selected_style");
        }
        Oswald_button.button.classList.add("selected_style");
    });

    let Manrope_button = new HelpButton(document.querySelector(".Manrope"));
    Manrope_button.findDependentElement(document.querySelector(".title_and_text"));

    Manrope_button.addMethod("click", () => {
        Manrope_button.ClearFonts();
        Manrope_button.dependent_element.classList.add("Manrope");
        for(let i = 0; i < font_buttons.length; i++){
            font_buttons[i].classList.remove("selected_style");
        }
        Manrope_button.button.classList.add("selected_style");
    });

    let Roboto_button = new HelpButton(document.querySelector(".Roboto"));
    Roboto_button.findDependentElement(document.querySelector(".title_and_text"));

    Roboto_button.addMethod("click", () => {
        Roboto_button.ClearFonts();
        Roboto_button.dependent_element.classList.add("Roboto");
        for(let i = 0; i < font_buttons.length; i++){
            console.log(font_buttons[i]);
            font_buttons[i].classList.remove("selected_style");
        }
        Roboto_button.button.classList.add("selected_style");
    });


    let style_buttons = document.querySelectorAll(".fonts_style_list--font");

    let font_style_normal_button = new HelpButton(document.querySelector(".normal"));
    font_style_normal_button.findDependentElement(document.querySelector(".title_and_text"));

    font_style_normal_button.addMethod("click",() => {
        font_style_normal_button.ClearFontStyle();
        font_style_normal_button.dependent_element.classList.add("normal");
        for(let i = 0; i < style_buttons.length; i++){
            
            style_buttons[i].classList.remove("selected_style");
        }
        font_style_normal_button.button.classList.add("selected_style");
    });

    let font_style_bold_button = new HelpButton(document.querySelector(".bold"));
    font_style_bold_button.findDependentElement(document.querySelector(".title_and_text"));

    font_style_bold_button.addMethod("click",() => {
        font_style_bold_button.ClearFontStyle();
        font_style_bold_button.dependent_element.classList.add("bold");
        for(let i = 0; i < style_buttons.length; i++){
            
            style_buttons[i].classList.remove("selected_style");
        }
        font_style_bold_button.button.classList.add("selected_style");
    });

    let font_style_italic_button = new HelpButton(document.querySelector(".italic"));
    font_style_italic_button.findDependentElement(document.querySelector(".title_and_text"));

    font_style_italic_button.addMethod("click",() => {
        font_style_italic_button.ClearFontStyle();
        font_style_italic_button.dependent_element.classList.add("italic");
        for(let i = 0; i < style_buttons.length; i++){
            
            style_buttons[i].classList.remove("selected_style");
        }
        font_style_italic_button.button.classList.add("selected_style");
    });

    let font_style_underline_button = new HelpButton(document.querySelector(".underline"));
    font_style_underline_button.findDependentElement(document.querySelector(".title_and_text"));

    font_style_underline_button.addMethod("click",() => {
        font_style_underline_button.ClearFontStyle();
        font_style_underline_button.dependent_element.classList.add("underline");
        for(let i = 0; i < style_buttons.length; i++){
            
            style_buttons[i].classList.remove("selected_style");
        }
        font_style_underline_button.button.classList.add("selected_style");
    });


    let font_size_button = new HelpButton(document.querySelector(".settings_accept"));
    font_size_button.findDependentElement(document.querySelector(".title_and_text"));

    let font_size_input = document.querySelector(".settings_input");

    font_size_button.addMethod("click", () => {
        let font_size = font_size_input.value;
        font_size_button.dependent_element.setAttribute("style", "font-size:" + font_size + "px");
    });

    font_size_input.addEventListener("keydown", (e) =>{
        if(e.code == "Enter"){
            let font_size = font_size_input.value;
            font_size_button.dependent_element.setAttribute("style", "font-size:" + font_size + "px");
        }
    });

    let color_buttons = document.querySelectorAll(".fonts_color_list--font");

    let font_color_red_button = new HelpButton(document.querySelector(".red_button"));
    font_color_red_button.findDependentElement(document.querySelector(".title_and_text"));

    font_color_red_button.addMethod("click",() => {
        font_color_red_button.ClearFontColor();
        font_color_red_button.dependent_element.classList.add("red_text");
        for(let i = 0; i < style_buttons.length; i++){
            
            color_buttons[i].classList.remove("selected_style");
        }
        font_color_red_button.button.classList.add("selected_style");
    });

    let font_color_blue_button = new HelpButton(document.querySelector(".blue_button"));
    font_color_blue_button.findDependentElement(document.querySelector(".title_and_text"));

    font_color_blue_button.addMethod("click",() => {
        font_color_blue_button.ClearFontColor();
        font_color_blue_button.dependent_element.classList.add("blue_text");
        for(let i = 0; i < style_buttons.length; i++){
            
            color_buttons[i].classList.remove("selected_style");
        }
        font_color_blue_button.button.classList.add("selected_style");
    });

    let font_color_green_button = new HelpButton(document.querySelector(".green_button"));
    font_color_green_button.findDependentElement(document.querySelector(".title_and_text"));

    font_color_green_button.addMethod("click",() => {
        font_color_green_button.ClearFontColor();
        font_color_green_button.dependent_element.classList.add("green_text");
        for(let i = 0; i < style_buttons.length; i++){
            
            color_buttons[i].classList.remove("selected_style");
        }
        font_color_green_button.button.classList.add("selected_style");
    });

    let font_color_black_button = new HelpButton(document.querySelector(".black_button"));
    font_color_black_button.findDependentElement(document.querySelector(".title_and_text"));

    font_color_black_button.addMethod("click",() => {
        font_color_black_button.ClearFontColor();
        font_color_black_button.dependent_element.classList.add("black_text");
        for(let i = 0; i < style_buttons.length; i++){
            
            color_buttons[i].classList.remove("selected_style");
        }
        font_color_black_button.button.classList.add("selected_style");
    });

    let font_color_white_button = new HelpButton(document.querySelector(".white_button"));
    font_color_white_button.findDependentElement(document.querySelector(".title_and_text"));

    font_color_white_button.addMethod("click",() => {
        font_color_white_button.ClearFontColor();
        font_color_white_button.dependent_element.classList.add("white_text");
        for(let i = 0; i < style_buttons.length; i++){
            
            color_buttons[i].classList.remove("selected_style");
        }
        font_color_white_button.button.classList.add("selected_style");
    });







    