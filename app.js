
	var $menu = $(".wrapper-scroll");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 80 && $menu.hasClass("in-notfixed") ){
			$menu.removeClass("in-notfixed").addClass("wrapper-fixed");
		} else if($(this).scrollTop() <= 80 && $menu.hasClass("wrapper-fixed")) {
			$menu.removeClass("wrapper-fixed").addClass("in-notfixed");
		}
	});