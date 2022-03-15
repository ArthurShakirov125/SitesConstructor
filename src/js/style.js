let template_card1 = document.querySelector(".temp1");
let temp1_button = document.querySelector(".button_temp1");

template_card1.addEventListener("mouseover",() =>{
    temp1_button.style.opacity = 1;
})

template_card1.addEventListener("mouseleave",() =>{
    temp1_button.style.opacity = 0;
})

let template_card2 = document.querySelector(".temp2");
let temp2_button = document.querySelector(".button_temp2");

template_card2.addEventListener("mouseover",() =>{
    temp2_button.style.opacity = 1;
    
})

template_card2.addEventListener("mouseleave",() =>{
    temp2_button.style.opacity = 0;
})
