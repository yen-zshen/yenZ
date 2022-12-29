
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
//	TweenMax.set(".light", {
//		opacity: 0
//	});
	
	
	
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
	
	
	//sec_01 list 預設 -----------------------------
	var sec01_list = $(".sec_01 ul li");
	TweenMax.set(sec01_list, {	y: 0,	opacity: 0	});
	TweenMax.set(".sec_01 .boxG", {	y: 100,	opacity: 0	});
	
	//sec_02 服務流程 預設 -----------------------------
	TweenMax.set(".sec_02 .box", {	opacity: 0	});
	
	//sec_03 透明的服務費用 預設 -----------------------------
	TweenMax.set(".sec_03 .content", {	opacity: 0	});
	
	
	//scrolling
	//-----------------------------------------
	scrolling();
	$(window).on("scroll", function () {
		scrolling();
		console.log("scrolling");
	})

	//-----------------------------------------------------
	function scrolling() {
		var w_h = $(window).height();
		var w_move = $(this).scrollTop();
		var w_move_now = w_move + w_h / 5 * 4.2;

		if(w_move > 0){
			$("header").addClass("fixed");
		}else{
			$("header").removeClass("fixed");
		}


		//showup -----------------------
		$(".showup").each(function () {
			if (w_move_now > $(this).offset().top) {
				TweenMax.to($(this), 0.8, {
					y: 0,
					opacity: 1,
//					ease: Back.easeOut.config(2)
					ease: Power4.easeOut
				})
			}
		})
		
		//bird
		if (w_move_now > $(".img_cat").offset().top) {
			TweenMax.to($(".bird"),2, {
				x:0,
				y: 0,
				opacity: 1,
				ease: Power3.easeOut
			})
		}
		
		//show light -----------------------
//		if (w_move_now > $(".light").offset().top) {
//			TweenMax.to(".light", 0.8, {
//				opacity: 0.5,
//				ease: Power0.ease,
//				delay: 1.5
//			})
//
//		}
		
		// sec_01 LIST----------------------------
		if(w_move_now > $(".sec_01 h2").offset().top){
			tl.staggerTo(sec01_list,0.5,{
				y: 0,
				opacity: 1,
				ease: Power4.easeOut
			},0.2)
			.to(".sec_01 .boxG",1,{
				y: 0,
				opacity: 1,
				ease: Power4.easeOut
			})
		}
		
		// sec_02 服務流程 ------------------------
		if(w_move_now > $(".sec_02").offset().top){
			var i ;
			for(i=1;i<4;i++){
				for(j=0;j<5;j++){
					tl_02.to(".sec_02 .boxG:nth-child("+ i+ ") .box:nth-child(" + j +")",0.6,{
						opacity: 1,
						ease: Power4.easeOut
					},"-=0.5")
				}
				
			}
			
		}
		
		// sec_03 透明的服務費用---------------------
		if(w_move_now > $(".sec_03").offset().top){
			tl_03.to(".sec_03 .content",2,{
				opacity: 1,
				ease: Power4.easeOut
			})
		}
		
		
		
	}
	
	
	
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
		switch (list_data){
			case "sec_01":
				$('html,body').animate({
					scrollTop: $("#" + list_data  ).offset().top - 89}, 500);
				break;
			
			case "sec_03":
				$('html,body').animate({
					scrollTop: $("#" + list_data  ).offset().top - 89}, 500);
				break;
				
			case "sec_form":
				$('html,body').animate({
					scrollTop: $("#" + list_data  ).offset().top - 89}, 500);
				break;
			
		}
		
		
		
	})
	
	
	
	
	
	
	
	
	//sec_04 tag_click
	//-------------------------------------------------
	var tag = $(".tag");
	var tag_content = $(".sec_04 .content");
	tag_content_show("01");
	
	tag.on("click",function(){
		var data;
		data = $(this).attr("data");
		tag_content_show(data)
		// 如果標籤沒有被選擇
		if(!$(this).hasClass("show")){
			$(this).addClass("show");
			$(this).siblings().removeClass("show");
		}
		//如果標籤被選擇
		else{
			
		}
		
	})
	
	
	function tag_content_show(data){
		var t_content = $(".sec_04 .content.con_"+data)
		t_content.siblings().fadeOut(250);
		t_content.delay(250).fadeIn(250);
		
		switch(data) {
			case "01":
				$(".tag:nth-child(1)").css({"border-bottom-right-radius":"5px","border-right":"0px solid #a0a0a0"});
				$(".tag:nth-child(2)").css({"border-bottom-left-radius":"5px","border-left":"1px solid #a0a0a0","border-bottom-right-radius":"0px","border-right":"0px solid #a0a0a0"});
				$(".tag:nth-child(3)").css({"border-bottom-left-radius":"0px","border-left":"1px solid #a0a0a0"});
				break;
			case "02":
				$(".tag:nth-child(1)").css({"border-bottom-right-radius":"5px","border-right":"1px solid #a0a0a0"});
				$(".tag:nth-child(2)").css({"border-bottom-left-radius":"0px","border-left":"0px solid #a0a0a0","border-bottom-right-radius":"0px","border-right":"0px solid #a0a0a0"});
				$(".tag:nth-child(3)").css({"border-bottom-left-radius":"5px","border-left":"1px solid #a0a0a0"});
				break;
			case "03":
				$(".tag:nth-child(1)").css({"border-bottom-right-radius":"0px","border-right":"0px solid #a0a0a0"});
				$(".tag:nth-child(2)").css({"border-bottom-left-radius":"0px","border-left":"1px solid #a0a0a0","border-bottom-right-radius":"5px","border-right":"1px solid #a0a0a0"});
				$(".tag:nth-child(3)").css({"border-bottom-left-radius":"0px","border-left":"0px solid #a0a0a0"});
				break;
		}
		
	}

	
	//點選我有興趣
	$(".toform").on("click", function () {
		$('html,body').animate({
			scrollTop: $("#sec_form").offset().top - 89
		}, 600);
	})

	//點選 line
	$(".line_pc").on("click",function(){
		$(".qrcode_box .box").slideToggle(500)
	})
	$(".close_qrcodeBox").on('click',function(){
		$(".qrcode_box .box").slideUp(500)
	})




	//END	
})


