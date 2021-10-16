
$(document).ready(function() {
	let fullpagedata = {
		normalScroll:  null,
		navi : true,
		fit: true,
		scrollBar : false,
		height : 500,
	}
	
	let fullpage_scroll =function(){
		fullpagedata.normalScroll = '#full01, #full02, #full03';
		fullpagedata.navi = false;
		fullpagedata.fit = false;
		fullpagedata.scrollBar = true;
		console.log('scroll')
		$('.scrollDown').addClass('none');
	}
	let fullpage_slide =function(){
		fullpagedata.normalScroll = '';
		fullpagedata.navi = true;
		fullpagedata.fit = true;
		fullpagedata.scrollBar = false;
		console.log('slide')
		$('.scrollDown').removeClass('none');
	}

	let fullHeightMod = function(){
		// fullpagedata.height = 1000;
		// if( Modernizr.mq('(max-width: 3000px)')  ){

		// }else if( Modernizr.mq('(max-width: 1685px)') ){
		// 	if(Modernizr.mq('(max-height: 1000px)') ){
		// 		console.log('1685 1000');
		// 		fullpage_scroll();
		// 	}else{
		// 		fullpage_slide();
		// 	}
		// }

		// 1685 ~
		if (Modernizr.mq('(min-width: 1685px)') ) {
			console.log('1685');
			fullpagedata.height = 1000;
			if(Modernizr.mq('(max-height: 1000px)') ){
				console.log('1685 1000');
				fullpage_scroll();
			}else{ 	fullpage_slide(); 	}

		// 1024 ~ 1685  H 720 / 500
		}else if ( Modernizr.mq('(min-width: 1024px)') ) {
			console.log('1024');
			fullpagedata.height = 500;
			if( Modernizr.mq('(max-height: 500px)') ){
				console.log('1024 500');
				$('#full01').attr('data-state','noFp');
				$('#full02').attr('data-state','noFp');
				$('#full03').attr('data-state','noFp');
				fullpage_scroll();
			}else if(Modernizr.mq('(max-height: 720px)')){
				console.log('1024 720');
				$('#full01').attr('data-state','smallFp');
				$('#full02').attr('data-state','smallFp');
				$('#full03').attr('data-state','smallFp');
			}else{ 	
				fullpage_slide(); 
				$('#full01').attr('data-state','');
				$('#full02').attr('data-state','');
				$('#full03').attr('data-state','');
			}
		
		// 768 ~ 1024  H 630 / 500
		}else if ( Modernizr.mq('(min-width: 520px)') ) {
			fullpagedata.height = 500;
			console.log('520');
			if(Modernizr.mq('(max-height: 500px)')){
				console.log('520 500');
				$('#full01').attr('data-state','noFp');
				$('#full02').attr('data-state','noFp');
				$('#full03').attr('data-state','noFp');
				fullpage_scroll();
			}
			else if(Modernizr.mq('(max-height: 630px)')){
				console.log('520 630');
				$('#full01').attr('data-state','smallFp');
				$('#full02').attr('data-state','smallFp');
				$('#full03').attr('data-state','smallFp');
			}
			else{ 
				fullpage_slide(); 
				$('#full01').attr('data-state','');
				$('#full02').attr('data-state','');
				$('#full03').attr('data-state','');
			}
		
		// 520 ~ 768  H 630 / 500
		// }else if ( Modernizr.mq('(min-width: 520px)') ) {

		}else{
			console.log('other')
			fullpage_slide();
			// console.log('over 700');
			// fullpage_api.setResponsive(true);
		}
		// setTimeout(function(){ 
		// 	fullpage_api.reBuild();
		// }, 10);
		
	}

	function fullpageBuild(size){
		if( size == 'less'){	
			fullpagedata.normalScroll = '#full01, #full02, #full03';
			fullpagedata.navi = false;
			fullpagedata.fit = false;
			fullpagedata.scrollBar = true;
		}else if ( size == 'more' ){
			fullpagedata.normalScroll = '';
			fullpagedata.navi = true;
			fullpagedata.fit = true;
			fullpagedata.scrollBar = false;
		}else{
			fullpagedata.normalScroll = '';
			fullpagedata.navi = true;
			fullpagedata.fit = true;
			fullpagedata.scrollBar = false;
		}
	}
	
	fullHeightMod();
	createFullpage();
	
	
	// if (Modernizr.mq('(max-height: 700px)')) {
	// 	fullpage_api.setResponsive(true);
	// 	console.log('700');
	// 	// fullpage_api.reBuild({
	// 	// 	sectionsColor: ['#ff0000', '#dddddd', '#C0C0C0', '#ADD8E6'],
	// 	// });
	// }else{
	// 	fullpage_api.setResponsive(false);
	// }
	//resize ------------------------------------
	$(window).resize(function(){
		fullHeightMod();
		// fullpage_api.destroy('navigation');
		// if (Modernizr.mq('(max-height: 700px)')) {
		// 	fullpage_api.destroy();
		// 	// fullpage_api.destroy();
		// }else{
		// 	fullpage_api.reBuild();
		// }
		// // fullHeightMod();
		// // fullpage_api.reBuild();

		// if (Modernizr.mq('(max-height: 700px)')) {
		// 	fullpage_api.setResponsive(true);
		// }
		// else{
		// 	fullpage_api.setResponsive(false);
		// }
	});


	function createFullpage(){
		console.log(fullpagedata)
		$('#fullpage').fullpage({
			sectionsColor: ['#fff', '#fff', '#fff'],
			scrollBar:fullpagedata.scrollBar,
			responsiveHeight: fullpagedata.height,  
			// scrollOverflow:true, 
			navigation: fullpagedata.navi,
			normalScrollElements: fullpagedata.normalScroll,
			fitToSection: fullpagedata.fit,
			// slidesNavigation:true, responsiveSlides:true,
		});
		
		
	}

	
	
	
	let scrollDown01 = $('#scrollDown01');
	let scrollDown02 = $('#scrollDown02');
	
	
	scrollDown01.on('click',function(){
		console.log('success')
		fullpage_api.moveTo(2);
		
	})
	scrollDown02.on('click',function(){
		fullpage_api.moveTo(3);
	})



	//end

});





// new fullpage('#fullpage', {
//   sectionsColor: ['#fff', '#dddddd', '#C0C0C0', '#ADD8E6'],
// 	// scrollBar:true,
// 	// scrollOverflow:true,
// 	// scrollHorizontally: true,
// 	// autoScrolling:false,
// 	responsiveHeight:700,
// 	slidesNavigation:true,
// 	navigation:true,
// 	// fixedElements:'.sectionMenu',
// 	// fixedElements: '#element1, .element2'
// });






let areaBox = $('.areaGroup .infoGroup');

areaBox.on('click',function(){
	if( !$(this).hasClass('active') ){
		$(this).addClass('active');
		$(this).siblings().removeClass('active')
	}else{
		$(this).removeClass('active');
	}
	
})




