$(window).on("load", function () {
	
});

$(document).ready(function () {

	animateSet();
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
			let drCount;
			
			googleData.forEach(function(data,i){
				qaArray.push(
					{
						'question':data.gsx$question.$t,
						'answer':data.gsx$answer.$t.replaceAll('\n','<br>')
					}
				)
				if( i == 0 ){
					drCount = data.gsx$doctorcount.$t;
					// console.log("drcount :" + drCount)
				}
				if( i < drCount ){
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
			let qaImg = document.querySelector('.sec08 .img');
			let qaArrayCount = qaArray.length;
			
			qaArray.forEach(function(qa,i){
				if( qaArrayCount % 2 == 0 ){
					console.log("even")
					qaImg.classList.add('even');
				}
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
				animateSet(8);
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
				animateSet(7);
				
			})
			animateShow($(window).scrollTop())
    }
      
  })


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
let sections = document.querySelectorAll('section');
function getSectionData(){
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
	sections.forEach(function(sec,i){
		scrollData[i].offsetTop = sec.offsetTop
		scrollData[i].height = sec.offsetHeight
	})
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
			$("#menuBar li[data-num='"+ secNum +"']").addClass("choose").siblings().removeClass("choose");
		}
	})
}


let scrollNow = $(window).scrollTop();
let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
// get section data
getSectionData();
headerScrollFixed(scrollNow);
navChoose(scrollNow);
animateShow(scrollNow);
// scroll ------------------------------
$(document).on('scroll',window,function(){
	scrollNow = $(window).scrollTop();
	headerScrollFixed(scrollNow)
	setTimeout(function(){ navChoose(scrollNow) }, 500);
	animateShow(scrollNow);
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


// tweenMax ------------------------------
function animateShow(scrollNow){
	let wh2 = scrollNow + windowHeight /10*5;
	sections.forEach(function(el,i){
		let secTop = el.offsetTop;
		let secH = el.offsetHeight;
		if( wh2 >= secTop && wh2 < ( secTop + secH ) ){
			animateMove( i+1 )
		}
	})
	
}


function animateMove( num ){
	let tl = new TimelineMax({});
	console.log(num)
	switch (num) {
		case 3:
			tl.to( '.sec03 .showAmimate',0.75,{
				x:"-50%",
				y:"-75%",
				opacity:1,
				ease: "power3.out"
			})
			break;
		case 4:
			tl.to( '.sec04 .showAmimate',0.75,{
				x:"-50%",
				y:"-82%",
				opacity:1,
				ease: "power3.out"
			}).staggerTo( '.sec04 ul li',1,{
				y:0,
				opacity:1,
				ease: "power3.out"
			},0.2)
			break;
		case 5:
			tl.staggerTo( '.sec05 .col',1,{
				y:0,
				opacity:1,
				ease: "power3.out"
			},0.2).to( '.sec05 .showAmimate',2.25,{
				y:0,
				opacity:1,
				ease: "power3.out"
			},0.5)
			break;
		case 6:
			tl.to( '.sec06 .showAmimate',1,{
				x:0,
				opacity:1,
				ease: "power3.out"
			})
			break;
		case 7:
			tl.staggerTo( '.sec07 .col',1,{
				y:0,
				opacity:1,
				ease: "power3.out"
			},0.4)
			break;
		case 8:
			let sec08Row = document.querySelector('.sec08 .row');
			sec08Row.classList.add('show')
		case 9:
			tl.to( '.sec08 .showAmimate',1,{
				x:0,
				opacity:1,
				ease: "power3.out"
			},0.2)
			break;
	}

}


function animateSet(num){
	
	if( num == 7 ){
		TweenMax.set('.sec07 .col', {y:40, opacity:0});
	}else if( num == 8 ){
		// TweenMax.set('.sec08 .row', {y:0, opacity:0});
	}else{
		TweenMax.set('.sec03 .showAmimate', {y:"-35%", opacity:0});
		TweenMax.set('.sec04 .showAmimate', {y:"-50%", opacity:0});
		TweenMax.set('.sec04 ul li', {y:50, opacity:0});
		TweenMax.set('.sec05 .col', {y:80, opacity:0});
		TweenMax.set('.sec05 .showAmimate', {y:100, opacity:0});
		TweenMax.set('.sec06 .showAmimate', {x:-100, opacity:0});
		TweenMax.set('.sec08 .showAmimate', {x:50, opacity:0});
	}
}


	
});



// Modernizr.mq('(max-width: 768px)');
