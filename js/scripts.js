$(document).ready(function(){
  // animate icon
  $('#menu-icon').click(function(){
    $(this).toggleClass('open');
  });

  // toggle navigation
  $('#menu-icon').click(function() {
  	$('nav').toggleClass('open-nav');
  	// $('body').toggleClass('move-body');
  });

  // scroll smoothly to internal link (#)
	$('a[href^="#"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash,
       $target = $(target);

       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 3000, 'swing', function () {
           window.location.hash = target;
       });
       // close navigation menu
       $('nav').removeClass('open-nav');
       $('#menu-icon').removeClass('open');
  });

  
	// delay load of animated CSS (viewport init)
	$('.left').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInLeft',
		offset: 10
	});
	$('.right').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInRight',
		offset: 10
	});
	$('.down').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInDown',
		offset: 10
	});
	$('.up').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn fadeInUp',
		offset: 10
	});
	$('.in').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 20
	});
});