$(document).ready(function(){
    let last_sc = 0;
    $(window).scroll(function(){
        sc=$(window).scrollTop();
        //스크롤 아래로 내릴때, 올릴때 이벤트 last_sc = sc 마지막 변수 선언으로 아래 스크롤 이벤트와 분리함
        if(sc<last_sc){
            $('header').stop().fadeIn(300)
        }
        else if(sc>last_sc){
            $('header').stop().fadeOut(300)
        }
        last_sc = sc
        if(sc>400 && sc<=599){
            $('#portfolio_about_me_main_inbox_top p').stop().animate({'margin-top':'0px','opacity':'1'},500)
            $('#portfolio_about_me_main_inbox_top h3,#portfolio_about_me_main_inbox_top h2').stop().animate({'margin-top':'10px','opacity':'1'},500)
            $('#portfolio_about_me_main_inbox_bottom, #portfolio_about_me_main_right_box').stop().animate({'opacity':'1'},500)
        }
        if(sc>600 && sc<=999){
            $('#about_box li:nth-child(1) .about_value_inbox').stop().animate({'width':'80%'},1000)
            $('#about_box li:nth-child(2) .about_value_inbox').stop().animate({'width':'80%'},1000)
            $('#about_box li:nth-child(3) .about_value_inbox').stop().animate({'width':'85%'},1000)
            $('#about_box li:nth-child(4) .about_value_inbox').stop().animate({'width':'65%'},1000)
        }
        if(sc>1000 && sc<=1699){
            $('#portfolio_work h2').stop().animate({'margin-top':'0','opacity':'1'},500)
            $('#main_work').stop().animate({'opacity':'1','margin-top':'50px'},500)
        }
        if(sc<400){
            $('#portfolio_about_me_main_inbox_top p').stop().animate({'margin-top':'50px','opacity':'0'},500)
            $('#portfolio_about_me_main_inbox_top h3,#portfolio_about_me_main_inbox_top h2').stop().animate({'margin-top':'50px','opacity':'0'},500)
            $('#portfolio_about_me_main_inbox_bottom, #portfolio_about_me_main_right_box').stop().animate({'opacity':'0'},500)
        }
        if(sc<600){
            $('#about_box li:nth-child(1) .about_value_inbox').stop().animate({'width':'0%'},1000)
            $('#about_box li:nth-child(2) .about_value_inbox').stop().animate({'width':'0%'},1000)
            $('#about_box li:nth-child(3) .about_value_inbox').stop().animate({'width':'0%'},1000)
            $('#about_box li:nth-child(4) .about_value_inbox').stop().animate({'width':'0%'},1000)
        }
        if(sc<1000){
            $('#portfolio_work h2').stop().animate({'margin-top':'100px','opacity':'0'},500)
            $('#main_work').stop().animate({'opacity':'0','margin-top':'50px'},500)
        }
    });
    //클릭 시 스크롤탑 이동
    $('#menu li:nth-child(1)').click(function(){
        $('body,html').animate({'scrollTop':$('#portfolio_main').offset().top},300);
    });
    $('#menu li:nth-child(2)').click(function(){
        $('body,html').animate({'scrollTop':$('#portfolio_wrap').offset().top},300);
    });
    $('#menu li:nth-child(3)').click(function(){
        $('body,html').animate({'scrollTop':$('#portfolio_work').offset().top},300);
    });
    $('#menu li:nth-child(4)').click(function(){
        $('body,html').animate({'scrollTop':$('footer').offset().top},300);
    });
    //mouse pointer 모바일에서 반응안함 확인해야함
    /*mouse_pointer_x = 0; mouse_pointer_y = 0; speed=0.1;
    setInterval(function(){
    mouse_pointer_x = mouse_pointer_x+speed*(x-mouse_pointer_x)
    mouse_pointer_y = mouse_pointer_y+speed*(y-mouse_pointer_y)
    $('#mouse_pointer').css({'left':mouse_pointer_x,"top":mouse_pointer_y})	  
    },15);

    $(window).mousemove(function(e){
    x = e.pageX-($('#mouse_pointer').width()/2);
    y = e.pageY-($('#mouse_pointer').height()/2);
    });*/
    $('#samo').animate({'margin-top':'12px'},500,function samo(){
        $('#samo').animate({'margin-top':'0'},300)
        $('#samo').animate({'margin-top':'12px'},500,samo)
    });
    //인트로 로딩 표시 시작
    let count = 0;
    setInterval(function(){
        count = count +1;
        if(count<=100){
            $('#intro>h2').html(count+'%')
        }
        if(count===100){
        $('#intro>h2').html('sung hyuk')
        $('#intro_in_portfolio_box').fadeIn();
        }
    },20);
    //인트로 로딩 표시 끝
    //1~100까지 count 이후 sung hyuk이름이 보여지고  
    $('#intro_in_portfolio_box').click(function(){
        $('#intro>h2').fadeOut()
        $('#intro_title').fadeOut()
        $('#intro_title h2').fadeOut()
        $('#intro_in_portfolio').stop().fadeOut()
        $('#intro_in_portfolio_box').fadeOut()
        $('#intro_text').fadeOut()
        $('#horizontal').delay(500).animate({'left':'-50%'},700)
        $('#horizontal').delay(500).animate({'width':'0%'},300,function(){
        $('#intro').fadeOut(300);
        $('#portfolio_main,#portfolio_wrap').fadeIn(300,function(){
            $('#portfolio_main_text_box h2:nth-child(2)').animate({'padding-right':'20%'},300)
            $('#portfolio_main_text_box h2:nth-child(3)').animate({'padding-left':'15%'},300)
            $('#portfolio_main_text_box p').animate({'padding-left':'60%'},500)
        });
        });
    });
    $('#intro_in_portfolio').animate({'rotate':'90deg'},10000,function rotate(){
        $('#intro_in_portfolio').animate({'rotate':'0deg'},10000,function(){
            $('#intro_in_portfolio').animate({'rotate':'90deg'},10000,rotate)
        });
    });
    $('.intro_in_portfolio_inbox').mouseenter(function(){
        $('.intro_in_portfolio_inbox:nth-child(1)').css({'border-color':'rgb(38,70,80,1)'},500)
        $('.intro_in_portfolio_inbox:nth-child(2)').css({'border-color':'rgb(38,70,80,0.75)'},500)
        $('.intro_in_portfolio_inbox:nth-child(3)').css({'border-color':'rgb(38,70,80,0.5)'},500)
        $('.intro_in_portfolio_inbox:nth-child(1)').stop().animate({'width':'80%','height':'80%'},600)
        $('.intro_in_portfolio_inbox:nth-child(2)').stop().animate({'width':'75%','height':'75%'},550)
        $('.intro_in_portfolio_inbox:nth-child(3)').stop().animate({'width':'70%','height':'70%'},500)
    });
    $('.intro_in_portfolio_inbox').mouseleave(function(){
        $('.intro_in_portfolio_inbox:nth-child(1)').css({'border-color':'rgb(255,255,255,1)'},500)
        $('.intro_in_portfolio_inbox:nth-child(2)').css({'border-color':'rgb(255,255,255,0.75)'},500)
        $('.intro_in_portfolio_inbox:nth-child(3)').css({'border-color':'rgb(255,255,255,0.5)'},500)
        $('.intro_in_portfolio_inbox:nth-child(1)').stop().animate({'width':'85%','height':'85%'},600)
        $('.intro_in_portfolio_inbox:nth-child(2)').stop().animate({'width':'80%','height':'80%'},550)
        $('.intro_in_portfolio_inbox:nth-child(3)').stop().animate({'width':'75%','height':'75%'},500)
    });
    $('#works_menu li:nth-child(1)').click(function(){
        $('#responsive_work').show()
        $('#pc_work').hide()
        $(this).css({'background-color':'#00ff96','color':'#000'})
        $('#works_menu li:nth-child(2)').css({'background-color':'transparent','color':'#fff'})
    });
    $('#works_menu li:nth-child(2)').click(function(){
        $('#pc_work').show()
        $('#responsive_work').hide()
        $(this).css({'background-color':'#00ff96','color':'#000'})
        $('#works_menu li:nth-child(1)').css({'background-color':'transparent','color':'#fff'})
    });
});