

// ************ AUDIOS PLUGIN HOWLER.JS  Documentação: http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library ***************

// Para declarar um sprite de áudio
/*
  var narracao = new Howl({  urls: ['media/audio/narracao1.mp3','media/audio/narracao1.ogg'],  sprite: {
    text1: [0, 53500],
    text2: [29500, 51500],
    text3: [29500, 51500]
  }});
*/

// Para chamar o áudio:
// trilha_sonora.stop().play();

// Para alterar volume do áudio, valor de 0 até 1

// ************ AUDIOS PLUGIN HOWLER.JS ***************
var narracao = new Howl({
    urls: ['media/audio/narracao.mp3'],
    sprite: {
        loading: [0, 100],
        introducao: [100, 6811],
        audio_0: [6811, 26276],
        audio_1: [33087, 14585],
        audio_2: [47872, 13136],
        audio_3: [60981, 19437]
    },
    volume:1
});










// ************ AUDIOS PLUGIN HOWLER.JS ***************
