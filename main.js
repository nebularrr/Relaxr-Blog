$("#button blue").on("click", function(){
	$("body").text("We are not currently taking sign ups");

});

 $(".readmore").on("click", function(){
	$("body").slideDown();
	$("body").html(<P>Read Less</p>);
 });

	 $(".readmore").on("click", function(){
	$("body").slideUp();
	$("body").html(<P>Read More</p>);
 });

  $("#sidebar").on("click", function(){
	$("body").slideDown();
	$("body").html(<P>Learn Less</p>);
});

  $("#sidebar").on("click", function(){
	$("body").slideUp();
	$("body").html(<P>Learn More</p>);
});
