var howls_n;
howls_n=0;
sessionStorage.setItem('audio_loaded', howls_n);
//
var sound = new Howl({  urls: ['media/audio/ambiente.mp3','media/audio/ambiente.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);}, loop: true, volume: 0.5  });
var narracao1 = new Howl({  urls: ['media/audio/narracao1.mp3','media/audio/narracao1.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);},  sprite: {text1: [0, 23800],    text2: [25000, 27000]}});
var narracao2 = new Howl({  urls: ['media/audio/narracao2.mp3','media/audio/narracao2.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);},  sprite: {text1: [0, 11500],    text2: [12000, 3500],text3: [17000, 15900], text4: [34000, 12500]}});
var narracao3 = new Howl({  urls: ['media/audio/narracao3.mp3','media/audio/narracao3.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);},  sprite: {text1: [0, 20000],    text2: [21000, 14500],text3: [36000, 9500], text4: [47000, 2000]}});
var narracao4 = new Howl({  urls: ['media/audio/narracao4.mp3','media/audio/narracao4.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);},  sprite: {text1: [0, 15800],    text2: [17000, 8000],text3: [26000, 5700]}});
var acert = new Howl({  urls: ['media/audio/acerto.mp3','media/audio/acerto.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);},});
var erro = new Howl({  urls: ['media/audio/erro.mp3','media/audio/erro.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);},});
var toc = new Howl({  urls: ['media/audio/toc.mp3','media/audio/toc.ogg'], onload: function() {howls_n++; sessionStorage.setItem('audio_loaded', howls_n);},});