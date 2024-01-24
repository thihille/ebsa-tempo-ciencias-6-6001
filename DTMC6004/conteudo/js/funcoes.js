// *********** PARA TROCAR INSTRUÇÕES CHAME A FUNÇÃO: TrocaInstrucao('INSTRUÇÃO NOVA');  ******************
// * ********* PARA TROCAR NAVEGABILIDADE CHAME A FUNÇÃO: TrocaNavegacao('NAVEGABILIDADE NOVA'); **********
// * ********* PARA ADICIONAR CLASSES DE ANIMAÇÕES(animate.css ou magic.css) CHAME A FUNÇÃO: 
//  addAnimateClass('class da animação', tempo da animação); 
//  exemplo1:
//	elemento.addAnimateClass('magictime puffIn', 1000);

//  exemplo2:
//	elemento.addAnimateClass('magictime puffIn'); se não declarar o tempo de animação, ele joga por default o tempo de 1000

//  exemplo3:
//	elemento.addAnimateClass('magictime puffIn', true); ao inserir true o elemento desaparece após finalizar animação

//  exemplo4:
//	elemento.addAnimateClass('magictime puffIn', true, function(){ alert('Chama proxima fase') }); Callback ativo para inserir funções após finalizar
//**********


// ************ AUDIOS PLUGIN HOWLER.JS  Documentação: http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library ***************

// Para declarar apenas um áudio
	// var trilha_sonora = new Howl({urls: ['media/audio/trilha_sonora.mp3'], volume: 1});

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
// trilha_sonora.volume(1);

// ************ AUDIOS PLUGIN HOWLER.JS ***************

'use strict';
var count = 0;
var gravaEleGrava;
var startGame = {

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
        $("video")[0].play();
	}
};



$(".pontosAtivos li").on('click',function(){
    var el = $(this);
    var nEl = el.index();
    gravaEleGrava = nEl;
    TrocaInstrucao('Clique no <img src="conteudo/img/btnFechar.png" style="vertical-align: sub;" /> para fechar a caixa de texto e voltar à tela principal.');
    narracao.stop().play("audio_"+nEl);
    $(".janela").eq(nEl).show();
    $(".janela .ilustra").fadeIn(200,function(){
        $(".janela .marcador").fadeIn(200,function(){
            $(".janela .desc").fadeIn(600);
            $(".janela .btnFechar").fadeIn(300);
            $(".intro_texto").fadeOut(1000);
        });
    });
    if($(this).hasClass("visto")){}else{
        count++;
    }
});
$(".btnFechar").on('click',function(){
    if(count != 4){
        $(this).parent().parent().hide();
        $(".pontosAtivos li").eq(gravaEleGrava).addClass('visto');
        $(".janela .ilustra").hide();
        $(".janela .marcador").hide();
        $(".janela .desc").hide();
        $(".janela .btnFechar").hide();
        narracao.stop();
        TrocaInstrucao('');
    }else{
        window.parent.location.href = "../index.html";
    }
});

$("video").on("ended",function(){
    $("video").remove();
    $(".OED").show();
    narracao.stop().play("introducao");
})
$(".textoIntro").on("click",function(){
    narracao.stop().play("introducao");
});

$(".btnNext").on('click',function(){
    if(newApp.btnNext != countFotos){
        newApp.btnNext++;
        newApp.divFotos.children("img").removeClass().eq(newApp.btnNext).addClass("ativo"); 
        newApp.divLegendas.children("p").removeClass().eq(newApp.btnNext).addClass("ativo"); 
        newApp.divNFotos.eq(0).text(newApp.btnNext + 1);
    }else{
        $(".btnNext").addAnimateClass('animated jello',600);
    }
});
$(".btnPrev").on('click',function(){
    if(newApp.btnNext != 0){
        newApp.btnNext--;
        newApp.divFotos.children("img").removeClass().eq(newApp.btnNext).addClass("ativo");
        newApp.divLegendas.children("p").removeClass().eq(newApp.btnNext).addClass("ativo");
        newApp.divNFotos.eq(0).text(newApp.btnNext + 1);
    }else{
        $(".btnPrev").addAnimateClass('animated jello',600);
    }
});