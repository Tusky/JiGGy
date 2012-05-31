if (adminMode){
	$.getScript("js/admin.js", function(){
		$("#adminbar").html(createAdminMenu());
	});
}

if(debugMode){
	$.getScript("js/debug.js");
}
