
// Initializer for Twitter widget slideshow effect

 $('.bk-twitter').unslider({
 	delay: false,			  //  Stops slider auto sliding through tweets
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: true,               //  Display dot navigation
	fluid: false              //  Support responsive design. May break non-responsive designs
});


 // Navigation toggle

/*$( ".navigation-toggle" ).click(function() {
	$( ".perspective" ).toggleClass( "animate" );
});*/

/*$(document).ready(function() {
   str = $('.feature-content').text();
   if($.trim(str) === "") {
     $('.feature-content').hide();
   }
});*/

/*setInterval(function(){ 
   str = $('.feature-content').text();
   if($.trim(str) === "") {
     $('.feature-content').hide();
   } 

   if ($(".feature-content:not(:empty)").length) {
     $('.feature-content').show();
 } 

}, 5000);*/

/*setInterval(function(){ 
   str = $('.feature-content').text();
   if($.trim(str) === "") {
     $('.feature-content').show();
   }  
}, 8000);*/