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
	return createMenuFrom(addMenu,removeMenu,aboutMenu);
}

function createMenuFrom () {
	var element="";
	for (var i=0; i < arguments.length; i++) {
		j=0;
		for (key in arguments[i]){
			if( j == 0){
				if ( key == "none" ){
					element+='<ul><li class="admin_menu_button"><span class="'+key+'">'+arguments[i][key]+'</span><ul>';
				}else{
					element+='<ul><li class="admin_menu_button" onClick="'+key+'()"><span class="'+key+'">'+arguments[i][key]+'</span><ul>';
				}
			}else{
				element+='<li onClick="'+key+'()"><span>'+arguments[i][key]+'</span></li>';
			}
			j++;
		};
		element+='</ul></li></ul>'
	};
	return element;
}
