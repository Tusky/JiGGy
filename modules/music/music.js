var backgroundmusic = document.createElement('audio');
backgroundmusic.addEventListener('ended', function(){
	backgroundmusic.play();
});

$().ready(function() {
	window.music = true;
	musicMenu={ none: "Music", music_off: "Off", music_on: "On" };
	addToAdminMenu(musicMenu);
	createAudio();
	music_on();
});

function createAudio(){
	backgroundmusic.setAttribute('src','audio/music/music01.mp3');
}


function music_on(){
	backgroundmusic.play();
}


function music_off(){
	backgroundmusic.pause();
}