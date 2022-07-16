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

// Pricing Tabel Js
const button = document.getElementById("selector-bar");
button.addEventListener("click", myFunction);

function myFunction() {
    var monthPayment = document.getElementsByTagName("h4");
    var annualPayment = document.getElementsByTagName("h5");
    var i;
    var n;

    for (i = 0; i < monthPayment.length; i++) {
        for (n = 0; n < annualPayment.length; n++) {
            if (monthPayment[i].style.display === "none") {
                monthPayment[i].style.display = "block";
                annualPayment[i].style.display = "none";
            } else {
                monthPayment[i].style.display = "none";
                annualPayment[i].style.display = "block";
            }
        }
    }

}