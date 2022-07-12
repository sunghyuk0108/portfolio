	$(document).ready(function(){
		$('header').animate({'top':'0px'},500,function(){
			$('#popup_header').fadeIn()
		});
		$('#main_wrap_product_box').delay(1000).fadeIn(500)
		$('#sns_icons').fadeIn(500)
		$('#brand_ader').animate({'left':'-1px'},500)

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
				$('#logo img').attr({'src':'images/ader_logo_b.png'})
				$('header').css({'border-color':'#000'})
				$('#menu li').css({'background-color':'#000'})
				$('#shop_menu li').css({'color':'#000'})
				$('#shop_line').css({'background-color':'#000'})
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
        })
        //정품 코드 인증 창 끝
		text_move=-1920;
		setInterval(function(){
			text_move=text_move+18
			if(text_move>=1920){
				text_move=-1920;
				$('#popup_move').stop().css({'right':'-1920px'}); }
			$('#popup_move').stop().animate({'right':text_move},98,"linear")
		},100);

		$('#product_box_menu>ul').mouseenter(function(){
			$(this).children().children('.product_box_sub_menu').stop().slideDown()
		});
		$('#product_box_menu>ul').mouseleave(function(){
			$(this).children().children('.product_box_sub_menu').stop().slideUp()
		});
		$('#main_wrap_product_box').animate({'width':'100%'},500)
	});