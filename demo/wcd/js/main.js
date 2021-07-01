


let pages = document.querySelectorAll("section");
const btn = document.querySelector('.btn');
const main = document.querySelector('main');
let userStatus = {
	'nowTopic' : 0,
	'score' : 0,
	'answerCorrect' : true,
	'pageChange' : 250
}
const ansPageContent =[
	{
		'ytLink' : "https://www.youtube.com/embed/mRE57pADCRY",
		'txt' : "放在錢包的保險套，很多人拿來當成招桃花的一個護身符或是幸運符，但是放在錢包常常摩擦，容易導致保險套破裂，另外，放在機車後車箱或是車內的保險套，也都有可能因為高溫而導致變質，所以不管是放在錢包或是車上的保險套都不建議再使用！"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/Jc2ft2ZdmCE",
		'txt' : "一般人可能不知道其實潤滑劑也分很多種，油性的潤滑劑除了一般市售的，還有人會用嬰兒油或是凡士林來替代，但這些『油性』的潤滑劑會跟乳膠保險套產生化學變化，導致保險套摩擦後破裂無法避孕。搭配保險套使用的潤滑劑，建議用水性或者是矽膠性，這樣保險套才不會摩擦而破裂。"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/IPP8EXA52VE",
		'txt' : "事後避孕藥是屬於緊急避孕方式，例如遇到保險套破掉的狀況，就得趕緊使用事後避孕藥，而它的避孕效果與服用的時間有關："
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
			setTimeout(function(){ item.style.display = 'none' }, userStatus.pageChange);
		}else{
			item.style.display = 'block';
			setTimeout(function(){ item.style.opacity = '1' }, userStatus.pageChange);
			
		}
	})
	getStatus()
}

function getStatus(){
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
			// userStatus.score -= 1;
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
	ansYt.setAttribute('src',ansPageContent[num-1].ytLink);
	ansTxt.textContent = ansPageContent[num-1].txt;
}



	

	function topicMove(num){
		let ptime = userStatus.pageChange / 1000;
		let questionEnent ={
			'back': '.situation.question0' + num+ ' .back',
			'front': '.situation.question0' + num + ' .front'
		}
		console.log( questionEnent.front )
		TweenMax.set(questionEnent.front, {y:"-100%", opacity:1});
		TweenMax.set(questionEnent.back, {y:-50, opacity:0});
		TweenMax.set('.question .content', {y:100, opacity:0});
		TweenMax.set('.question .content .innerBox', {y:40, opacity:0});
		TweenMax.set('.question .questionBox', {y:20, opacity:0});
		TweenMax.set('.question .btnBlock', {y:20, opacity:0});
		// console.log('move')
		let tl = new TimelineMax();
		
		tl.to(questionEnent.back,0.8,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime) //0.5
		.to(questionEnent.front,0.5,{
			y:"0%",
			opacity:1,
			ease: "power4.out",
		},ptime + 0.55) //0.8
		.to('.question .content',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},ptime + 0.95) //1.2
		.to('.question .content .innerBox',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},ptime + 1.3) //1.55
		.to('.question .questionBox',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},ptime + 1.75) //2
		.to('.question .btnBlock',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},ptime + 1.9)	//2.15
	}
