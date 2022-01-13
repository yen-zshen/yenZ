$(window).on("load", function () {
	$(".lB_tent").mCustomScrollbar();
	
});

$(document).ready(function () {
	//KV_slide
	$('.kv_slide').slick({
		arrows: true,
    slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots:true,
  });
	
	
	var lb_btn = $(".lb_btn");
	var lightBox = $(".lightBox");
	var lightBox_close = $(".lightBox .close")
	var lB_scroll = $(".lB_scroll");
	
	//點選啟動 lightBox
	lb_btn.on("click", open_lightbox);


	//點選關閉 lightBox
	lightBox_close.on("click", function () {
		lB_scroll.fadeOut(250);
		setTimeout(function () {
			lightBox.removeClass("show");
		}, 250);
	});
	
	//點選空白處
	lightBox.on("click",function (event) {
		// 目標區域: lB_scroll
		if (!lB_scroll.is(event.target) && lB_scroll.has(event.target).length === 0) { 
			lB_scroll.fadeOut(250);
			setTimeout(function () {
				lightBox.removeClass("show");
			}, 250);
		}
	});
	
	
	
	function open_lightbox() {
		var data = $(this).attr("data");
		console.log(data);
		var lb_data = $("." + data);
		
		if (!lb_data.hasClass("show")) {
			lb_data.addClass("show");
			lB_scroll.fadeIn(250);
		} else {
			lB_scroll.fadeOut(250);
			setTimeout(function () {
				lb_data.removeClass("show");
			}, 250);
		}
		if($(".lb05").hasClass("show")){
			 $(".lb05 .img span").delay(500).fadeIn(250);
			 }
	}
	
	function close_lightbox(){
		
	}


});