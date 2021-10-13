


// 場次表 session  花絮 bts 頁籤用

let areaBox = $('.areaBox h4');

areaBox.on('click',function(){
  
  if(!Modernizr.mq('(max-width: 768px)')){
    if( !$(this).hasClass('active') ){
      $(this).addClass('active');
      $(this).parent().siblings().find('h4').removeClass('active');
      let num = $(this).parent().attr('data-num');
      $('.inforContent[data-type="' + num + '"]').fadeIn(500);
      $('.inforContent[data-type="' + num + '"]').addClass('active');
      $('.inforContent[data-type="' + num + '"]').parent().siblings().find('.inforContent').removeClass('active').fadeOut(0);
    }else{
      
    }
  }
})

notAdd();
$(window).on('resize',notAdd)

function notAdd(){
  if(Modernizr.mq('(max-width: 768px)')){
    $('.inforContent').removeClass('active');
  }
}






















