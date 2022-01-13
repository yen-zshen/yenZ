

const menuBar = document.querySelector('.secMenu');
const iconSearch = document.querySelector('.icon_search');
const renderBlock = document.querySelector('.cardGroup');

let myModal;

const app = {
  data(){
    return{
      menuType:'',
      h2City:'熱門',
      h2Type:'景點',
      productList:[{}],
      scrollData:{
        now:0,
      },
      searchBar:{
        isClick:false,
        selectType:'',
        selectCity:'',
        types:[{
          title:'景點導覽',
          detail:['自然風景',' 體育健身','遊憩類','古蹟類']
        },{
          title:'觀光活動',
          detail:['年度活動',' 藝文活動','節慶活動','其他']
        }],
        citys:[
          {ch:"基隆市",en:'Keelung'},
          {ch:"新北市",en:'NewTaipei'},
          {ch:"台北市",en:'Taipei'},
          {ch:"連江縣",en:'LienchiangCounty'},
          {ch:"新北市",en:'NewTaipei'},
          {ch:"宜蘭縣",en:'YilanCounty'},
          {ch:"桃園市",en:'Taoyuan'},
          {ch:"新竹市",en:'Hsinchu'},
          {ch:"新竹縣",en:'HsinchuCounty'},
          {ch:"苗栗縣",en:'MiaoliCounty'},
          {ch:"台中市",en:'Taichung'},
          {ch:"彰化縣",en:'ChanghuaCounty'},
          {ch:"南投縣",en:'NantouCounty'},
          {ch:"嘉義縣",en:'ChiayiCounty'},
          {ch:"嘉義市",en:'Chiayi'},
          {ch:"雲林縣",en:'YunlinCounty'},
          {ch:"台南市",en:'Tainan'},
          {ch:"高雄市",en:'Kaohsiung'},
          {ch:"澎湖縣",en:'PenghuCounty'},
          {ch:"金門縣",en:'KinmenCounty'},
          {ch:"屏東縣",en:'PingtungCounty'},
          {ch:"台東縣",en:'TaitungCounty'},
          {ch:"花蓮縣",en:'HualienCounty'}
        ]
      },
      modalContent:[{}]
    }
  },
  methods:{
    getAuthorizationHeader() {
      let AppID = 'acea309f2654429da6d55e8051c57f11';
      let AppKey = 'ChF5QxzSjUv6MOi2X3NR2PhNIVo';
      let GMTString = new Date().toGMTString();
      let ShaObj = new jsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update('x-date: ' + GMTString);
      let HMAC = ShaObj.getHMAC('B64');
      let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
      return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    },
    getScenicSpotData(city){
      this.h2City = this.filterCityChName(city);
      if(city == '' || city == undefined){ city = '' }else{ city = '/' + city }
      let startIndex = 0;
      let allIndex = 8;
      let url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot${city}?%24top=${allIndex}&%24skip=${startIndex}&%24format=JSON`;
      let newAry =[];
      axios.get(url,{headers:this.getAuthorizationHeader()})
      .then(res=>{
        console.log(res.data)
        res.data.forEach(item =>{
          let obj = {}
          obj.image = this.filterImg(item.Picture);
          obj.name = item.ScenicSpotName;
          if(item.OpenTime != '全天候開放'){  item.OpenTime = ''; }
          obj.time = item.OpenTime;
          obj.address = item.Address;
          obj.id = item.ScenicSpotID;
          obj.class = item.class1;
          obj.description = item.Description;
          newAry.push(obj)
        })
        this.productList = newAry;
      })
    },
    scrollMenuType(){
      this.scrollData.now = document.documentElement.scrollTop;  // 取得目前 scroll bar 滑了多少
      // console.log('now : ' + this.scrollData.now);
      if( this.scrollData.now > 40 ){
        this.menuType = 'scroll';
      }else{
        this.menuType = '';
      }
    },
    clickSearch(){
      let type = this.searchBar.selectType;
      let city = this.searchBar.selectCity;
      
      if( type == ''){
        this.getScenicSpotData(city);
      }else if( type == '景點導覽' ){
        this.getScenicSpotData(city);
        this.h2Type = '景點'
      }else{
        this.getActiveData(city)
        this.h2Type = '活動'
      }
      this.scrollToBlock();
      console.log(type,city)
      
    },
    getActiveData(city){
      this.h2City = this.filterCityChName(city);
      if(city == '' || city == undefined){ city = '' }else{ city = '/' + city };
      console.log(`active , ${city}`)
      let startIndex = 0;
      let allIndex = 6;
      let url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity${city}?%24top=${allIndex}&%24skip=${startIndex}&%24format=JSON`;
      let newAry = [];
      axios.get(url,this.getAuthorizationHeader())
      .then(res => {
        console.log(res.data)
        res.data.forEach(item =>{
          let obj = {}
          obj.image = this.filterImg(item.Picture);
          obj.name = item.ActivityName;
          if(item.OpenTime != '全天候開放'){  item.OpenTime = ''; }
          obj.time = item.OpenTime;
          obj.address = item.Address;
          obj.id = item.ActivityID;
          obj.class = item.Class1;
          obj.description = item.Description;
          newAry.push(obj)
        })
        this.productList = newAry
      })
    },
    filterImg(img){
      if(img.PictureUrl1 == undefined){
        return '../img/imageNone.png'
      }else{ return img.PictureUrl1; }
    },
    filterCityChName(str){
      let chName = '';
      if( str == '' || str == undefined ){return '熱門'}
      this.searchBar.citys.forEach(item=>{
        if (item.en == str){
          chName = item.ch;
        }
      })
      return chName;
    },
    scrollToBlock(){
      let blockHeight = document.querySelector('.secRender').offsetTop;
      window.scrollTo({
        top: blockHeight - 100,
        left: 0,
        behavior: 'smooth'
      });
    },
    scroll(){
      this.scrollMenuType();
      
    },
    clickMore(id){
      myModal.show();
      let newAry = this.productList.filter(item=>{
        return item.id == id;
      })
      this.modalContent = newAry;
      console.log(this.modalContent[0].name)
    }
  },
  watch:{
  },
  mounted() {
    myModal = new bootstrap.Modal(document.getElementById('myModal'))
    this.getScenicSpotData();
    window.addEventListener("scroll", this.scroll);
  },
}

Vue.createApp(app).mount('#app');