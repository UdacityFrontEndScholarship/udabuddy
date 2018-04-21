$(document).ready(function () {

	$('.goTop').click(function () {
			$("html, body").animate({
				scrollTop: $(window).scrollTop() + 700
			}, 1000);
			return false;
		});
});
