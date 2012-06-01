function add_player(){
	console.log("Adding a player...");
}

function add_town(){
	console.log("Adding a town...");
}

function remove_player(){
	console.log("Removing a player...");
}

function about(){
	$("#daGame").after('<div id="about_dialog" title="About"><p>Coded by Tusk.</p></div>');
	$("#about_dialog").dialog({'resizable': false, 'height': 100, 'width': 200,'modal':true});
}

function add_enemy(){
	console.log("Adding an enemy...");
}

function remove_enemy(){
	console.log("Removing an enemy...");
}