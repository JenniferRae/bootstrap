
$(document).ready(function() {

	// HIDE CAROUSEL AND SHOW STATIC IMAGES WHEN A NAV LINK IS CLICKED

	$('#stars').click(function(){
		$('.container-carousel').addClass('hide');
		$('#sunImg').removeClass('show');
		$('#eclipseImg').removeClass('show');
		$('#shootingStarImg').addClass('show');
	})

	$('#sun').click(function(){
		$('.container-carousel').addClass('hide');
		$('#shootingStarImg').removeClass('show');
		$('#eclipseImg').removeClass('show');
		$('#sunImg').addClass('show');
	})

	$('#eclipse').click(function(){
		$('.container-carousel').addClass('hide');
		$('#shootingStarImg').removeClass('show');
		$('#sunImg').removeClass('show');
		$('#eclipseImg').addClass('show');
	})
});