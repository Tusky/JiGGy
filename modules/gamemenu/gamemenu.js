/* Creates the game menu */
$().ready(function(){
	_new_game = { new_game: "New Game" }
	_load_game = { load_game: "Load Game" }
	_save_game = { save_game: "Save Game" }
	_exit = { exit: "Exit" };
	$('.game_menu').hide().html(createMenuFrom(_new_game, _load_game, _save_game, _exit)).center().unselectable();
});

function new_game(){

}

function save_game(){
	
}

function load_game(){
	
}

function exit(){
	$('.game_menu').hide();
	$('#daGame').focus();
}