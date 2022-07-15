$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Engineer", "Developer", "Designer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Engineer", "Developer", "Blogger", "Designer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // creating a portfolio tabbed component
    const p_btns = document.querySelector(".p-btns");
    const p_btn = document.querySelectorAll(".p-btn");
    const p_img_elem = document.querySelectorAll(".img-overlay");

    p_btns.addEventListener("click", (e) => {
        const p_btn_clicked = e.target;
        console.log(p_btn_clicked);
        if (!p_btn_clicked.classList.contains("p-btn")) return;
        p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
        p_btn_clicked.classList.add("p-btn-active");

        // to find the number in data attr
        const btn_num = p_btn_clicked.dataset.btnNum;
        console.log(btn_num);
        const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
        p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-acitve"));
        img_active.forEach((curElem) =>
            curElem.classList.remove("p-image-not-acitve")
        );
    });
    // Owl Carousel Script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});