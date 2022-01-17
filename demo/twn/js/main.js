AOS.init();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
	autoplay: {
		delay: 3000,
	},
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

