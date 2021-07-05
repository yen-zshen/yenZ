$(window).on("load", function () {

	$(".sec_lightBox .inner").mCustomScrollbar({
		axis:"y",
		theme:"dark-3",
//		scrollButtons:{ enable: true },
	});
	
});


$(document).ready(function () {
	console.log("lightbox");
	var lb_btn = $(".lb_btn");
	var tent = $(".sec_lightBox .tent")
	var closeBtn = $(".sec_lightBox .closeBtn");
	
	lb_btn.on("click",function(e){
		e.preventDefault();
		let num = $(this).attr("num");
		show_lightBox(num);
	});
	closeBtn.on("click",close_lightBox);
	

	function show_lightBox(num){
		console.log("show")
		$(".sec_lightBox .inner[data-type='" + num +"']").addClass("show");
		$(".sec_lightBox").fadeIn(250);
		tent.delay(250).fadeIn(250);
		$('main').on('touchmove',function(el){
			el.preventDefault();
		},false)//禁止頁面滑動
		$('main').on('scroll',function(el){
			el.preventDefault();
		},false)//禁止頁面滑動
	}
	
	
	function close_lightBox(){
		tent.fadeOut(250);
		$(".sec_lightBox").fadeOut(250);
		setTimeout(function () {
			$(".sec_lightBox .inner").removeClass("show")
		}, 250);
		
	}
	
	
	
	//點選空白處
	//------------------------------------------------------
	$(".sec_lightBox").on("click", function (event) {
		// 目標區域: tent
		if (!tent.is(event.target) && tent.has(event.target).length === 0) {
			close_lightBox();
		}
	});
	
	
})