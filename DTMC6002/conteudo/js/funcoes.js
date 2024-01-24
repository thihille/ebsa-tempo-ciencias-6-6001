// *********** PARA TROCAR INSTRUÇÕES CHAME A FUNÇÃO: TrocaInstrucao('INSTRUÇÃO NOVA');  ******************
// * ********* PARA TROCAR NAVEGABILIDADE CHAME A FUNÇÃO: TrocaNavegacao('NAVEGABILIDADE NOVA'); **********

'use strict';

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
var startGame = {

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
			narracao.volume(0);
			narracao.stop();
            var corretas = 0;
			//
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				narracao.stop();
				narracao.volume(1);
				narracao.play("capa");
			}else{
				executarNarracao("capa");	
			}
            

            TrocaInstrucao('');
            console.log(localStorage.getItem('novaInstrucao'));

            $("#btn-iniciar").click(function(){
                //$("#jogo").fadeIn();
				document.querySelector("#jogo").style.display="inherit";
                pararNarracao();

                TrocaInstrucao('Clique nos planetas e arraste-os até suas órbitas ao redor do Sol.');
                console.log(localStorage.getItem('novaInstrucao'));

                misturarPlanetas();
            });

            $("#btn-fim").click(function(){
                /*corretas = 0;

                $("#jogo").hide();
                $(".drag").show();
                $(".drag").css("transform", "scale(1)");
                $(".planeta").hide();
                $(".drop").show();
                $("#tela-final").fadeOut();

                pararNarracao();
                executarNarracao("capa");*/

                //window.parent.location.href = '../index.html';
				$( "body" ).fadeOut( 1000, function() { window.parent.location.href = "../index.html" });
            });

            $(".btn-fecha").click(function(){
                pararNarracao();
                $("#" + $(this).attr("id").substr(6)).fadeOut();
                $("#tela-inicio").fadeOut();


                TrocaInstrucao('Clique nos planetas e arraste-os até suas órbitas ao redor do Sol.');
                console.log(localStorage.getItem('novaInstrucao'));

                if(corretas >= $(".drag").length){
					document.querySelector("#player_video").play();
                    //$("#tela-final").fadeIn();
                    //setTimeout(function(){$("#jogo").fadeOut();}, 300);
                    setTimeout(function(){$("#tela-final").fadeIn();}, 300);

                    //var video = document.getElementById("player_video");
                   // video.currentTime = 0;

                    //setTimeout(function(){/*video.play();*/document.querySelector("#player_video").play();}, 1200);

                    setTimeout(function(){executarNarracao("fim");}, 600);

                    TrocaInstrucao('');
                    console.log(localStorage.getItem('novaInstrucao'));
                }
            });

            $('.drag').draggable({
                revert: true,
                revertDuration: 150,
                cursorAt: { top: 40, left: 40 },
                start: function (event, ui) {
                    $(this).css("transform", "scale(0.75)");
                    ui.helper.data('dropped', false);
                },
                stop: function (event, ui) {
                    if(!ui.helper.data('dropped')){
                        audioErrada.stop().play();
                        $(this).css("transform", "scale(1)");
                    }
                    else{
                        corretas++;
                    }
                }
            });

            $("#drop1").droppable({
                accept: "#drag1",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });
            $("#drop2").droppable({
                accept: "#drag2",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });
            $("#drop3").droppable({
                accept: "#drag3",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });
            $("#drop4").droppable({
                accept: "#drag4",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });
            $("#drop5").droppable({
                accept: "#drag5",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });
            $("#drop6").droppable({
                accept: "#drag6",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });
            $("#drop7").droppable({
                accept: "#drag7",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });
            $("#drop8").droppable({
                accept: "#drag8",
                drop: function (event, ui) {
                    ui.draggable.data('dropped', true);
                    onDrop($(this));
                }
            });

            function onDrop(obj){
                $("#drag" + obj.attr("id").substr(4)).fadeOut();
                $("#planeta" + obj.attr("id").substr(4)).fadeIn();
                obj.fadeOut("fast");
                //$("#popup" + obj.attr("id").substr(4)).delay(400).fadeIn();
                $("#popup" + obj.attr("id").substr(4)).delay(400).css("display", "inherit");
                audioCorreta.stop().play();

                setTimeout(function(){executarNarracao("planeta" + obj.attr("id").substr(4));}, 400);

                TrocaInstrucao('');
                console.log(localStorage.getItem('novaInstrucao'));
            }

            function pararNarracao(){
                narracao.stop();
            }

            function executarNarracao(trecho){
                narracao.volume(1);
				if(trecho != ""){
					console.log(trecho);
                    narracao.play(trecho);
                }
            }

            function misturarPlanetas(){
                var objetosDrag = sortVetor($(".planeta-drag"));

                var posicao = 88;
                var espacamento = 19;

                for(var i = 0; i < objetosDrag.length; i++){
                    if(i > 0){
                        posicao += objetosDrag[i - 1]["scrollWidth"];

                        posicao += espacamento;
                    }

                    $(objetosDrag[i]).css("left", posicao);
                }
            }

            function sortVetor(vetor) {
                for (var i = vetor.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = vetor[i];
                    vetor[i] = vetor[j];
                    vetor[j] = temp;
                }
                return vetor;
            }
	}
};

// startGame.init();

