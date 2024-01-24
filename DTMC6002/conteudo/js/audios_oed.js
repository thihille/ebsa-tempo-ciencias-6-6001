// ************ AUDIOS PLUGIN HOWLER.JS ***************
//alert(navigator.onLine);
sessionStorage.setItem('audio_loaded', 0);
if(window.location.href.indexOf("editoradobrasil.com.br") > -1) {
       //alert("online");
var narracao = new Howl({
    urls: ['media/audio/DKC4005_01.mp3'],
	onload: function() {sessionStorage.setItem('audio_loaded', 1);},
    sprite: {
        /* OFF line
		titulo: [0, 1500],
        capa: [2000, 27000],
        planeta1: [30500, 20100],
        planeta2: [53000, 18700],
        planeta3: [72500, 17100],
        planeta4: [91200, 17600],
        planeta5: [109300, 15000],
        planeta6: [124500, 20000],
        planeta7: [146000, 13000],
        planeta8: [160000, 21500],
        fim: [181400, 15500]*/
        titulo: [0, 1500],
        capa: [2500, 27000],
        planeta1: [30500, 20000],
        planeta2: [51500, 17700],
        planeta3: [70000, 17100],
        planeta4: [88000, 17000],
        planeta5: [106000, 14000],
        planeta6: [121000, 20000],
        planeta7: [141000, 13000],
        planeta8: [155000, 19500],
        fim: [175500, 15500]		
	}
    });	   
}else{
	//alert("local");
var narracao = new Howl({
    urls: ['media/audio/DKC4005_01.mp3'],
	onload: function() {sessionStorage.setItem('audio_loaded', 1);},
    sprite: {
		titulo: [0, 1500],
        capa: [2000, 27000],
        planeta1: [30500, 20100],
        planeta2: [53000, 18700],
        planeta3: [72500, 17100],
        planeta4: [91200, 17600],
        planeta5: [109300, 15000],
        planeta6: [124500, 20000],
        planeta7: [146000, 13000],
        planeta8: [160000, 21500],
        fim: [181400, 15500]	
	}
    });	
}


 var audioCorreta = new Howl({urls: ['media/audio/resposta-certa.mp3'], volume: 0.3});
 var audioErrada = new Howl({urls: ['media/audio/resposta-errada.mp3'], volume: 0.3});