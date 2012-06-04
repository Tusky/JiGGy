function createMenuFrom () {
	var element="",
		liclass="";
	for (var i=0; i < arguments.length; i++) {
		j=0;
		for (key in arguments[i]){
			if( typeof arguments[i] === 'string' ) {
				liclass=' class="'+arguments[i]+'"';
				continue;
			}
			if( j == 0){
				if ( key == "none" ){
					element+='<ul><li'+liclass+'><span class="'+key+'">'+arguments[i][key]+'</span><ul>';
				}else{
					element+='<ul><li'+liclass+' onClick="'+key+'()"><span class="'+key+'">'+arguments[i][key]+'</span><ul>';
				}
			}else{
				element+='<li'+liclass+' onClick="'+key+'()"><span>'+arguments[i][key]+'</span></li>';
			}
			j++;
		};
		element+='</ul></li></ul>'
	};
	return element;
}

function addToAdminMenu(){
	for (var i=0; i < arguments.length; i++) {
		$('#adminbar > ul:last').before( createMenuFrom(arguments[i]) );
	}
}

function formatNumber(num, length) {
    var ns = "" + num;
    while (ns.length < length) {
        ns = "0" + ns;
    }
    return ns;
}

function createCookie(name,value,expdate){
	setCookie(name,value,-1);
	setCookie(name,value,expdate);
}

function setCookie(name,value,expdate){
	if (expdate) {
		var date = new Date();
		date.setTime(date.getTime()+(expdate*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
