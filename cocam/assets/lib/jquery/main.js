$(document).ready(function() {

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        paginationClickable: true,
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 500,
        loop:true,
        simulateTouch:false,
        autoplay: 6000
    });

	// Nav
	$('.toggle-menu').jPushMenu();

	// Waypoints
	var waypoints = $('body').waypoint({
	  handler: function(direction) {
	    	if (direction == 'down') {
	    	    $('body').addClass('scrolled');
	    	}
	    	if (direction == 'up') {
	    		$('body').removeClass('scrolled');
	    	}
	  },
	  offset: '-10px'
	})

});