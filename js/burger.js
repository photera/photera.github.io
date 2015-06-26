

$(document).ready(function () {
    $('.burger-contain').click(function () {
        $('.burger-nav').toggleClass('open');
        $('.burger-nav').fadeToggle(300);
        $(this).toggleClass('open');
        $('.burger-brand').toggleClass('open');
    });
    $('.burger-nav li').click(function(){
        $('.burger-nav').toggleClass('open');
        $('.burger-nav').fadeToggle(300);
        $(this).toggleClass('open');
        $('.burger-brand').toggleClass('open');
    });
});
