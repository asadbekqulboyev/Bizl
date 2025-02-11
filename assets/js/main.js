$(document).ready(function () {
    $('.child_menu a').click(function (e) { 
    e.preventDefault();
    $(this).next('.submenu').slideToggle();
    });
})