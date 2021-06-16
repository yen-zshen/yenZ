

// const link = document.querySelector(".fbShare");
// const imgTag = document.querySelector('.imgHide img');
// let gameName = "＝＝＝可自訂內容區＝＝＝";
// let webLink = 'https://yen-zshen.github.io/yenZ/demo/fb_test_0528/index.html'
// let imgLink = "https://yen-zshen.github.io/yenZ/demo/hifuCenter/img/fb.jpg";
// console.log(link);
// console.log(imgTag);
// link.setAttribute("href", `https://www.facebook.com/sharer.php?u=${webLink}&quote=${gameName}`)
// imgTag.setAttribute('src',imgLink);

let webLink = 'https://yen-zshen.github.io/yenZ/demo/fb_test_0528/index.html'
let imgLink = "https://yen-zshen.github.io/yenZ/demo/hifuCenter/img/fb.jpg";


window.fbAsyncInit = function() {
  FB.init({
      appId            : '923542691836404',
      status           : true,
      cookie           : true,
      version          : 'v2.10'                
  });
  
  $( '.shareBtn' ).click(function(e){
    console.log('success click share')
      e.preventDefault();
      var image = imgLink;

      FB.ui(
              {
                  method: 'share',
                  href: webLink,
              },
              function (response) {

              }
          );
  })
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));