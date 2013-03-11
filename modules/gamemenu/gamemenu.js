/* Creates the game menu */
$().ready(function(){
	_new_game = { new_game: "New Game" }
	_load_game = { load_game: "Load Game" }
	_save_game = { save_game: "Save Game" }
	_exit = { exit: "Exit" };
	$('.game_menu').hide().html(createMenuFrom(_new_game, _load_game, _save_game, _exit)).center().unselectable();
});

function game_menu(){
	$('.game_menu').toggle();
}

function new_game(){
	debugLogger("New Game");
}

function save_game(){
	debugLogger("Save Game");
}

function load_game(){
	debugLogger("Load Game");
}

function exit(){
	$('.game_menu').hide();
	$('#daGame').focus();
}