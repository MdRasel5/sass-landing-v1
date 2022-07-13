// Menu JS
var menu = document.getElementById("menu");

function openmenu(){
    menu.style.top = "100%";
}
function closemenu(){
    menu.style.top = "-100vh";
}

// Testimonial Slider Js
$(document).ready(function(){
    $('.ts-slider-active').slick({
    prevArrow: '<button class="ts-slider-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="ts-slider-next"><i class="fa-solid fa-chevron-right"></i></button>'
    });
});