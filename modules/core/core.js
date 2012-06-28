/* this creates a standerdized HTML menu */
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
/* This adds a menu element to the adminbar */
function addToAdminMenu(){
	for (var i=0; i < arguments.length; i++) {
		$('#adminbar > ul:last').before( createMenuFrom(arguments[i]) );
	}
}

/* this formats numbers to the given length: 01 or 001 etc. */
function formatNumber(num, length) {
    var ns = "" + num;
    while (ns.length < length) {
        ns = "0" + ns;
    }
    return ns;
}

/* Creates a cookie */
function createCookie(name,value,expdate){
	setCookie(name,value,-1);
	setCookie(name,value,expdate);
}

/* Sets a cookie */
function setCookie(name,value,expdate){
	if (expdate) {
		var date = new Date();
		date.setTime(date.getTime()+(expdate*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

/* Reads a cookie value */
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

/* When the game ends for any reason show what the game module wants to load then show game menu */
function die(){
	//fancy call for the actual gamemodule's die();
	gamemenu();
}

/* sets the game menu visible */
function gamemenu(){
	$('.game_menu').show();
}
/* Centers an object in the screen */
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

/* makes a div unselectable */
jQuery.fn.unselectable = function() {
	this.attr('unselectable', 'on').css({
                   '-moz-user-select':'none',
                   '-webkit-user-select':'none',
                   'user-select':'none',
                   '-ms-user-select':'none'
               })
}