// mobile menu

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// members pop js
function openModal(id) {
    let modalId = "modal-" + id;
    let modalElm = document.getElementById(modalId);
    modalElm.classList.add("open");


    modalElm.querySelector(".close-modal").addEventListener("click", function () {
        modalElm.classList.remove("open");
    });
}

// timeline js

(function () {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();

//partners swiper js

new Swiper(".parnterSwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//service swiper js

new Swiper(".serviceSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//fb-post swiper

new Swiper(".fbSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    effect: "fade",
    speed: 5000,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // mousewheel: {
    //     invert: false,
    //     forceToAxis: false,
    //     thresholdDelta: 50,
    //     sensitivity: 1,
    // },

    autoplay: {
      speed: 5000,
    },
    on: {
        slideChange: function () {
            this.slides.forEach((slide) => {
                let background = slide.querySelector(".background");
                if (background) {
                    background.classList.remove("animation");
                }
            });
            let activeSlide = this.slides[this.activeIndex];
            let background = activeSlide.querySelector(".background");
            if (background) {
                background.classList.add("animation");
            }
        },
    },
});
