var backgroundmusic = document.createElement('audio');
var currentSong = 1;
var maxNumberOfSongs = null;
var musicDirectory = 'audio/music/';
backgroundmusic.addEventListener('ended', function(){
	currentSong++;
	nextSong();
});

function createAudio(musicfile){
	backgroundmusic.setAttribute('src', musicfile);
	music_on();
}

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

$().ready(function() {
	addToAdminMenu( { none: "Music", music_off: "Off", music_on: "On" } );
	nextSong();
});

function music_on(){
	backgroundmusic.play();
}

function music_off(){
	backgroundmusic.pause();
}