
const wrapper = document.querySelector('body');
window.scrollY = 0;
// let top2 = document.querySelector('body')
// console.log(window.scrollTop)

const app = {
	data(){
		return{
			menuAry:['true','false','false','false'],
			boardClass:'show',
			boardTime:300,
			nowSlideId:'p1',
			nowSlideNum:10,
			nowSlideType:false,
			photoList:[{
				id:'p1',
				num:10,
				photo: 'p1-1.JPG',
				title: '婚攝體驗',
				time:'2021.10.16'
			},{
				id:'p2',
				num:7,
				photo: 'child.JPG',
				title: '朋友家小孩超可愛',
				time:'2021.01.31'
			},{
				id:'p3',
				num:11,
				photo: 'catList2.jpg',
				title: '貓咪名叫米漿',
				time:'2020.12.19'
			}],
			outdoorList:[{
				photo: 'outdoorList1.JPG',
				title: '九份冒險 - 斜坡索道',
				time:'2021.11.13'
			},{
				photo: 'outdoorList2.JPG',
				title: '南投賽德克露營',
				time:'2021.4.4'
			},{
				photo: 'outdoorList3.JPG',
				title: '司馬庫斯與鎮西堡',
				time:'2021.03.08'
			},{
				photo: 'outdoorList4.JPG',
				title: '雨天的露營',
				time:'2021.10.16'
			},
			],
			creationList:[{
				img:'travel.png',
				name:'交通部旅遊網站練習',
				link:'https://yen-zshen.github.io/yenZ/demo/travelF2E/default.htm'
			},{
				img:'golden.png',
				name:'金馬Ｘ司法',
				link:'https://yen-zshen.github.io/yenZ/demo/FilmFestival2021/index.html'
			},{
				img:'bicycle.png',
				name:'MoveFree 益節躍動盃踩台賽',
				link:'https://yen-zshen.github.io/yenZ/demo/bicycle/'
			},{
				img:'draw.png',
				name:'愛畫畫',
				link:'http://demo.summersjr.com/up/yen/draw/'
			},{
				img:'xlta.png',
				name:'Xlta',
				link:'http://demo.summersjr.com/up/yen/xlta/'
			},{
				img:'english.png',
				name:'擎宇英文',
				link:'http://demo.summersjr.com/up/yen/english/default.htm'
			},{
				img:'ai_school.png',
				name:'AI 商學院 - 課程',
				link:'http://demo.summersjr.com/up/yen/nccu/member/'
			},{
				img:'ai_vip.png',
				name:'AI 商學院 - VIP',
				link:'http://demo.summersjr.com/up/yen/microsoft/nccu/AIBS/invitation/vip.htm?vip=wahlee'
			},{
				img:'summers.png',
				name:'夏天廣告文案頁',
				link:'http://demo.summersjr.com/up/yen/summers/copywritings/'
			},{
				img:'outlook.png',
				name:'microsoft outlook apps',
				link:'http://demo.summersjr.com/up/yen/microsoft/outlook/'
			},{
				img:'mouse.png',
				name:'微軟時尚滑鼠',
				link:'http://demo.summersjr.com/up/yen/microsoft/190305keymouse/'
			},{
				img:'eos.png',
				name:'microsoft windows 10 終止支援',
				link:'http://demo.summersjr.com/up/yen/microsoft/190128eos_v2/181121eos/shift/'
			}],
		}
	},
	methods:{
		clickList(num){
			// console.log('click' , window.pageYOffset)
			let top = document.querySelector('#app')
			
			this.boardClass = 'hide';
			let newAry = [];
			this.menuAry.forEach((item,index)=>{
				if(index == num-1){ newAry.push('true') }
				else{ newAry.push('false') }
			})

			setTimeout(() => {
				// let top = document.querySelector('.section')
				// console.log(top.scrollTop)
				// document.body.scrollTop = 0;
				// window.pageYOffset = 0;
				window.scrollTo(0,0);
				let top = document.querySelector('.wrapper')
				
				this.menuAry = newAry;
				this.boardClass = 'show';
			}, this.boardTime);
		},
		setPhotoId(id,num){
			console.log('set')
			this.nowSlideId = id;
			this.nowSlideNum = num;
			this.nowSlideType = true;
			swiper2.disable();
			setTimeout(() => {
				swiper2.enable();
				swiper2.slideTo( 0 , 0 , true ); 
			}, 250);
			// swiper2.updateAutoHeight(1000)
			// swiper2.updateSize();
			// swiper2.init('.contentSwiper')
			// swiper2.slideTo( 0 , 0 , true );  //OK
			// swiper2.updateAutoHeight(0)
			// swiper2.disable()  //OK
			// console.log(swiper2)
		},
		closeSlideContent(){
			console.log('close')
			this.nowSlideType = false;
		}
	},
	mounted() {
		
	},
}


Vue.createApp(app).mount('#app');


let swiper = new Swiper('.listSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let swiper2 = new Swiper('.contentSwiper', {
  autoHeight: true,
	loop: false,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// swiper2.loop = 'true';
// console.log(swiper2)