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
    //브랜드 아더 클릭 시 끝
    //popup 시작
    $('#brand_ader_popup>button').click(function(){
        $('#brand_ader_popup_wrap').fadeOut()
    });
    //popup 끝
    //shop 라인 시작
    $('#shop_menu li').mouseenter(function(){
        $('#shop_line').stop().animate({'width':'100%'},200)
    });
    $('#shop_menu li').mouseleave(function(){
        $('#shop_line').stop().animate({'width':'0px'},200)
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
    //fashion_show_toggle 시작
    fashion_show_toggle = 0;
    $('#on_off_fashion_show').click(function(){
    if(fashion_show_toggle ==0){
        fashion_show_toggle =1
        $('#editorial_wrap_text_box').fadeOut(500)
        $('#fashiton_show').fadeIn(500)
        $('#on_off_fashion_show h3').text('off fashion show')
    }
    else if(fashion_show_toggle ==1){
        fashion_show_toggle =0
        $('#fashiton_show').fadeOut(500)
        $('#editorial_wrap_text_box').fadeIn(500)
        $('#on_off_fashion_show h3').text('on fashion show')
    }
    });
    $('#show_list li:nth-child(2)').click(function(){
        $('#fashion_show_in_box1').fadeIn()
        $('#fashion_show_in_box2').fadeOut()
        $('#fashion_show_in_box3').fadeOut()
        $('#fashion_show_in_box4').fadeOut()
    });
    $('#show_list li:nth-child(3)').click(function(){
        $('#fashion_show_in_box2').fadeIn()
        $('#fashion_show_in_box1').fadeOut()
        $('#fashion_show_in_box3').fadeOut()
        $('#fashion_show_in_box4').fadeOut()
    });
    $('#show_list li:nth-child(4)').click(function(){
        $('#fashion_show_in_box3').fadeIn()
        $('#fashion_show_in_box1').fadeOut()
        $('#fashion_show_in_box2').fadeOut()
        $('#fashion_show_in_box4').fadeOut()
    });
    $('#show_list li:nth-child(5)').click(function(){
        $('#fashion_show_in_box4').fadeIn()
        $('#fashion_show_in_box1').fadeOut()
        $('#fashion_show_in_box3').fadeOut()
        $('#fashion_show_in_box2').fadeOut()
    });
    //fashion_show_toggle 끝
    //#fashion_show_in_box1 slide 시작
    // $('#fashion_show_in_box1').delay(1000).animate({'left':'-0%'},1000,function a(){
    // $('#fashion_show_in_box1').delay(1000).animate({'left':'-100%'},1000)
    //     $('#fashion_show_in_box1').delay(1000).animate({'left':'-200%'},1000)
    //     $('#fashion_show_in_box1').delay(1000).animate({'left':'-300%'},1000)
    //     $('#fashion_show_in_box1').animate({'left':'-0%'},1000,a)
    // })
    //#fashion_show_in_box1 slide 끝
    // 페럴릭스 시작 페럴릭스 x,y의 변수를 선언하고 마우스 무브 이벤트 선언 
    $(window).mousemove(function(e){
        x1 = ((e.pageX-$('#main_page').width()/2)*0.005);
        y1 = ((e.pageY-$('#main_page').width()/2)*0.005);
        $('#bg').css({'left':-x1+'%'})
        $('#bg').css({'top':-y1+'%'})

        x2 = ((e.pageX-$('#main_page').width()/2)*0.005);
        y2 = ((e.pageY-$('#main_page').width()/2)*0.005);
        $('#editorial_wrap').css({'left':-x2+'%'})
        $('#editorial_wrap').css({'top':-y2+'%'})
    });
    // 페럴릭스 끝
    $('#show_list').mouseenter(function(){
        $('#show_list').stop().animate({'height':'200px'})
    });
    $('#show_list').mouseleave(function(){
        $('#show_list').stop().animate({'height':'40px'})
    });
    //music 시작
    audio = $('#audio_box audio').get(0); //0초에서 시작될 수 있게 
    audio_toggle = 0; //클릭 시 변수 0 선언 0에서부터 시작
    slide_num = 0; //setinterval 적용하여 자동 슬라이드를 만들기 위한 변수 선언을 같이함.
    $('#audio_box').click(function(){
        if(audio_toggle == 0){
            audio_toggle = 1
            audio.play();
            $('#audio_box h4').text('pause')
            $('#audio_move li:first-child').animate({'height':'30%'},300,function a(){
            $('#audio_move li:first-child').animate({'height':'100%'},200)
            $('#audio_move li:first-child').animate({'height':'30%'},300, a)
            });
            $('#audio_move li:nth-child(2)').animate({'height':'40%'},300,function b(){
            $('#audio_move li:nth-child(2)').animate({'height':'80%'},400)
            $('#audio_move li:nth-child(2)').animate({'height':'40%'},300, b)
            });
            $('#audio_move li:nth-child(3)').animate({'height':'25%'},100,function c(){
            $('#audio_move li:nth-child(3)').animate({'height':'100%'},300)
            $('#audio_move li:nth-child(3)').animate({'height':'25%'},300, c)
            });
            $('#audio_move li:nth-child(4)').animate({'height':'75%'},100,function a(){
            $('#audio_move li:nth-child(4)').animate({'height':'50%'},350)
            $('#audio_move li:nth-child(4)').animate({'height':'75%'},250, a)
            });
            $('#audio_move li:nth-child(5)').animate({'height':'35%'},180,function a(){
            $('#audio_move li:nth-child(5)').animate({'height':'100%'},260)
            $('#audio_move li:nth-child(5)').animate({'height':'35%'},220, a)
            });
            auto = setInterval(function(){
            slide_num = slide_num -100
            if(slide_num <= -400){slide_num = 0;}
            $('#fashiton_show>ul').animate({'left':slide_num+'%'},300)
        },3000)
        }
        else if(audio_toggle == 1){
            audio_toggle = 0
            audio.pause();
            $('#audio_box h4').text('play')
            clearInterval(auto)
            $('#audio_move li').stop(this) //#audio_move li 노래움직임 멈추기 해당 대상을 불러서 멈추니까 됨
        }
    });
    //left, right 버튼 slide_num을 활용하여 변수 선언하고 클릭 시 선언한 변수 만큼 이동 if문을 활용하여 그 이상 범위로 이동 시 제한을 걸었음
    $('#fashiton_show_left_bt').click(function(){
        slide_num = slide_num + 100
        if(slide_num>0){slide_num=-300;}
        $('#fashiton_show>ul').animate({'left':slide_num+'%'},300)
    });
    $('#fashiton_show_right_bt').click(function(){
        slide_num = slide_num - 100
        if(slide_num<=-400){slide_num=0;}
        $('#fashiton_show>ul').animate({'left':slide_num+'%'},300)
    });
});