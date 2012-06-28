/* Sets debugMode */
var debugMode = true;
/* Creates HTML elements to show abd displays them */
$("#daGame").after('<div class="push"></div>');
$(".wrapper").after('<div class="debug"><div class="debuginfo"></div></div>');
$(".debuginfo").html("You are currently in debugging mode, change this before production!");
$(".debug").mouseenter(function() {
	$(".debuginfo").hide();
}).mouseleave(function() {
	$(".debuginfo").show();
});