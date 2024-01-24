'use strict';

var startGame = {

    init: function(){

        //ATIVA AUDIO INTRO
        setTimeout(function() {
            intro.stop().play();
        }, 1000);

        intro.on('end', function(){
            $('#btn01').addClass('animated flash').one('animationend', function(event) {
                $('#btn01').removeClass('animated flash');
            });
            $('#btn02').addClass('animated flash').one('animationend', function(event) {
                $('#btn02').removeClass('animated flash');
            });
        });

    	// MOSTRA INTRO
    	$('.intro').fadeIn('slow', function() {
    		$('.intro').show();
    	});

    	// MOSTRA ROTAÇÃO
    	$('#btn01').click(function() {
            intro.stop();
    		$('.intro').fadeOut('slow', function() {
    			$('.intro').hide();
    		});
            document.querySelector('#vidRotacao').play();
            $('.rotacao').fadeIn('slow', function() {
                $('.rotacao').show();
            });
    	});

    	//ROTACAO RETORNA INTRO
    	$('.btnVoltar').click(function(){
    		$('.rotacao').fadeOut('slow', function() {
    			$('.rotacao').hide();
    		});
    		$('.intro').fadeIn('fast', function() {
    			$('.intro').show(function() {
    				document.querySelector('#vidRotacao').pause();
    				$('#vidRotacao')[0].currentTime = 0;
    			});
    		});
            // intro.stop().play();
    	});

    	// MOSTRA TRANSLAÇÃO
    	$('#btn02').click(function() {
            intro.stop();
    		$('.intro').fadeOut('slow', function() {
    			$('.intro').hide();
    		});
            document.querySelector('#vidTranslacao').play();
    		$('.translacao').fadeIn('slow', function() {
    			$('.translacao').show();
    		});
    	});

    	//TRANSLAÇÃO RETORNA INTRO
    	$('.btnVoltar').click(function(){
    		$('.translacao').fadeOut('slow', function() {
    			$('.translacao').hide();
    		});
    		$('.intro').fadeIn('fast', function() {
    			$('.intro').show(function() {
    				document.querySelector('#vidTranslacao').pause();
    				$('#vidTranslacao')[0].currentTime = 0;
    			});
    		});
            // intro.stop().play();
    	}); 

        //AO ACABAR VIDROTACAO VOLTA INTRO
        document.querySelector('#vidRotacao').onended = function() {
            $('.rotacao').fadeOut('slow', function() {
                $('.rotacao').hide();
            });
            $('.intro').fadeIn('fast', function() {
                $('.intro').show(function() {
                    $('#vidRotacao')[0].currentTime = 0;
                });
            });
            // intro.stop().play();
        }

        //AO ACABAR VIDROTACAO VOLTA INTRO
        document.querySelector('#vidTranslacao').onended = function() {
            $('.translacao').fadeOut('slow', function() {
                $('.translacao').hide();
            });
            $('.intro').fadeIn('fast', function() {
                $('.intro').show(function() {
                    $('#vidTranslacao')[0].currentTime = 0;
                });
            });
            // intro.stop().play();
        }
    }
}

