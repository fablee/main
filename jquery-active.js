//Active menu
jQuery.setnav = function setNavigation() {
	var path = window.location.pathname;
	$('.box.box-mnu a').each(function() {
		var href = $(this).attr('href');
		if(path.substring(0, href.length) === href){
			$(this).addClass('active');
		}
	});
};
$.setnav();