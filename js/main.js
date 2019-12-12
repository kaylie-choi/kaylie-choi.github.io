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

$(document).ready(function(){
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
  });
});

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


// php
$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
