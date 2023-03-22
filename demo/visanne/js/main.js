
// DOM
// let scene = document.getElementById('scene');
// let parallaxInstance = new Parallax(scene);
// parallaxInstance.friction(0.2, 0.6)


//  // 建立 Leaflet 地圖
//  var map = L.map('map');

//  // 設定經緯度座標
//  map.setView(new L.LatLng(22.992, 120.239), 12);
 
//  // 設定圖資來源
//  var osmUrl='https://tile.openstreetmap.org/{z}/{x}/{y}.png';
//  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16});
//  map.addLayer(osm);


const app = {
	data(){
		return{
			msg:['', '', ''],
      now:1,
      show:1,
      leave:1,
      finish:false,
      imgW:140,
      lightBox:false,
      lb_type:'',
      answer:['是','是','是','是','是'],
      testData:[
        {
          num:1,
          content:`<p>您是否<b>經常</b>在<b class="red">經期前或經期期間</b>出現骨盆腔疼痛或腰痛，
          <br>且這種疼痛影響了您的日常活動，或需要藥物治療<br>
          <sub>（例如：服用止痛藥）？</sub></p>`,
          text:'01.	您是否經常在經期前或經期期間出現骨盆腔疼痛或腰痛，且這種疼痛影響了您的日常活動，或需要藥物治療（例如：服用止痛藥）？'
        },
        {
          num:2,
          content:`<p>您是否<b>經常</b>在<b class="red">非月經期間</b>出現骨盆腔疼痛或腰痛？<br>
          且這種疼痛影響了您的日常活動，或需要藥物治療<br>
          <sub>（例如：服用止痛藥）？</sub></p>`,
          text:'02.	您是否經常在非月經期間出現骨盆腔疼痛或腰痛？且這種疼痛影響了您的日常活動，或需要藥物治療（例如：服用止痛藥）？'
        },
        {
          num:3,
          content:`<p>您<b>經常</b>在性行為中感到疼痛嗎？</p>`,
          text:'03.	您經常在性行為中感到疼痛嗎？'
        },
        {
          num:4,
          content:`<p>您<b>有時</b>為了避免痛苦而避免性行為？</p>`,
          text:'04. 您有時為了避免痛苦而避免性行為？'
        },
        {
          num:5,
          content:`<p>您是否<b>經常</b>在經期前或經期期間排便疼痛？<br>
          <sub>（包含排便疼痛、便血、經期腹瀉或排便次數增加）</sub></p>`,
          text:'05.	您是否經常在經期前或經期期間排便疼痛（包含排便疼痛、便血、經期腹瀉或排便次數增加）？'
        }
      ],
      // activeScroll:true,
		}
	},
  methods: {
    clickBtn(num,status){
      this.answer[num-1] = status;
      // let _this = this;
      if( this.now < 6 ){
        this.leave = num+1
        setTimeout(() => {
          this.now =num+1;
          console.log('now:' , this.now)
          if( this.now == 6 ){
            console.log('finish')
            this.finish = true;
            return;
          }
        }, 500);
        setTimeout(() => {
          this.show =num+1;
          console.log('show')
        }, 520);
      }
    },
    openLightBox(type){
      console.log('open lightBox')
      this.lb_type = type
      this.lightBox = !this.lightBox
    },
    scroll(section){
      // let h = document.getElementById(section);
      // console.log(h.offsetTop)
      $('html,body').animate({
        scrollTop: $(`#${section}`).offset().top - 20
      }, 500);
    },
    clickToCopy(num) {
      console.log('click to copy');
      if (num == '1') {
        navigator.clipboard.writeText('https://youtu.be/xrSTIegew1U');
      } else if (num == '2') {
        navigator.clipboard.writeText('https://youtu.be/TklhanTSYjQ');
      } else {
        navigator.clipboard.writeText('https://youtu.be/GcuZr6SkOF8');
      }
      this.msg[num-1] = '已複製連結';
      setTimeout(() => {
        this.msg = ['', '', '']
      }, 3000);
      
    },
    clickEndBtn() {
      window.open('https://www.endometriosis-check.com/location/')
    }
  },
  mounted() {
    // let lb = document.querySelector('.sec_lightBox');
    // lb.css('z-index','-10');
    // window.setTimeout(()=>{
    //   lb.css('z-index','1');
    // },1000)
  },
  // watch:{
  //   testData(nVal,oVal){
  //     console.log( oVal );
  //     setTimeout(() => {
  //       console.log(nVal)
  //     }, 500);
  //   }
  // }
}


import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp(app).mount('#app');






