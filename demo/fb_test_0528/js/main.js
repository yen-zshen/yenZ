

const link = document.querySelector(".fbShare");
const metaImgTag = document.querySelector('meta[property="og:image"]')
let gameName = "＝＝＝可自訂內容區＝＝＝";
let webLink = 'https://yen-zshen.github.io/yenZ/demo/fb_test_0528/index.html'
let metaImg = "https://yen-zshen.github.io/yenZ/demo/hifuCenter/img/fb.jpg";
console.log(link);
console.log(metaImgTag);
link.setAttribute("href", `https://www.facebook.com/sharer.php?u=${webLink}&quote=${gameName}`)
// metaImgTag.setAttribute('content',metaImg);
