function add_player(){
	debugLogger("Adding a player...");
}

function add_town(){
	debugLogger("Adding a town...");
}

function remove_player(){
	debugLogger("Removing a player...");
}

function about(){
	$("#daGame").after('<div id="about_dialog" title="About"><p>Coded by Tusk.</p><br /><p>Frameworks used making this:<br /><a href="http://jquery.com/" target="_blank">jQuery</a><br /><a href="http://jqueryui.com/" target="_blank">jQuery UI</a></p></div>');
	$("#about_dialog").dialog({'resizable': false, 'height': 250, 'width': 300,'modal':true});
}

function add_enemy(){
	debugLogger("Adding an enemy...");
}

function remove_enemy(){
	debugLogger("Removing an enemy...");
}

function KBHandle(pressed){
	if( pressed == "esc" ){
		debugLogger("show game menu");
		game_menu();
	}
}