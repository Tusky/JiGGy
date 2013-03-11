
$(document).ready(function() {
	/* go through every modules and load it's js and css file */
	for (var i=0; i < modules.length; i++) {
		path='modules/'+modules[i]+'/'+modules[i];
		if( UrlExists(path+'.css') ){
			$("head").append("<link>");
			$("head").children("link:last").attr({ rel: "stylesheet", type: "text/css", href: path+'.css' });
		}
		if( UrlExists(path+'.js') ){
			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = path+'.js';
			$("head").append( script );
		}
		/* after everthing is loaded, it's safely assumed by now, set the focus to the game */
		$('#daGame').focus();
	};
});

/* Check if url exists before adding it to the HTML */
function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}