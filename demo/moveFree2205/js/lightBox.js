$(document).ready(function () {
	console.log("lightbox");
	var lb_btn = $(".lb_btn");
	var tent = $(".sec_lightBox .tent")
	var closeBtn = $(".sec_lightBox .closeBtn");
	
	lb_btn.on("click",show_lightBox);
	closeBtn.on("click",close_lightBox);
	
	function show_lightBox(){
		console.log("show")
		var num = $(this).attr("num");
		$(".sec_lightBox .lb_" + num).addClass("show");
		$(".sec_lightBox").fadeIn(250);
		tent.delay(250).fadeIn(250);
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