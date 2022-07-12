$(document).ready(function () {
    // menu toggle 시작
    let onlyMobToggle = 0;
    $('.only_mob_menu').click(function () {
        if (onlyMobToggle == 0) {
            onlyMobToggle = 1
            $('.only_mob_popup_wrap').stop().fadeIn();
            $('.only_mob_menu>li:first-child').stop().animate({ 'top': '1.3rem', 'rotate': '45deg' });
            $('.only_mob_menu>li:nth-child(2)').stop().fadeOut();
            $('.only_mob_menu>li:last-child').stop().animate({ 'top': '1.3rem', 'rotate': '-45deg' });
        }
        else if (onlyMobToggle == 1) {
            onlyMobToggle = 0
            $('.only_mob_popup_wrap').stop().fadeOut();
            $('.only_mob_menu>li:first-child').stop().animate({ 'top': '0', 'rotate': '0deg' });
            $('.only_mob_menu>li:nth-child(2)').stop().fadeIn();
            $('.only_mob_menu>li:last-child').stop().animate({ 'top': '2.5rem', 'rotate': '0deg' });
        }
    });
    // menu toggle 끝
    // resize 시 popup menu 종료 
    $(window).resize(function () {
        let innerWidth = window.innerWidth;
        if (innerWidth >= 1024) {
            onlyMobToggle = 0
            $('.only_mob_popup_wrap').stop().hide();
            $('.only_mob_menu>li:first-child').stop().animate({ 'top': '0', 'rotate': '0deg' });
            $('.only_mob_menu>li:nth-child(2)').stop().fadeIn();
            $('.only_mob_menu>li:last-child').stop().animate({ 'top': '2.5rem', 'rotate': '0deg' });
        }
    });
    // 다크, 라이트 모드 시작
    let darkLight = 0;
    $('.dark_light_bt').click(function () {
        if (darkLight == 0) {
            darkLight = 1
            $(this).css({ 'border-color': '#333', 'background-color': '#fff' });
            $('.only_mob_menu>li').css({ 'background-color': '#fff' });
            $('.only_mob_popup_menu').css({ 'background-color': '#333' });
            $('header').css({ 'background-color': '#333' });
            $('.modal_window').css({ 'background-color': '#333' });
            $('html').addClass('dark');
            $('html').removeClass('light');
        }
        else if (darkLight == 1) {
            darkLight = 0
            $(this).css({ 'border-color': '#fff', 'background-color': '#333' });
            $('.only_mob_menu>li').css({ 'background-color': '#333' });
            $('.only_mob_popup_menu').css({ 'background-color': '#fff' });
            $('header').css({ 'background-color': '#fff' });
            $('.modal_window').css({ 'background-color': '#fff' });
            $('html').addClass('light');
            $('html').removeClass('dark');
        }
    });
    // 다크, 라이트 모드 끝
});

const backToTop = document.querySelector('.scrolltop_bt');


function moveScroll (){
        window.scrollTo({top:0, behavior:"smooth"});
}

backToTop.addEventListener('click',moveScroll);




