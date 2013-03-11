function play_audio(file){
	var mySound = new buzz.sound("audio/effects/"+file, {
		formats: [ "mp3", "wav" ],
	});
	mySound.play();
}