//make <header> element stretch across screen
//literally unnecessary bc using height=100vh LMAOO
/*
$(document).ready(function(){
  $('.header').height($(window).height());
})
*/



/*
//from w3schools
//Smooth scrolling to elements, taking into account fixed navbar
//BUT only works if you click the navbar link twice - but this fucks up the scrollspy
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 55
      }, 700, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});*/


//scroll spy??
// $('body').scrollspy({ target: '.navbar'})

//$('body').scrollspy({target:'.navbar', offset:50});

/*
$(document).ready(function(){
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
  });
});*/



// fade in and out scroll to top button
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});



// console greeting
if (typeof console === 'object') {
	console.log (
		'\n' +
		'Hi there :) Thanks for visiting my website!  \n' +
		'I hope you\'ve enjoyed! \n' +

		"		   ___ \n" +
		"		__/_  `.  .-----. \n" +
		"		\\_,` | \\-'  /   )`-') \n" +
		"		   ) `-‘    \\  ((`-' \n" +
		"	   ___/  ,    .'7 /| \n" +
		"	  (_,___/...-` (_/_/ \n" +
		'\n'
	);
}
