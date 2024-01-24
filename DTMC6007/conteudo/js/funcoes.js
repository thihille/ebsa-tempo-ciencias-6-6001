'use strict';

var stopAudios = function(){
  narracao_1.stop();
  narracao_2.stop();
  narracao_3.stop();
};

var startGame = {

  telas: {

    'tela-principal': function(){
      var $tela   = $('.tela-principal')
        , $texto = $tela.children('.texto-principal')
        , $pontos = $tela.children('.pontos');

      narracao_1.play('text1');

      $texto.show().addAnimateClass('puffIn magictime');

      for(var i = 0; i < $pontos.length; i++){
        $pontos.eq(i).show().addAnimateClass('lightSpeedIn animated');
      }

      $pontos.off('click').on('click', function(){
        var $conteudo = $(this).html();

        TrocaInstrucao('');

        if($(this).hasClass('ponto-1')){
          stopAudios();
          narracao_1.play('text2');
        }else if($(this).hasClass('ponto-2')) {
          stopAudios();
          narracao_2.play('text1');
        }else if($(this).hasClass('ponto-3')) {
          stopAudios();
          narracao_2.play('text2');
        }else if($(this).hasClass('ponto-4')) {
          stopAudios();
          narracao_3.play('text1');
        }

        $(this).parents('.OED').append($conteudo);
        $(this).removeClass('pulse animated infinite').css({'opacity':'0.5'});
        startGame.telas['conteudo']();
      });
    },

    'conteudo': function(){
      var $conteudo = $('.conteudo').last()
        , $titulo = $conteudo.children('.titulo')
        , $imagem = $conteudo.children('.imagem')
        , $zoom = $imagem.children('.zoom')
        , $fechar = $imagem.children('.fechar')
        , $texto = $conteudo.children('.texto')
        , $fechar_conteudo = $conteudo.children('.btn-fechar-conteudo');

      $conteudo.fadeIn();
      $titulo.show().addAnimateClass('slideInDown animated');
      $imagem.show().addAnimateClass('puffIn magictime');
      $texto.show().addAnimateClass('lightSpeedIn animated');
      $fechar_conteudo.show().addAnimateClass('zoomIn animated');

      $fechar_conteudo.off('click').on('click', function(){
        TrocaInstrucao('Clique nos ícones da imagem para obter mais informações sobre o manguezal.');
        stopAudios();
        $conteudo.fadeOut();
        $titulo.show().addAnimateClass('slideOutUp animated', true);
        $imagem.show().addAnimateClass('puffOut magictime', true);
        $texto.show().addAnimateClass('lightSpeedOut animated', true);
        $fechar_conteudo.show().addAnimateClass('zoomOut animated', true, function(){
          $conteudo.remove();
        });
      });

      $zoom.off('click').on('click', function(){
        $(this).parent().addClass('open');
      });

      $fechar.off('click').on('click', function(){
        $(this).parent().removeClass('open');
      });
    }

  },

  init: function(){
    this.telas['tela-principal']();
  }
}

//startGame.init();
