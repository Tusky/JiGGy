	debugMode	= true;
	adminMode	= true;

	function createAdminMenu(){
		var menuelements = [];
		var menu = "";
		menuelements.push('<div class="admin_menu_button">File</div>');
		menuelements.push('<div class="admin_menu_button">Edit</div>');
		menu = menuelements.join(' ');
		return menu;
	}

$().ready(function() {
	if (adminMode){
		$("#adminbar").html(createAdminMenu());
	}

	if(debugMode){
		$(".footercontent").html("You are currently in debugging mode, change this before production!")
	}

	$(".footer").mouseenter(function() {
		$(".footercontent").hide();
	}).mouseleave(function() {
		$(".footercontent").show();
	});
});