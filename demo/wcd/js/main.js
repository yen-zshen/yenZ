

let pages = document.querySelectorAll("section");
const btn = document.querySelector('.btn');
const main = document.querySelector('main');
let mquery = Modernizr.mq('(max-width: 768px)');
let userData = {
	'name' : "",
	"gender" : "",
	"age" : "",
	"phone" : "",
	'qArray' : [0,0,0,0,0,0,0,0,0,0],
	'fbShare' : false,
	'formFinish' :false
}
//userStatus ---------------------------------
let userStatus = {
	'nowTopic' : 0,
	'score' : 0,
	'answerCorrect' : true,
	'pageChange' : 250
}
// answer content -----------------------------
const ansPageContent =[
	{
		'ytLink' : "https://www.youtube.com/embed/-IwaVw9pY8U?mute=1&autoplay=1",
		'txt' : "<p type='pages'>放在錢包的保險套，很多人拿來當成招桃花的一個護身符或是幸運符，但是放在錢包常常摩擦，容易導致保險套破裂，另外，放在機車後車箱或是車內的保險套，也都有可能因為高溫而導致變質，所以不管是放在錢包或是車上的保險套都不建議再使用！</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/Yh1LTx5c3Y0?mute=1&autoplay=1",
		'txt' : "<p type='pages'>一般人可能不知道其實潤滑劑也分很多種，油性的潤滑劑除了一般市售的，還有人會用嬰兒油或是凡士林來替代，但這些『油性』的潤滑劑會跟乳膠保險套產生化學變化，導致保險套摩擦後破裂無法避孕。搭配保險套使用的潤滑劑，建議用水性或者是矽膠性，這樣保險套才不會摩擦而破裂。</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/aP6az_J_lO8?mute=1&autoplay=1",
		'txt' : "<p type='pages'>事後避孕藥是屬於緊急避孕方式，例如遇到保險套破掉的狀況，就得趕緊使用事後避孕藥，而它的避孕效果與服用的時間有關：</p><ul><li><p type='pages'>24小時內就服用大概有95％的避孕效果</p></li><li><p type='pages'>24～48小時，避孕效果就只剩下8成</p></li><li><p type='pages'>超過48～72小時，避孕效果只剩下6成</p></li><li><p type='pages'>超過72小時後就不建議使用了</p></li></ul><p type='pages'>所以當遇到這樣緊急狀況時候，是越快使用越好。</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/FSaIunASxtg?mute=1&autoplay=1",
		'txt' : "<p type='pages'>許多年輕人貪圖事後避孕藥的方便，誤把事後避孕藥當成常規避孕藥使用，但這是錯的，就像典甄一樣，事後避孕藥吃太多，導致身體有強烈的副作用反應。</p><p type='pages'>事後避孕藥的劑量一般來說是常規避孕藥的8到10倍，容易導致身體不適，例如：噁心、頭暈、頭痛，或是腸胃的症狀，長期來講甚至可能造成月經混亂或荷爾蒙失調...等問題。</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/fsmB1FhVc5o?mute=1&autoplay=1",
		'txt' : "<p type='pages'>事後避孕藥它是利用荷爾蒙來抑制排卵，或者是延遲排卵，可是當妳服用事後避孕藥的時候，已經排卵了，那事後避孕藥就沒有效果了！</p><p type='pages'>女生排卵的徵兆：</p><ul><li><p type='pages'>有蛋白清的一些分泌物</p></li><li><p type='pages'>單側排卵處會有一些排卵痛</p></li><li><p type='pages'>排卵之前，有些人會有乳房脹痛的狀況</p></li></ul>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/MRDrQQLIldo?mute=1&autoplay=1",
		'txt' : "<p type='pages'>男生在性行為時，並不能完全控制自己的精液流出，有時候在不自覺的情況下，精液就流出來到女生的身體裡，也因此，當男生的性器官要接觸到女生的陰道時，就應該要帶上保險套，並且在行房的過程中全程配戴，這樣子才是保險套正確的使用時機。</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/GY-oKDfMMYY?mute=1&autoplay=1",
		'txt' : "<p type='pages'>雙重防護指的是『男生戴保險套，女生服用常規避孕藥』</p><p type='pages'>常見錯誤的觀念，以為雙重防護是男生戴兩層保險套，但戴兩層容易增加磨擦破裂的風險，因此不建議這樣使用；另外，女生服用常規避孕藥，只要按時間規律每天吃一顆，服用七天過後就會開始有避孕效果，如果以為多吃幾顆避孕效果會加倍，那是不正確的觀念，按照醫師醫囑使用即可喔！</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/ikUjt4RklCs?mute=1&autoplay=1",
		'txt' : "<p type='pages'>女生服用常規避孕藥並不會導致不孕，在臨床上醫師還會先以口服避孕藥調經，幫助不孕症的治療，增加懷孕機率！而目前新型第四代黃體素的常規避孕藥，不僅降低水腫副作用，還有治療痘痘讓皮膚變好的效果，甚至能夠降低子宮內膜癌及卵巢癌的機會。</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/EwpUMZDBHSs?mute=1&autoplay=1",
		'txt' : "<p type='pages'>停藥期還是有避孕效果的！另外要提醒各位小情侶，在21＋7天的劑型當中，基本上7天的停藥期間，月經就會來，而月經來的時候也不建議發生性行為，因為很容易造成感染與古盆腔發炎的問題。</p>"
	},
	{
		'ytLink' : "https://www.youtube.com/embed/JFduTQ7xM-0?mute=1&autoplay=1",
		'txt' : "<p type='pages'>想起來就馬上吃，原本吃藥的時間也吃，等於這一天妳可能會吃兩顆！</p><p type='pages'>建議服用常規避孕藥的女生們，能多使用鬧鐘或是手機提醒的功能，養成固定時間服用常規避孕藥的習慣，能減少忘記服用的問題唷～</p>"
	}
]

// loading ------------------------------------
window.addEventListener("load", function(e) {
	console.log("finish loading");
	pages.forEach(function(item){
		if(item.classList == 'loading'){
			item.setAttribute('data-type','hide')
		}else if( item.classList == 'home' ){
			item.setAttribute('data-type','show')
		}
	})
	pageChange();
	homeAnimate();
})

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
		item.scrollTop = 0;
		window.scrollTop = 0;
		document.body.scrollTop = 0;
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

	// click btn gameStart ------------------------------------
	if( btnType == 'gameStart' ){
		pages.forEach(function(item){
			if(item.classList == 'home'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'information' ){
				item.setAttribute('data-type','show')
			}
		})
		pageChange();
		infotmationAnimate();
	}
	// click btn informationFinish ------------------------------------
	if( btnType == 'informationFinish' ){
		pages.forEach(function(item){
			if(item.classList == 'information'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'storyIntro' ){
				item.setAttribute('data-type','show')
			}
		})
		userData.formFinish = true;
		saveDataToArray();
		if( userData.formFinish == true ){
			pageChange();
		}
	}
	// click btn storyIntro ------------------------------------
	if( btnType == 'storyIntro' ){
		userStatus.nowTopic += 1;
		pages.forEach(function(item){
			if(item.classList == 'storyIntro'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'question' && item.getAttribute('data-num') == userStatus.nowTopic ){
				item.setAttribute('data-type','show')
				stop();
			}
		})
		pageChange();
		topicMove(1);
	}

	// click question page btn Answer ------------------------------------
	if( btnType == 'answerBtn' ){
		if( answerResult == 'yes'){
			userStatus.score += 1;
			userStatus.answerCorrect = true;
			userData.qArray[userStatus.nowTopic-1] = 1
		}else if(answerResult == 'no'){
			// userStatus.score -= 1;
			userStatus.answerCorrect = false;
		}
		setAnswerBox(userStatus.answerCorrect);
		
		pages.forEach(function(item){
			if(item.classList == 'question'){
				item.setAttribute('data-type','hide')
			}else if( item.classList == 'answer' ){
				item.setAttribute('data-type','show');
				move();
			}
		})
		pageChange();
		changeAnsPageContent(userStatus.nowTopic);
		answerAnimate();
	}

	// click answer page btn nextTopic ------------------------------------
	if( btnType == 'nextTopic' ){
		if( userStatus.nowTopic == 10 ){
			pages.forEach(function(item){
				if(item.classList == 'answer'){
					item.setAttribute('data-type','hide')
				}else if( item.classList == 'result'  ){
					item.setAttribute('data-type','show')
					
				}
			})
			pageChange();
			changeResultPageContent();
			resultAnimate();
			sendDataToGoogle();
		}else{
			userStatus.nowTopic += 1;
			pages.forEach(function(item){
				if(item.classList == 'answer'){
					item.setAttribute('data-type','hide')
				}else if( item.classList == 'question' && item.getAttribute('data-num') == userStatus.nowTopic ){
					item.setAttribute('data-type','show');
					stop();
				}
			})
			pageChange();
			topicMove(userStatus.nowTopic);
		}
		
	}


	if( btnType == 'fbShare' ){
		userData.fbShare = true;
		sendDataToGoogle();
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
	ansTxt.innerHTML = ansPageContent[num-1].txt;
}

function changeResultPageContent(){
	let score = userStatus.score * 10;
	let scoreNum = document.getElementById('scoreNum');
	let resultTxt = document.getElementById('resultTxt');
	let fbLink = document.getElementById('fbLink');
	console.log(resultTxt)
	console.log(userData.qArray)
	if( score < 60  ){
		document.querySelector(".resultBox .result01").setAttribute('data-type','show')
		document.querySelector(".resultBox .result02").setAttribute('data-type','hide')
		document.querySelector(".resultBox .result03").setAttribute('data-type','hide')
		resultTxt.textContent = '少年仔，你的避孕知識不夠正確欸，這種攸關人命的事情，還不趕快把剛剛醫師解說的觀念抄3遍！';
		fbLink.setAttribute('href','https://www.facebook.com/sharer.php?u=https://yen-zshen.github.io/yenZ/demo/wcd/result01.htm&quote=少年仔，你的避孕知識不夠正確欸，這種攸關人命的事情，還不趕快把剛剛醫師解說的觀念抄3遍！')
	}else if( score >=60 && score < 80 ){
		document.querySelector(".resultBox .result01").setAttribute('data-type','hide')
		document.querySelector(".resultBox .result02").setAttribute('data-type','show')
		document.querySelector(".resultBox .result03").setAttribute('data-type','hide')
		resultTxt.textContent = '你擁有基本的避孕知識水平，牢記剛剛醫師們講的觀念，有朝一日你也能成為避孕大師！';
		fbLink.setAttribute('href','https://www.facebook.com/sharer.php?u=https://yen-zshen.github.io/yenZ/demo/wcd/result02.htm&quote=你擁有基本的避孕知識水平，牢記剛剛醫師們講的觀念，有朝一日你也能成為避孕大師！');
	}else{
		document.querySelector(".resultBox .result01").setAttribute('data-type','hide')
		document.querySelector(".resultBox .result02").setAttribute('data-type','hide')
		document.querySelector(".resultBox .result03").setAttribute('data-type','show')
		resultTxt.textContent = '你的避孕知識非常充足，我想避孕對你來說不是什麼問題，記得！如果還沒有生育計畫，一定要好好避孕喔！';
		fbLink.setAttribute('href','https://www.facebook.com/sharer.php?u=https://yen-zshen.github.io/yenZ/demo/wcd/result03.htm&quote=你的避孕知識非常充足，我想避孕對你來說不是什麼問題，記得！如果還沒有生育計畫，一定要好好避孕喔！')
	}

	scoreNum.textContent = score
}

	let mo=function(e){e.preventDefault();};
	function stop(){
		if( Modernizr.mq('(max-width: 768px)') ){
			document.body.scrollTop = 0;
			document.body.style.overflow='hidden';        
			document.addEventListener("touchmove",mo,false);//禁止頁面滑動
		}
		
	}
	function move(){
		document.body.style.overflow='auto';//出現滾動條
		document.removeEventListener("touchmove",mo,false);        
}


	function topicMove(num){
		// stop();
		let ptime = userStatus.pageChange / 1000;
		let questionEnent ={
			'back': '.situation.question' + num+ ' .back',
			'front': '.situation.question' + num + ' .front'
		}
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

	function homeAnimate(){
		document.querySelector(".heartL").style.display = 'block';
		document.querySelector(".heartR").style.display = 'block';
		let ptime = userStatus.pageChange / 1000;
		
		TweenMax.set('.home .banner .people', {y:100, opacity:0,scale:0.85});
		TweenMax.set('.home .banner .heart', {y:20, opacity:0});
		// TweenMax.set('.home .banner .heartL', {x:0,y:0, opacity:0});
		// TweenMax.set('.home .banner .heartR', {x:0,y:0, opacity:0});
		TweenMax.set('.home .content', {y:150, opacity:1});
		TweenMax.set('.home .content .heading h1', {y:-10, opacity:0,scale:0.5});
		TweenMax.set('.home .content .heading h2', {y:-10, opacity:0,scale:0.75});
		TweenMax.set('.home .content .gift', {y:20, opacity:0});
		TweenMax.set('.home .btnBlock', {y:20, opacity:0});
		let tlHome = new TimelineMax();	

		// let tlHeart = new TimelineMax();	

		// tlHeart.to('.home .banner .heartL',0,{
		// 	x:0,
		// 	y:0,
		// 	opacity:1,
		// 	ease: "power0"
		// },ptime + 2)
		// .to('.home .banner .heartL',0.5,{ x:-10, y:-40, opacity:0.85,ease: "power0"})
		// .to('.home .banner .heartL',0.5,{ x:0, y:-80, opacity:0.65,ease: "power0"})
		// .to('.home .banner .heartL',0.5,{ x:5, y:-110, opacity:0.5,ease: "power0"})
		// .to('.home .banner .heartL',0.5,{ x:0, y:-130, opacity:0.25,ease: "power0"})
		// .to('.home .banner .heartL',0.5,{ x:-5, y:-140, opacity:0,ease: "power0"})

		
		tlHome.to('.home .content',0.4,{
			y:0,
			opacity:1,
			ease: "power4.out"
		},ptime -0.2)
		.to('.home .content .heading h1',0.4,{
			y:0,
			opacity:1,
			scale:1,
			ease: "back(2)"
		},ptime + 0.1)
		.to('.home .content .heading h2',0.4,{
			y:0,
			opacity:1,
			scale:1,
			ease: "back(2)",
		},ptime + 0.3)
		.to('.home .banner .people',0.6,{
			y:0,
			opacity:1,
			scale:1,
			ease: "power4.out",
		},ptime + 0.6)
		.to('.home .banner .heart',0.6,{
			y:0,
			opacity:1,
			scale:1,
			ease: "power4.out",
		},ptime + 0.9)
		.staggerTo('.home .content .gift',0.4,{
			y:0,
			opacity:1,
			scale:1,
			ease: "back(5)",
		},0.2,ptime + 1)
		.to('.home .btnBlock',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime + 1.6)

		
		
	}

	function infotmationAnimate(){
		let ptime = userStatus.pageChange / 1000;
		
		TweenMax.set('.information .banner', {y:20, opacity:0,scale:0.9});
		TweenMax.set('.information .form', {y:20, opacity:0,scale:0.9});
		TweenMax.set('.information .btnBlock', {y:20, opacity:0});
		let tlInfo = new TimelineMax();	

		tlInfo.to('.information .banner',0.5,{
			y:0,
			opacity:1,
			scale:1,
			ease: "power4.out"
		},ptime )
		.to('.information .form',0.5,{
			y:0,
			opacity:1,
			scale:1,
			ease: "power4.out"
		},ptime + 0.4 )
		.to('.information .btnBlock',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime + 0.8)
	}

	function storyAnimate(){

	}

	function answerAnimate(){
		let ptime = userStatus.pageChange / 1000;
		TweenMax.set('.answer .ansYt', {opacity:0});
		TweenMax.set('.answer .answerBox', {y:0, opacity:0,scale:0.5});
		TweenMax.set('.answer .content', {y:20, opacity:0});
		TweenMax.set('.answer .btnBlock', {y:20, opacity:0});
		// console.log('move')
		let tl = new TimelineMax();
		
		tl.to('.answer .ansYt',0.5,{
			opacity:1,
			ease: "power4.out",
		},ptime) //0.5
		.to('.answer .answerBox',0.4,{
			opacity:1,
			scale:1,
			ease: "back(5)",
		},ptime + 0.4)
		.to('.answer .content',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime + 0.7)
		.to('.answer .btnBlock',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime + 1.2)
	}

	function resultAnimate(){
		let ptime = userStatus.pageChange / 1000;
		TweenMax.set('.result .resultBox ', {y:30, opacity:0});
		TweenMax.set('.result .resultBox img', {y:0, opacity:0,scale:0.5});
		TweenMax.set('.result .scoreNumBox', {y:20, opacity:0});
		TweenMax.set('.result #resultTxt', {y:20, opacity:0});
		TweenMax.set('.result .btnBlock', {y:20, opacity:0});
		// console.log('move')
		let tl = new TimelineMax();
		
		tl.to('.result .resultBox',0.8,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime) //0.5
		.to('.result .resultBox img',0.5,{
			y:0,
			opacity:1,
			scale:1,
			ease: "bonus",
		},ptime + 0.5)
		.to('.result .scoreNumBox',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime + 0.8)
		.to('.result #resultTxt',0.5,{
			y:0,
			opacity:1,
			ease: "bonus",
		},ptime + 1.2)
		.to('.result .btnBlock',0.5,{
			y:0,
			opacity:1,
			ease: "power4.out",
		},ptime + 1.4)
	}

	// let formData = {
	// 	'name': '',
	// 	'gender': '',
	// 	'age': '',
	// 	'phone': '',
	// }
	let checkAry = [1,1,1];

	function veriForm(){
		console.log('veriForm')
		//verify
		let nameID = document.getElementById('formName');
		let phoneID = document.getElementById('formPhone');
		console.log(nameID)
		//name
		if( nameID.value == '' ){
			console.log('name none')
			checkAry[0] = 0;
			document.getElementById('nameBox').classList.add('empty');
		}
		nameID.addEventListener('change',function(){
			console.log('name change')
				if( nameID.value != '' ){
				checkAry[0] = 1;
				document.getElementById('nameBox').classList.remove('empty')
			}
		})

		//phone
		if( phoneID.value == '' ){
			console.log('phone none')
			checkAry[1] = 0;
			document.getElementById('phoneBox').classList.add('empty');
		}
		phoneID.addEventListener('change',function(){
			if( phoneID.value != '' ){
				checkAry[1] = 1;
				document.getElementById('phoneBox').classList.remove('empty')
			}
		})

		// privacy
		let agree = document.getElementById('agree').checked;
		if( agree == false ){
			checkAry[2] = 0;
			document.querySelector(".agree").classList.add('empty');
		}
		document.getElementById('agree').addEventListener('change',function(){
			agree = document.getElementById('agree').checked;
			if( agree == true ){
				console.log('pchange true')
				checkAry[2] = 1;
				document.querySelector(".agree").classList.remove('empty');
			}
		})

	}

	function saveDataToArray(){
		console.log('saveDataToArray');
		let genderAry = document.getElementsByName('gender')
		genderAry.forEach(function(item){
			if(item.checked){
				userData.gender = item.value
			}
		})
		userData.name = document.getElementById('formName').value;
		userData.age = document.getElementById('formAge').value;
		userData.phone = document.getElementById('formPhone').value;

		if( userData.name == '' ){
			checkAry[0] = 0;
		}
		if( userData.phone == '' ){
			checkAry[1] = 0;
		}

		let agree = document.getElementById('agree').checked;
		if( agree == false ){
			checkAry[2] = 0;
		}

		checkAry.forEach(function(data){
			if( data == 0 ){
				userData.formFinish = false;
				
			}
		})
		veriForm();

		
		
	}


	// 傳 “報名資訊 game” 給 google sheet 
//------------------------------------------------------------
function sendDataToGoogle() { 
	let qusArray = [];
	userData.qArray.forEach(function(item,index){
		if( item == 0 ){
			qusArray[index] = '錯誤'
		}else if( item == 1 ){
			qusArray[index] = '正確'
		}
	})
	console.log(userData)
	console.log(qusArray)
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbyhWXr0iGo1LaLYjHSqCyy_deGvYykJYCJ1RUpPdo5C7TRQ0qXw/exec",
		data: {
				"name": userData.name,
				"gender": userData.gender,
				"age": userData.age,
				"phone": userData.phone,
				'haveFbShare' : userData.fbShare,
				"q1": qusArray[0],
				"q2": qusArray[1],
				"q3": qusArray[2],
				"q4": qusArray[3],
				"q5": qusArray[4],
				"q6": qusArray[5],
				"q7": qusArray[6],
				"q8": qusArray[7],
				"q9": qusArray[8],
				"q10": qusArray[9],
				'fbShare':'點選分享按鈕'
		},
		success: function(response) {
			if(response == "success"){
				console.log('success')
				// alert("報名成功！");
				// fillInInputValue();
				// sendFinish('game');
				// close_lightBox();
			}
		},
	});
	
  
};