$(".debuginfo").html("You are currently in debugging mode, change this before production!");

$(".debug").mouseenter(function() {
	$(".debuginfo").hide();
}).mouseleave(function() {
	$(".debuginfo").show();
});
