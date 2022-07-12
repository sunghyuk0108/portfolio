$(document).ready(function(){

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
    });
    $('.floor:nth-child(1)').click(function(){
        $('.floor:nth-child(1) img').animate({'width':'600px'},300)
    });
    $('.floor:nth-child(2)').click(function(){
        $('.floor:nth-child(2) img').animate({'width':'600px'},300)
    });
    $('.floor:nth-child(3)').click(function(){
        $('.floor:nth-child(3) img').animate({'width':'600px'},300)
    });
    $('.floor:nth-child(4)').click(function(){
        $('.floor:nth-child(4) img').animate({'width':'600px'},300)
    });
    $('#shop_menu li').mouseenter(function(){
        $('#shop_line').stop().animate({'width':'100%'},200)
    });
    $('#shop_menu li').mouseleave(function(){
        $('#shop_line').stop().animate({'width':'0px'},200)
    });

    collection_slide1 = 0;
    $('#collection_slide_bt_wrap li:nth-child(2)').click(function(){
        collection_slide1 = collection_slide1-100;
        if(collection_slide1 ==-500){collection_slide1 =-400}
        $('#collection_slide1').animate({'left':collection_slide1+'%'},300)
    });
    $('#collection_slide_bt_wrap li:nth-child(1)').click(function(){
        collection_slide1 = collection_slide1+100;
        if(collection_slide1 >=0){collection_slide1 =0}
        $('#collection_slide1').animate({'left':collection_slide1+'%'},300)
    });

    collection_slide2 = 0;
    $('#collection_slide_bt_wrap li:nth-child(2)').click(function(){
        collection_slide2 = collection_slide2-100;
        if(collection_slide2 ==-500){collection_slide2 =-400}
        $('#collection_slide2').animate({'left':collection_slide2+'%'},300)
    });
    $('#collection_slide_bt_wrap li:nth-child(1)').click(function(){
        collection_slide2 = collection_slide2+100;
        if(collection_slide2 >=0){collection_slide2 =0}
        $('#collection_slide2').animate({'left':collection_slide2+'%'},300)
    });

    collection_slide3 = 0;
    $('#collection_slide_bt_wrap li:nth-child(2)').click(function(){
        collection_slide3 = collection_slide3-100;
        if(collection_slide3 ==-500){collection_slide3 =-400}
        $('#collection_slide3').animate({'left':collection_slide3+'%'},300)
    });
    $('#collection_slide_bt_wrap li:nth-child(1)').click(function(){
        collection_slide3 = collection_slide3+100;
        if(collection_slide3 >=0){collection_slide3 =0}
        $('#collection_slide3').animate({'left':collection_slide3+'%'},300)
    });

    collection_slide4 = 0;
    $('#collection_slide_bt_wrap li:nth-child(2)').click(function(){
        collection_slide4 = collection_slide4-100;
        if(collection_slide4 ==-500){collection_slide4 =-400}
        $('#collection_slide4').animate({'left':collection_slide4+'%'},300)
    });
    $('#collection_slide_bt_wrap li:nth-child(1)').click(function(){
        collection_slide4 = collection_slide4+100;
        if(collection_slide4 >=0){collection_slide4 =0}
        $('#collection_slide4').animate({'left':collection_slide4+'%'},300)
    });

    $('#collection_slide_bt>li:nth-child(1)').click(function(){
        collection_slide1 = 0;
        $('#collection_slide1').animate({'left':collection_slide1},0.5)
        $('#collection_slide1').fadeIn()
        $('#collection_slide2').fadeOut()
        $('#collection_slide3').fadeOut()
        $('#collection_slide4').fadeOut()
        $('#main_wrap3_bottom_text_box h3').html('project &num;11')
    });
    $('#collection_slide_bt>li:nth-child(2)').click(function(){
        collection_slide2 = 0;
        $('#collection_slide2').animate({'left':collection_slide2},0.5)
        $('#collection_slide2').fadeIn()
        $('#collection_slide1').fadeOut()
        $('#collection_slide3').fadeOut()
        $('#collection_slide4').fadeOut()
        $('#main_wrap3_bottom_text_box h3').html('project &num;12')
    });
    $('#collection_slide_bt>li:nth-child(3)').click(function(){
        collection_slide3 = 0;
        $('#collection_slide3').animate({'left':collection_slide3},0.5)
        $('#collection_slide3').fadeIn()
        $('#collection_slide1').fadeOut()
        $('#collection_slide2').fadeOut()
        $('#collection_slide4').fadeOut()
        $('#main_wrap3_bottom_text_box h3').html('project &num;13')
    });
    $('#collection_slide_bt>li:nth-child(4)').click(function(){
        collection_slide4 = 0;
        $('#collection_slide4').animate({'left':collection_slide4},0.5)
        $('#collection_slide4').fadeIn()
        $('#collection_slide1').fadeOut()
        $('#collection_slide2').fadeOut()
        $('#collection_slide3').fadeOut()
        $('#main_wrap3_bottom_text_box h3').html('project &num;14')
    });
    $('#brand_ader').animate({'left':'-1px'},500)
    $('#brand_ader').click(function(){
        $('#brand_ader_popup_wrap').fadeIn()
    });
    $('#brand_ader_popup>button').click(function(){
        $('#brand_ader_popup_wrap').fadeOut()
    });
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
});