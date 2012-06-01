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


function add_player(){
	console.log("Adding a player...");
}

function remove_player(){
	console.log("Removing a player...");
}

function about(){
	alert("This was made by Tusk");
}