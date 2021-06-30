


let pages = document.querySelectorAll("section");
const btn = document.querySelector('.btn');
const main = document.querySelector('main');
let userStatus = {
	'nowTopic' : 0,
	'score' : 0,
	'answerCorrect' : true
}
const ansPageContent =[
	{
		'ytLink' : "https://www.youtube.com/embed/mRE57pADCRY",
		'txt' : "01_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/Jc2ft2ZdmCE",
		'txt' : "02_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/IPP8EXA52VE",
		'txt' : "03_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/mRE57pADCRY",
		'txt' : "04_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/Jc2ft2ZdmCE",
		'txt' : "05_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/IPP8EXA52VE",
		'txt' : "06_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/mRE57pADCRY",
		'txt' : "07_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/Jc2ft2ZdmCE",
		'txt' : "08_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/IPP8EXA52VE",
		'txt' : "09_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/IPP8EXA52VE",
		'txt' : "10_先前報導，保險套因為不耐高溫，長時間放在皮夾裡會造成乳化變質，確實不太適合長時間放在密閉、容易過熱的空間。"
	}
]
pageChange();

function pageChange(){
	pages = document.querySelectorAll("section");
	console.log('pageChange')
	pages.forEach(function(item){
		if( item.getAttribute('data-type') == 'hide'){
			item.style.opacity = '0';
			setTimeout(function(){ item.style.display = 'none' }, 500);
		}else{
			item.style.display = 'block';
			setTimeout(function(){ item.style.opacity = '1' }, 500);
			
		}
	})
	let status = document.querySelector('.header .test');
	status.innerHTML = `<p>目前題目：${userStatus.nowTopic}</p><p>目前分數：${userStatus.score}</p>`
}





main.addEventListener('click',function(e){
	let btnType = e.target.getAttribute('data-type');
	let answerResult = e.target.getAttribute('data-result'); 
	// console.log(e.target)

	// click btn gameStart
	if( btnType == 'gameStart' ){
		pages.forEach(function(item){
			if(item.classList == 'home'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'information' ){
				item.setAttribute('data-type','show')
			}
		})
		pageChange();
	}
	// click btn informationFinish
	if( btnType == 'informationFinish' ){
		pages.forEach(function(item){
			if(item.classList == 'information'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'storyIntro' ){
				item.setAttribute('data-type','show')
			}
		})
		pageChange();
	}
	// click btn storyIntro
	if( btnType == 'storyIntro' ){
		userStatus.nowTopic += 1;
		pages.forEach(function(item){
			if(item.classList == 'storyIntro'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'question' && item.getAttribute('data-num') == userStatus.nowTopic ){
				item.setAttribute('data-type','show')
			}
		})
		pageChange();
		topicMove(1);
	}

	// click question page btn answerYes
	if( btnType == 'answerBtn' ){
		if( answerResult == 'yes'){
			userStatus.score += 1;
			userStatus.answerCorrect = true;
		}else if(answerResult == 'no'){
			userStatus.score -= 1;
			userStatus.answerCorrect = false;
		}
		setAnswerBox(userStatus.answerCorrect);
		
		pages.forEach(function(item){
			if(item.classList == 'question'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'answer' ){
				item.setAttribute('data-type','show')
			}
		})
		pageChange();
		changeAnsPageContent(userStatus.nowTopic);
	}

	// click answer page btn nextTopic
	if( btnType == 'nextTopic' ){
		userStatus.nowTopic += 1;
		pages.forEach(function(item){
			if(item.classList == 'answer'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'question' && item.getAttribute('data-num') == userStatus.nowTopic ){
				item.setAttribute('data-type','show')
			}
		})
		pageChange();
		topicMove(userStatus.nowTopic);
	}

	
	

})


function setAnswerBox(data){
	let answerBox = document.querySelector('.answerBox');
	let answer_correct = document.querySelector('.answer_correct')
	let answer_wrong = document.querySelector('.answer_wrong')
		if(data == true){
			answer_correct.setAttribute('data-type','show');
			answer_wrong.setAttribute('data-type','hide');
		}else if( data == false ){
			answer_correct.setAttribute('data-type','hide');
			answer_wrong.setAttribute('data-type','show');
		}
}

function changeAnsPageContent(num){
	let ansYt = document.getElementById('ansYt');
	let ansTxt = document.getElementById('ansTxt');
	console.log(ansYt)
	ansYt.setAttribute('src',ansPageContent[num-1].ytLink);
	ansTxt.textContent = ansPageContent[num-1].txt;
}



	

	function topicMove(num){
		let questionEnent ={
			'back': '.situation.question0' + num+ ' .back',
			'front': '.situation.question0' + num + ' .front'
		}
		console.log( questionEnent.front )
		TweenMax.set(questionEnent.front, {y:50, opacity:0});
		TweenMax.set(questionEnent.back, {y:-50, opacity:0});
		TweenMax.set('.question .content', {y:100, opacity:0});
		TweenMax.set('.question .content .innerBox', {y:40, opacity:0});
		TweenMax.set('.question .questionBox', {y:20, opacity:0});
		TweenMax.set('.question .btnBlock', {y:20, opacity:0});
		console.log('move')
		let tl = new TimelineMax();
		

		tl.to(questionEnent.back,0.9,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},0.5)
		.to(questionEnent.front,0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},0.85)
		.to('.question .content',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},1.2)
		.to('.question .content .innerBox',0.5,{
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
