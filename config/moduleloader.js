var modules = [
				"core",
				"adminmenu",
				"music",
				"debugmode",
				"helloworld",
			  ]

var music = [
				"music01"
]

$(document).ready(function() {
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
	};
});

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}