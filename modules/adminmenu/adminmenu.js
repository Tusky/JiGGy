$().ready(function(){
	$('#daGame').before('<div id="adminbar"></div>');
	$('#adminbar').html(createAdminMenu());
	$("#adminbar").on("hover", ".admin_menu_button",function(){
		$(this).children("ul").show();
	}).on("mouseleave", ".admin_menu_button",function(){
		$(this).children("ul").hide();
	});
});

function createAdminMenu(){
	addMenu={ none: "Add", add_town: "Town",add_player: "Player", add_enemy: "Enemy" };
	removeMenu={ none: "Remove", remove_player: "Player", remove_enemy: "Enemy" };
	aboutMenu={ about: "About" };
	return createAdminMenuFrom(addMenu,removeMenu,aboutMenu);
}