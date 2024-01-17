$(document).ready(function(){
    //gnb
    let gnb = $('#gnb'),
        gnbLI = gnb.children('li');

    gnbLI.mouseenter(function(){
        $(this).children('.openDiv').stop().fadeIn();

    });
    gnbLI.mouseleave(function(){
        $(this).children('.openDiv').stop().fadeOut();
    });

    //로그인 마이페이지
    let right = $('.right'),
        mypage = $('.right .util li .open-mypage'),
        mypageLI = $('.right .util li .ico_mypage');

    mypageLI.mouseenter(function(){
        $(this).next('.open-mypage').stop().fadeIn();
    });
    mypage.mouseleave(function(){
        $(this).stop().fadeOut();wi
    });

    //메인슬라이드
    var swiper = new Swiper(".mainSlide", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //mainCon2 tab
    let tabLI = $('.mainCon02 .tabMenu li');
    
    tabLI.click(function(e){
        e.preventDefault();
        let tabCon = $(this).children('a').attr('href');

        $('.tabContent').hide();
        $(tabCon).show();
        tabLI.removeClass('on');
        $(this).addClass('on');
    });
});