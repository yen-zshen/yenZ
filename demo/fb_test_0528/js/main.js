

const link = document.querySelector(".fbShare");
const imgTag = document.querySelector('.imgHide');
let gameName = "＝＝＝可自訂內容區＝＝＝";
let webLink = 'https://yen-zshen.github.io/yenZ/demo/fb_test_0528/index.html'
let imgLink = "https://yen-zshen.github.io/yenZ/demo/hifuCenter/img/fb.jpg";
console.log(link);
console.log(imgTag);
link.setAttribute("href", `https://www.facebook.com/sharer.php?u=${webLink}&quote=${gameName}`)
imgTag.setAttribute('src',imgLink);
