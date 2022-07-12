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
            }
        else if(toggle==1){ //x 상태에서 -로 변환
            toggle=0
            $('#menu li:nth-child(1)').animate({'rotate':'0'},100)
            $('#menu li:nth-child(1)').animate({'top':'3px'},100)
            $('#menu li:nth-child(2)').animate({'opacity':'1'},100)
            $('#menu li:nth-child(3)').animate({'rotate':'0'},100)
            $('#menu li:nth-child(3)').animate({'top':'15px'},100)
            $('#logo img').attr({'src':'images/ader_logo_w.png'})
            $('header').css({'border-color':'#fff'})
            $('#menu li').css({'background-color':'#fff'})
            $('#shop_menu li').css({'color':'#fff'})
            $('#shop_line').css({'background-color':'#fff'})
            $('#menu_popup').stop().animate({'right':'-2000px'},500,function(){
            $('#menu_popup').css({'display':'none'})
            })
            }
    });
    $('#shop_menu li').mouseenter(function(){
        $('#shop_line').stop().animate({'width':'100%'},200)
    });
    $('#shop_menu li').mouseleave(function(){
        $('#shop_line').stop().animate({'width':'0px'},200)
    });
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
    //#product_img에 마우스 엔터 시 bg효과 시작
    $('#product_img, #product_img1, #product_img2, #product_img3, #product_img4').mouseenter(function(){
        $('#main_wrap2_bg').stop().animate({'opacity':'1'},3000)
    });
    $('#product_img, #product_img1, #product_img2, #product_img3, #product_img4').mouseleave(function(){
        $('#main_wrap2_bg').stop().animate({'opacity':'0'},1500)
    });
    //#product_img에 마우스 엔터 시 bg효과 끝
    //#product_img에 마우스 엔터 시 효과 
    text1 = -1000; text2 = -1000; text3 = -1000; text4 = -1100; text5 = -1200;
    $('#product_img').mouseenter(function(){
        $('#product_img_mouseenter').fadeIn()
        auto1 = setInterval(function(){
        text1=text1+30
        //text1이  1620보다 크면
        if(text1>=1920){
            text1=-1000;
            $('#product_box h2').stop().css({'right':'-1000px'}); }
        $('#product_box h2').stop().animate({'right':text1},98,"linear")
    },100);
    });
    $('#product_img').mouseleave(function(){
        $('#product_img_mouseenter').fadeOut()
        $('#main_wrap2_bg').animate({'opacity':'0'},1000)
        clearInterval(auto1)
    });
    $('#product_img1').mouseenter(function(){
        $('#product_img1_mouseenter').fadeIn()
        auto2 = setInterval(function(){
        text2=text2+30
        //text2이  1620보다 크면
        if(text2>=1920){
            text2=-1000;
            $('#product_box1 h2').stop().css({'left':'-1000px'}); }
        $('#product_box1 h2').stop().animate({'left':text2},98,"linear")
    },100);
    });
    $('#product_img1').mouseleave(function(){
        $('#product_img1_mouseenter').fadeOut()
        clearInterval(auto2)
    });
    $('#product_img2').mouseenter(function(){
        $('#product_img2_mouseenter').fadeIn()
        auto3 = setInterval(function(){
        text3=text3+30
        //text3이  1620보다 크면
        if(text3>=1920){
            text3=-1100;
            $('#product_box2 h2').stop().css({'right':'-1100px'}); }
        $('#product_box2 h2').stop().animate({'right':text3},98,"linear")
    },100);
    });
    $('#product_img2').mouseleave(function(){
        $('#product_img2_mouseenter').fadeOut()
        clearInterval(auto3)
    });
    $('#product_img3').mouseenter(function(){
        $('#product_img3_mouseenter').fadeIn()
        auto4 = setInterval(function(){
        text4=text4+30
        //text4이  1620보다 크면
        if(text4>=1920){
            text4=-1100;
            $('#product_box3 h2').stop().css({'left':'-1100px'}); }
        $('#product_box3 h2').stop().animate({'left':text4},98,"linear")
    },100);
    });
    $('#product_img3').mouseleave(function(){
        $('#product_img3_mouseenter').fadeOut()
        clearInterval(auto4)
    });
    $('#product_img4').mouseenter(function(){
        $('#product_img4_mouseenter').fadeIn()
        auto5 = setInterval(function(){
        text5=text5+30
        //text5이  1620보다 크면
        if(text5>=1920){
            text5=-1100;
            $('#product_box4 h2').stop().css({'right':'-1100px'}); }
        $('#product_box4 h2').stop().animate({'right':text5},98,"linear")
    },100);
    });
    $('#product_img4').mouseleave(function(){
        $('#product_img4_mouseenter').fadeOut()
        clearInterval(auto5)
    }); //#product_img에 마우스 엔터 시 효과 끝
});
