var mouse = {x: 0, y: 0 };
var escala_oed;
function dragstartFix(event, ui) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}

function draggingFix(event, ui) {
  escala_oed=1;
  //
  if(window.innerWidth<=1024 || window.innerHeight<=660){
    escala_x=window.innerWidth/1024;
    escala_y=window.innerHeight/660;
    if(escala_x<=escala_y){
      escala_oed=escala_x;
    }else{
      escala_oed=escala_y;
    }
    //console.log(escala_oed);
  }else{
    //escala_oed=1;
    //console.log(escala_oed);
  }

  //
    ui.position = {
        left: parseInt((event.clientX - mouse.x + ui.originalPosition.left) / escala_oed)+10,
        top: parseInt((event.clientY - mouse.y + ui.originalPosition.top) / escala_oed)+10
    };
}

var estado_instrucoes, saida_menu, pos_cursor_x, pos_cursor_y, arrastar_menu, lado_menu, test_osm, os_android;
var test_osm = navigator.userAgent.toLowerCase();
var os_android = test_osm.indexOf("android") > -1 && test_osm.indexOf("mobile");

estado_instrucoes=0;
saida_menu=1;
arrastar_menu=0;
function animacao_entrada_capa_tempo(){
  document.querySelector(".EbsaGame").style.display="inherit";
  document.querySelector("#tempo_capa").style.display="inherit";

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    $("#tempo_capa").addClass("animacao puffIn");
    setTimeout(function(){
      $("#tempo_capa").removeClass("animacao fadeIn");
    }, 1200);
  }else{
    $(".EbsaGame").addClass("animacao puffIn");
    setTimeout(function(){
      $(".EbsaGame").removeClass("animacao fadeIn");
    }, 1200);
  }
  $("#tempo_capa_linha_1").addClass("animacao bounceInRight");
  $("#tempo_capa_linha_2").addClass("animacao bounceInLeft");
  $("#tempo_capa_linha_3").addClass("animacao twisterInDown");
  $("#tempo_capa_linha_6").addClass("animacao twisterInDown");
  $("#tempo_capa_nome_disciplina").addClass("animacao twisterInUp");
  $("#tempo_capa_nome_colecao, #tempo_capa_nome_colecao_texto").addClass("animacao twisterInDown");

  $("#tempo_capa_titulo, #tempo_capa_numero_ano").addClass("animacao_500ms1s bounceInDown");
  $("#tempo_capa_botao_iniciar, #tempo_capa_logotipo, #tempo_capa_botao_creditos, #tempo_capa_botao_creditos_fora").addClass("animacao_500ms1s bounceInUp");
  setTimeout(function(){
    document.querySelector("#tempo_miolo").style.display="inherit";
    // document.querySelector("#tempo_preloader").style.display="none";
  }, 1200);
}
$("#tempo_capa_botao_iniciar").click(function() {
  $('.EbsaGame').find('.conteudo').fadeIn(1000);
  movimento_menu();
  // var test_os = navigator.userAgent.toLowerCase();
  // var os_android = test_os.indexOf("android") > -1;
  // if(os_android){
  //   document.querySelector("#tempo_alerta_arraste").style.display="none";
  //   document.querySelector("#tempo_alerta_arraste").className="nada";
  //   document.querySelector("#tempo_alerta_arraste").style.width="0px";
  // }else{
  //   movimento_menu();
  // }
  document.querySelector(".texto_navegabilidade").style.display="none";
  document.querySelector(".texto_instrucoes").style.display="inherit";
  $("#tempo_instrucoes_guia_aba").animate({left:"87px"}, 1000, function(){});
  $("#tempo_quadro_instrucoes").animate({marginTop:Math.round($("#tempo_quadro_instrucoes").outerHeight()/2-56)*(-1)+"px"}, 1000, function(){});
  document.querySelector("#tempo_capa_cobertura").style.display="inherit";
  $("#tempo_capa").addClass("animacao_500ms1s fadeOut");
  $("#tempo_capa_linha_1").addClass("animacao bounceOutRight");
  $("#tempo_capa_linha_2").addClass("animacao bounceOutLeft");
  $("#tempo_capa_linha_3").addClass("animacao spaceOutLeft");
  $("#tempo_capa_linha_6").addClass("animacao spaceOutLeft");

  $("#tempo_capa_titulo, #tempo_capa_numero_ano, #tempo_capa_botao_iniciar, #tempo_capa_logotipo").addClass("animacao bounceOutLeft");
  document.querySelector("#tempo_capa_area_creditos").className="animacao spaceOutDown";
  document.querySelector("#tempo_capa_painel_creditos").className="animacao bounceOutUp";
  setTimeout(function(){
    document.querySelector("#tempo_capa_cobertura").style.display="none";
    document.querySelector("#tempo_miolo_cobertura").style.display="none";
    document.querySelector("#tempo_capa").style.display="none";
    document.querySelector("#tempo_capa").className="nada";
    $("#tempo_capa_creditos").stop();
    setTimeout(function(){
      if(saida_menu==1){
      saida_menus();
      }
    }, 3000);
  }, 1000);

  document.body.addEventListener('touchstart', function(e){ e.stopPropagation(); });

});
$("#tempo_capa_botao_iniciar").mouseover(function() {
    $( "#tempo_capa_botao_iniciar" ).animate({
      bottom:"0px"
      }, 400, function() {
    });
});
$("#tempo_capa_botao_iniciar").mouseout(function() {
    $( "#tempo_capa_botao_iniciar" ).animate({
      bottom:"-22px"
      }, 400, function() {
    });
});
$("#tempo_capa_botao_creditos").click(function() {
  document.querySelector("#tempo_capa_cobertura").style.display="inherit";
  document.querySelector("#tempo_capa_area_creditos").style.display="inherit";
  document.querySelector("#tempo_capa_area_creditos").className="animacao twisterInUp";
  document.querySelector("#tempo_capa_painel_creditos").className="animacao_1s300 zoomInLeft";
  document.querySelector("#tempo_capa_botao_creditos_fora").style.display="inherit";
  document.querySelector("#tempo_capa_botao_creditos").style.display="none";
  // Subida de créditos
  altura_creditos=$("#tempo_capa_creditos").height();
  document.querySelector("#tempo_capa_creditos").style.top="302px";
  $("#tempo_capa_creditos").animate({top:(altura_creditos*-1)+'px'},(altura_creditos/20)*1100, "linear", function(){tempo_subir_creditos();});
  setTimeout(function(){
    document.querySelector("#tempo_capa_cobertura").style.display="none";
  }, 1000);
});
function tempo_subir_creditos(){
  altura_creditos=$("#tempo_capa_creditos").height();
  document.querySelector("#tempo_capa_creditos").style.top="302px";
  $("#tempo_capa_creditos").animate({top:(altura_creditos*-1)+'px'},(altura_creditos/20)*1100, "linear", function(){tempo_subir_creditos();});
}
$("#tempo_capa_area_creditos_fechar, #tempo_capa_botao_creditos_fora, #tempo_capa_area_creditos").click(function() {
  document.querySelector("#tempo_capa_cobertura").style.display="inherit";
  document.querySelector("#tempo_capa_botao_creditos_fora").style.display="none";
  document.querySelector("#tempo_capa_botao_creditos").style.display="inherit";
  document.querySelector("#tempo_capa_area_creditos").className="animacao spaceOutDown";
  document.querySelector("#tempo_capa_painel_creditos").className="animacao bounceOutUp";
  setTimeout(function(){
    $("#tempo_capa_creditos").stop();
    document.querySelector("#tempo_capa_area_creditos").style.display="none";
    document.querySelector("#tempo_capa_cobertura").style.display="none";
  }, 1300);
});

// DEIXANDO BOTAO INSTRUÇÕES EM OFF
if(CONFIG[0].infoOed.instrucoes.length < 1){
  $("#tempo_grupo_btn_instrucoes").addClass('noClick').css({
    'opacity':'0.5',
    'cursor':'default'
  });
  $('.tempo_btn_instrucoes_noClick').show();
}else{
   $("#tempo_grupo_btn_instrucoes").removeClass('noClick').css({
    'opacity':'1',
    'cursor':'pointer'
  });
   $('.tempo_btn_instrucoes_noClick').hide();
}

$("#tempo_btn_menu").click(function() {

  if(CONFIG[0].infoOed.botaoAudioDesabilitar){
    $('#tempo_grupo_btn_mudo').css({
      'opacity': '0.4'
    });
    $('.tempo_grupo_btn_mudo_noClick').show();
  }

  saida_menu=0;
    document.querySelector("#tempo_alerta_arraste").style.display="none";
    document.querySelector("#tempo_alerta_arraste").className="nada";
    document.querySelector("#tempo_alerta_arraste").style.width="0px";
    if(arrastar_menu==0){
    document.querySelector("#tempo_miolo_cobertura").style.display="inherit";
    $("#tempo_grupo_btn_menu").addClass("animacao_500ms rubberBand");
    document.querySelector("#tempo_btn_menu_fora").style.display="inherit";
    document.querySelector("#tempo_btn_menu").style.display="none";
    document.querySelector("#tempo_miolo_cabecalho").style.display="inherit";
    document.querySelector("#tempo_miolo_cabecalho_base").style.display="inherit";
    $("#tempo_miolo_cabecalho").addClass("animacao fadeInDown");
    $("#tempo_miolo_cabecalho_base").addClass("animacao spaceInLeft");
    setTimeout(function(){
      document.querySelector("#tempo_grupo_btn_home").style.display="inherit";
      document.querySelector("#tempo_grupo_btn_home").className="animacao_500ms pulse";
    }, 300);
    setTimeout(function(){
      document.querySelector("#tempo_grupo_btn_instrucoes").style.display="inherit";
      document.querySelector("#tempo_grupo_btn_instrucoes").className="animacao_500ms pulse";
    }, 400);
    setTimeout(function(){
      document.querySelector("#tempo_grupo_btn_mudo").style.display="inherit";
      document.querySelector("#tempo_grupo_btn_mudo").className="animacao_500ms pulse";
    }, 500);
    setTimeout(function(){
      document.querySelector("#tempo_grupo_btn_home").className="nada";
      document.querySelector("#tempo_grupo_btn_instrucoes").className="nada";
      document.querySelector("#tempo_grupo_btn_mudo").className="nada";
      $("#tempo_grupo_btn_menu").removeClass("animacao_500ms rubberBand");
    }, 700);
    setTimeout(function(){
      $("#tempo_miolo_cabecalho").removeClass("animacao fadeInDown");
      $("#tempo_miolo_cabecalho_base").removeClass("animacao spaceInLeft");
      document.querySelector("#tempo_miolo_cobertura").style.display="none";
    }, 1100);
  }

  // DEIXANDO BOTAO INSTRUÇÕES EM OFF
  if(localStorage.getItem('novaInstrucao')){
    if(localStorage.getItem('novaInstrucao').length < 1){
      $("#tempo_grupo_btn_instrucoes").addClass('noClick').css({
        'opacity':'0.5',
        'cursor':'default'
      });
      $('.tempo_btn_instrucoes_noClick').show();
    }else if(localStorage.getItem('novaInstrucao') == 'sem instrucao' || localStorage.getItem('novaInstrucao') == null){
      $("#tempo_grupo_btn_instrucoes").addClass('noClick').css({
        'opacity':'0.5',
        'cursor':'default'
      });
      $('.tempo_btn_instrucoes_noClick').show();
    }else{
      $("#tempo_grupo_btn_instrucoes").removeClass('noClick').css({
        'opacity':'1',
        'cursor':'pointer'
      });
      $('.tempo_btn_instrucoes_noClick').hide();
    }
  }

});
$("#tempo_btn_menu_fora, #tempo_miolo_cabecalho, #tempo_miolo_cabecalho_base").click(function() {

  if(CONFIG[0].infoOed.botaoAudioDesabilitar){
    $('.tempo_grupo_btn_mudo_noClick').hide();
  }

  saida_menu=0;
  if(arrastar_menu==0){
  document.querySelector("#tempo_miolo_cobertura").style.display="inherit";
  $("#tempo_grupo_btn_menu").addClass("animacao_500ms rubberBand");
  document.querySelector("#tempo_btn_menu").style.display="inherit";
  document.querySelector("#tempo_btn_menu_fora").style.display="none";
  if(estado_instrucoes==1){
    document.querySelector("#frame_game").className="animacao_blur_out";
  }
  document.querySelector("#tempo_quadro_instrucoes").className="animacao fadeOutLeft";
  document.querySelector("#tempo_grupo_btn_mudo").className="animacao_500ms pulse";
  document.querySelector("#tempo_grupo_btn_instrucoes").className="animacao_500ms pulse";
  document.querySelector("#tempo_grupo_btn_home").className="animacao_500ms pulse";
  $("#tempo_miolo_cabecalho").addClass("animacao fadeOutUp");
  $("#tempo_miolo_cabecalho_base").addClass("animacao spaceOutLeft");
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_mudo").style.display="none";
  }, 200);
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_instrucoes").style.display="none";
  }, 300);
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_home").style.display="none";
  }, 400);
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_home").style.display="none";
    document.querySelector("#tempo_grupo_btn_instrucoes").style.display="none";
    document.querySelector("#tempo_grupo_btn_mudo").style.display="none";
    $("#tempo_grupo_btn_menu").removeClass("animacao_500ms rubberBand");
  }, 700);
  setTimeout(function(){
    document.querySelector("#tempo_quadro_instrucoes").style.display="none";
    document.querySelector("#tempo_alerta_arraste").style.display="inherit";
    $("#tempo_miolo_cabecalho").removeClass("animacao_1s300 fadeOutUp");
    $("#tempo_miolo_cabecalho_base").removeClass("animacao spaceOutLeft");
    document.querySelector("#tempo_miolo_cabecalho").style.display="none";
    document.querySelector("#tempo_miolo_cabecalho_base").style.display="none";
    document.querySelector("#tempo_btn_instrucoes").style.display="inherit";
    document.querySelector("#tempo_btn_instrucoes_fora").style.display="none";
    document.querySelector("#tempo_miolo_cobertura").style.display="none";
    $('#tempo_miolo').css({'width':'0', 'height':'0'});
  }, 1100);
  setTimeout(function(){
    document.querySelector("#tempo_alerta_arraste").className="animacao fadeOut";
  }, 2100);
  setTimeout(function(){
    document.querySelector("#tempo_alerta_arraste").style.display="none";
    document.querySelector("#tempo_alerta_arraste").className="nada";
    document.querySelector("#tempo_alerta_arraste").style.width="0px";
  }, 3100);
  }
});
$("#tempo_btn_instrucoes").click(function() {

  $('#tempo_miolo_cobertura_instrucoes').css({'width':'1024px', 'height':'660px'});
  setTimeout(function(){
    $("#tempo_quadro_instrucoes").css("margin-top", Math.round($("#tempo_quadro_instrucoes").outerHeight() / 2 - 56) * (-1) + "px");
  },10);

  $('#tempo_miolo').css({'width':'1024px', 'height':'660px'});
  saida_menu=0;
  if(arrastar_menu==0){
  document.querySelector("#tempo_miolo_cobertura").style.display="inherit";
  document.querySelector("#tempo_miolo_cobertura_instrucoes").style.display="inherit";
  estado_instrucoes=1;
  document.querySelector("#frame_game").className="animacao_blur_in";
  document.querySelector("#tempo_quadro_instrucoes").style.display="inherit";
  document.querySelector("#tempo_quadro_instrucoes").className="animacao fadeInRight";
  setTimeout(function(){
    document.querySelector("#tempo_btn_instrucoes_fora").style.display="inherit";
    document.querySelector("#tempo_btn_instrucoes").style.display="none";
    document.querySelector("#tempo_miolo_cobertura").style.display="none";
  }, 1000);
  }

  if(CONFIG[0].infoOed.template == 'tempo'){
    if(!(localStorage.getItem('novaNavegacao') == null || localStorage.getItem('novaNavegacao') == 'sem navegacao')){
      $('.abaNavegabilidade').show();
    }else{
      $('.abaNavegabilidade').hide();
    }
  }
});
$("#tempo_btn_instrucoes_fora, #tempo_instrucoes_btn_fechar, #tempo_miolo_cobertura_instrucoes").click(function() {
  saida_menu=0;
  document.querySelector("#tempo_miolo_cobertura_instrucoes").style.display="none";
  document.querySelector("#tempo_miolo_cobertura").style.display="inherit";
  if(estado_instrucoes==1){
    document.querySelector("#frame_game").className="animacao_blur_out";
  }
  document.querySelector("#tempo_quadro_instrucoes").className="animacao fadeOutLeft";
  setTimeout(function(){
    $('#tempo_miolo').css({'width':'0px', 'height':'0px'});
    document.querySelector("#tempo_quadro_instrucoes").style.display="none";
    document.querySelector("#tempo_btn_instrucoes_fora").style.display="none";
    document.querySelector("#tempo_btn_instrucoes").style.display="inherit";
    document.querySelector("#tempo_miolo_cobertura").style.display="none";
  }, 1000);
});
$("#tempo_btn_mudo").click(function() {
  $('#tempo_miolo').css({'width':'1024px', 'height':'660px'});
  saida_menu=0;
  if(arrastar_menu==0){
  // Howler.mute();
  sessionStorage.setItem('audiosParados', 'sim');
  document.querySelector("#tempo_miolo_alerta_audio").style.display="inherit";
  document.querySelector("#tempo_miolo_alerta_audio_txt_on").style.display="none";
  document.querySelector("#tempo_miolo_alerta_audio_txt_off").style.display="inherit";
  document.querySelector("#tempo_miolo_alerta_audio").className="animacao fadeIn";
  document.querySelector("#frame_game").className="animacao_blur_in";
  document.querySelector("#tempo_miolo_alerta_audio_icone").style.backgroundPosition="-138px 0px";
  document.querySelector("#tempo_miolo_cobertura").style.display="inherit";
  document.querySelector("#tempo_miolo_cobertura_instrucoes").style.display="inherit";
  document.querySelector("#tempo_btn_mudo_linha_off").style.display="inherit";
  document.querySelector("#tempo_quadro_instrucoes").className="animacao_500ms fadeOut";
  setTimeout(function(){
    document.querySelector("#tempo_btn_mudo_fora").style.display="inherit";
    document.querySelector("#tempo_btn_instrucoes").style.display="inherit";
  $('#tempo_btn_mudo, #tempo_miolo_cobertura, #tempo_quadro_instrucoes, #tempo_btn_instrucoes_fora, #tempo_miolo_cobertura_instrucoes').css({'display':'none'});
  }, 1000);
  setTimeout(function(){
    document.querySelector("#frame_game").className="animacao_blur_out";
    document.querySelector("#tempo_miolo_alerta_audio").className="animacao fadeOut";
  }, 2000);
  setTimeout(function(){
    $('#tempo_miolo').css({'width':'0px', 'height':'0px'});
    document.querySelector("#frame_game").className="nada";
    document.querySelector("#tempo_miolo_alerta_audio").style.display="none";
  }, 3000);
  }
});
$("#tempo_btn_mudo_fora").click(function() {
  $('#tempo_miolo').css({'width':'1024px', 'height':'660px'});
  saida_menu=0;
  if(arrastar_menu==0){
  // Howler.unmute();
  sessionStorage.setItem('audiosParados', 'nao');
  document.querySelector("#tempo_miolo_alerta_audio").style.display="inherit";
  document.querySelector("#tempo_miolo_alerta_audio_txt_on").style.display="inherit";
  document.querySelector("#tempo_miolo_alerta_audio_txt_off").style.display="none";
  document.querySelector("#tempo_miolo_alerta_audio").className="animacao fadeIn";
  document.querySelector("#frame_game").className="animacao_blur_in";
  document.querySelector("#tempo_miolo_alerta_audio_icone").style.backgroundPosition="0px 0px";
  document.querySelector("#tempo_miolo_cobertura").style.display="inherit";
  document.querySelector("#tempo_miolo_cobertura_instrucoes").style.display="inherit";
  document.querySelector("#tempo_btn_mudo_linha_off").style.display="none";
  document.querySelector("#tempo_quadro_instrucoes").className="animacao_500ms fadeOut";
  setTimeout(function(){
  $('#tempo_btn_instrucoes_fora, #tempo_btn_mudo_fora, #tempo_miolo_cobertura, #tempo_miolo_cobertura_instrucoes').css({'display':'none'});
  $('#tempo_btn_instrucoes, #tempo_btn_mudo').css({'display':'inherit'});
  }, 1000);
  setTimeout(function(){
    document.querySelector("#frame_game").className="animacao_blur_out";
    document.querySelector("#tempo_miolo_alerta_audio").className="animacao fadeOut";
  }, 2000);
  setTimeout(function(){
    $('#tempo_miolo').css({'width':'0px', 'height':'0px'});
    document.querySelector("#frame_game").className="nada";
    document.querySelector("#tempo_miolo_alerta_audio").style.display="none";
  }, 3000);
  }
});
$("#tempo_btn_home").click(function() {
  saida_menu=0;
  if(arrastar_menu==0){
  $(".EbsaGame").addClass("animacao spaceOutDown");
  setTimeout(function(){
    location.reload();
   }, 1000);
  }
});
$("#tempo_aba_navegabilidade").click(function() {
  document.querySelector(".texto_instrucoes").style.display="none";
  document.querySelector(".texto_navegabilidade").style.display="inherit";
  $("#tempo_instrucoes_guia_aba").animate({left:"286px"}, 1000, function(){});
  // $("#tempo_quadro_instrucoes").animate({marginTop:Math.round($("#tempo_quadro_instrucoes").outerHeight()/2-56)*(-1)+"px"}, 1000, function(){});
  $("#tempo_quadro_instrucoes").animate({marginTop:Math.round($("#tempo_quadro_instrucoes").outerHeight()/2-56)*(-1)+"px"}, 1000, function(){});
});

$("#tempo_aba_instrucoes").click(function() {
  document.querySelector(".texto_navegabilidade").style.display="none";
  document.querySelector(".texto_instrucoes").style.display="inherit";
  $("#tempo_instrucoes_guia_aba").animate({left:"87px"}, 1000, function(){});
  $("#tempo_quadro_instrucoes").animate({marginTop:Math.round($("#tempo_quadro_instrucoes").outerHeight()/2-56)*(-1)+"px"}, 1000, function(){});
});
function saida_menus(){
  if(CONFIG[0].infoOed.botaoAudioDesabilitar){
    $('.tempo_grupo_btn_mudo_noClick').hide();
  }
  $('#tempo_miolo').css({'width':'0', 'height':'0'});
  document.querySelector("#tempo_miolo_cobertura").style.display="inherit";
  $("#tempo_grupo_btn_menu").addClass("animacao_500ms rubberBand");
  document.querySelector("#tempo_btn_menu").style.display="inherit";
  document.querySelector("#tempo_btn_menu_fora").style.display="none";
  if(estado_instrucoes==1){
    document.querySelector("#frame_game").className="animacao_blur_out";
  }
  document.querySelector("#tempo_quadro_instrucoes").className="animacao fadeOutLeft";
  document.querySelector("#tempo_grupo_btn_mudo").className="animacao_500ms pulse";
  document.querySelector("#tempo_grupo_btn_instrucoes").className="animacao_500ms pulse";
  document.querySelector("#tempo_grupo_btn_home").className="animacao_500ms pulse";
  $("#tempo_miolo_cabecalho").addClass("animacao fadeOutUp");
  $("#tempo_miolo_cabecalho_base").addClass("animacao spaceOutLeft");
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_mudo").style.display="none";
  }, 200);
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_instrucoes").style.display="none";
  }, 300);
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_home").style.display="none";
  }, 400);
  setTimeout(function(){
    document.querySelector("#tempo_grupo_btn_home").style.display="none";
    document.querySelector("#tempo_grupo_btn_instrucoes").style.display="none";
    document.querySelector("#tempo_grupo_btn_mudo").style.display="none";
    $("#tempo_grupo_btn_menu").removeClass("animacao_500ms rubberBand");
  }, 700);
  setTimeout(function(){
    document.querySelector("#tempo_quadro_instrucoes").style.display="none";
    document.querySelector("#tempo_alerta_arraste").style.display="inherit";
    $("#tempo_miolo_cabecalho").removeClass("animacao_1s300 fadeOutUp");
    $("#tempo_miolo_cabecalho_base").removeClass("animacao spaceOutLeft");
    document.querySelector("#tempo_miolo_cabecalho").style.display="none";
    document.querySelector("#tempo_miolo_cabecalho_base").style.display="none";
    document.querySelector("#tempo_btn_instrucoes").style.display="inherit";
    document.querySelector("#tempo_btn_instrucoes_fora").style.display="none";
    document.querySelector("#tempo_miolo_cobertura").style.display="none";
  }, 1100);
  setTimeout(function(){
    document.querySelector("#tempo_alerta_arraste").className="animacao fadeOut";
  }, 2100);
  setTimeout(function(){
    document.querySelector("#tempo_alerta_arraste").style.display="none";
    document.querySelector("#tempo_alerta_arraste").className="nada";
    document.querySelector("#tempo_alerta_arraste").style.width="0px";
  }, 3100);
}
function movimento_menu(){
    $( "#tempo_grupo_menu_template" ).draggable({
    start: function(e,ui) {
    dragstartFix.call(this, e,ui);
    arrastar_menu=1;
    document.querySelector("#tempo_alerta_arraste").style.display="none";
    document.querySelector("#tempo_alerta_arraste").className="nada";
    document.querySelector("#tempo_alerta_arraste").style.width="0px";
      },
      drag:function(e,ui) {
        $('#tempo_miolo').css({'width':'1024px', 'height':'660px'});
      draggingFix.call(this, e,ui);
    arrastar_menu=1;
    var x = $("#tempo_grupo_menu_template").position();
    if(x.left<(550*escala_oed)){
      lado_menu="esquerdo"
      document.querySelector("#tempo_grupo_btn_home").style.right="-41px";
      document.querySelector("#tempo_grupo_btn_home").style.bottom="14px";
      document.querySelector("#tempo_btn_home_linha").style.left="-36px";
      document.querySelector("#tempo_btn_home_linha").style.top="15px";
      document.querySelector("#tempo_btn_home_linha").style.MsTransform="rotate(9deg)";
      document.querySelector("#tempo_btn_home_linha").style.WebkitTransform="rotate(9deg)";
      document.querySelector("#tempo_btn_home_linha").style.transform="rotate(9deg)";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.right="-37px";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.bottom="74px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.left="-32px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.top="46px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.MsTransform="rotate(-37deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.WebkitTransform="rotate(-37deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.transform="rotate(-37deg)";
      document.querySelector("#tempo_grupo_btn_mudo").style.right="18px";
      document.querySelector("#tempo_grupo_btn_mudo").style.bottom="97px";
      document.querySelector("#tempo_btn_mudo_linha").style.left="-4px";
      document.querySelector("#tempo_btn_mudo_linha").style.top="50px";
      document.querySelector("#tempo_btn_mudo_linha").style.MsTransform="rotate(103deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.WebkitTransform="rotate(103deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.transform="rotate(103deg)";
    }
    if(x.left>(550*escala_oed)){
      lado_menu="direito"
      document.querySelector("#tempo_grupo_btn_home").style.right="95px";
      document.querySelector("#tempo_grupo_btn_home").style.bottom="14px";
      document.querySelector("#tempo_btn_home_linha").style.left="33px";
      document.querySelector("#tempo_btn_home_linha").style.top="15px";
      document.querySelector("#tempo_btn_home_linha").style.MsTransform="rotate(-12deg)";
      document.querySelector("#tempo_btn_home_linha").style.WebkitTransform="rotate(-12deg)";
      document.querySelector("#tempo_btn_home_linha").style.transform="rotate(-12deg)";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.right="82px";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.bottom="74px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.left="32px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.top="46px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.MsTransform="rotate(45deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.WebkitTransform="rotate(45deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.transform="rotate(45deg)";
      document.querySelector("#tempo_grupo_btn_mudo").style.right="18px";
      document.querySelector("#tempo_grupo_btn_mudo").style.bottom="97px";
      document.querySelector("#tempo_btn_mudo_linha").style.left="-4px";
      document.querySelector("#tempo_btn_mudo_linha").style.top="50px";
      document.querySelector("#tempo_btn_mudo_linha").style.MsTransform="rotate(103deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.WebkitTransform="rotate(103deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.transform="rotate(103deg)";
    }
    if(x.top<(400*escala_oed) && lado_menu=="direito"){
      document.querySelector("#tempo_grupo_btn_home").style.right="22px";
      document.querySelector("#tempo_grupo_btn_home").style.bottom="-38px";
      document.querySelector("#tempo_btn_home_linha").style.left="0px";
      document.querySelector("#tempo_btn_home_linha").style.top="-10px";
      document.querySelector("#tempo_btn_home_linha").style.MsTransform="rotate(87deg)";
      document.querySelector("#tempo_btn_home_linha").style.WebkitTransform="rotate(87deg)";
      document.querySelector("#tempo_btn_home_linha").style.transform="rotate(87deg)";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.right="80px";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.bottom="-28px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.left="25px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.top="-10px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.MsTransform="rotate(-46deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.WebkitTransform="rotate(-46deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.transform="rotate(-46deg)";
      document.querySelector("#tempo_grupo_btn_mudo").style.right="96px";
      document.querySelector("#tempo_grupo_btn_mudo").style.bottom="38px";
      document.querySelector("#tempo_btn_mudo_linha").style.left="34px";
      document.querySelector("#tempo_btn_mudo_linha").style.top="25px";
      document.querySelector("#tempo_btn_mudo_linha").style.MsTransform="rotate(7deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.WebkitTransform="rotate(7deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.transform="rotate(7deg)";
    }
    if(x.top<(400*escala_oed) && lado_menu=="esquerdo"){
      document.querySelector("#tempo_grupo_btn_home").style.right="34px";
      document.querySelector("#tempo_grupo_btn_home").style.bottom="-43px";
      document.querySelector("#tempo_btn_home_linha").style.left="4px";
      document.querySelector("#tempo_btn_home_linha").style.top="-10px";
      document.querySelector("#tempo_btn_home_linha").style.MsTransform="rotate(95deg)";
      document.querySelector("#tempo_btn_home_linha").style.WebkitTransform="rotate(95deg)";
      document.querySelector("#tempo_btn_home_linha").style.transform="rotate(95deg)";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.right="-23px";
      document.querySelector("#tempo_grupo_btn_instrucoes").style.bottom="-22px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.left="-20px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.top="0px";
      document.querySelector("#tempo_btn_instrucoes_linha").style.MsTransform="rotate(42deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.WebkitTransform="rotate(42deg)";
      document.querySelector("#tempo_btn_instrucoes_linha").style.transform="rotate(42deg)";
      document.querySelector("#tempo_grupo_btn_mudo").style.right="-36px";
      document.querySelector("#tempo_grupo_btn_mudo").style.bottom="40px";
      document.querySelector("#tempo_btn_mudo_linha").style.left="-16px";
      document.querySelector("#tempo_btn_mudo_linha").style.top="25px";
      document.querySelector("#tempo_btn_mudo_linha").style.MsTransform="rotate(-6deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.WebkitTransform="rotate(-6deg)";
      document.querySelector("#tempo_btn_mudo_linha").style.transform="rotate(-6deg)";
    }

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    setTimeout(function(){
      var x3 = $("#tempo_grupo_menu_template").position();
      if(x3.top<(2*escala_oed)){
      $("#tempo_grupo_menu_template").animate({top:"166px"}, 400, function(){});
      }
    }, 1100);
  }

      },
      stop: function() {
        if(document.querySelector("#tempo_quadro_instrucoes").style.display!=="inherit"){
            $('#tempo_miolo').css({'width':'0px', 'height':'0px'});
        }
    var x2 = $("#tempo_grupo_menu_template").position();
    if(x2.top<(166*escala_oed)){
      $("#tempo_grupo_menu_template").animate({top:"166px"}, 400, function(){});
    }
    if(x2.left<(86*escala_oed)){
      $("#tempo_grupo_menu_template").animate({left:"86px"}, 400, function(){});
    }
    if(x2.top>(660*escala_oed)){
      $("#tempo_grupo_menu_template").animate({top:"660px"}, 400, function(){});
    }
    if(x2.left>(1024*escala_oed)){
      $("#tempo_grupo_menu_template").animate({left:"1024px"}, 400, function(){});
    }
    setTimeout(function(){
      arrastar_menu=0;
    }, 10);
      }

    });
}

if(os_android) {
  $('#tempo_grupo_menu_template').bind('touchend', function(e) {
    $( "#tempo_grupo_menu_template" ).draggable( "enable" );
    setTimeout(function(){
      $( "#tempo_grupo_menu_template" ).draggable( "disable" );
      }, 1000);
    });
}
