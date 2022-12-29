
$(document).ready(function (){
	
	
	var tl = new TimelineLite({});
	var tl_02 = new TimelineLite({});
	var tl_03 = new TimelineLite({});
	var query = Modernizr.mq('(max-width: 768px)');
	
	TweenMax.set(".showup", {
		y: 100,
		opacity: 0,
	});
	TweenMax.set(".bird", {
		x:-50,
		y: -50,
		opacity: 1,
	});
	
	//KV
	//-----------------------------------------------
	TweenMax.set("h1 strong", {	y: 100,	opacity: 0	});
	TweenMax.to("h1 strong", 0.5, {
		y: 0,
		opacity: 1,
//		ease: Back.easeOut.config(1.7),
		ease: Power4.easeOut,
		
	})
	TweenMax.set("h1 span.small", {	y: 100,	opacity: 0	});
	TweenMax.to("h1 span.small", 0.5, {
		y: 0,
		opacity: 1,
//		ease: Back.easeOut.config(1),
		ease: Power4.easeOut,
		delay:0.4
	})
	TweenMax.set(".kv .img", {	y: 0,	opacity: 0	});
	TweenMax.to(".kv .img", 2, {
		y: 0,
		opacity: 1,
		ease: Back.easeOut.config(2),
		delay:0.8
	})
	
	
	//點選漢堡選單
	//-------------------------------------
	
	var line1 = $(".menu_btn span:nth-child(1)");
	var line2 = $(".menu_btn span:nth-child(2)");
	var line3 = $(".menu_btn span:nth-child(3)");
	var tl_menu = new TimelineLite({});
	
	menu_btn_click();
	function menu_btn_click(){
		var menu_btn = $(".menu_btn");
		var menu_list = $(".menu");
		
		menu_btn.on("click",function(){
			// 如果選單沒有被開啟
			if(!menu_list.hasClass("show")){
				menu_list.addClass("show");
				menu_btn_animate_open();
			}
			//選單被開啟了
			else{
				menu_list.removeClass("show");
				menu_btn_animate_close();
			}
		})
		
		function menu_btn_animate_open(){
			tl_menu.add("tag1")
			.to(line1,0.25,{
				y:9,
				easw:Power1.easeIn
			},"tag1")
			.to(line3,0.25,{
				y:-9,
				easw:Power1.easeIn
			},"tag1")
			.to(line2,0.25,{
				opacity:0, 
				easw:Power1.easeIn
			},"tag1")
			.add("tag2","+=0.3")
			
			.to(line1,0.25,{
				rotation: 135, 
				easw:Power1.easeIn
			},"tag2")
			
			.to(line3,0.25,{
				rotation: 45, 
				easw:Power1.easeIn
			},"tag2")
			
		}
		function menu_btn_animate_close(){
			tl_menu.to(line3,0.25,{
				rotation: 0, 
				easw:Power1.easeIn
			})
			.to(line1,0.25,{
				rotation: 0, 
				easw:Power1.easeIn
			},"-=0.25")
			.add("tag1","+=0.3")
			
			.to(line1,0.25,{
				y:0,
				easw:Power1.easeIn
			},"tag1")
			.to(line2,0.25,{
				opacity:1,
				easw:Power1.easeIn
			},"tag1")
			.to(line3,0.25,{
				y:0,
				easw:Power1.easeIn
			},"tag1")
		}
	}
	
	//list_click
	//------------------------------------------------------------
	var list = $("header .menu li");
	list.on("click",function(){
		var list_data = $(this).attr("data");
		$('html,body').animate({
            scrollTop: $("#" + list_data  ).offset().top - 89}, 500);
	})

	//點選 line
	$(".line_pc").on("click",function(){
		$(".qrcode_box .box").slideToggle(500)
	})
	$(".close_qrcodeBox").on('click',function(){
		$(".qrcode_box .box").slideUp(500)
	})

	$('[data-btn="question"]').click(function () {
		var _type = $(this).parents('[data-questionTarget]').hasClass('active');
		if (_type) {
			$('[data-questionTarget]').removeClass('active');
		} else {
			$('[data-questionTarget]').removeClass('active');
			$(this).parents('[data-questionTarget]').addClass('active');
		}
	});

	//END	
})


