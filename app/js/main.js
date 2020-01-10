$(function(){
    $('.guarantee__item-image').magnificPopup({type:'image'});
    $('.stock__inner').magnificPopup({
        type:'image',
        delegate: 'a'
    });

    $('.hamburger').on('click', function(){
        $('.header__top-menu ul').slideToggle();
        $(this).toggleClass("is-active");
        $('.header__sidebar').toggleClass('active');
    });

    new WOW().init();
});