$(document).ready(function () {
    // header
    $('.child_menu a').click(function (e) { 
    e.preventDefault();
    $(this).next('.submenu').slideToggle();
    });
    // rellax
    var rellax = new Rellax('.rellax',{
        horizontal: true, 
        vertical: false
    });
    // users section
    var swiper = new Swiper('.testimonial_slider', {
        loop: false,
        autoHeight: true,
    });
    $('.avatar').click(function() {
        var index = $(this).data('index');
        swiper.slideTo(index);
        $('.avatar').removeClass('active');
        $(this).addClass('active');
    });
    swiper.on('slideChange', function () {
        var activeIndex = swiper.activeIndex;
        $('.avatar').removeClass('active');
        $('.avatar[data-index="' + activeIndex + '"]').addClass('active');
    });
    
    // parallax
    $(".parallax.left").each(function () {
        new simpleParallax(this, {
            orientation: "left", // O‘nga harakat
            scale: 1.5,
            delay: 0.6,
            overflow: true
        });
    });
    $(".parallax.right").each(function () {
        new simpleParallax(this, {
            orientation: "right", // O‘nga harakat
            scale: 1.5,
            delay: 0.6,
            overflow: true
        });
    });
})