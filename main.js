$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.burger, .nav_mobile').toggleClass('active')
    });
    $('.slider').slick({
        dots: true,
        arrows:false
    });

})