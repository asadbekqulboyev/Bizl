$(document).ready(function () {
    // header
    if(innerWidth<768){
        $('.hero_phone_left').css({top:'0px'})
        $('.hero_phone_right').css({top:'-24px',})
        $('.hero_content h1').css({fontWeight:'200'})
        $('.rellax_price').removeClass('parallax right')
        $('.action_info ').removeClass('parallax right')
        $('.action_img  ').removeClass('parallax right')
    }else{  
        $('.hero_phone_left').css({top:'150px'})
        $('.hero_phone_right').css({top:'150px'})
        $('.hero_content h1').css({fontWeight:'bold'})
    }
    // rellax
    $('.hamburger').click(function(){
        $(this).toggleClass('active')   
        $('.header_right').toggleClass('active')
    })
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
            scale: 1.2,
            delay: 0.4,
            overflow: true
        });
    });
    $(".parallax.right").each(function () {
        new simpleParallax(this, {
            orientation: "right", // O‘nga harakat
            scale: 1.2,
            delay: 0.4,
            overflow: true
        });
    });
})