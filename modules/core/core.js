function createMenuFrom () {
	var element="";
	for (var i=0; i < arguments.length; i++) {
		j=0;
		for (key in arguments[i]){
			if( j == 0){
				if ( key == "none" ){
					element+='<ul><li><span class="'+key+'">'+arguments[i][key]+'</span><ul>';
				}else{
					element+='<ul><li onClick="'+key+'()"><span class="'+key+'">'+arguments[i][key]+'</span><ul>';
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