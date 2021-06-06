// $(window).on("load", function () {
	
// });

$(document).ready(function () {

	


	let menuBar = $("#menuBar");
	$('.btn_hamburger').on('click',function(){
		// console.log(menuBar)
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


	// click list -----------------------------------------
	let navBar = document.getElementById('menuBar');
	navBar.addEventListener('click',function(e){
	let navList = e.target;
	if( navList.getAttribute('data-type') == 'nav' ){
		let navListNum = navList.getAttribute('data-num');
		let navBarHeight = document.querySelector('header').clientHeight;

		if( navListNum == '10' ){
			
		}else if( navListNum == '11' ){
			$('html,body').animate({	scrollTop: 0	}, 500);
		}else{
			$('html,body').animate({
				scrollTop: $("section[data-num='" + navListNum + "']").offset().top - navBarHeight - 10
			}, 500);
		}
	}

	menuBar.removeClass('open')
	menuBar.addClass('close')
	btn_ham_toclose_animate();

})

	$(window).on('resize',function(){
		menuBar.removeClass('close')
	})

	//hamburger btn animate
	//-----------------------------------------------------
	//-----------------------------------------------------
  var tl_ham = new TimelineMax();
	function btn_ham_toopen_animate(){
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
    




let scrollData = [];


function headerScrollFixed(scrollNow){
	if( scrollNow > 0 ){
		$('header').addClass('fixed');
	}else{
		$('header').removeClass('fixed');
	}
}

function getSectionData(){
	let sections = document.querySelectorAll('section');
	sections.forEach(function(sec){
		let secTop = sec.offsetTop;
		let secHeight = sec.offsetHeight;
		let secNum = sec.getAttribute('data-num');
		// console.log(`num: ${secNum} , offsetTop : ${secTop} , height : ${secHeight}`)
		scrollData.push(
			{
				'num':secNum,
				'offsetTop':secTop,
				'height':secHeight
			})
	})
	// console.log(scrollData)
}


function navChoose(scrollNow){
	// console.log(scrollNow);
	scrollData.forEach(function(sec){
		let secTop = sec.offsetTop;
		let secH = sec.height;
		let secNum = sec.num;
		let navBarH = document.querySelector('header').offsetHeight;
		let sNow = scrollNow + navBarH + 11;
		if( secNum == '0' ){
			document.querySelectorAll('#menuBar li').forEach(function(list){
				list.classList.remove('choose');
			})
		}else if( sNow >= secTop && sNow < (secTop + secH)){
			// console.log(secNum)
			
			$("#menuBar li[data-num='"+ secNum +"']").addClass("choose").siblings().removeClass("choose");
		}
		
	})
	
}



let scrollNow = $(window).scrollTop();
// get section data
getSectionData();
headerScrollFixed(scrollNow);
navChoose(scrollNow);

// scroll ------------------------------
$(window).on('scroll',function(){
	scrollNow = $(window).scrollTop();
	headerScrollFixed(scrollNow)
	setTimeout(function(){ navChoose(scrollNow) }, 500);

})


$.ajax({
    type: "GET",
    url: "https://spreadsheets.google.com/feeds/list/1tA1Q7DoNaQHJjLsU-HPPRf4ZJGX3a1eRUpHpWOdscAo/od6/public/values?alt=json",
    dataType: "json", 
    cache: false,
    success: function push_html(object) {
			console.log("success")
      let googleData = object.feed.entry;

			// console.log( googleData );

			let qaArray=[];
			let drArray=[];
			googleData.forEach(function(data,i){
				qaArray.push(
					{
						'question':data.gsx$question.$t,
						'answer':data.gsx$answer.$t.replaceAll('\n','<br>')
					}
				)
				if( i < 3 ){
					drArray.push(
						{
							'drName':data.gsx$name.$t,
							'drIntro':data.gsx$introduction.$t.replaceAll('\n','<br>'),
							'drPicture':data.gsx$picture.$t
						}
					)
				}

			})

			// write into html (phone) --------------
			let phoneData = document.getElementById('phoneData');
			phoneData.textContent = googleData[0].gsx$phone.$t;


			// write into html (QA) --------------
			let qaHtmlTemp;
			let qaHtml = document.getElementById('qaData');
			let qaHtmlString ='';
			
			qaArray.forEach(function(qa){
				qaHtmlTemp = `<div class="col">
					<div class="block">
						<div class="question">
							<p>${qa.question}</p>
						</div>
						<div class="answer">
							<div class="inner">
								<p>${qa.answer}</p>
							</div>
							<div class="arrow"></div>
						</div>
					</div>
				</div>`;
				qaHtmlString += qaHtmlTemp
				qaHtml.innerHTML=qaHtmlString;
			})

			// write into html (doctor) --------------
			let drHtmlTemp;
			let drHtml = document.getElementById('drData');
			let drHtmlString ='';

			drArray.forEach(function(dr){
				drHtmlTemp = `<div class="col">
					<div class="img">
						<img src="img/${dr.drPicture}.png" alt="">
					</div>
					<div class="intro">
						<div class="name"><strong>${dr.drName}</strong> 醫師</div>
						<p>${dr.drIntro}</p>
					</div>
				</div>`;
				drHtmlString += drHtmlTemp
				drHtml.innerHTML=drHtmlString;
			})

			// console.log(qaArray)
			// console.log(drArray)
    }
      
  })

// QA ------------------------------
let answer =  $('.answer');

$(document).on('click','.answer .arrow',function(){
	let block = $(this).parent()
	if( !block.hasClass('open') ){
		answer.removeClass('open')
		block.addClass('open');
	}else{
		block.removeClass('open')
	}
})



	
});



// Modernizr.mq('(max-width: 768px)');
