

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
        intro: [0, 37206],
        queimadas: [37542, 19159],
        plantacoes: [56875, 23124],
        hidrica: [80306, 24693],
        mar: [105075, 25000],
        calor: [131302, 18697]
    }
});
var musica = new Howl({
    urls: ['media/audio/musica.mp3'],
    volume:.15,
    loop:true
});









// ************ AUDIOS PLUGIN HOWLER.JS ***************
