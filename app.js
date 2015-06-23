
	$( document ).ready( function() {
	// HIDE CAROUSEL AND SHOW STATIC IMAGES WHEN A NAV LINK IS CLICKED


	$('#starsArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#sunImg').removeClass('show');
		$('#eclipseImg').removeClass('show');
		$('#shootingStarImg').removeClass('show');
		$('#one').removeClass('hide').addClass('showArticle');
		$('#two').removeClass('showArticle').addClass('hide');
		$('#three').removeClass('showArticle').addClass('hide');
	});



	$('#sunArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#shootingStarImg').removeClass('show');
		$('#eclipseImg').removeClass('show');
		$('#sunImg').addClass('show');
		$('#one').removeClass('showArticle').addClass('hide');
		$('#two').removeClass('hide').addClass('showArticle');
		$('#three').removeClass('showArticle').addClass('hide');
	});

	$('#eclipseArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#shootingStarImg').removeClass('show');
		$('#sunImg').removeClass('show');
		$('#eclipseImg').addClass('show');
		$('#one').removeClass('showArticle').addClass('hide');
		$('#two').removeClass('showArticle').addClass('hide');
		$('#three').removeClass('hide').addClass('showArticle');
	});


});