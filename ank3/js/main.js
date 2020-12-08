$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__links').toggleClass('active');
		$('body').toggleClass('lock');
	});
});