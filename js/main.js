
const wrapper = document.querySelector('.wrapper');

const app = {
	data(){
		return{
			menuAry:['true','false','false','false'],
			boardClass:'show',
			boardTime:300,
			photoList:[{
				photo: 'p1-1.JPG',
				title: '婚攝體驗',
				time:'2021.10.16'
			},{
				photo: 'child.JPG',
				title: '朋友家小孩超可愛',
				time:'2021.01.31'
			},{
				photo: 'catList3.jpg',
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
			},]
		}
	},
	methods:{
		clickList(num){
			
			this.boardClass = 'hide';
			let newAry = [];
			this.menuAry.forEach((item,index)=>{
				if(index == num-1){ newAry.push('true') }
				else{ newAry.push('false') }
			})

			setTimeout(() => {
				wrapper.scrollTop = 0;
				this.menuAry = newAry;
				this.boardClass = 'show';
			}, this.boardTime);
		}
	},
	mounted() {
		
	},
}


Vue.createApp(app).mount('#app');


const swiper = new Swiper('.swiper', {
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