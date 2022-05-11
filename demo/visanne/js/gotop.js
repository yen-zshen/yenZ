$(document).ready(function () { 
	//=======回上方按鈕
	//   function scrollMove(){
	var window_scrollTop = $(window).scrollTop();
	console.log("初始的window_scrollTop : " + window_scrollTop);
	var window_height = $(window).height(); //scroll原本的位置
	var document_height = $(document).height(); //文件高

	$(window).on("scroll", function () {
		var this_scrollTop = $(this).scrollTop(); //scroll現在的位置
		console.log("----");
		console.log("一開始的window_scrollTop : " + window_scrollTop);
		console.log("window   height : " + window_height);
		console.log("window   scroll : " + window_scrollTop);
		console.log("this     Scroll : " + this_scrollTop);
		console.log("document hdight : " + document_height);

		//top 鈕的出現
		if (window_scrollTop < this_scrollTop || this_scrollTop < 300) {
			console.log("▼▼▼往下滑"); //原本的位置<現在的位置
			$(".goTopBtn").removeClass('upToShow');
		} else if (window_scrollTop > this_scrollTop) {
			console.log("▲▲▲往上滑"); //原本的位置>現在的位置
			$(".goTopBtn").addClass('upToShow');
		}
		window_scrollTop = this_scrollTop;
		console.log("之後的window_scrollTop : " + window_scrollTop);

	}); //onscroll的END


	//TOP扭點選後回到最上方
	$(".goTopBtn").on("click", function () {
		$('html,body').animate({
			scrollTop: $("#app").offset().top
		}, 500);
	});

	//cookie
	var cookie = $('.cookie')
	var know = $('.know')

	cookie.delay(500).slideDown(350);
	know.on('click', function () {
		cookie.delay(300).slideUp(300);
	})


})