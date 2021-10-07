

const btn = document.querySelector(".loadingBlock .btn");
const btnAnain = document.querySelector('.loadingBlock .btn.again');
const lineBox = document.querySelector('.loadingBlock .box')
const line1 = document.querySelector(".loadingBlock .line1");
const line2 = document.querySelector(".loadingBlock .line2");

// loading ------------------------------------
window.addEventListener("load", function(e) {
	console.log("finish loading");
	let loadingElement = document.getElementById('loading');
	let mainElement = document.querySelector('main')
	
	setTimeout(function(){ 
		lineBox.classList.add('stop');
	}, 0);
	setTimeout(function(){ 
		mainElement.classList.remove('load')
	}, 500);
	setTimeout(function(){ 
		loadingElement.style.opacity = '0';
	}, 1000);
	setTimeout(function(){ loadingElement.style.display = 'none' }, 1500);

})



// btn.addEventListener('click',function(){
//   console.log('click');
//   lineBox.classList.add('stop');
// })
// btnAnain.addEventListener('click',function(){
//   console.log('again');
//   lineBox.classList.remove('stop');
// })




const menuHamBtn = document.querySelector('#menuHamBtn');
const menuContent = document.querySelector('.sectionMenu .menuContent');
const menuCloseBtn = document.querySelector('.closeListBtn');
const closeBtn = document.querySelector('.closeListBtn');
const menuList = document.querySelectorAll('.menuList')
const mainLogo = document.querySelector('#mainLogo');


menuHamBtn.addEventListener('click',function(){
	// alert('success')
	menuHamBtn.classList.add('open');
	menuContent.classList.add('show');
  closeBtn.classList.add('show');
  mainLogo.classList.add('open')
})

menuCloseBtn.addEventListener('click',function(){
	menuHamBtn.classList.remove('open');
	menuContent.classList.remove('show');
  closeBtn.classList.remove('show');
  mainLogo.classList.remove('open')
})



// TweenMax.set('.menuList a',{opacity:0 , x:-30});
// // let tl = new TimelineMax({});
// menuList.forEach(function(item,index){
//   // let tl = new TimelineMax({});
//   let tls = []
//   tls[index] = new TimelineMax({});

//   tls[index].staggerTo(".menuList a", 0.5, {opacity:1, x:0}, 0.35);
//   // tls[index].staggerTo(".menuList a", 0.5, {opacity:1, x:0}, 0.35);

//   item.addEventListener('mouseenter',function(){
    
    
//     // tl.seek(0);
//     tls[index].play(0);
//     console.log(tls[index]);
//   })
// })










