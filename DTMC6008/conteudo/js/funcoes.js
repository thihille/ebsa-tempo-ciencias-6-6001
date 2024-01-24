'use strict';

var startGame = {

    init: function(){
		 
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		
        narracao.stop().play('principal');
        
        $('.avancar').on('click', function() {
            narracao.stop();
			TrocaInstrucao('Clique nas abas para conhecer melhor os vulcões.');
            $('.cliqueSaida').addClass('animated zoomOutRight').one(animationEnd, function() {
                $('.aba').show(1, function() {
                    $(this).addClass('slideInRight').one(animationEnd, function() {
                        $(this).removeClass('slideInRight');
                    })
                });
			})
        });
        
        //ABA1
        $('.aba1').on('click', function() {
            $('.estrutura').fadeIn();
            TrocaInstrucao('Clique nos pontos ativos para conhecer a estrutura dos vulcões e, em seguida, clique na seta para retornar à tela anterior.');
        });
        
        $('.estrutura .ponto').on('click', function() {
            var $this = $(this),
                index = $this.index();
                console.log(index);
            
            TrocaInstrucao('Clique no <b>X</b> para fechar a janela.');
            $this.removeClass('pulse');
            
            $('.popup'+index).fadeIn();
            narracao.stop().play('est'+index);
            
            $('.close').on('click', function() {
                TrocaInstrucao('Clique nos pontos ativos para conhecer a estrutura dos vulcões e, em seguida, clique na seta para retornar à tela anterior.');
                narracao.stop();
                $('.popup'+index).fadeOut();
            });
        })
        
        
        //ABA2
        $('.aba2').on('click', function() {
            $('.atividade').fadeIn();
            TrocaInstrucao('');
            document.querySelector('#vidVulcao').play();
            document.querySelector('#vidVulcao').onended = function() {
                $('.atividade').fadeOut();
                $('#vidVulcao')[0].currentTime = 0;
                TrocaInstrucao('Clique nas abas para conhecer melhor os vulcões.');
            }
        });
        
        //ABA3
        $('.aba3').on('click', function() {
            $('.mundo').fadeIn();
            TrocaInstrucao('Clique nos pontos ativos para conhecer alguns dos vulcões espalhados pela Terra.');
        });
        
        $('.mundo .ponto').on('click', function() {
            var $this = $(this),
                index = $this.index();
                console.log(index);
            
            TrocaInstrucao('Clique no <b>X</b> para retornar ao mapa.');
            $this.removeClass('pulse');
            
            $('.mundo .vulcao0'+index).fadeIn();
            
            $('.close2').on('click', function() {
                TrocaInstrucao('Clique nos pontos ativos para conhecer alguns dos vulcões espalhados pela Terra.');
                $('.mundo .vulcao0'+index).fadeOut();
            });
        });
        
        //BTN VOLTAR
        $('.voltarEst').on('click', function() {
            $('.estrutura').fadeOut();
            TrocaInstrucao('Clique nas abas para conhecer melhor os vulcões.');
        });
        
        $('.voltarAtiv').on('click', function() {
            $('.atividade').fadeOut();
            TrocaInstrucao('Clique nas abas para conhecer melhor os vulcões.');
            document.querySelector('#vidVulcao').pause();
            $('#vidVulcao')[0].currentTime = 0;
        });
        
        $('.voltarMundo').on('click', function() {
            $('.mundo').fadeOut();
            TrocaInstrucao('Clique nas abas para conhecer melhor os vulcões.');
        });
    }
}

