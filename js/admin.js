function createAdminMenu(){
	addMenu={ add: "Add", add_town: "Town",add_player: "Player", add_enemy: "Enemy" };
	removeMenu={ remove: "Remove", add_player: "Player", remove_enemy: "Enemy" };
	aboutMenu={ about: "About" };
	return createMenuFrom(addMenu,removeMenu,aboutMenu);
}

function createMenuFrom () {
	var element="";
	for (var i=0; i < arguments.length; i++) {
		j=0;
		for (key in arguments[i]){
			if( j == 0){
				element+='<ul><li class="admin_menu_button"><span class="'+key+'">'+arguments[i][key]+'</span><ul>';
			}else{
				element+='<li><span onClick="'+key+'()">'+arguments[i][key]+'</span></li>';
			}
			j++;
		};
		element+='</ul></li></ul>'
	};
	return element;
}

$("#adminbar").on("hover", ".admin_menu_button",function(){
	$(this).children("ul").show();
}).on("mouseleave", ".admin_menu_button",function(){
	$(this).children("ul").hide();
});

