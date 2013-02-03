
(function($) {
	
	$.slides.registerTransition({

		name: 'fade',
		transition: function() {

			function animationResize() {

                 var speed = api.speed / 3;

                 // Reinitialize if api is to be returned in case the animation has changed.
                 if (opts.api) {
                     outer.css('width', slides.eq(e.currentIndex).width()).css('height', slides.eq(e.currentIndex).height());
                 }


                 // Animation.
                 slides.css('z-index', '0');
                 slides.eq(e.currentIndex).css('z-index', '1').fadeOut(speed, function() {
                     outer.animate({
                         width: slides.eq(e.newIndex).width() + 'px',
                         height: slides.eq(e.newIndex).height() + 'px'
                     }, speed, function() {
                         slides.eq(e.newIndex).fadeIn(speed);
                     });
                 });

             }

             function animationResizeHeight() {

                 var speed = api.speed / 3;

                 // Reinitialize if api is to be returned in case the animation has changed.
                 if (opts.api) {
                     outer.css('width', 'auto');
                     outer.css('height', slides.eq(e.currentIndex).height());
                 }

                 // Animation.
                 slides.css('z-index', '0');
                 slides.eq(e.currentIndex).css('z-index', '1').fadeOut(speed, function() {
                     outer.animate({
                         height: slides.eq(newIndex).height() + 'px'
                     }, speed, function() {
                         slides.eq(newIndex).fadeIn(speed);
                     });
                 });

             }

		}

	});
	
})(jQuery);