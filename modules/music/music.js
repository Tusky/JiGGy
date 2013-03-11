/* creates the HTML5 audio element */
var backgroundmusic = document.createElement('audio');

/* for playback */
var currentSong = 1;
var maxNumberOfSongs = null;

/* directory to look for music files in */
var musicDirectory = 'audio/music/';

/* waits for the song ending */
backgroundmusic.addEventListener('ended', function(){
	currentSong++;
	nextSong();
});

/* sets up the music inside the HTML5 audio element */
function createAudio(musicfile){
	backgroundmusic.setAttribute('src', musicfile);
	music_on();
}

/* Plays next song */
function nextSong(){
	musicfile=musicDirectory+formatNumber(currentSong,2)+'.mp3';
	if(maxNumberOfSongs == null){
		if( UrlExists( musicfile ) ){
			createAudio( musicfile );
		}else{
			maxNumberOfSongs=currentSong;
			currentSong = 1;
			nextSong();
		}
	}else if( currentSong < maxNumberOfSongs ){
		createAudio( musicfile );
	}else if( currentSong == maxNumberOfSongs ){
		currentSong = 1;
		musicfile=musicDirectory+formatNumber(currentSong,2)+'.mp3';
		createAudio( musicfile );
	}
}

/* Sets up the game music */
$().ready(function() {
	addToAdminMenu( { none: "Music", music_off: "Off", music_on: "On" } );
	if( readCookie("music") == "off" ){
		nextSong();
		music_off();
	}else{
		nextSong();
	}
});

/* Turns the music on */
function music_on(){
	createCookie("music","on",3650);
	backgroundmusic.play();
}

/* Turns the music off */
function music_off(){
	createCookie("music","off",3650);
	backgroundmusic.pause();
}