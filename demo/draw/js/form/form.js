// JavaScript Document

$(function(){
//---驗證-----------------------------------------------------------------------
	//$('.hint').css({display:'none'});

	//validate----------
	//宣告驗證預設
	var inputformlist=[1,1,1];

	//宣告驗證格式
	var valid={
		validphone:/^[-+#()0-9\s]{1,}$/,
		validemail:/^[^\s]+@[^\s]+\.[^\s]{2,}$/
	};

	//宣告驗證訊息
	var msg={
		msg01:['請填寫您的姓名'],
		msg02:['請填寫您的電話', '請填寫正確'],
		msg03:['請填寫您的 email', '請填寫正確'],
		msg04:['請選擇您的需求'],
	};


	// 01 姓名
	$('.inpBox01 input').on('blur',test01);
	function test01(){
		if($('.inpBox01 input').val() != ''){
			$('.hint01').css({opacity:'0'});
			$('.inpBox01 input').css({border:'0px solid #ff0000'});
			inputformlist[0]=0;
		}else{
			$('.hint01').html(msg.msg01[0]);
			$('.hint01').css({opacity:'1'});
			$('.inpBox01 input').css({border:'1px solid #ff0000'});
			inputformlist[0]=1;
		}
	};


	// 02 電話
	$('.inpBox02 input').on('blur',test02);
	function test02(){
		if($('.inpBox02 input').val()==''){
			$('.hint02').html(msg.msg02[0]);
			$('.hint02').css({opacity:'1'});
			$('.inpBox02 input').css({border:'1px solid #ff0000'});
			inputformlist[1]=1;
		}else if(!$('.inpBox02 input').val().match(valid.validphone)){
			$('.hint02').html(msg.msg02[1]);
			$('.hint02').css({opacity:'1'});
			$('.inpBox02 input').css({border:'1px solid #ff0000'});
			inputformlist[1]=1;
		}else{
			$('.hint02').css({opacity:'0'});
			$('.inpBox02 input').css({border:'0px solid #ff0000'});
			inputformlist[1]=0;
		};
	};


	// 03 email
	$('.inpBox03 input').on('blur', test03);
	function test03(){
		if($('.inpBox03 input').val()==''){
			$('.hint03').html(msg.msg03[0]);
			$('.hint03').css({opacity:'1'});
			$('.inpBox03 input').css({border:'1px solid #ff0000'});
			inputformlist[2]=1;
		}else if(!$('.inpBox03 input').val().match(valid.validemail)){
			$('.hint03').html(msg.msg03[1]);
			$('.hint03').css({opacity:'1'});
			$('.inpBox03 input').css({border:'1px solid #ff0000'});
			inputformlist[2]=1;
		}else{
			$('.hint03').css({opacity:'0'});
			$('.inpBox03 input').css({border:'0px solid #ff0000'});
			inputformlist[2]=0;
		};
	};


	//submit------------------------
	$('.submit').on('click',function(){

		test01();
		test02();
		test03();

		var answertotal=0;
		for(var ansans=0;ansans<inputformlist.length;ansans++){
			answertotal=answertotal+inputformlist[ansans];
		};
		console.log(answertotal)
		if(answertotal>0){
			$("section.status").addClass("show");
			$("section .content").addClass("show");
			$("section .wrong").addClass("show");
			return false;
		}else{
			var _formData = $('#sec_form form').serialize();
      $.ajax({
        url: 'form/gateway.php',
        type: 'POST',
        data: _formData,
        dataType: 'json',
        timeout: 30000,
        global: false,
        cache: false
      }).fail(function(res) {
				// alert('產生錯誤，請稍後再試。');
					$("section.status").addClass("show");
					$("section .content").addClass("show");
					$("section .fail").addClass("show");
      }).done(function(res) {
        if (res.success == 0) {
					// alert('送出成功！');
					$("section.status").addClass("show");
					$("section .content").addClass("show");
					$("section .success").addClass("show");
					setTimeout(() => {
						location.reload();
					},2000);
        } else {
          alert(res.msg);
        }
      });
      return false;


		};
	});

	$(".clear").on("click",function(){
		$('input:checked').prop('checked',false);
		$('input:radio').prop('checked',false);
		$('input:radio#radio02_1').prop('checked',true);
		$('input:text').val('');
		$('input#phone').val('');
		$('input#email').val('');

		$('.inputBox input').css({border:'0px solid #ff0000'});
		$('.hint').css({opacity:'0'});

		$('html,body').animate({
			scrollTop: $("#sec_form").offset().top - 50
		}, 500);
	})


	//資料有誤，點選"我知道了"
	$("section.status .wrong .btn").on("click",function(){
		$("section.status").removeClass("show");
		$("section .content").removeClass("show");
		$("section .wrong").removeClass("show");
		$('html,body').animate({
			scrollTop: $("#sec_form").offset().top - 50
		}, 500);
	})


});
