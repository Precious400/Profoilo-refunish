$("#fileRequest").click(function () {
    /* code to download? 8*/
});
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        } else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();

        }
    });
    $(".goTop").click(function () { scroll(0, 0) });
    $(".menu-toggler").click(function () {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});