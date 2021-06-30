


let pages = document.querySelectorAll("section");
const btn = document.querySelector('.btn');
const main = document.querySelector('main');
pageChange();

function pageChange(){
	pages = document.querySelectorAll("section");
	pages.forEach(function(item){
		if( item.getAttribute('data-type') == 'hide'){
			item.style.opacity = '0';
			setTimeout(function(){ item.style.display = 'none' }, 500);
		}else{
			item.style.display = 'block';
			setTimeout(function(){ item.style.opacity = '1' }, 500);
		}
	})
}



let userStatus = {
	'nowTopic' : 0,
	'score' : 0,
	'answerCorrect' : true
}

main.addEventListener('click',function(e){
	let btnType = e.target.getAttribute('data-type');
	console.log(e.target)

	// click btn gameStart
	if( btnType == 'gameStart' ){
		pages.forEach(function(item){
			if(item.classList == 'home'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'information' ){
				item.setAttribute('data-type','show')
				pageChange();
			}
		})
	}
	// click btn informationFinish
	if( btnType == 'informationFinish' ){
		pages.forEach(function(item){
			if(item.classList == 'information'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'storyIntro' ){
				item.setAttribute('data-type','show')
				pageChange();
			}
		})
	}
	// click btn storyIntro
	if( btnType == 'storyIntro' ){
		userStatus.nowTopic += 1;
		pages.forEach(function(item){
			if(item.classList == 'storyIntro'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'question' && item.getAttribute('data-num') == userStatus.nowTopic ){
				item.setAttribute('data-type','show')
				pageChange();
				topicMove();
			}
		})
	}

	// click question btn answerYes
	if( btnType == 'answerYes' ){
		userStatus.score += 1;
		userStatus.answerCorrect = true;
		pages.forEach(function(item){
			if(item.classList == 'question'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'answer' ){
				item.setAttribute('data-type','show')
				pageChange();
			}
		})
	}

	
	
	// console.log(e.target.getAttribute('data-type'));
	// topicMove();
	

})



	

	function topicMove(){
		TweenMax.set('.situation.question01 .front', {y:50, opacity:0});
		TweenMax.set('.situation.question01 .back', {y:-50, opacity:0});
		TweenMax.set('.question .content', {y:100, opacity:0});
		TweenMax.set('.question .content .inner', {y:40, opacity:0});
		TweenMax.set('.question .questionBox', {y:20, opacity:0});
		TweenMax.set('.question .btnBlock', {y:20, opacity:0});
		console.log('move')
		let tl = new TimelineMax();

		tl.to('.situation.question01 .back',0.9,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},0.5)
		.to('.situation.question01 .front',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},0.85)
		.to('.question .content',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},1.2)
		.to('.question .content .inner',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},1.55)
		.to('.question .questionBox',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},2)
		.to('.question .btnBlock',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},2.15)	
	}
