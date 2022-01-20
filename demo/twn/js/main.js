AOS.init();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
	autoplay: {
		delay: 3000,
	},
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const qaDetail = document.querySelectorAll('.qaDetail');
const qaBtn = document.querySelectorAll('.qaBtn');

qaBtn.forEach(function(item){
  item.addEventListener('click',function(){
    let state = item.getAttribute('data-type');
    let num = item.getAttribute('data-num');
    changeQA(state,num,item)
  })
})


function changeQA(state,num,item){
  // console.log("click",state,item)
  let detailState = '';
  if(state == 'close'){
    detailState = 'open';
    setTimeout(function(){
      item.setAttribute('data-type','open');
    },250)
  }else if( state == 'open' ){
    detailState = 'close';
    setTimeout(function(){
      item.setAttribute('data-type','close');
    },250)
  }
  qaDetail.forEach(function(item){
    let qaNum = item.getAttribute('data-num');
    if( num == qaNum ){
      item.setAttribute('data-type',detailState);
    }
  })
}

