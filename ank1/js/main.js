$(document).ready(function() {
	$('.menu-button').click(function(event) {
		$('.menu').toggleClass('menu_active');
		$('body').toggleClass('lock');
	});


	// Показывать карту только  когда докрутили до нее

	// var heal = $('.stage');
	// var healTop = heal.offset().top;
	// $(window).bind('scroll', function(){
	// 	var windowTop = $(this).scrollTop();
	// 	if (windowTop > healTop) {
	// 		console.log('Докрутили');
	// 		$('.map').append('<div>  </div>')
	// 		$(window).unbind('scroll');
	// 	}
	// });
});

