//jquery for toggler dropdown menu-----

$(document).ready(function() {
    $(".sub-btn").click(function() {
        $(this).next(".sub-menu").slideToggle();
    });

    $(".more-btn").click(function() {
        $(this).next(".more-menu").slideToggle();
    });

});


//javascript for responsive menubar

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");


menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

//javascript for the navigation bar effects on scrollbar--

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

// alert noticication for subscribe 

const popup = document.querySelector('.subscribe');

const close = document.querySelector('.subscribe-close');

window.onload = function() {
    setTimeout(function() {
        popup.style.display = "block"
    }, 1000);
}

close.addEventListener('click', () => {
    popup.style.display = "none";
});


// slider start here---------

$('.slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    startPosition: 4,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// count start here 

$(".count").each(function() {
    $(this)
        .prop("Counter", 0)
        .animate({
            Counter: $(this).text(),
        }, {
            duration: 4000,
            easing: "swing",
            step: function(now) {
                now = Number(Math.ceil(now)).toLocaleString('en');
                $(this).text(now);
            },
        });
});