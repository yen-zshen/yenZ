
// DOM
// let scene = document.getElementById('scene');
// let parallaxInstance = new Parallax(scene);
// parallaxInstance.friction(0.2, 0.6)


const app = {
	data(){
		return{
			cat:false,
			// menuAry:['true','false','false','false'],
			// boardClass:'show',
			// boardTime:300,
			// nowSlideId:'p1',
			// nowSlideNum:10,
			// nowSlideType:false,
			// photoList:[{
			// 	id:'p1',
			// 	num:10,
			// 	photo: 'p1-1.JPG',
			// 	title: '婚攝體驗',
			// 	time:'2021.10.16'
			// },{
			// 	id:'p2',
			// 	num:7,
			// 	photo: 'child.JPG',
			// 	title: '朋友家小孩超可愛',
			// 	time:'2021.01.31'
			// },{
			// 	id:'p3',
			// 	num:11,
			// 	photo: 'catList2.jpg',
			// 	title: '貓咪名叫米漿',
			// 	time:'2020.12.19'
			// }],
			// outdoorList:[{
			// 	photo: 'outdoorList1.JPG',
			// 	title: '九份冒險 - 斜坡索道',
			// 	time:'2021.11.13'
			// },{
			// 	photo: 'outdoorList2.JPG',
			// 	title: '南投賽德克露營',
			// 	time:'2021.4.4'
			// },{
			// 	photo: 'outdoorList3.JPG',
			// 	title: '司馬庫斯與鎮西堡',
			// 	time:'2021.03.08'
			// },{
			// 	photo: 'outdoorList4.JPG',
			// 	title: '雨天的露營',
			// 	time:'2021.10.16'
			// },
			// ],
			creationList:[{
				select:'true',
				img:'twn.png',
				name:'二手精品網站',
				link:'https://yen-zshen.github.io/yenZ/demo/twn/index.html',
				designer:'Yao',
				detail:[
					'使用 Swiper 套件製作圖片輪播效果，並更改滾軸樣式',
					'使用 AOS 套件製作頁面滾動動畫',
					'使用 lottieFile 套件，與設計師配合導出 json 檔，製作 svg 動態圖片'
				],
				tags:['HTML','SCSS',"JavaScript(ES6)","RWD","Swiper",'AOS',"lottieFile"]
			},{
				select:'false',
				img:'travel.png',
				name:'交通部旅遊網站練習',
				link:'https://yen-zshen.github.io/yenZ/demo/travelF2E/default.htm',
				designer:'mySelf',
				detail:[
					'使用 axios 套件來串接 API',
					'使用 Vue.js 渲染畫面',
				],
				tags:['HTML','SCSS',"JavaScript(ES6)","RWD","Vue.js",'Axios']
			},{
				select:'false',
				img:'golden.png',
				name:'金馬Ｘ司法',
				link:'https://yen-zshen.github.io/yenZ/demo/FilmFestival2021/index.html',
				designer:'Island',
				detail:[
					'使用 Swiper 套件製作影片列表的圖片輪播效果，並依照畫面尺寸更改架構與元件樣式，',
					'使用 fullPage.js 套件製作整頁頁面滾動動畫，偵測畫面高度小於一定高度而取消套件',
					'使用 SCSS 製作進入網站時的 loading 動畫',
					'有參與網站規劃與設計'
				],
				tags:['HTML','SCSS',"JavaScript(ES6)","RWD","Swiper",'fullPage.js']
			},{
				select:'false',
				img:'bicycle.png',
				name:'MoveFree 益節躍動盃踩台賽',
				link:'https://yen-zshen.github.io/yenZ/demo/bicycle/',
				designer:'Jimmy',
				detail:[
					'使用 JQuery 的 $ajax 串接 google 試算表，將投票資訊傳入 google 試算表，並再取出投票結果顯示在畫面上',
					'使用 JQuery 的 $ajax 串接 google 試算表，將報名資訊傳入 google 試算表，並檢查是否有重複報名，若有重複報名，將無法再次報名',
					'檢查投票資料是否有填寫完整，若未填寫某欄位或填寫格式錯誤，將會提醒使用者',
					'點選報名按鈕或投票按鈕會開啟 LightBox，透過 mCustomScrollbar 套件來更改其滾動條樣式',
					'使用 TweenMax 製作投票結果畫面（單車往下騎）'
				],
				tags:['HTML','SCSS',"JQuery","RWD","mCustomScrollbar",'TweenMax']
			},{
				select:'false',
				img:'draw.png',
				name:'愛畫畫',
				link:'http://demo.summersjr.com/up/yen/draw/',
				designer:'Jimmy',
				detail:[
					'使用 TweenMax 搭配目前畫面滾動位置來依序顯示動畫',
					'手機版時，使用 TweenMax 製作漢堡選單開啟與關閉的漢堡動畫',
					'使用 FancyBox 套件製作圖片放大燈箱效果',
					'使用 JQuery 的 $ajax 將資料傳給後端',
					'檢查輸入的資料是否有填寫完整，若未填寫某欄位或填寫格式錯誤，將會跳出可愛貓咪視窗提醒你！並標示出需要修改的項目',
					'透過 Google Analytics 來取得使用者行為'
				],
				tags:['HTML','SCSS',"JQuery","RWD","TweenMax",'FancyBox']
			},{
				select:'false',
				img:'xlta.png',
				name:'Xlta',
				link:'http://demo.summersjr.com/up/yen/xlta/',
				designer:'Mercy',
				detail:[
					'使用 OWL Carousel 套件製作 KV 區域輪播效果',
					'使用 TweenMax 搭配目前畫面滾動位置來依序顯示動畫',
					'手機版時，使用 TweenMax 製作漢堡選單開啟與關閉的漢堡動畫',
					'導航列會搭配目前畫面滾動位置來告知使用者目前的單元',
					'點選導航列上的單元，將會滾動至該單元區域',
					'點選證照放大按鈕會開啟 LightBox，透過 mCustomScrollbar 套件來更改其滾動條樣式',
					'下方表格的響應式排版，搭配 mCustomScrollbar 可讓使用者左右滑動',
					'透過 Google Analytics 來取得使用者行為'
				],
				tags:['HTML','SCSS',"JQuery","RWD","TweenMax",'mCustomScrollbar']
			},{
				select:'false',
				img:'english.png',
				name:'擎宇英文',
				link:'http://demo.summersjr.com/up/yen/english/default.htm',
				designer:'Mercy',
			},{
				select:'false',
				img:'summers.png',
				name:'夏天廣告文案頁',
				link:'http://demo.summersjr.com/up/yen/summers/copywritings/',
				designer:'Mercy',
			},{
				select:'false',
				img:'ai_school.png',
				name:'AI 商學院 - 課程',
				link:'http://demo.summersjr.com/up/yen/nccu/member/',
				designer:'Mercy',
			},{
				select:'false',
				img:'ai_vip.png',
				name:'AI 商學院 - VIP',
				link:'http://demo.summersjr.com/up/yen/microsoft/nccu/AIBS/invitation/vip.htm?vip=wahlee',
				designer:'Mercy',
			},{
				select:'false',
				img:'outlook.png',
				name:'microsoft outlook apps',
				link:'http://demo.summersjr.com/up/yen/microsoft/outlook/',
				designer:'Island',
			},{
				select:'false',
				img:'mouse.png',
				name:'微軟時尚滑鼠',
				link:'http://demo.summersjr.com/up/yen/microsoft/190305keymouse/',
				designer:'Jimmy',
			},{
				select:'false',
				img:'eos.png',
				name:'microsoft windows 10 終止支援',
				link:'http://demo.summersjr.com/up/yen/microsoft/190128eos_v2/181121eos/shift/',
				designer:'Mercy',
			}],
			nowCreation:[{ }],
			mouseData:{
				nowX:0,
				nowY:0,
				winH:0,
				winW:0,
			}
		}
	},
	methods:{
		clickCreationList(num){
			console.log(num)
			this.creationList.forEach((item,index)=>{
				item.select = 'false';
				if( num == index ){
					item.select = 'true';
					this.nowCreation[0] = item
				} 
			})
			// console.log(this.nowCreation)
		},
		clickSqure(){
			if(this.cat){
				this.cat = false;
			}else{
				this.cat = true
			}
			
		},
		getMouse(e){
			this.mouseData.nowX = e.clientX;
			this.mouseData.nowY = e.clientY;
			console.log(e.clientX)
			
		},
		resize(){
			this.mouseData.winH = window.innerHeight;
			this.mouseData.winW = window.innerWidth;
			console.log('width:' ,window.innerHeight);
		}
	},
	mounted() {
		this.nowCreation[0] = this.creationList[0];
		this.resize(); 
		window.addEventListener("mousemove", e => { this.getMouse(e) });
		window.addEventListener('resize', this.resize)
		AOS.init();
	},
}


import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';
createApp(app).mount('#app');



// swiper2.loop = 'true';
// console.log(swiper2)