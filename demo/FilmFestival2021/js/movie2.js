$(document).ready(function(){
  // $('.owl-carousel').owlCarousel({
  //   stagePadding: 50,
  //   loop:true,
  //   margin:10,
  //   nav:true,
  //   // navText:['next','prev'],
  //   // dotsData:true,
  //   dotsEach:true,
  //   responsive:{
  //       0:{
  //           items:1
  //       },
  //       600:{
  //           items:2
  //       },
  //       1000:{
  //           items:5
  //       }
  //   }
  // });
});

const swiper = new Swiper('.swiper', {
  // loop:true,
  slidesPerView: "auto",
  spaceBetween: 0, // 圖片間距
  pagination: { //dot style
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // 上一頁按鈕物件
    prevEl: ".swiper-button-prev", // 下一頁按鈕物件
  },
  pagination: { // 分頁
    el: '.swiper-pagination',
    clickable:true,
  },
  centeredSlides: true,
  breakpoints: {
    0: {  // 0~768
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: true,
      loop:true,
      centeredSlidesBounds:true,
      
    },
    // 520: {  // 520~768
    //   slidesPerView: 2,
    //   spaceBetween: 0,
    //   centeredSlides: false,
    //   // slidesPerGroup: 2,
    //   // loop:true,
    //   grid: {
    //     rows: 2,
    //   },
    // },
    768: { // 768~1200
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: false,
      // loop:true,
      // slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
      centeredSlides: false,
      grid: {
        rows: 2,
      },
    },
  },


});


let movieLink = document.querySelectorAll('.movieLink');
movieLink.forEach(function(item,index){
  item.addEventListener('click',function(){
    console.log('movieLink')
  })
})


let IsRemoveSlide = false;
let isReload = false;
let beforeLocalHref = '';
let localHref = window.location.href;
let localStatus = '';
let movieMain = document.querySelector('#movieMain');
let IsAddSlide = true;
let movieBlockDec01 = `<div class="swiper-slide movieBlockDecorate" >
<div class="movieListInfo" data-type='block1'>
  <span>INTRO</span>
</div>
</div>`
let movieBlockDec02 = `<div class="swiper-slide movieBlockDecorate" >
<div class="movieListInfo" data-type='block2'>
  <span>MOVIE</span>
</div>
</div>`
removeMovieBlock();
$(window).resize(function(){
  fnReLoad();
  removeMovieBlock();

});


// localStatus = splitHref();
// console.log(localStatus)

function fnReLoad(){
  localStatus = splitHref();
  movieMain.setAttribute('data-state',localStatus);
  // console.log(localStatus)
  
  // 一開始什麼都沒有，先加上狀態
  // 如果 resize 到 mobile 版，加上 mobile
  if( localStatus == 'none' ){
    if(  Modernizr.mq('(max-width: 768px)') ){ // mobile
      localHref = beforeLocalHref + '?mobile';
      localStatus = 'mobile';
      // movieMain.setAttribute('data-state','mobile');
    }else{
      localHref = beforeLocalHref + '?pc';
      localStatus = 'pc';
      // movieMain.setAttribute('data-state','pc');
    }
  }
  // 如果進來是 mobile，超過 768 導向到 pc
  else if( localStatus == 'mobile' ){ 
    console.log(' now is mobile : '+localStatus)
    movieMain.setAttribute('data-state','mobile');
    if( Modernizr.mq('(max-width: 768px)') == false ){
      window.location.href = beforeLocalHref + '?pc';
      console.log(' go to pc ')
      
    }


  }else if( localStatus == 'pc'  ){
    console.log(' now is pc : '+localStatus);
    movieMain.setAttribute('data-state','pc');
    if( Modernizr.mq('(max-width: 768px)') ){
      console.log( ' go to mobile ')
      document.location.href = beforeLocalHref + '?mobile';
      
    }
  }

}
function splitHref(){
  if(localHref.indexOf('?')!=-1){
      let ary1 = localHref.split('?');
      beforeLocalHref = ary1[0];
      return ary1[1];
      
  }else{
    let status = 'none'
    return status;
  }
}


function removeMovieBlock(){
  if (Modernizr.mq('(max-width: 1200px)') ) { // 小於 1200
    console.log('remove : ' + IsRemoveSlide)
    if( IsRemoveSlide == false ){
      setTimeout(function(){ 
        swiper.removeSlide(2);
        swiper.removeSlide(6);
        console.log('remove')
      }, 2000);
      
      IsRemoveSlide = true;
      IsAddSlide = false;
      
    }
    
  }else if(Modernizr.mq('(min-width: 1201px)') && IsAddSlide == false){
    console.log('2')
    swiper.addSlide(2, movieBlockDec01);
    swiper.addSlide(7, movieBlockDec02);
    IsRemoveSlide = false;
    IsAddSlide = true
  }
  
}
		

let nowIndex = document.querySelector('.countIndex');
let count = swiper.realIndex +1;
nowIndex.textContent =  '1/6' 

swiper.on('slideChange', function () {
  console.log('slide changed');
  console.log(swiper.realIndex);
  count = swiper.realIndex +1
  if( count >6 ){
    count = 1;
  }
  nowIndex.textContent = count+ '/6' 
});








