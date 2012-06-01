if (adminMode){
	$.getScript("js/admin.js", function(){
		$("head").append("<link>");
	    $("head").children(":last").attr({
			rel:  "stylesheet",
			type: "text/css",
			href: "css/admin.css"
	    });
		$("#adminbar").html(createAdminMenu());
	});
}

if(debugMode){
	$("head").append("<link>");
	$("head").children(":last").attr({
		rel:  "stylesheet",
		type: "text/css",
		href: "css/debug.css"
	});
	$.getScript("js/debug.js");
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