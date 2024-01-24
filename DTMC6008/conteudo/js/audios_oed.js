

// ************ AUDIOS PLUGIN HOWLER.JS  Documentação: http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library ***************

// Para declarar um sprite de áudio
//Exemplo
	/*var intro = new Howl({
      	urls: ['media/audio/intro.mp3'],
      	loop:false
  	});*/

var narracao = new Howl({
    urls: ['media/audio/narracao.mp3'],
	loop:false,
	volume: 0.7,
	sprite: {
		principal: ['1712','23287'],
        est1: ['25000','21766'],
        est2: ['46766','20333'],
        est3: ['67206','11343'],
        est4: ['78764','13163'],
        est5: ['91907','13912'],
        est6: ['105819','15838'],
	} 
});

// Para chamar o áudio:
// trilha_sonora.stop().play();

// Para alterar volume do áudio, valor de 0 até 1

// ************ AUDIOS PLUGIN HOWLER.JS ***************


// ************ AUDIOS PLUGIN HOWLER.JS ***************
