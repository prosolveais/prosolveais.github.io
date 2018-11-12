/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * SmoothScroll
*/

var scroll = new SmoothScroll('a[data-scroll]');

/*
 * Website countdown
 */

$('#defaultCountdown').countdown('2018/11/25 07:30:00', function(event) {
    $('#days').html(event.offset.totalDays);
    $('#hours').html(event.offset.hours);
    $('#minutes').html(event.offset.minutes);
    $('#seconds').html(event.offset.seconds);
});

/*
 * Announcement Modal Activation
 */
$("#announcementModal").modal("show");
