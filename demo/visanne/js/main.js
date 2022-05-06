
// DOM
// let scene = document.getElementById('scene');
// let parallaxInstance = new Parallax(scene);
// parallaxInstance.friction(0.2, 0.6)


const app = {
	data(){
		return{
			message:'123',
      now:1,
      finish:false,
      imgW:140,
      answer:['是','是','是','是','是'],
      testData:[
        {
          num:1,
          content:`<p>您是否<b>經常</b>在<b class="red">經期前或經期期間</b>出現骨盆腔疼痛或腰痛，
          且這種疼痛影響了您的日常活動，或需要藥物治療<br>
          <sub>（例如：服用止痛藥）？</sub></p>`
        },
        {
          num:2,
          content:`<p>您是否<b>經常</b>在<b class="red">非月經期間</b>出現骨盆腔疼痛或腰痛？
          且這種疼痛影響了您的日常活動，或需要藥物治療<br>
          <sub>（例如：服用止痛藥）？</sub></p>`
        },
        {
          num:3,
          content:`<p>您<b>經常</b>在性行為中感到疼痛嗎？</p>`
        },
        {
          num:4,
          content:`<p>您<b>有時</b>為了避免痛苦而避免性行為？</p>`
        },
        {
          num:5,
          content:`<p>您是否<b>經常</b>在經期前或經期期間排便疼痛？<br>
          <sub>（包含排便疼痛、便血、經期腹瀉或排便次數增加）</sub></p>`
        }
      ]
		}
	},
  methods: {
    clickBtn(num,status){
      this.answer[num-1] = status;
      if( this.now < 6 ){
        this.now =num+1;
        if( this.now == 6 ){
          this.finish = true;
        }
      }
      
    }
  },
}


import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp(app).mount('#app');






