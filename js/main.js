if (adminMode){
	$.getScript("js/admin.js", function(){
		$("#adminbar").html(createAdminMenu());
	});
}

if(debugMode){
	$.getScript("js/debug.js");
}else{
	$().ready(function(){
		$(".debug, .debuginfo").css("display","none");
	})
}
