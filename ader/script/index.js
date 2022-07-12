$(document).ready(function(){
     //인트로 시작
     //작업 끝나고 인트로 d:n 하고 해당 script 열면 됨
     $('#intro_text_box p:nth-child(1)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(2)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(3)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(4)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(5)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(6)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(7)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(8)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(9)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(10)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(11)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(12)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(13)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(14)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(15)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(16)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(17)').animate({'width':'100%'},50,function(){
     $('#intro_text_box p:nth-child(18)').animate({'width':'100%'},50,function(){
     $('#intro_text_box').delay(300).fadeOut(300)
     $('#intro_box').delay(300).animate({'background-color':'#000'},function(){
     $('#intro_logo img').delay(300).animate({'width':'200px'},500,function(){
     $('#intro_box').delay(800).fadeOut(500,function(){
     $('#main_page').fadeIn(300,function(){

     $('#main_page_text h2').animate({'margin-top': '150px'},500,function(){
     $('#main_page_text h2').animate({'letter-spacing':'0px',},500,function(){
     $('#main_page_text button').fadeIn(300)
     $('header').animate({'top':'0px'},500)
     $('#brand_ader').animate({'left':'-1px'},500)
     $('#sns_icons').fadeIn(500)
     $('#bg_video').delay(500).fadeIn(500)

     });});});});});});}); }); }); }); }); }); }); }); }); }); }); }); }); }); }); }); }); }); 
     //인트로 끝 
     //인트로 종료 버튼 클릭 시 
     $('#intro_box button').click(function(){
     $('#intro_text_box p:nth-child(1)').stop()
     $('#intro_text_box p:nth-child(2)').stop()
     $('#intro_text_box p:nth-child(3)').stop()
     $('#intro_text_box p:nth-child(4)').stop()
     $('#intro_text_box p:nth-child(5)').stop()
      $('#intro_text_box p:nth-child(6)').stop()
     $('#intro_text_box p:nth-child(7)').stop()
     $('#intro_text_box p:nth-child(8)').stop()
     $('#intro_text_box p:nth-child(9)').stop()
     $('#intro_text_box p:nth-child(10)').stop()
     $('#intro_text_box p:nth-child(11)').stop()
     $('#intro_text_box p:nth-child(12)').stop()
     $('#intro_text_box p:nth-child(13)').stop()
     $('#intro_text_box p:nth-child(14)').stop()
     $('#intro_text_box p:nth-child(15)').stop()
     $('#intro_text_box p:nth-child(16)').stop()
     $('#intro_text_box p:nth-child(17)').stop()
     $('#intro_text_box p:nth-child(18)').stop()
     $('#intro_box').stop()
     $('#intro_text_box').stop()
     $('#intro_logo img').stop()
     $('#main_page').stop()
     $('#intro_box').fadeOut(function(){
     $('#main_page').fadeIn(300,function(){
     $('#main_page_text h2').animate({'margin-top': '150px'},500,function(){
     $('#main_page_text h2').animate({'letter-spacing':'0px',},500,function(){
     $('#main_page_text button').fadeIn(300)
     $('header').animate({'top':'0px'},500)
     $('#brand_ader').animate({'left':'-1px'},500)
     $('#sns_icons').fadeIn(500)
     $('#bg_video').delay(500).fadeIn(500)
    });});});});});
    //인트로 종료 버튼 클릭 끝

    slide_num = 0;
    //슬라이드 오른쪽 버튼 클릭시 이벤트 시작
    $('#promotion_slide_right_bt').click(function(){
    slide_num = slide_num-200
    if(slide_num <=-1600){ slide_num=-1400}
    $('#promotion_slide').stop().animate({'left':slide_num},500)
    if(slide_num ==0){
    slide_num =0
    $('.promotion_img_item_box:nth-child(1)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">2,586')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(17,202) | all more')
    }
    if(slide_num ==-200){
    slide_num =-200
    $('.promotion_img_item_box:nth-child(2)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(1)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Merlin coat')
    $('#promotion_text_box p').html('Product details. <br> Oversized long coat. <br> The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">5,849')

    $('#product_information h2').html('Merlin coat')
    $('#product_information p').html('Product details. <br> Oversized long coat. The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_review h4').html('(13,163) | all more')
    }
    if(slide_num ==-400){
    slide_num =-400
    $('.promotion_img_item_box:nth-child(3)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,211')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_review h4').html('(10,836) | all more')
    }
    if(slide_num ==-600){
    slide_num =-600
    $('.promotion_img_item_box:nth-child(4)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(3)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Sculpture logo track zip-up')
    $('#promotion_text_box p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">4,667')

    $('#product_information h2').html('Sculpture logo track zip-up')
    $('#product_information p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_review h4').html('(12,998) | all more')
    }
    if(slide_num ==-800){
    slide_num =-800
    $('.promotion_img_item_box:nth-child(5)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(4)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,335')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_review h4').html('(7,911) | all more')
    }	
    if(slide_num ==-1000){
    slide_num =-1000
    $('.promotion_img_item_box:nth-child(6)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(5)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">4,667')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(8,023) | all more')
    }	
    if(slide_num ==-1200){
    slide_num =-1200
    $('.promotion_img_item_box:nth-child(7)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(6)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Canyon knit')
    $('#promotion_text_box p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">2,112')

    $('#product_information h2').html('Canyon knit')
    $('#product_information p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_review h4').html('(6,119) | all more')
    }	
    if(slide_num ==-1400){
    slide_num =-1400
    $('.promotion_img_item_box:nth-child(8)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(7)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Kaplan knit')
    $('#promotion_text_box p').html('Product details. <br> Multi-organization knit pullover. <br> The twisted label on the back. Detail.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,916')

    $('#product_information h2').html('Kaplan knit')
    $('#product_information p').html('Product details. <br> Multi-organization knit pullover. <br> The twisted label on the back. Detail.')
    $('#promotion_review h4').html('(14,678) | all more')
    }		
    }); //슬라이드 오른쪽 버튼 클릭 시  이벤트 끝
    //슬라이드 왼쪽 버튼 클릭 시 이벤트 시작
    $('#promotion_slide_left_bt').click(function(){
    slide_num = slide_num+200
    if(slide_num >=0){ slide_num=-0}
    $('#promotion_slide').stop().animate({'left':slide_num},500)
    if(slide_num ==-1200){
    slide_num =-1200
    $('.promotion_img_item_box:nth-child(7)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(8)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Canyon knit')
    $('#promotion_text_box p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">2,112')

    $('#product_information h2').html('Canyon knit')
    $('#product_information p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_review h4').html('(6,119) | all more')
    }	
    if(slide_num ==-1000){
    slide_num =-1000
    $('.promotion_img_item_box:nth-child(6)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(7)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">4,667')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(8,023) | all more')
    }
    if(slide_num ==-800){
    slide_num =-800
    $('.promotion_img_item_box:nth-child(5)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(6)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,335')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_review h4').html('(7,911) | all more')
    }
    if(slide_num ==-600){
    slide_num =-600
    $('.promotion_img_item_box:nth-child(4)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(5)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Sculpture logo track zip-up')
    $('#promotion_text_box p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">4,667')

    $('#product_information h2').html('Sculpture logo track zip-up')
    $('#product_information p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_review h4').html('(12,998) | all more')
    }
    if(slide_num ==-400){
    slide_num =-400
    $('.promotion_img_item_box:nth-child(3)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(4)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,211')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_review h4').html('(10,836) | all more')
    }
    if(slide_num ==-200){
    slide_num =-200
    $('.promotion_img_item_box:nth-child(2)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(3)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Merlin coat')
    $('#promotion_text_box p').html('Product details. <br> Oversized long coat. <br> The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">5,849')

    $('#product_information h2').html('Merlin coat')
    $('#product_information p').html('Product details. <br> Oversized long coat. The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_review h4').html('(13,163) | all more')
    }
    if(slide_num ==0){
    slide_num =0
    $('.promotion_img_item_box:nth-child(1)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">2,586')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(17,202) | all more')
    }
    });
    //inbox 드레그&드롭 #promotion_img 이동 시작
    $('#inbox_top').droppable({
    drop:function(){$('#inbox_bt').stop().animate({'top':'0'},300);
    $('#promotion_img_inbox').animate({'margin-top':'35px'},300)
    }	
    });
    $('#inbox_bottom').droppable({
    drop:function(){$('#inbox_bt').stop().animate({'top':'20px'},300);
    $('#promotion_img_inbox').animate({'margin-top':'-100px'},300)
    }
    });
    $('#inbox_bt').draggable({
        containment:'#inbox', axis:'y',
    });
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
    //inbox 드레그&드롭 #promotion_img 이동 끝
    //$('#slide li:nth-child(1)').click(function(){
        //window.location.href="sub_page1.html"
    //});
//화면 전환 스크립트
    main_page_toggle = 1; // 토글 1로 시작함으로 써 브랜드 아더에 1 표시 이후..2 ..3..4 증가하는 식으로 만들려고 했음
    $('#main_page_text button').click(function(){
        main_page_toggle + 1 //main_page_toggle 변수에 +1을 함으로 써 2번째 페이지가 보이고 브랜드 아더의 숫자도 2로 바꿔줌 
        if(main_page_toggle==1){
            main_page_toggle=2
            $('#brand_ader h3 span').text(main_page_toggle)
        }
        $('#main_page_text').fadeOut()
        $('#main').delay(100).animate({'z-index':'6'})
        $('#main').fadeIn()
        //3d 박스 움직임 시작
        $('#box_wrap1').stop().delay(400).animate({'left':'0px'},900,function(){
            $('#box_wrap1').stop().delay(300).animate({'top':'0px'},700)
        });
        $('#box_wrap2').stop().delay(500).animate({'top':'30px'},700,function(){
            $('#box_wrap2').stop().delay(300).animate({'right':'0'},800)
        });
        $('#box_wrap3').stop().delay(300).animate({'bottom':'30px'},800,function(){
            $('#box_wrap3').stop().delay(500).animate({'left':'0'},700)
        });
        $('#box_wrap4').stop().delay(500).animate({'bottom':'0'},700,function(){
            $('#box_wrap4').stop().delay(300).animate({'right':'0'},900)
        });
        //3d 박스 움직임 끝
    });
    $('#brand_ader').click(function(){
        main_page_toggle - 1
        if(main_page_toggle==3){
            main_page_toggle=2
            $('#brand_ader h3 span').text(main_page_toggle)
            $('#main').show(function(){
            $('#main').stop().animate({'top':'0px'},500)
        });
            $('#bg_video').fadeIn(500)
            $('#promotion_img_box').fadeOut(500)
        }
        else if(main_page_toggle==2){
            main_page_toggle=1
        $('#brand_ader h3 span').text(main_page_toggle)
        $('#main_page_text').fadeIn()
        $('#main').animate({'z-index':'1'},50)
        $('#main').hide()
                    //3d 박스 움직임 시작
        $('#box_wrap1').stop().animate({'left':'-500px'},300,function(){
            $('#box_wrap1').stop().delay(300).animate({'top':'-100px'},300)
        });
        $('#box_wrap2').stop().animate({'top':'-50px'},300,function(){
            $('#box_wrap2').stop().animate({'right':'-500px'},300)
        });
        $('#box_wrap3').stop().animate({'bottom':'-50px'},300,function(){
            $('#box_wrap3').stop().animate({'left':'-250px'},300)
        });
        $('#box_wrap4').stop().animate({'bottom':'-100px'},300,function(){
            $('#box_wrap4').stop().animate({'right':'-300px'},300)
        });
        //3d 박스 움직임 끝
        }
    })
    //화면 전환 스크립트 끝
    $('#shop_menu li').mouseenter(function(){
        $('#shop_line').stop().animate({'width':'100%'},200)
    });
    $('#shop_menu li').mouseleave(function(){
        $('#shop_line').stop().animate({'width':'0px'},200)
    });
    //////////slide_num2 =($('.swiper-slide').index()*200)//////////
    //main_page_toggle을 이용하여 2번째 페이지에서 3번째 페이지로 전환 될 때 적용되는 이벤트들 
    //main_page_toggle = 1; 이기때문에 if 만약 main_page_toggle ==2 경우 (메인 페이지가 2와 같다면) .swiper-slide 첫번째 또는 #main_text_box button 을 클릭 시 main_page_toggle=3이되라 그때 적용되는 이벤트들을 적용함.
    $('#main_wrap').click(function(){
        if(main_page_toggle==2){
            main_page_toggle=3
            $('#brand_ader h3 span').text(main_page_toggle)
            $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
            $('.promotion_img_item_box:nth-child(3)').css({'display':'none'})
            $('.promotion_img_item_box:nth-child(4)').css({'display':'none'})
            $('.promotion_img_item_box:nth-child(5)').css({'display':'none'})
            $('.promotion_img_item_box:nth-child(6)').css({'display':'none'})
            $('.promotion_img_item_box:nth-child(7)').css({'display':'none'})
            $('.promotion_img_item_box:nth-child(8)').css({'display':'none'})
        }
        $('#main').stop().animate({'top':'1800px'},300,function(){
            $('#main').hide()
        });
        $('#bg_video').fadeOut(500)
        $('#promotion_img_box').delay(500).fadeIn(500)
        $('.promotion_img_item_box:nth-child(1)').css({'display':'block'})
        $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
        $('#promotion_text_box h4').html('Mens')
        $('#promotion_text_box h2').html('Joyce knit vest')
        $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
        $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">2,586')

        $('#product_information h2').html('Joyce knit vest')
        $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
        $('#promotion_review h4').html('(17,202) | all more')
        slide_num=0; //slide_num 변수를 0으로 만들어서 다음 페이지로 이동 됬을 때 슬라이드 오른쪽 왼쪽 버튼을 눌렀을 때 순서대로 보이게 적용할 수 있음 *중요함*
        $('#promotion_slide').animate({'left':slide_num},500)
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
            $('#shop_menu li a').css({'color':'#fff'})
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
            $('#shop_menu li a').css({'color':'#000'})
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
    // .parents 부모의 .children 자식의 .siblings 형제의를 활용하여 코드 줄여봄.
    $('.promotion_item_box_bt li:nth-child(1)').click(function(){
        $(this).parents('.promotion_item_box_bt').siblings('.promotion_img_popup_box').fadeIn()
        $(this).parents('.promotion_item_box_bt').siblings('.promotion_img_popup_box').children('.promotion_img_popup_box li:nth-child(1)').fadeIn()
    });
    $('.promotion_item_box_bt li:nth-child(2)').click(function(){
        $(this).parents('.promotion_item_box_bt').siblings('.promotion_img_popup_box').fadeIn()
        $(this).parents('.promotion_item_box_bt').siblings('.promotion_img_popup_box').children('.promotion_img_popup_box li:nth-child(2)').fadeIn()
    });
    $('.promotion_item_box_bt li:nth-child(3)').click(function(){
        $(this).parents('.promotion_item_box_bt').siblings('.promotion_img_popup_box').fadeIn()
        $(this).parents('.promotion_item_box_bt').siblings('.promotion_img_popup_box').children('.promotion_img_popup_box li:nth-child(3)').fadeIn()
    });
    $('.promotion_img_popup_box li button').click(function(){
        $('.promotion_img_popup_box').fadeOut()
        $('.promotion_img_popup_box li').fadeOut()
    });
        //모바일 left right 버튼 script 시작 반응형 버튼 따로 만들어서 적용함.
        //작업 끝날쯤 반응형 다시 할 때 .promotion_img_item_box:nth-child() 순서에 맞게 1~8까지 다 꺼야될 듯. *중요함*
        //모바일 오른쪽 버튼 클릭 시 이벤트 시작
        $('#img_slide_right_bt').click(function(){
    slide_num = slide_num-200
    if(slide_num <=-1600){ slide_num=-1400}
    $('#promotion_slide').stop().animate({'left':slide_num},500)
    if(slide_num ==0){
    slide_num =0
    $('.promotion_img_item_box:nth-child(1)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">2,586')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(17,202) | all more')
    }
    if(slide_num ==-200){
    slide_num =-200
    $('.promotion_img_item_box:nth-child(2)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(1)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Merlin coat')
    $('#promotion_text_box p').html('Product details. <br> Oversized long coat. <br> The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">5,849')

    $('#product_information h2').html('Merlin coat')
    $('#product_information p').html('Product details. <br> Oversized long coat. The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_review h4').html('(13,163) | all more')
    }
    if(slide_num ==-400){
    slide_num =-400
    $('.promotion_img_item_box:nth-child(3)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,211')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_review h4').html('(10,836) | all more')
    }
    if(slide_num ==-600){
    slide_num =-600
    $('.promotion_img_item_box:nth-child(4)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(3)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Sculpture logo track zip-up')
    $('#promotion_text_box p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">4,667')

    $('#product_information h2').html('Sculpture logo track zip-up')
    $('#product_information p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_review h4').html('(12,998) | all more')
    }
    if(slide_num ==-800){
    slide_num =-800
    $('.promotion_img_item_box:nth-child(5)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(4)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,335')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_review h4').html('(7,911) | all more')
    }	
    if(slide_num ==-1000){
    slide_num =-1000
    $('.promotion_img_item_box:nth-child(6)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(5)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">4,667')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(8,023) | all more')
    }	
    if(slide_num ==-1200){
    slide_num =-1200
    $('.promotion_img_item_box:nth-child(7)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(6)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Canyon knit')
    $('#promotion_text_box p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">2,112')

    $('#product_information h2').html('Canyon knit')
    $('#product_information p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_review h4').html('(6,119) | all more')
    }	
    if(slide_num ==-1400){
    slide_num =-1400
    $('.promotion_img_item_box:nth-child(8)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(7)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Kaplan knit')
    $('#promotion_text_box p').html('Product details. <br> Multi-organization knit pullover. <br> The twisted label on the back. Detail.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png">3,916')

    $('#product_information h2').html('Kaplan knit')
    $('#product_information p').html('Product details. <br> Multi-organization knit pullover. <br> The twisted label on the back. Detail.')
    //모바일 왼쪽 버튼 클릭 시 이벤트 시작
    $('#promotion_review h4').html('(14,678) | all more')
    }		
    });
    //모바일 오른쪽 버튼 클릭 시 이벤트 끝
    $('#img_slide_left_bt').click(function(){
    slide_num = slide_num+200
    if(slide_num >=0){ slide_num=-0}
    $('#promotion_slide').stop().animate({'left':slide_num},500)
    if(slide_num ==-1200){
    slide_num =-1200
    $('.promotion_img_item_box:nth-child(7)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(8)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Canyon knit')
    $('#promotion_text_box p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">2,112')
    
    $('#product_information h2').html('Canyon knit')
    $('#product_information p').html('Product details. <br> Oversized fit. <br> Gradient color knitwear.')
    $('#promotion_review h4').html('(6,119) | all more')
    }	
    if(slide_num ==-1000){
    slide_num =-1000
    $('.promotion_img_item_box:nth-child(6)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(7)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">4,667')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(8,023) | all more')
    }
    if(slide_num ==-800){
    slide_num =-800
    $('.promotion_img_item_box:nth-child(5)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(6)').css({'display':'none'})
    $('#promotion_text_box h4').html('Womens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">3,335')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials.')
    $('#promotion_review h4').html('(7,911) | all more')
    }
    if(slide_num ==-600){
    slide_num =-600
    $('.promotion_img_item_box:nth-child(4)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(5)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Sculpture logo track zip-up')
    $('#promotion_text_box p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">4,667')

    $('#product_information h2').html('Sculpture logo track zip-up')
    $('#product_information p').html('Product details. <br> Very oversized fit. Detachable hat. <br> Leather strings and zippers.')
    $('#promotion_review h4').html('(12,998) | all more')
    }
    if(slide_num ==-400){
    slide_num =-400
    $('.promotion_img_item_box:nth-child(3)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(4)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Oz knit jumper')
    $('#promotion_text_box p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">3,211')

    $('#product_information h2').html('Oz knit jumper')
    $('#product_information p').html('Product details. <br> Oversized knit cardigan. Mixing <br> subsidiary materials. etail of the slanted pocket.')
    $('#promotion_review h4').html('(10,836) | all more')
    }
    if(slide_num ==-200){
    slide_num =-200
    $('.promotion_img_item_box:nth-child(2)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(3)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Merlin coat')
    $('#promotion_text_box p').html('Product details. <br> Oversized long coat. <br> The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">5,849')

    $('#product_information h2').html('Merlin coat')
    $('#product_information p').html('Product details. <br> Oversized long coat. The details of the sleeves that look like theyre cut into two pieces.')
    $('#promotion_review h4').html('(13,163) | all more')
    }
    if(slide_num ==0){
    slide_num =0
    $('.promotion_img_item_box:nth-child(1)').css({'display':'block'})
    $('.promotion_img_item_box:nth-child(2)').css({'display':'none'})
    $('#promotion_text_box h4').html('Mens')
    $('#promotion_text_box h2').html('Joyce knit vest')
    $('#promotion_text_box p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_text_box h3').html('<img src="images/icons/share_black_icon.png" alt="">2,586')

    $('#product_information h2').html('Joyce knit vest')
    $('#product_information p').html('Product details. <br> Deep U-neck knit vest. <br> Sochi label, ADER zigzag embroidery details.')
    $('#promotion_review h4').html('(17,202) | all more')
    }
    });
    //모바일 왼쪽 버튼 클릭 시 이벤트 끝
        //모바일 left right 버튼 script 끝
    // $('#main_wrap').mouseenter(function(){
    // 	$('#box_wrap1').animate({'left':'0px'},1000,function(){
    // 		$('#box_wrap1').animate({'top':'0px'},1000)
    // 	});
    // 	$('#box_wrap2').delay(200).animate({'top':'30px'},800,function(){
    // 		$('#box_wrap2').delay(300).animate({'right':'0'},800)
    // 	});
    // 	$('#box_wrap3').delay(200).animate({'bottom':'30px'},700,function(){
    // 		$('#box_wrap3').delay(100).animate({'left':'0'},700)
    // 	});
    // 	$('#box_wrap4').delay(300).animate({'bottom':'0'},900,function(){
    // 		$('#box_wrap4').delay(200).animate({'right':'0'},900)
    // 	});
    // });
});