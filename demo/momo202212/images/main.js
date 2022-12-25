/* 回版頭*/
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() > 300){ //設定大於300px才顯示浮層
            jQuery('#gotop').fadeIn("fast");
        } else {
            jQuery('#gotop').stop().fadeOut("fast");
        }
    });
}); 

