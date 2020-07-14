$(function() {
	$('.toggle-mnu').click(function() {
		$(this).toggleClass('on');
		$('.main-mnu').slideToggle();
	});

	$('.section_4').waypoint(function() {
		$('.section_4 .card').removeClass('card-on').addClass('card-off');
	});

	$('.section_5').waypoint(function() {
		$('.section_5 .card').removeClass('card-on').addClass('card-off');
	});
});

