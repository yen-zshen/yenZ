

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
let imgLink = 'https://yen-zshen.github.io/yenZ/demo/hifuCenter/img/fb.jpg';


window.fbAsyncInit = function() {
  FB.init({
      appId            : '923542691836404',
      status           : true,
      cookie           : true,
      version          : 'v11.0'                
  });

  $('.shareBtn').on('click',function(){
    console.log('success click btn 3')
    FB.ui(
      {
        method: 'share',
        // name: 'Facebook Dialogs',
        link: webLink,
        picture: imgLink,
        caption: '＝＝＝可自訂 title 區＝＝＝',
        description: '＝＝＝可自訂內容區＝＝＝'
      },
      function(response) {
        // if (response && response.post_id) {
        //   alert('Post was published.');
        // } else {
        //   alert('Post was not published.');
        // }
      }
    );
  })
  
  // $('.shareBtn').click(function(e){
  //   console.log('success click share 2')
  //     e.preventDefault();
  //     var image = imgLink;
  //     console.log(image)

  //     FB.ui(
  //             {
  //                 method: 'share',
  //                 href: $(location).attr('href') + '?og_img=' + image,
                  
  //             },
  //             function (response) {

  //             }
  //         );
  // })
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));