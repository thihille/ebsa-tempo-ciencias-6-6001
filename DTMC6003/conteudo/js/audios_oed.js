var toc = new Howl({ urls: ['media/audio/toc.mp3','media/audio/toc.ogg'] });
var sound = new Howl({
	urls: ['media/audio/Trilha.mp3','media/audio/Trilha.ogg'], 
	volume: 0.1, onend: function() { tocar_sound();}});
function tocar_sound(){
	//console.log("Loop de áudio");
	sound.stop();
	sound.play();
	
}

var narracao1 = new Howl({
	urls: ['media/audio/narracao1.mp3','media/audio/narracao1.ogg'],
	sprite: {
		text1: [0, 31200],
		text2: [32050, 12500],
		text3: [45000, 10000]
	}
});

var narracao2 = new Howl({
	urls: ['media/audio/narracao2.mp3','media/audio/narracao2.ogg'],
	sprite: {
		text1: [0, 12500],
		text2: [13020, 11500],
		text3: [25050, 9000],
		text4: [34500, 8900],
		text5: [45000, 9000]
	}
});