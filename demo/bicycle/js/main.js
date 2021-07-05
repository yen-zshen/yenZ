
//https://script.google.com/macros/s/AKfycbwdn9QAKNWZBGwCeE-eKetP5pPs7fFS-3JqapKIwwrsNg41F_k/exec
//在 google sheet 更新程式碼後，記得改版本 Project version:
//1zNJXjOlfO0yLfPJJov9EKYhto_bM_TsTrPrNkD8SPFA

//get
//https://docs.google.com/spreadsheets/d/e/2PACX-1vTpokvDv_j-ZIDgBXWsjrBPplcgM9-xYDf6hgz2l5TIxee09VQvWRAlqMWKFNH3fBoxfmhW6uP3wmtt/pubhtml





function send(name,phone,email) {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwdn9QAKNWZBGwCeE-eKetP5pPs7fFS-3JqapKIwwrsNg41F_k/exec",
    data: {
        "name": name,
        "phone": phone,
        "email": email
    },
    success: function(response) {
      if(response == "success"){
        alert("投票成功！");
      }
    },
  });
};

let inputValue = [{
	'name' : document.querySelector('#nameValue').value,
	'phone' : document.querySelector('#phoneValue').value,
	'email' : document.querySelector('#emailValue').value
}]

const sendButton = document.querySelector('.btn');

sendButton.addEventListener('click', function(){
	inputValue = [{
		'name' : document.querySelector('#nameValue').value,
		'phone' : document.querySelector('#phoneValue').value,
		'email' : document.querySelector('#emailValue').value
	}]
	get();
});



let cDataJson ;

function get(){
	$.ajax({
		type: "GET",
		url: "https://spreadsheets.google.com/feeds/list/1zNJXjOlfO0yLfPJJov9EKYhto_bM_TsTrPrNkD8SPFA/od6/public/values?alt=json",
		dataType: "json", 
		cache: false,
		success: function(object){
			let cArray = [];
			cDataJson = object.feed.entry;
			cDataJson.forEach(function(data){
				cArray.push({
					'name':data.gsx$姓名.$t,
					'phone':data.gsx$電話.$t,
					'email':data.gsx$email.$t
				})
			})
			checkRepeat(cArray)
		}
	})
}



function checkRepeat(cArray){
	let repeat = false;
	cArray.forEach(function(data){
		if(data.phone == inputValue[0].phone){
			
			repeat = true;
		}
	})
	if(repeat == false){
		send(inputValue[0].name,inputValue[0].phone,inputValue[0].email)
	}else if(repeat == true){
		alert('你已經投票過');
	}
}




