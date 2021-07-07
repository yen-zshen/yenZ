
//https://script.google.com/macros/s/AKfycbwdn9QAKNWZBGwCeE-eKetP5pPs7fFS-3JqapKIwwrsNg41F_k/exec
//在 google sheet 更新程式碼後，記得改版本 Project version:
//1zNJXjOlfO0yLfPJJov9EKYhto_bM_TsTrPrNkD8SPFA

//get
//https://docs.google.com/spreadsheets/d/e/2PACX-1vTpokvDv_j-ZIDgBXWsjrBPplcgM9-xYDf6hgz2l5TIxee09VQvWRAlqMWKFNH3fBoxfmhW6uP3wmtt/pubhtml


//比賽報名
//https://script.google.com/macros/s/AKfycby1PSFHCsl48Ut2yhvG0CqzQKotDkzOO-GvU6NMYZdRt9AMxWk/exec

//投票
//https://script.google.com/macros/s/AKfycbwijAQfVeQe_zebBHRrUa95W5b0gIGenrspLvO_chABkp1TGZpi/exec


// function send(name,phone,email) {
//   $.ajax({
//     url: "https://script.google.com/macros/s/AKfycbwdn9QAKNWZBGwCeE-eKetP5pPs7fFS-3JqapKIwwrsNg41F_k/exec",
//     data: {
//         "name": name,
//         "phone": phone,
//         "email": email
//     },
//     success: function(response) {
//       if(response == "success"){
//         alert("投票成功！");
//       }
//     },
//   });
// };

// let inputValue = [{
// 	'name' : document.querySelector('#nameValue').value,
// 	'phone' : document.querySelector('#phoneValue').value,
// 	'email' : document.querySelector('#emailValue').value
// }]

// const sendButton = document.querySelector('.btnTest');

// sendButton.addEventListener('click', function(){
// 	inputValue = [{
// 		'name' : document.querySelector('#nameValue').value,
// 		'phone' : document.querySelector('#phoneValue').value,
// 		'email' : document.querySelector('#emailValue').value
// 	}]
// 	get();
// });



// let cDataJson ;

// function get(){
// 	$.ajax({
// 		type: "GET",
// 		url: "https://spreadsheets.google.com/feeds/list/1zNJXjOlfO0yLfPJJov9EKYhto_bM_TsTrPrNkD8SPFA/od6/public/values?alt=json",
// 		dataType: "json", 
// 		cache: false,
// 		success: function(object){
// 			let cArray = [];
// 			cDataJson = object.feed.entry;
// 			cDataJson.forEach(function(data){
// 				cArray.push({
// 					'name':data.gsx$姓名.$t,
// 					'phone':data.gsx$電話.$t,
// 					'email':data.gsx$email.$t
// 				})
// 			})
// 			checkRepeat(cArray)
// 		}
// 	})
// }



// function checkRepeat(cArray){
// 	let repeat = false;
// 	cArray.forEach(function(data){
// 		if(data.phone == inputValue[0].phone){
			
// 			repeat = true;
// 		}
// 	})
// 	if(repeat == false){
// 		send(inputValue[0].name,inputValue[0].phone,inputValue[0].email)
// 	}else if(repeat == true){
// 		alert('你已經投票過');
// 	}
// }



function setTest(){
	let status = document.querySelector('.header .test');
	status.innerHTML = `<p>版本：11</p>`
}
setTest();

// new
//-----------------------------------------------------------------

let inputValue = {
	'name' : '',
	'phone' : '',
	'mail' : '',
	'age' : '',
	'address' : '',
	'zwiftID' : '',
	'idRepeat':false,
	'checkFinish':false,
	'youtuber' : ''
}
let userState = {
	'fillInDataCount' : 0,
	'voteAnimateCount' : 0,
	'formFinish' : true,
}

// 傳 “報名資訊 game” 給 google sheet 
//------------------------------------------------------------
function sendGameData() { 
	if( inputValue.checkFinish == true ){
		// 有重複
		if( inputValue.idRepeat == true ){
			console.log('repeat')
			alert('重複報名！');
			sendFinish('game');
		// 沒有重複
		}else if( inputValue.idRepeat == false  ){
			sending('game');
			// console.log('no repeat')
			$.ajax({
				url: "https://script.google.com/macros/s/AKfycby1PSFHCsl48Ut2yhvG0CqzQKotDkzOO-GvU6NMYZdRt9AMxWk/exec",
				data: {
						"name": inputValue.name,
						"zwiftID": inputValue.zwiftID,
						"phone": inputValue.phone,
						"mail": inputValue.mail,
						"age": inputValue.age,
						"address": inputValue.address,
				},
				success: function(response) {
					if(response == "success"){
						alert("報名成功！");
						fillInInputValue();
						sendFinish('game');
						close_lightBox();
					}
				},
			});
		}
	}
	
  
};
// 傳 “投票資訊 vote” 給 google sheet 
//------------------------------------------------------------
function sendVoteData() { 
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwijAQfVeQe_zebBHRrUa95W5b0gIGenrspLvO_chABkp1TGZpi/exec",
    data: {
        "name": inputValue.name,
        "youtuber": inputValue.youtuber,
        "phone": inputValue.phone,
        "mail": inputValue.mail,
        "age": inputValue.age,
        "address": inputValue.address,
    },
    success: function(response) {
      if(response == "success"){
        alert("投票成功！");
				sendFinish('vote');
				getVoteData();
				close_lightBox();
      }
    },
  });
};

const gameSubmit = document.getElementById('gameSubmit');
const voteSubmit = document.getElementById('voteSubmit')

// 點選報名按鈕
gameSubmit.addEventListener('click',function(){
	userState.formFinish = true;
	let inputFrameType = document.querySelector('.sec_lightBox .inner[data-type="game"]');
	inputValue.name = inputFrameType.querySelector('.nameValue').value;
	inputValue.zwiftID = inputFrameType.querySelector('.zwiftIDValue').value;
	inputValue.phone = inputFrameType.querySelector('.phoneValue').value;
	inputValue.mail = inputFrameType.querySelector('.mailValue').value;
	inputValue.age = inputFrameType.querySelector('.ageValue').value;
	inputValue.address = inputFrameType.querySelector('.addressValue').value;
	console.log(inputValue);
	userState.fillInDataCount +=1;
	veriGame();
	if( userState.formFinish == false ){
		alert('資料不完整')
	}
	else if(userState.formFinish == true){
		getGameData(); //檢查重複
	}
	
	// sendGameData();
	// fillInInputValue();
	// sending('game');
	
})

// 從 google sheet 取得 比賽報名資訊 ＋ 檢查是否有重複報名比賽
function getGameData(){
	let noticeAry = document.querySelectorAll(".notice")
	noticeAry.forEach(function(item){
		item.textContent = "";
	})
	$.ajax({
		type: "GET",
		url: "https://spreadsheets.google.com/feeds/list/1_EeNOtw8ftc2jH_7FPRc6c5CaZ6BGDmxiGzfIdK_TBI/od6/public/values?alt=json",
		dataType: "json", 
		cache: false,
		success: function(object){
			object.feed.entry.forEach(function(data){
				if( data.gsx$zwiftid.$t == inputValue.zwiftID ){
					inputValue.idRepeat = true;
				}else{
					inputValue.idRepeat = false;
				}
			})
			inputValue.checkFinish = true;
			console.log('checkFinish')
			console.log(inputValue)
			if( inputValue.checkFinish == true ){
				sendGameData();
				// fillInInputValue();
				// sending('game');
			}
		}
	})
}

// 點選投票按鈕
voteSubmit.addEventListener('click',function(){
	userState.formFinish = true;
	let ytAry = document.getElementsByName('ytVote')
		ytAry.forEach(function(item){
			if(item.checked){
				inputValue.youtuber = item.value;
			}
		})
	let inputFrameType = document.querySelector('.sec_lightBox .inner[data-type="vote"]');
	inputValue.name = inputFrameType.querySelector('.nameValue').value;
	inputValue.phone = inputFrameType.querySelector('.phoneValue').value;
	inputValue.mail = inputFrameType.querySelector('.mailValue').value;
	inputValue.age = inputFrameType.querySelector('.ageValue').value;
	inputValue.address = inputFrameType.querySelector('.addressValue').value;
	console.log(inputValue);
	userState.fillInDataCount +=1;
	veriVote();
	if( userState.formFinish == false ){
		alert('資料不完整')
	}
	else if(userState.formFinish == true){
		sendVoteData();
		fillInInputValue();
		sending('vote');
	}
	
	
	
})

// 若已填過資料，下次自動帶入
function fillInInputValue(){
	if( userState.fillInDataCount >0 ){
		let inputFrameVote = document.querySelector('.sec_lightBox .inner[data-type="vote"]');
		inputFrameVote.querySelector('.nameValue').value = inputValue.name;
		inputFrameVote.querySelector('.phoneValue').value = inputValue.phone;
		inputFrameVote.querySelector('.mailValue').value = inputValue.mail;
		inputFrameVote.querySelector('.ageValue').value = inputValue.age;
		inputFrameVote.querySelector('.addressValue').value = inputValue.address;

		let inputFrameGame = document.querySelector('.sec_lightBox .inner[data-type="game"]');
		inputFrameGame.querySelector('.nameValue').value = inputValue.name;
		inputFrameGame.querySelector('.zwiftIDValue').value = inputValue.zwiftID;
		inputFrameGame.querySelector('.phoneValue').value = inputValue.phone;
		inputFrameGame.querySelector('.mailValue').value = inputValue.mail;
		inputFrameGame.querySelector('.ageValue').value = inputValue.age;
		inputFrameGame.querySelector('.addressValue').value = inputValue.address;
	}
}

// 傳送中
function sending(name){
	let btnSubmit = document.querySelectorAll('.btnSubmit');
	btnSubmit.forEach(function(item){
		if( item.getAttribute('id') == (name + 'Submit') ){
			item.classList.add('send')
			item.textContent = '傳送中...';
		}
	})

}

// 完成傳送
function sendFinish(name){
	let btnSubmit = document.querySelectorAll('.btnSubmit');
	btnSubmit.forEach(function(item){
		if( item.getAttribute('id') == (name + 'Submit') ){
			item.classList.remove('send')
			item.textContent = '確認送出';
		}
	})
}

// verification 驗證 game
function veriGame(){
	let checkAry = [1,1,1,1,1,1,1];
	let inputFrameType = document.querySelector('.sec_lightBox .inner[data-type="game"]');
	let name = inputFrameType.querySelector('.nameValue');
	let zwiftID = inputFrameType.querySelector('.zwiftIDValue');
	let phone = inputFrameType.querySelector('.phoneValue');
	let mail = inputFrameType.querySelector('.mailValue');
	let age = inputFrameType.querySelector('.ageValue');
	let address = inputFrameType.querySelector('.addressValue');
	let gameInput = [
		{'name':'name','type':name,'notice':'* 請輸入姓名'},
		{'name':'zwiftID','type':zwiftID,'notice':'* 請輸入 ZWIFT ID'},
		{'name':'phone','type':phone,'notice':'* 請輸入電話'},
		{'name':'mail','type':mail,'notice':'* 請輸入 mail'},
		{'name':'age','type':age,'notice':'* 請輸入出生年月日'},
		{'name':'address','type':address,'notice':'* 請輸入寄送地址'},
	]
	gameInput.forEach(function(data,index){
		if( data.type.value == '' ){
			checkAry[index] = 0;
			document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='"+ data.name +"']").textContent = data.notice;
			
			data.type.addEventListener('change',function(){
				if(data.type.value != ''){
					checkAry[index] = 1;
					document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='"+ data.name +"']").textContent = "";
				}
				if( mail.value != "" ){
					if( !regex.test(mail.value) ){
						checkAry[3] = 0;
						document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='mail']").textContent = "* 請填寫正確格式 sample@example.com";
						console.log('email wrong')
					}else if(regex.test(mail.value)){
						checkAry[3] = 1;
						document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='mail']").textContent = " ";
					}
				}
			})
		}
	})

	//email
	let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if( mail.value != "" ){
		if( !regex.test(mail.value) ){
			checkAry[3] = 0;
			document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='mail']").textContent = "* 請填寫正確格式";
		}
	}
	
	mail.addEventListener('change',function(){
		if( mail.value != "" ){
			if( !regex.test(mail.value) ){
				checkAry[3] = 0;
				document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='mail']").textContent = "* 請填寫正確格式";
				console.log('email wrong')
			}else if(regex.test(mail.value)){
				checkAry[3] = 1;
				document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='mail']").textContent = " ";
			}
		}
		console.log(checkAry)
	})

	// privacy
	let privacyAgreeGame = document.getElementById('privacyAgreeGame').checked;
	if( privacyAgreeGame == false ){
		checkAry[6] = 0;
		document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='privacy']").textContent = '* 請勾選';
	}
	document.getElementById('privacyAgreeGame').addEventListener('change',function(){
		privacyAgreeGame = document.getElementById('privacyAgreeGame').checked;
		if( privacyAgreeGame == true ){
			checkAry[6] = 1;
			document.querySelector(".sec_lightBox .inner[data-type='game'] .notice[data-type='privacy']").textContent = '';
		}
	})

	// console.log(checkAry)
	checkAry.forEach(function(data){
		if( data == 0 ){
			userState.formFinish = false;
			document.getElementById('mCSB_1_container').style.top = 0
			document.getElementById('mCSB_1_dragger_vertical').style.top = 0
		}
	})
	
};

// verification 驗證 vote
function veriVote(){
	let checkAry = [1,1,1,1,1,1,1];
	let inputFrameType = document.querySelector('.sec_lightBox .inner[data-type="vote"]');
	let name = inputFrameType.querySelector('.nameValue');
	let phone = inputFrameType.querySelector('.phoneValue');
	let mail = inputFrameType.querySelector('.mailValue');
	let age = inputFrameType.querySelector('.ageValue');
	let address = inputFrameType.querySelector('.addressValue');
	let ytAry = document.getElementsByName('ytVote');
	let youtuber;
		ytAry.forEach(function(item){
			if(item.checked){
				youtuber = item.value;
			}
		})
	let voteInput = [
		{'name':'name','type':name,'notice':'* 請輸入姓名'},
		{'name':'phone','type':phone,'notice':'* 請輸入電話'},
		{'name':'mail','type':mail,'notice':'* 請輸入 mail'},
		{'name':'age','type':age,'notice':'* 請輸入出生年月日'},
		{'name':'address','type':address,'notice':'* 請輸入寄送地址'},
	]
	voteInput.forEach(function(data,index){
		if( data.type.value == '' ){
			checkAry[index] = 0;
			document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='"+ data.name +"']").textContent = data.notice;
			
			data.type.addEventListener('change',function(){
				if(data.type.value != ''){
					checkAry[index] = 1;
					document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='"+ data.name +"']").textContent = "";
				}
				if( mail.value != "" ){
					if( !regex.test(mail.value) ){
						checkAry[2] = 0;
						document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='mail']").textContent = "* 請填寫正確格式 sample@example.com";
						console.log('email wrong')
					}else if(regex.test(mail.value)){
						checkAry[2] = 1;
						document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='mail']").textContent = " ";
					}
				}
			})
		}
	})

	//email
	let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if( mail.value != "" ){
		if( !regex.test(mail.value) ){
			checkAry[2] = 0;
			document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='mail']").textContent = "* 請填寫正確格式 sample@example.com";
		}
	}
	
	mail.addEventListener('change',function(){
		if( mail.value != "" ){
			if( !regex.test(mail.value) ){
				checkAry[2] = 0;
				document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='mail']").textContent = "* 請填寫正確格式 sample@example.com";
				console.log('email wrong')
			}else if(regex.test(mail.value)){
				checkAry[2] = 1;
				document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='mail']").textContent = " ";
			}
		}
		console.log(checkAry)
	})

	// privacy
	let privacyAgreeVote = document.getElementById('privacyAgreeVote').checked;
	if( privacyAgreeVote == false ){
		checkAry[5] = 0;
		document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='privacy']").textContent = '* 請勾選';
	}
	document.getElementById('privacyAgreeVote').addEventListener('change',function(){
		privacyAgreeVote = document.getElementById('privacyAgreeVote').checked;
		if( privacyAgreeVote == true ){
			checkAry[5] = 1;
			document.querySelector(".sec_lightBox .inner[data-type='vote'] .notice[data-type='privacy']").textContent = '';
		}
	})

	// console.log(checkAry)
	checkAry.forEach(function(data){
		if( data == 0 ){
			userState.formFinish = false;
			document.getElementById('mCSB_1_container').style.top = 0
			document.getElementById('mCSB_1_dragger_vertical').style.top = 0
		}
	})
	
};



let ytArray = [];
getVoteData();
// 從 google sheet 取得 投票資訊
function getVoteData(){
	$.ajax({
		type: "GET",
		url: "https://spreadsheets.google.com/feeds/list/1Si_mJGK2i5FC0tXnRagu_2qWWrYJh-wTpGIL2diaPQA/od6/public/values?alt=json",
		dataType: "json", 
		cache: false,
		success: function(object){
			ytArray = [];
			let ytDataJson = object.feed.entry;
			ytDataJson.forEach(function(data){
				ytArray.push(data.gsx$youtuber.$t)
			})
			console.log(ytArray)
			userState.voteAnimateCount = 0; 
			showVoteOnHtml();
			// checkRepeat(ytArray)
		}
	})
}




let scrollNow = $(window).scrollTop();
let wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let voteCount = { 'Jerry': 0,	'Mike' : 0,'Linda' : 0,'eLun' : 0,}


// scroll
window.addEventListener('scroll' ,function(){
	showVoteOnHtml();
})

// 顯示投票結果
function showVoteOnHtml(){
	voteCount = { 'Jerry': 0,	'Mike' : 0,'Linda' : 0,'eLun' : 0,}

	ytArray.forEach(function(item){
		if( item == '哲睿 Jerry' ){
			voteCount.Jerry += 1;
		}else if( item == '好動夫妻 Mike' ){
			voteCount.Mike += 1;
		}else if( item == 'Linda' ){
			voteCount.Linda += 1;
		}else if( item == '一輪' ){
			voteCount.eLun += 1;
		}else{
			// console.log('other')
		}
	})

	document.getElementById('voteJerry').textContent = voteCount.Jerry + "票";
	document.getElementById('voteMike').textContent = voteCount.Mike + "票";
	document.getElementById('voteLinda').textContent = voteCount.Linda + "票";
	document.getElementById('voteElun').textContent = voteCount.eLun + "票";

	// scroll 
	scrollNow = $(window).scrollTop();
	let blockTop = document.getElementById('VoteResult').offsetTop;
	let blockH = document.getElementById('VoteResult').offsetHeight;

	if( (scrollNow + (wHeight / 3 * 2) ) >= blockTop && scrollNow < (blockTop + blockH) ){
		if( userState.voteAnimateCount == 0 ){
			bicycleAnimate();
			userState.voteAnimateCount +=1;
			// console.log(userState.voteAnimateCount)
		}
		
	}
	
}


// 投票結果動畫
function bicycleAnimate(){
	let count = ytArray.length;
	let duration = 1.5;
	// console.log( `window height : ${wHeight} ` )
	TweenMax.set('#lineJerry', {height:"100"});
	TweenMax.set('#lineMike', {height:"100"});
	TweenMax.set('#lineLinda', {height:"100"});
	TweenMax.set('#lineElun', {height:"100"});
	
	let tl = new TimelineMax();
	tl.to('#lineJerry',duration,{
		height: ((voteCount.Jerry / count) * wHeight) + 100,
		ease: "power4.out",
	},0) 
	.to('#lineMike',duration,{
		height: ((voteCount.Mike / count) * wHeight) + 100,
		ease: "power4.out",
	},0.2) 
	.to('#lineLinda',duration,{
		height: ((voteCount.Linda / count) * wHeight) + 100,
		ease: "power4.out",
	},0.44) 
	.to('#lineElun',duration,{
		height: ((voteCount.eLun / count) * wHeight) + 100,
		ease: "power4.out",
	},0.6) 

	// console.log('jerry :' +  ((voteCount.Jerry / count) * wHeight) + 100)

	
}


// 錨點 anchor
let anchor = document.querySelectorAll('.anchor');
anchor.forEach(function(item){
	item.addEventListener('click',function(){
		let targetAry = item.getAttribute('href').split('#');
		let target = targetAry[1];
		let targetTop = document.getElementById(target).offsetTop;
		console.log(targetTop);
		
		$('html,body').animate({
			scrollTop: targetTop
		}, 500);
	})
})







//------------------------------------------------------
//------------------------------------------------------
//lightBox
//------------------------------------------------------
//------------------------------------------------------

$(window).on("load", function () {
	$(".sec_lightBox .inner").mCustomScrollbar({
		axis:"y",
		theme:"dark-3",
	});
});


console.log("lightbox");
var lb_btn = $(".lb_btn");
var tent = $(".sec_lightBox .tent")
var closeBtn = $(".sec_lightBox .closeBtn");
let scrollAfter ;

lb_btn.on("click",function(e){
	e.preventDefault();
	let num = $(this).attr("num");
	show_lightBox(num);
});
closeBtn.on("click",close_lightBox);


function show_lightBox(num){
	console.log("show")
	$(".sec_lightBox .inner[data-type='" + num +"']").addClass("show");
	$(".sec_lightBox").fadeIn(250);
	tent.delay(250).fadeIn(250);
	// $('body').on('touchmove',function(el){
	// 	alert('touch move fixed');
	// 	el.preventDefault();
	// },true)//禁止頁面滑動
	// $("body").css('overflow','hidden');
	$('body').addClass('noscroll')
	// console.log( scrollNow )
	scrollAfter = scrollNow;
	$('body').css('top',scrollNow - scrollNow - scrollNow) 

}


function close_lightBox(){
	tent.fadeOut(250);
	$(".sec_lightBox").fadeOut(250);
	setTimeout(function () {
		$(".sec_lightBox .inner").removeClass("show")
	}, 250);
	// $('section').unbind('touchmove')
	// $("body").css('overflow','auto');
	$('body').removeClass('noscroll')
	
	$(window).scrollTop(scrollAfter);
	// console.log(scrollAfter)
}


//點選空白處
//------------------------------------------------------
$(".sec_lightBox").on("click", function (event) {
	// 目標區域: tent
	if (!tent.is(event.target) && tent.has(event.target).length === 0) {
		close_lightBox();
	}
});
	
	


//cookie
//------------------------------------------------------
var cookie = $('.cookie')
var know = $('.know')

cookie.delay(500).slideDown(350);
know.on('click', function () {
	cookie.delay(300).slideUp(300);
})


