
$( document ).ready( function() {
	// HIDE CAROUSEL AND SHOW ARTICLES WHEN A NAV LINK IS CLICKED


	$('#starsArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#one').removeClass('hide').addClass('showArticle');
		$('#two').removeClass('showArticle').addClass('hide');
		$('#three').removeClass('showArticle').addClass('hide');
	});

	$('#sunArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#one').removeClass('showArticle').addClass('hide');
		$('#two').removeClass('hide').addClass('showArticle');
		$('#three').removeClass('showArticle').addClass('hide');
	});

	$('#eclipseArticle').click(function(){
		$('.container-carousel').addClass('hide');
		$('#one').removeClass('showArticle').addClass('hide');
		$('#two').removeClass('showArticle').addClass('hide');
		$('#three').removeClass('hide').addClass('showArticle');
	});

	$(window).on('resize', function(){
      var win = $(this); 
      if (win.width() >= 950) { 
      	$('#one').removeClass('hide').addClass('showArticle');
      	$('#two').removeClass('hide').addClass('showArticle');
      	$('#three').removeClass('hide').addClass('showArticle');}
	});

	$(window).on('load', function(){
      var win = $(this); 
      if (win.width() >= 950) { 
      	$('#one').removeClass('hide').addClass('showArticle');
      	$('#two').removeClass('hide').addClass('showArticle');
      	$('#three').removeClass('hide').addClass('showArticle');}
	});
});