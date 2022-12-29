$(document).ready(function (){

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
  }



  

})