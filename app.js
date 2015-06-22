$(document).ready(function() {

	// HIDE CAROUSEL AND SHOW STATIC IMAGES WHEN A NAV LINK IS CLICKED

	$('#starsArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#sunImg').removeClass('show');
		$('#eclipseImg').removeClass('show');
		$('#shootingStarImg').addClass('show');
		$('#one').removeClass('hide');
		$('#one').addClass('showArticle');
		$('#two').removeClass('showArticle');
		$('#two').addClass('hide');
		$('#three').removeClass('showArticle');
		$('#three').addClass('hide');
	})

	$('#sunArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#shootingStarImg').removeClass('show');
		$('#eclipseImg').removeClass('show');
		$('#sunImg').addClass('show');
		$('#one').removeClass('showArticle');
		$('#one').addClass('hide');
		$('#two').removeClass('hide');
		$('#two').addClass('showArticle');
		$('#three').removeClass('showArticle');
		$('#three').addClass('hide');
	})

	$('#eclipseArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#shootingStarImg').removeClass('show');
		$('#sunImg').removeClass('show');
		$('#eclipseImg').addClass('show');
		$('#one').removeClass('showArticle');
		$('#one').addClass('hide');
		$('#two').removeClass('showArticle');
		$('#two').addClass('hide');
		$('#three').removeClass('hide');
		$('#three').addClass('showArticle');
	})
});

// Go to ariticle 1
// $('#starsArticle').click(function(){
// 	$( '.test' ).removeClass('.articles');
// 	$( '.test' ).addClass('.showArticle');

// });

