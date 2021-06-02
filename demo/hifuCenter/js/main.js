// $(window).on("load", function () {
	
// });

$(document).ready(function () {

	function headerScrollFixed(){
		let w_top = $(window).scrollTop();
		if( w_top > 0 ){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}
	}
	headerScrollFixed()
	$(window).on('scroll',function(){
		headerScrollFixed()
	})


	let menuBar = $("#menuBar");
	$('.btn_hamburger').on('click',function(){
		console.log(menuBar)
		if( !menuBar.hasClass('open') ){
			menuBar.addClass('open');
        btn_ham_toopen_animate();
		}else if(menuBar.hasClass('open')){
			menuBar.removeClass('open');
			menuBar.addClass('close')
        btn_ham_toclose_animate();
		}else{
			menuBar.removeClass('close')
		}
	})

	$(window).on('resize',function(){
		menuBar.removeClass('close')
	})

	//hamburger btn animate
	//-----------------------------------------------------
	//-----------------------------------------------------
  var tl_ham = new TimelineMax();
	function btn_ham_toopen_animate(){
		console.log("124")
	  tl_ham = new TimelineMax({});
		tl_ham.add('startClose',0.25)
		tl_ham.to('.btn_hamburger .line02',0.25,{
			opacity:0,
		},'startClose')	
		tl_ham.add('moveX')
		.to('.btn_hamburger .line01',0.15,{
			y:-3,
			ease: "power4.out",
		},"moveX")
		.to('.btn_hamburger .line03',0.15,{
			y:3,
			ease: "power4.out",
		},"moveX")
		tl_ham.add('rotation','+=0.25')
		.to('.btn_hamburger .line01',0.15,{
			rotation: 45,
			y:9,
			ease: "power4.out",
		},'rotation')
		.to('.btn_hamburger .line03',0.15,{
			rotation: -45,
			y:-9,
			ease: "power4.out",
		},'rotation')

	}
    function btn_ham_toclose_animate(){
        tl_ham.reverse();
    }
    







	
});


