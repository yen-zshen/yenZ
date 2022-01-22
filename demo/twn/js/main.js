

// DOM
const aosLine = document.querySelector('.aosLine');
const aosBtn = document.querySelector('.aosBtn');
const qaDetail = document.querySelectorAll('.qaDetail');
const qaBtn = document.querySelectorAll('.qaBtn');


// data
let winH = 0;


// event
window.addEventListener('resize',function(){
  aosOffset();
})
aosBtn.addEventListener('click',aosLineOpen);

qaBtn.forEach(function(item){
  item.addEventListener('click',function(){
    let state = item.getAttribute('data-type');
    let num = item.getAttribute('data-num');
    changeQA(state,num,item)
  })
})



// methods 
function aosOffset(){
  winH = window.innerHeight;
  let height = (winH / 2) - 30;
  console.log(winH)
  AOS.init({
    offset:height,
  });
  aosLine.style.bottom = `${ height }px`;
}

function aosLineOpen(){
  console.log('click')
  let type = document.querySelector('.aosBtn').getAttribute('data-type');;
  if( type == 'open' ){
    aosBtn.setAttribute('data-type','close');
    aosLine.setAttribute('data-type','close');
    aosBtn.textContent = 'line close';
  }else{
    aosBtn.setAttribute('data-type','open');
    aosLine.setAttribute('data-type','open');
    aosBtn.textContent = 'line open';
  }
}

function changeQA(state,num,item){
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


function init(){
  
  aosOffset();
  AOS.init({
    offset:(winH / 2) - 30,
  });
}




init();








const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
	autoplay: {
		delay: 1500,
	},
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
