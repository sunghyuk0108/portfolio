$(document).ready(function(){
    //menu 시작
    $('#menu_right_box li:nth-child(1)').mouseenter(function(){
        $('#menu_li_img_box li:nth-child(1)').stop().fadeIn()
    });
    $('#menu_right_box li:nth-child(1)').mouseleave(function(){
        $('#menu_li_img_box li:nth-child(1)').stop().hide()
    });
    $('#menu_right_box li:nth-child(2)').mouseenter(function(){
        $('#menu_li_img_box li:nth-child(2)').stop().fadeIn()
    });
    $('#menu_right_box li:nth-child(2)').mouseleave(function(){
        $('#menu_li_img_box li:nth-child(2)').stop().hide()
    });
    $('#menu_right_box li:nth-child(3)').mouseenter(function(){
        $('#menu_li_img_box li:nth-child(3)').stop().fadeIn()
    });
    $('#menu_right_box li:nth-child(3)').mouseleave(function(){
        $('#menu_li_img_box li:nth-child(3)').stop().hide()
    });
    $('#menu_right_box li:nth-child(4)').mouseenter(function(){
        $('#menu_li_img_box li:nth-child(4)').stop().fadeIn()
    });
    $('#menu_right_box li:nth-child(4)').mouseleave(function(){
        $('#menu_li_img_box li:nth-child(4)').stop().hide()
    });
    //menu 끝
    //브랜드 아더 클릭 시 시작
    $('#brand_ader').animate({'left':'-1px'},500)
    $('#brand_ader').click(function(){
        $('#brand_ader_popup_wrap').fadeIn()
    });
    //popup 시작
    $('#brand_ader_popup>button').click(function(){
        $('#brand_ader_popup_wrap').fadeOut()
    });
    //popup 끝
    //브랜드 아더 클릭 시 끝
    //정품 코드 인증 창 시작
    code1 = "a";
    num =0;
    code_num = code1+num;
    $('#check button').click(function(){
        if(document.querySelector('#genuine_code').value===code_num){
            alert("정품입니다.");
        }
        if(document.querySelector('#genuine_code').value!=code_num){
            alert("가품입니다.");
        }
    });
    //정품 코드 인증 창 끝
    //shop 라인 시작
    $('#shop_menu li').mouseenter(function(){
        $('#shop_line').stop().animate({'width':'100%'},200)
    });
    $('#shop_menu li').mouseleave(function(){
        $('#shop_line').stop().animate({'width':'0px'},200)
    });
    //shop 라인 끝
    // 토글 메뉴 바 시작
    toggle = 0; // - 상태
    $('#menu').click(function(){
        if(toggle==0){ //- 상태에서 x로 변환
            toggle=1
            $('#menu li:nth-child(1)').animate({'top':'9px'},100)
            $('#menu li:nth-child(1)').animate({'rotate':'45deg'},100)
            $('#menu li:nth-child(2)').animate({'opacity':'0'},100)
            $('#menu li:nth-child(3)').animate({'top':'9px'},100)
            $('#menu li:nth-child(3)').animate({'rotate':'-45deg'},100)
            $('#menu_popup').css({'display':'block'})
            $('#menu_popup').stop().animate({'right':'0'},500)
            $('#logo img').attr({'src':'images/ader_logo_w.png'})
            $('header').css({'border-color':'#fff'})
            $('#menu li').css({'background-color':'#fff'})
            $('#shop_menu li').css({'color':'#fff'})
            $('#shop_line').css({'background-color':'#fff'})
            $('#sns_icons li:nth-child(1) img').attr({'src':'images/icons/instargram_icon.png'})
            $('#sns_icons li:nth-child(2) img').attr({'src':'images/icons/facebook_icon.png'})
            $('#sns_icons li:nth-child(3) img').attr({'src':'images/icons/twitter_icon.	png'})
            $('#sns_icons li:nth-child(4) img').attr({'src':'images/icons/youtube_icon.png'})
            }
        else if(toggle==1){ //x 상태에서 -로 변환
            toggle=0
            $('#menu li:nth-child(1)').animate({'rotate':'0'},100)
            $('#menu li:nth-child(1)').animate({'top':'3px'},100)
            $('#menu li:nth-child(2)').animate({'opacity':'1'},100)
            $('#menu li:nth-child(3)').animate({'rotate':'0'},100)
            $('#menu li:nth-child(3)').animate({'top':'15px'},100)
            $('#logo img').attr({'src':'images/ader_logo_b.png'})
            $('header').css({'border-color':'#000'})
            $('#menu li').css({'background-color':'#000'})
            $('#shop_menu li').css({'color':'#000'})
            $('#shop_line').css({'background-color':'#000'})
            $('#sns_icons li:nth-child(1) img').attr({'src':'images/icons/instargram_icon_b.png'})
            $('#sns_icons li:nth-child(2) img').attr({'src':'images/icons/facebook_icon_b.png'})
            $('#sns_icons li:nth-child(3) img').attr({'src':'images/icons/twitter_icon_b.png'})
            $('#sns_icons li:nth-child(4) img').attr({'src':'images/icons/youtube_icon_b.png'})
            $('#menu_popup').stop().animate({'right':'-2000px'},500,function(){
            $('#menu_popup').css({'display':'none'})
            })
            }
            // 토글 메뉴 바 끝
    });
    youtube_toggle = 0;
    $('#toggle_youtube_menu h2').click(function(){
        if(youtube_toggle==0){
            youtube_toggle =1;
            $(this).parents('#toggle_youtube_menu').animate({'right':'0px'},300)
            $(this).html('c <br> l <br> o <br> s')
        } 
        else if(youtube_toggle==1){
            youtube_toggle =0;
            $(this).parents('#toggle_youtube_menu').animate({'right':'-422px'},300)
            $(this).html('o <br> p <br> e <br> n')
        }
    });
    screen_size = 0;
    $('#screen_box_sie').click(function(){
        if(screen_size==0){
            screen_size=1;
            $('#youtube_ader').stop().animate({'width':'100%','height':'100%'},500)
            $('header').stop().animate({'top':'-81px'},500)
            $('#brand_ader').stop().animate({'left':'-202px'},500)
            $('#screen_box_sie h4').text('SMALL SCREEN')
        } 
        else if(screen_size==1){
            screen_size=0;
            $('#youtube_ader').stop().animate({'width':'70%','height':'70%'},500)
            $('header').stop().animate({'top':'0'},500)
            $('#brand_ader').stop().animate({'left':'0'},500)
            $('#screen_box_sie h4').text('Full screen')
        }
    });
    $('#toggle_youtube_menu_sub_menu>li:first-child').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/5KwS34U2IbU'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(2)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/V7IhRXtWGbM'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(3)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/ScLk8mHFKBw'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(4)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/2Qwc7voq_hY'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(5)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/X2bU-Q4pQlM'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(6)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/IIaka48mptg'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(7)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/Z1Bjn68IxJQ'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(8)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/Sjq5oTUcEKg'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(9)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/5GtrMtZ8Guk'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(10)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/1zbhAhi17GM'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(11)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/efjg_1Mi3QA'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(12)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/u1NV7Ovg_6A'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(13)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/rbf4vCVXxFs'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(14)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/Vvy9qH9VCoc'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(15)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/lM69fRYTipw'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(16)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/EtqPPhl9Dgk'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(17)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/DvVSEK1raXQ'})
    });
    $('#toggle_youtube_menu_sub_menu>li:nth-child(18)').click(function(){
        $('#youtube_ader iframe').attr({'src':'https://www.youtube.com/embed/UjLcLk7ZGfU'})
    });
});
