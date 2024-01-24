/*!
 * Copyright 2015 By Editora do Brasil
 * By: Tiago Juvenal de Lima, tiago.jlima.developer@gmail.com

 * Foca no Código

        .---.
       /o   o\
    __(=  "  =)__
     //\'-=-'/\\
        )   (_
       /      `"=-._
      /       \     ``"=.
     /  /   \  \         `=..--.
 ___/  /     \  \___      _,  , `\
`-----' `""""`'-----``"""`  \  \_/
                             `-`
*/

'use strict';

var CONFIG = CONFIG,
	EbsaGame = $('.EbsaGame');

// ************** Inicia o objeto construtor **************

// INJEÇÃO DE TEMPLATES
(function(){
	if(CONFIG[0].infoOed.template == 'akpalo'){

		// MIOLO TEMPLATE AKPALO
		EbsaGame.prepend('<div class="header"><div class="titulo_objeto trocaCor" data-cor="titulo_objeto"></div><div class="titulo_disciplina trocaCor capaNomeDisciplina" data-cor="titulo_disciplina"></div><div title="Abrir menu" alt="Abrir menu" class="btn_menu trocaCor" data-cor="btn_menu"></div><div class="btn_home trocaCor" data-cor="btn_home"></div><div class="noInstrucoes"></div><div title="Mostrar instruções" alt="Mostrar instruções" class="btn_instrucoes trocaCor" data-cor="btn_instrucoes"></div><div class="btn_instrucoes_ativado" title="Fechar instruções" alt="Fechar instruções"></div></div><div class="quadro_instrucoesT InstrucoesPrincipal"><div class="quadro_instrucoesTC"><div class="content quadro_instrucoes"><div class="instrucoes_aba_ativada"></div><div class="instrucoes_aba_navegabilidade trocaCor abaNavegabilidade" data-cor="instrucoes_aba_navegabilidade">Navegabilidade</div><div class="instrucoes_aba_instrucoes">Instruções</div><p class="texto_instrucoes"></p><p class="texto_navegabilidade"></p><div class="btn_fechar_instrucoes trocaCor" title="Fechar instruções" alt="Fechar instruções" data-cor="btn_fechar_instrucoes"></div></div></div></div>');

		// CAPA TEMPLATE AKPALO
		EbsaGame.prepend('<div class="Template-akpalo">\n<div id="cobertura_cliques"></div>\n<div id="cobertura_menu_atvidao"></div>\n<div class="capa trocaCor" data-cor="capa">\n<div class="iniciar trocaCor" data-cor="iniciar">Iniciar</div>\n<div class="akpalo_btn_creditos trocaCor" data-cor="btn_creditos">Créditos</div>\n<div class="akpalo_capa_disciplina capaNomeDisciplina"></div>\n<div class="akpalo_capa_logotipo trocaCor" data-cor="capa_logotipo"></div>\n<div class="akpalo_capa_logotipo_ebsa"></div>\n<div class="akpalo_capa_quadro_ano trocaCor" data-cor="capa_quadro_ano">\n<div class="akpalo_capa_quadro_ano_contagem trocaAno"></div>\n</div>\n<div class="akpalo_capa_titulo trocaCor tituloCapa" data-cor="capa_titulo"></div>\n</div>\n<div id="grupo_creditos" style="display:none">\n<div class="creditos_cobertura"></div>\n<div class="akpalo_quadro_creditos">\n<div class="akpalo_quadro_creditos_titulo trocaCor" data-cor="quadro_creditos_titulo"><span class="quadroCreditos"></span> <span class="capaNomeDisciplina disciplinaCreditos"></span></div>\n<div class="akpalo_quadro_creditos_divisa"></div>\n<div class="akpalo_quadro_rodape"></div>\n<div class="akpalo_area_txt_creditos">\n<div class="creditos"></div>\n</div>\n<div class="akpalo_quadro_creditos_fechar trocaCor" data-cor="quadro_creditos_fechar">Fechar</div>\n</div>\n</div>');
	}else if(CONFIG[0].infoOed.template == 'apoema'){

		// MIOLO TEMPLATE APOEMA
		EbsaGame.prepend('<div class="header"><div class="titulo_objeto trocaCor" data-cor="titulo_objeto"></div><div class="titulo_disciplina trocaCor capaNomeDisciplina" data-cor="titulo_disciplina"></div><div title="Abrir menu" alt="Abrir menu" class="btn_menu trocaCor" data-cor="btn_menu"></div><div class="btn_home trocaCor" data-cor="btn_home"></div><div class="noInstrucoes"></div><div title="Mostrar instruções" alt="Mostrar instruções" class="btn_instrucoes trocaCor" data-cor="btn_instrucoes"></div><div class="btn_instrucoes_ativado" title="Fechar instruções" alt="Fechar instruções"></div></div><div class="quadro_instrucoesT InstrucoesPrincipal"><div class="quadro_instrucoesTC"><div class="content quadro_instrucoes"><div class="instrucoes_aba_ativada"></div><div class="instrucoes_aba_navegabilidade trocaCor abaNavegabilidade" data-cor="instrucoes_aba_navegabilidade">Navegabilidade</div><div class="instrucoes_aba_instrucoes">Instruções</div><p class="texto_instrucoes"></p><p class="texto_navegabilidade"></p><div class="btn_fechar_instrucoes trocaCor" title="Fechar instruções" alt="Fechar instruções" data-cor="btn_fechar_instrucoes"></div></div></div></div>');

		// CAPA TEMPLATE APOEMA
		EbsaGame.prepend('<div class="Template-apoema">\n<div id="cobertura_cliques"></div>\n<div id="cobertura_menu_atvidao"></div>\n<div class="capa trocaCor" data-cor="capa">\n<div id="headerCover" class="blend multiply bgCoverHeader-default trocaCor" data-cor="headerCover">\n<div class="contentHeader">\n<h1 class="tituloCapa trocaCor" data-cor="tituloCapa"></h1>\n</div>\n<div class="anoHeader trocaAno trocaCor" data-tipo="texto" data-cor="anoHeader">\n7\n</div>\n<div class="logo"></div>\n</div>\n<div id="navHeader" class="cl-effect-10 bgCoverNav trocaCor" data-cor="navHeader">\n<a href="javascript:void(0)" class="btnIniciar" data-hover="Iniciar"><span class="trocaCor" data-cor="btnIniciar">Iniciar</span></a>\n<div class="btnCreditos">Créditos</div>\n</div>\n<div id="creditos" class="bgCreditos-default trocaCor" data-cor="bgCreditos">\n<h2></h2>\n<div class="overlayCreditos"></div>\n<div class="boxText">\n<div class="text-creditos creditos">\n<div class="img"></div>\n</div>\n</div>\n</div>\n</div>\n</div>');
	}else if(CONFIG[0].infoOed.template == 'praticando'){

		// MIOLO TEMPLATE PRATICANDO
		EbsaGame.prepend('<!-- Miolo: Cabeçalho --> <span id="praticando_grupo_miolo"> <span id="praticando_grupo_cabecalho"> <div id="praticando_cabecalho_linha_1" class="trocaCor" data-cor-tipo="media"></div> <div id="praticando_cabecalho_linha_2" class="trocaCor" data-cor-tipo="leve"></div> <div id="praticando_cabecalho_linha_3" class="trocaCor" data-cor-tipo="media"><span class="titulo_objeto"></span></div> <div id="praticando_cabecalho_linha_4" class="trocaCor" data-cor-tipo="pesada"></div> </span> <!-- --> <div id="praticando_cobertura_menus"></div> <div id="praticando_grupo_btn_menu"> <div id="praticando_btn_menu_linha_1" class="trocaCor" data-cor-tipo="leve"></div> <div id="praticando_btn_menu_linha_2" class="trocaCor" data-cor-tipo="pesada"></div> <div id="praticando_btn_menu" class="trocaCor" Alt="Abrir menu." Title="Abrir menu." data-cor-tipo="media"></div> <div id="praticando_btn_menu_fora" Alt="Fechar menu." Title="Fechar menu."></div> </div> <!-- --> <div id="praticando_grupo_btn_reiniciar"> <div id="praticando_btn_reiniciar_linha_1" class="trocaCor" data-cor-tipo="leve"></div> <div id="praticando_btn_reiniciar_linha_2" class="trocaCor" data-cor-tipo="pesada"></div> <div id="praticando_btn_reiniciar" class="trocaCor" Alt="Reiniciar." Title="Reiniciar." data-cor-tipo="media"></div> </div> <!-- --> <div id="praticando_grupo_btn_instrucoes"> <div id="praticando_btn_instrucoes_linha_1" class="trocaCor" data-cor-tipo="leve"></div> <div id="praticando_btn_instrucoes_linha_2" class="trocaCor" data-cor-tipo="pesada"></div> <div id="praticando_btn_instrucoes" class="trocaCor" Alt="Abrir instruções." Title="Abrir instruções." data-cor-tipo="media"></div> <div id="praticando_btn_instrucoes_fora" Alt="Fechar instruções." Title="Fechar instruções."></div> </div> <!-- Fim do Miolo: Cabeçalho --> <div class="quadro_instrucoesT InstrucoesPrincipal" style="display: table;"> <div class="quadro_instrucoesTC"> <div class="content"> <!-- Quadro de instruções --> <div id="praticando_quadro_instrucoes"> <span class="texto_instrucoes"></span> <span class="texto_navegabilidade"></span> <div id="praticando_area_abas" class="trocaCor" data-cor-tipo="media"> <div id="praticando_instrucoes_btn_fechar" Alt="Fechar." Title="Fechar."></div> <div id="praticando_aba_instrucoes">Instruções</div> <div id="praticando_aba_navegabilidade" class="abaNavegabilidade">Navegabilidade<div id="praticando_aba_navegabilidade_divisa"></div></div> <div id="praticando_instrucoes_guia_aba"></div> </div> </div> <!-- Quadro de instruções --> </div> </div> </div>');

		// CAPA TEMPLATE PRATICANDO
		EbsaGame.prepend('<div id="praticando_capa" class="trocaCor" data-cor-tipo="pesada">\n<span id="praticando_linhas_1">\n<div id="praticando_capa_linha_1" class="trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_linha_2" class="trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_linha_3" class="trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_linha_4" class="trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_linha_5" class="trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_linha_6" class="trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_linha_7" class="trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_linha_8" class="trocaCor" data-cor-tipo="media"></div>\n</span>\n<div id="praticando_capa_rotulo_colecao"><span id="praticando_capa_rotulo_colecao_txt" class="trocaCor" data-cor-tipo="pesada"><span>COLEÇÃO PRATICANDO<br /></span><span class="praticando_capa_rotulo_colecao_sub">&nbsp;matemática</span></span></div>\n<div id="praticando_capa_rotulo_titulo" class="titulo_objeto_praticando"></div>\n<div id="praticando_capa_rotulo_anuario" class="trocaAno">9</div>\n<div id="praticando_btn_iniciar" class="praticando_btn_iniciar">Iniciar</div>\n<div id="praticando_btn_creditos">Créditos</div>\n<div id="praticando_btn_creditos_fora"></div>\n<div id="praticando_capa_linha_9"></div>\n<div id="praticando_capa_logotipo"></div>\n<div id="praticando_capa_linha_10" class="trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_1">\n<div id="praticando_capa_chanfro_1a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_1b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_1c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_1d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_2">\n<div id="praticando_capa_chanfro_2a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_2b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_2c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_2d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_3">\n<div id="praticando_capa_chanfro_3a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_3b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_3c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_3d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_4">\n<div id="praticando_capa_chanfro_4a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_4b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_4c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_4d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_5">\n<div id="praticando_capa_chanfro_5a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_5b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_5c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_5d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_6">\n<div id="praticando_capa_chanfro_6a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_6b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_6c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_6d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_7">\n<div id="praticando_capa_chanfro_7a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_7b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_7c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_7d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_8">\n<div id="praticando_capa_chanfro_8a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_8b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_8c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_8d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_9">\n<div id="praticando_capa_chanfro_9a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_9b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_9c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_9d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_10">\n<div id="praticando_capa_chanfro_10a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_10b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_10c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_10d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_chanfro_11">\n<div id="praticando_capa_chanfro_11a" class="praticando_capa_chanfro_a trocaCor" data-cor-tipo="pesada"></div>\n<div id="praticando_capa_chanfro_11b" class="praticando_capa_chanfro_b trocaCor" data-cor-tipo="media"></div>\n<div id="praticando_capa_chanfro_11c" class="praticando_capa_chanfro_c trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_chanfro_11d" class="praticando_capa_chanfro_d trocaCor" data-cor-tipo="leve"></div>\n</div>\n<div id="praticando_capa_painel_creditos">Coleção Praticando Matemática\n<div id="praticando_logotipo_ebsa_creditos"></div>\n<div id="praticando_capa_creditos_linha" class="trocaCor" data-cor-tipo="leve"></div>\n<div id="praticando_capa_creditos_container">\n<div id="praticando_creditos" class="creditos"></div>\n</div>\n</div>\n</div>');
	}else if(CONFIG[0].infoOed.template == 'tempo'){

    // CAPA TEMPLATE TEMPO
    EbsaGame.prepend('<div id="tempo_capa" class="capa">\n<div id="tempo_capa_cobertura"></div>\n<div id="tempo_capa_linha_1" class="trocaCor"></div>\n<div id="tempo_capa_linha_2"></div>\n<div id="tempo_capa_linha_3" class="trocaCor">\n<div id="tempo_capa_linha_4"></div>\n<div id="tempo_capa_linha_5"></div>\n<div id="tempo_capa_linha_8" class="animacao_giro_ponteiro">\n<div id="tempo_capa_linha_8_ponteiro" class="trocaCor"></div>\n</div>\n</div>\n<div id="tempo_capa_linha_6"></div>\n<div id="tempo_capa_linha_7"></div>\n<div id="tempo_capa_titulo" class="tempo_capa_titulo"></div>\n<div id="tempo_capa_numero_ano" class="trocaAno">6</div>\n<div id="tempo_capa_area_creditos">\n<div id="tempo_capa_area_creditos_fechar">X</div>\n<div id="tempo_capa_painel_creditos">\n<div id="tempo_capa_titulo_creditos">Coleção Tempo<br />de <span class="capaNomeDisciplina nomeDisciplinaTempo"></span></div>\n<div id="tempo_capa_creditos_logotipo">\n<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg3552" viewBox="0 0 384 104" height="52" width="192">\n<defs id="defs3554" />\n<metadata id="metadata3557">\n<rdf:RDF>\n<cc:Work rdf:about="">\n<dc:format>image/svg+xml</dc:format>\n<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n<dc:title></dc:title>\n</cc:Work>\n</rdf:RDF>\n</metadata>\n<g transform="translate(0,-948.36216)" id="layer1">\n<path id="path105" d="m 244.04293,982.83245 0,11.09961 0,0.79899 -0.69009,-0.39949 c -0.0189,-0.0107 -1.90952,-1.08459 -4.00082,-1.08459 -5.34553,0 -8.66494,4.21577 -8.66494,10.99993 0,6.8884 3.15578,11 8.44299,11 4.08097,0 5.71914,-1.9851 5.78475,-2.0695 l 0.13816,-0.1784 0.2253,0 0.10553,0.3124 0.51174,1.4949 4.54434,0 0,-31.97385 -6.39696,0 z m 131.58897,8.6e-4 0,27.49739 c 0,3.4471 1.19277,4.9162 3.99161,4.9162 1.69979,0 2.98463,-0.4639 3.71189,-1.3434 0.50171,-0.605 0.72666,-1.3889 0.64991,-2.2353 -1.36748,-0.074 -1.95559,-0.8302 -1.95559,-2.4833 l 0,-26.35159 -6.39782,0 z m -251.67713,0.003 0,11.11133 0,0.79732 -0.69011,-0.39866 c -0.0184,-0.0107 -1.90993,-1.08542 -4.00165,-1.08542 -5.34296,0 -8.66412,4.21536 -8.66412,10.99912 0,6.8888 3.15578,11.0008 8.44385,11.0008 4.08054,0 5.71701,-1.9834 5.78305,-2.0687 l 0.13987,-0.1784 0.22445,0 0.10804,0.3107 0.50921,1.4967 4.54352,0 0,-31.98479 -6.39611,0 z m 14.3073,0.062 c -2.3503,0 -3.59211,1.03097 -3.59211,2.97904 0,2.14876 1.0095,3.06615 3.37352,3.06615 1.54114,0 3.37352,-0.53274 3.37352,-3.06615 0,-1.72595 -1.32692,-2.97904 -3.15493,-2.97904 z m 230.1136,0.005 c -2.35244,0 -3.59547,1.02888 -3.59547,2.97653 -4.3e-4,2.14919 1.00778,3.06615 3.37352,3.06615 1.54071,0 3.37601,-0.53232 3.37601,-3.06615 0,-1.72552 -1.32776,-2.97653 -3.15406,-2.97653 z m -74.54069,1.59882 c -3.54925,0 -7.04434,0.2611 -8.22357,0.35929 l 0,30.06018 c 1.11876,0.111 4.43954,0.3961 8.66245,0.3961 4.4223,0 11.83915,-1.1083 11.83911,-8.5309 4.2e-4,-5.8764 -5.50595,-7.71139 -6.108,-7.85761 l 0,-0.16331 c 0.3632,-0.1145 4.78641,-1.96252 4.78641,-6.438 0,-5.26576 -3.58519,-7.82575 -10.9564,-7.82575 z m -204.01991,0.38023 0,29.93454 18.07697,0 0,-5.6038 -10.91201,0 -0.46063,0 0,-0.4598 0,-6.3451 0,-0.4623 0.46063,0 8.04686,0 0,-5.0301 -8.04686,0 -0.46063,0 0,-0.4598 0,-5.50834 0,-0.46231 0.46063,0 10.91201,0 0,-5.60299 -18.07697,0 z m 59.06587,3.22276 -0.98659,5.22276 -0.0553,0.28643 -0.27973,0.072 -2.96481,0.79229 0,3.15241 2.27219,0 0.46063,0 0,0.46064 0,10.00585 8.6e-4,0 c 0,5.4235 1.37643,7.1641 5.6658,7.1641 2.57843,0 4.73888,-0.8169 5.4983,-1.1424 l -0.42714,-3.5586 c -0.44467,0.091 -1.12322,0.2002 -1.85091,0.2002 -0.74698,0 -2.49161,0 -2.49161,-2.6633 l 0,-10.00669 0,-0.46064 0.46315,0 4.03264,0 0,-3.92795 -4.03264,0 -0.46315,0 0,-0.45896 0,-5.13817 -4.84169,0 z m 145.52607,1.20603 c 2.6719,0 4.20601,1.4375 4.20601,3.94303 0,2.54112 -1.58775,3.94219 -4.47149,3.94219 l -1.62896,0 -0.46148,0 0,-0.46063 0,-6.83247 0,-0.37604 0.37019,-0.0737 c 0.0287,-0.006 0.7216,-0.14238 1.98573,-0.14238 z m -30.75025,3.75961 c -6.96557,0 -10.0728,3.40597 -10.07284,11.04434 4.2e-4,7.8034 3.01336,11.1314 10.07284,11.1314 7.00073,0 9.98738,-3.3284 9.98738,-11.1314 0,-7.63837 -3.07971,-11.04434 -9.98738,-11.04434 z m 90.75918,0 c -5.30437,0 -8.22361,2.4662 -8.22361,6.94554 0,3.2928 1.66644,5.1649 5.57117,6.2562 1.98924,0.5794 3.86013,1.1265 3.86013,2.6466 0,1.9155 -2.35857,1.9154 -3.76464,1.9154 -1.87303,0 -3.95567,-0.642 -4.91792,-0.9799 l -0.61221,4.0226 c 0.93523,0.3666 3.81893,1.3693 7.38186,1.3693 5.34167,0 8.53011,-2.6122 8.53011,-6.9882 0,-3.2568 -1.79546,-5.159 -5.82154,-6.165 -1.95194,-0.5094 -3.69848,-1.0942 -3.69848,-2.64987 0,-1.73882 2.45476,-1.73953 3.63398,-1.73953 1.51498,0 3.04853,0.33454 3.83582,0.5335 l 0.46985,-4.24621 c -0.95453,-0.29244 -3.33806,-0.92043 -6.24452,-0.92043 z m -183.88938,0.0142 c -6.9647,0 -10.07365,3.4068 -10.07365,11.04514 0,7.8026 3.01203,11.1315 10.07365,11.1315 7.0016,0 9.98825,-3.3284 9.98825,-11.1315 0,-7.63834 -3.08014,-11.04514 -9.98825,-11.04514 z m 38.27954,0.0435 c -3.93904,0 -7.23392,1.11817 -8.25791,1.50753 l 0.69599,4.28893 c 1.02829,-0.26243 3.47383,-0.80989 5.92961,-0.80989 3.20706,0 4.07368,0.56059 4.07368,4.51507 l 0,0.4908 -0.48661,-0.031 c -0.0214,-9e-4 -2.116,-0.1307 -3.36512,-0.1307 -3.13716,0 -8.40113,0.8452 -8.40113,6.5042 0,3.7658 2.62547,5.7545 6.36597,5.7545 3.23193,0 5.53874,-1.3166 6.52843,-2.8333 l 0.19597,0 c 0,1.6621 1.66695,2.5243 3.15577,2.5243 1.31773,0 2.34752,-0.4113 2.97401,-1.1935 0.45282,-0.5613 0.66495,-1.2958 0.59462,-2.0184 -1.51669,-0.2753 -1.51673,-2.1479 -1.51673,-2.9832 l 0,-6.6558 c 0,-6.29743 -1.17923,-8.92956 -8.48655,-8.92956 z m 125.18615,0.0301 c -3.9386,0 -7.23348,1.11817 -8.2579,1.50752 l 0.69595,4.28893 c 1.02828,-0.26243 3.47382,-0.80988 5.92961,-0.80988 3.20706,0 4.07368,0.56144 4.07368,4.51507 l 0,0.4908 -0.48657,-0.031 c -0.0219,-9e-4 -2.11728,-0.1307 -3.36597,-0.1307 -3.13717,0 -8.40114,0.8448 -8.40114,6.5042 0,3.7649 2.62504,5.7537 6.36597,5.7537 3.23193,0 5.53999,-1.3158 6.52925,-2.8325 l 0.19601,0 c 0,1.6617 1.66691,2.5243 3.15573,2.5243 1.3173,0 2.34756,-0.4117 2.97405,-1.1935 0.45325,-0.563 0.66452,-1.2967 0.59462,-2.0192 -1.51712,-0.2753 -1.51673,-2.1479 -1.51673,-2.9832 l 0,-6.6558 c 0,-6.29704 -1.17923,-8.92875 -8.48656,-8.92875 z m -138.32009,0.0712 c -4.27393,0 -5.88728,2.38472 -6.06695,2.83583 l -0.11475,0.29313 -0.83584,-2.68592 -4.51171,0 0,21.118 6.3953,0 0,-14.7135 c 0.12907,-0.18782 1.13548,-1.59548 4.25206,-1.59548 0.76242,0 1.7257,0.15705 2.29644,0.26382 l 0.71611,-5.34252 c -0.4927,-0.0712 -1.37982,-0.17336 -2.13066,-0.17336 z m 125.53289,0.0293 c -4.27393,0 -5.88689,2.38472 -6.06699,2.83583 l -0.11389,0.29396 -0.8367,-2.68675 -4.51171,0 0,21.118 6.3953,0 0,-14.7135 c 0.1295,-0.1874 1.13591,-1.59548 4.25206,-1.59548 0.76243,0 1.72617,0.15662 2.29649,0.26382 l 0.71607,-5.34252 c -0.49185,-0.072 -1.37935,-0.17336 -2.13063,-0.17336 z m -186.36005,0.40201 0,21.15563 6.39695,0 0,-21.15563 -6.39695,0 z m 230.065,0.003 0,21.15653 6.39949,0 0,-21.15653 -6.39949,0 z m -101.25324,3.29144 c 2.88459,0 3.28223,3.44129 3.28223,7.15989 0,3.7641 -0.39764,7.2479 -3.28223,7.2479 -2.99866,0 -3.41203,-3.4838 -3.41203,-7.2479 0,-3.7182 0.4138,-7.15989 3.41203,-7.15989 z m -93.1302,0.0142 c 2.8846,0 3.28223,3.44259 3.28223,7.16079 0,3.7641 -0.39763,7.2478 -3.28223,7.2478 -2.99908,0 -3.41287,-3.4837 -3.41287,-7.2478 0,-3.7178 0.41379,-7.16079 3.41287,-7.16079 z m 71.20569,0.64656 c 1.06559,0 2.01535,0.46937 2.05695,0.48995 l 0.25373,0.12646 0,0.2856 0,11.10542 0,0.2856 -0.25373,0.1282 c -0.0416,0.019 -0.99136,0.4883 -2.05695,0.4883 -1.75426,0 -4.69177,-0.8155 -4.69177,-6.2781 0,-6.1538 3.59059,-6.63143 4.69177,-6.63143 z m -120.08819,0.0142 c 1.06559,0 2.01792,0.46896 2.05694,0.48911 l 0.25461,0.1273 0,0.2856 0,11.10802 0,0.2839 -0.25461,0.1273 c -0.039,0.018 -0.99135,0.4891 -2.05694,0.4891 -1.7534,0 -4.69261,-0.8154 -4.69261,-6.2797 0,-6.1517 3.59186,-6.63063 4.69261,-6.63063 z m 170.40703,3.93463 0.46148,0 1.67501,0 c 3.08185,0 4.77805,1.5882 4.77805,4.4707 0,2.9253 -1.54406,4.4723 -4.47153,4.4723 -1.31859,0 -2.06201,-0.1824 -2.0946,-0.1901 l -0.34841,-0.086 0,-0.3618 0,-7.8442 0,-0.4606 z m -83.20143,4.6181 c 1.027,0 1.86476,0.086 1.8995,0.089 l 0.41122,0.045 0,0.4146 0,1.7654 c 0,0 -1.33231,2.4121 -3.73449,2.4121 -1.46738,0 -2.58627,-0.7485 -2.58627,-2.0628 0,-0.8015 0.49038,-2.6633 4.01004,-2.6633 z m 125.18612,0.028 c 1.027,0 1.86476,0.087 1.89949,0.09 l 0.41209,0.044 0,0.4146 0,0 0,1.7663 c 0,0 -1.3315,2.412 -3.73368,2.412 -1.46738,0 -2.58709,-0.7489 -2.58709,-2.0636 0,-0.8014 0.49039,-2.6633 4.01005,-2.6633 z" style="fill:#1f1543;fill-opacity:1" />\n<path d="m 35.58726,980.19765 c 11.13573,0 20.16386,9.02728 20.16386,20.16385 l 15.42596,0 -25.66376,-44.45242 c -5.46002,-9.45352 -14.39553,-9.45352 -19.84955,0 L 0,1000.3615 l 15.42382,0 c 0,-11.13657 9.02685,-20.16385 20.16344,-20.16385 z" id="path145" style="fill:#94c93d" />\n<path d="m 55.75112,1000.3619 c 0,11.1349 -9.02813,20.1643 -20.16386,20.1643 -11.13616,0 -20.16301,-9.0298 -20.16301,-20.1643 l -15.42382,0 25.66377,44.4521 c 5.45873,9.4552 14.39253,9.4552 19.84955,0 l 25.66376,-44.4521 -15.42639,0 z" id="path147" style="fill:#00b4a8" />\n</g>\n</svg>\n</div>\n<div id="tempo_capa_divisa_creditos"></div>\n<div id="tempo_capa_container_creditos">\n<div id="tempo_capa_creditos" class="creditos"></div>\n</div>\n</div>\n</div>\n<div id="tempo_capa_nome_disciplina"><span class="capaNomeDisciplina nomeDisciplinaTempo"></span>\n<div id="tempo_capa_nome_colecao">\n<svg class="trocaCorSvg" id="tempo_capa_nome_colecao_borda" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg4190" viewBox="0 0 400 116" height="48" width="168">\n<defs id="defs4192" />\n<metadata id="metadata4195">\n<rdf:RDF>\n<cc:Work rdf:about="">\n<dc:format>image/svg+xml</dc:format>\n<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n<dc:title></dc:title>\n</cc:Work>\n</rdf:RDF>\n</metadata>\n<g transform="translate(0,-936.36216)" id="layer1">\n<path id="path4232" d="m 173.29447,1051.5084 c -4.96096,-1.3964 -8.72023,-5.4141 -9.82055,-10.4956 -0.21437,-0.99 -0.39451,-3.4537 -0.4003,-5.475 l -0.0105,-3.675 -5.025,-0.01 c -5.97862,-0.011 -8.79798,-0.3338 -11.12496,-1.2737 l -1.72338,-0.6961 -1.50368,0.6823 c -0.82701,0.3753 -2.44176,0.8179 -3.58833,0.9836 -2.68779,0.3885 -11.07425,0.3887 -13.78465,6e-4 -1.97819,-0.2834 -4.50305,-1.0318 -5.0429,-1.4948 -0.13359,-0.1145 -1.03565,0.1119 -2.00456,0.5033 -2.66819,1.0777 -6.0035,1.4048 -12.45254,1.221 -6.17294,-0.1759 -7.772542,-0.4824 -10.528352,-2.0178 l -1.52836,-0.8514 -2.52828,1.0151 c -14.036386,5.6358 -30.254038,4.2001 -39.618839,-3.5074 -0.772101,-0.6355 -1.487976,-1.1554 -1.590831,-1.1554 -0.102855,0 -0.928212,0.8006 -1.834125,1.7791 -1.863537,2.0128 -3.332982,2.9632 -6.132672,3.9662 -1.824687,0.6538 -2.370258,0.6949 -9.288549,0.6996 -6.784009,0 -7.514485,-0.047 -9.486011,-0.6667 -5.580117,-1.755 -9.239781,-6.2033 -10.015548,-12.1739 -0.153954,-1.1849 -0.284085,-10.8956 -0.289179,-21.5793 l -0.0093,-19.425 -1.018399,0 c -1.507831,0 -4.9307653,-1.127 -6.5573507,-2.159 -2.851103,-1.8088 -5.050174,-4.9978 -5.95871703,-8.641 -0.633512,-2.5404 -0.558539,-13.3712 0.109511,-15.8204 1.18725403,-4.3526 3.60270003,-7.3287 7.45012543,-9.1792 3.4804243,-1.674 4.9982033,-1.7612 28.4748313,-1.635 20.138628,0.1082 20.589036,0.1235 22.5,0.7616 4.12501,1.3775 6.994267,3.6826 8.688844,6.9806 1.182441,2.3012 1.548699,3.8635 1.542726,6.5807 l -0.0051,2.3379 5.311782,0.1518 c 5.591868,0.1598 7.939533,0.5813 11.701146,2.1007 1.564758,0.632 4.855968,2.3997 6.074458,3.2626 0.36088,0.2555 0.80184,0.1204 1.98697,-0.6088 0.83773,-0.5154 4.004007,-1.7799 7.036179,-2.8098 l 5.51303,-1.8727 3.6,0.017 c 3.26453,0.016 3.76261,0.093 5.34505,0.8301 1.66067,0.7734 1.80626,0.7919 3.01048,0.3831 5.96033,-2.0236 13.97086,-1.7853 18.83277,0.5601 l 1.56974,0.7573 1.86747,-0.7471 c 5.43615,-2.1748 14.43108,-2.5753 19.54494,-0.8702 1.86345,0.6214 4.77297,2.0819 6.00982,3.0169 l 0.98028,0.741 1.56972,-0.7347 c 0.86335,-0.404 3.72973,-1.4473 6.36973,-2.3184 5.96161,-1.9671 8.97667,-2.261 12.43036,-1.212 2.07377,0.6299 2.15743,0.6323 3.99389,0.1174 1.47637,-0.414 3.02549,-0.5245 7.27575,-0.5188 5.01142,0.01 5.5899,0.066 8.03898,0.8203 4.60969,1.4203 7.71428,3.2289 11.07245,6.4504 l 2.01144,1.9295 1.9854,-1.7919 c 3.91842,-3.5365 9.53049,-6.1753 15.24052,-7.1659 4.08506,-0.7088 11.08971,-0.4447 14.90465,0.5618 8.65157,2.2827 15.83296,8.1149 20.207,16.4108 1.67007,3.1675 3.28674,7.9093 3.99341,11.7129 0.73599,3.9616 0.74395,13.9983 0.0142,17.9171 -2.34877,12.6131 -9.73879,22.5939 -19.7468,26.6698 -6.85354,2.7912 -15.42178,3.2681 -22.77126,1.2673 -4.42833,-1.2056 -9.28555,-3.902 -12.51691,-6.9486 l -1.5669,-1.4773 -1.2831,1.3199 c -4.06088,4.1772 -9.28724,6.8962 -15.0831,7.8467 l -2.4,0.3937 -0.17436,2.3807 c -0.31386,4.2856 -1.69553,7.5327 -4.2933,10.0899 -2.3375,2.3009 -4.88425,3.3721 -11.28234,4.7454 -6.56953,1.4102 -9.94077,1.6962 -12.26861,1.041 z m 137.51861,-18.3423 c -2.28609,-0.3647 -5.89296,-1.4436 -7.85223,-2.3488 -2.82237,-1.304 -4.59731,-2.5369 -7.10622,-4.9361 -7.20824,-6.8929 -10.5093,-17.304 -9.9936,-31.5184 0.47726,-13.1549 3.74423,-22.3241 10.30077,-28.9107 4.12284,-4.1417 9.9489,-7.1841 15.05391,-7.8613 l 1.45911,-0.1936 0.18177,-3.3422 c 0.27282,-5.0153 1.53945,-8.1859 4.36863,-10.9356 2.83764,-2.7579 4.49718,-3.4492 11.91366,-4.9629 8.3697,-1.7084 10.18785,-1.703 13.9242,0.041 2.13945,0.9984 5.30154,4.1755 6.36981,6.4 1.26267,2.6292 1.45698,3.8795 1.63992,10.5521 0.0941,3.4301 0.2541,6.1906 0.35565,6.1344 2.08299,-1.1519 5.53245,-2.5383 7.79895,-3.1343 3.5325,-0.929 10.29237,-1.2633 14.1957,-0.702 9.5043,1.3668 17.41644,7.0303 21.81534,15.6154 2.56578,5.0074 3.87273,10.0279 4.56408,17.5317 0.60468,6.5635 -0.12024,11.0448 -2.31405,14.3048 -0.58545,0.87 -0.99855,1.7914 -0.918,2.0476 0.0805,0.2562 0.48513,1.4018 0.89907,2.5458 1.10748,3.0605 1.2696,5.7811 0.51678,8.6719 -1.91886,7.3686 -8.44416,11.9439 -20.4648,14.3493 -4.58727,0.9179 -13.17105,0.9871 -17.05845,0.1375 -4.3467,-0.9499 -8.67903,-2.7221 -11.66979,-4.7737 -1.05645,-0.7247 -1.41558,-0.837 -1.8,-0.5628 -1.71414,1.2227 -10.18185,4.8303 -13.1556,5.6049 -2.50971,0.6537 -5.25888,0.5521 -7.71696,-0.2853 l -2.09232,-0.7127 -2.25768,0.6018 c -2.22657,0.5936 -8.83485,0.981 -10.95765,0.6424 z" />\n</g>\n</svg>\n</div>\n<div id="tempo_capa_nome_colecao_texto">\n<svg class="trocaCorSvg" id="tempo_capa_nome_colecao_texto_cor" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg4190" viewBox="0 0 400 116" height="48" width="168" inkscape:version="0.91 r13725" sodipodi:docname="drawing3.svg">\n<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1360" inkscape:window-height="746" id="namedview7" showgrid="false" inkscape:zoom="2" inkscape:cx="212.78946" inkscape:cy="48.064667" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg4190" />\n<defs id="defs4192" />\n<metadata id="metadata4195">\n<rdf:RDF>\n<cc:Work rdf:about="">\n<dc:format>image/svg+xml</dc:format>\n<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n<dc:title></dc:title>\n</cc:Work>\n</rdf:RDF>\n</metadata>\n<path d="M 337.30859 14.482422 C 337.2451 14.482422 337.02352 14.546843 336.64258 14.673828 C 336.32511 14.737321 336.10354 14.769531 335.97656 14.769531 L 327.97656 16.388672 C 327.91307 16.388672 327.81644 16.418929 327.68945 16.482422 C 326.67358 16.672899 326.16602 17.212674 326.16602 18.101562 L 326.16602 37.625 C 323.37237 35.720238 320.41971 34.769531 317.30859 34.769531 C 311.34034 34.769531 306.80057 37.053571 303.68945 41.625 C 300.57835 46.132937 299.02344 52.864025 299.02344 61.816406 C 299.02344 69.181486 300.38899 74.895492 303.11914 78.958984 C 305.91279 83.022476 309.97526 85.054688 315.30859 85.054688 C 319.62605 85.054687 323.81737 83.149368 327.88086 79.339844 C 328.13483 80.609685 328.54771 81.880549 329.11914 83.150391 C 329.75406 84.420232 330.26162 85.054688 330.64258 85.054688 C 330.76956 85.054687 330.99113 84.990265 331.30859 84.863281 C 331.62608 84.736297 331.81739 84.673828 331.88086 84.673828 L 339.11914 81.720703 C 339.69057 81.466734 339.97656 81.180741 339.97656 80.863281 L 339.11914 77.435547 C 338.54771 75.149833 338.26172 72.164962 338.26172 68.482422 L 338.26172 16.482422 C 338.26172 15.149089 337.94351 14.482422 337.30859 14.482422 z M 14.587891 18.197266 C 13.889478 18.197266 13.444383 18.324156 13.253906 18.578125 C 13.06343 18.768601 12.96875 19.181486 12.96875 19.816406 L 12.96875 28.005859 C 12.96875 28.64078 13.06343 29.085875 13.253906 29.339844 C 13.444383 29.53032 13.889478 29.625 14.587891 29.625 L 27.064453 29.625 L 27.064453 81.435547 C 27.064453 82.260944 27.191345 82.800719 27.445312 83.054688 C 27.699281 83.308656 28.239056 83.435547 29.064453 83.435547 L 37.921875 83.435547 C 38.747272 83.435547 39.285094 83.308656 39.539062 83.054688 C 39.79303 82.80072 39.921875 82.260944 39.921875 81.435547 L 39.921875 29.625 L 51.730469 29.625 C 52.936818 29.625 53.667907 29.117436 53.921875 28.101562 L 55.921875 20.578125 C 56.112352 19.943204 56.207031 19.498109 56.207031 19.244141 C 56.207031 18.545728 55.413474 18.197266 53.826172 18.197266 L 14.587891 18.197266 z M 73.699219 34.769531 C 67.350012 34.769531 62.270462 37.150204 58.460938 41.912109 C 54.714906 46.610522 52.841797 52.769624 52.841797 60.388672 C 52.841797 68.769625 54.747117 74.991196 58.556641 79.054688 C 62.366165 83.054688 67.572607 85.054688 74.175781 85.054688 C 77.921813 85.054688 81.698289 84.45049 85.507812 83.244141 C 89.317337 81.974299 91.222656 80.705388 91.222656 79.435547 C 91.222656 79.054595 91.127976 78.706133 90.9375 78.388672 L 88.556641 72.673828 C 88.302673 72.165892 87.952257 71.912109 87.507812 71.912109 C 87.253845 71.912109 86.55692 72.198103 85.414062 72.769531 C 84.334697 73.277468 82.90473 73.785032 81.126953 74.292969 C 79.349175 74.800905 77.445809 75.054688 75.414062 75.054688 C 68.429935 75.054688 64.9375 71.086899 64.9375 63.150391 L 90.556641 63.150391 C 91.44553 63.150391 92.017516 62.991288 92.271484 62.673828 C 92.588945 62.356368 92.746094 61.721913 92.746094 60.769531 C 92.746094 43.436197 86.397632 34.769531 73.699219 34.769531 z M 110.46094 34.769531 C 110.07998 34.769531 109.60463 34.864211 109.0332 35.054688 L 101.79492 37.435547 C 101.09651 37.626023 100.74609 37.974485 100.74609 38.482422 C 100.74609 38.863375 100.84273 39.340681 101.0332 39.912109 C 101.22368 40.420045 101.41304 41.02229 101.60352 41.720703 C 101.85748 42.355624 102.081 43.688956 102.27148 45.720703 C 102.46196 47.752449 102.55664 50.292225 102.55664 53.339844 L 102.55664 82.101562 C 102.55664 82.609499 102.61911 82.959915 102.74609 83.150391 C 102.93657 83.340867 103.3192 83.435547 103.89062 83.435547 L 113.31836 83.435547 C 113.88979 83.435547 114.23825 83.340867 114.36523 83.150391 C 114.55571 82.959915 114.65234 82.609499 114.65234 82.101562 L 114.65234 48.673828 C 117.44599 46.070653 120.23955 44.769531 123.0332 44.769531 C 125.69987 44.769531 127.0332 47.436198 127.0332 52.769531 L 127.0332 82.101562 C 127.0332 82.609499 127.09567 82.959915 127.22266 83.150391 C 127.41313 83.340867 127.79381 83.435547 128.36523 83.435547 L 137.79492 83.435547 C 138.36635 83.435547 138.71481 83.340867 138.8418 83.150391 C 139.03227 82.959915 139.12695 82.609499 139.12695 82.101562 L 139.12695 48.673828 C 141.92061 46.070653 144.71417 44.769531 147.50781 44.769531 C 150.17448 44.769531 151.50781 47.436198 151.50781 52.769531 L 151.50781 82.101562 C 151.50781 82.609499 151.57223 82.959915 151.69922 83.150391 C 151.88969 83.340867 152.27036 83.435547 152.8418 83.435547 L 162.27148 83.435547 C 162.84291 83.435547 163.19137 83.340867 163.31836 83.150391 C 163.50883 82.959915 163.60352 82.609499 163.60352 82.101562 L 163.60352 49.816406 C 163.60352 45.117993 162.77775 41.436198 161.12695 38.769531 C 159.53965 36.102865 156.68363 34.769531 152.55664 34.769531 C 151.79473 34.769531 151.03338 34.832 150.27148 34.958984 C 149.57307 35.022477 148.9064 35.117157 148.27148 35.244141 C 147.70005 35.307633 147.06364 35.466735 146.36523 35.720703 C 145.73031 35.974672 145.19053 36.198196 144.74609 36.388672 C 144.36514 36.515656 143.85758 36.769438 143.22266 37.150391 C 142.65122 37.531343 142.23834 37.815383 141.98438 38.005859 C 141.73041 38.132843 141.31752 38.418837 140.74609 38.863281 C 140.17466 39.307726 139.8262 39.593719 139.69922 39.720703 C 139.57223 39.784195 139.22377 40.070188 138.65234 40.578125 L 137.79492 41.339844 C 137.22349 39.435082 135.98484 37.880177 134.08008 36.673828 C 132.23881 35.403987 130.23881 34.769531 128.08008 34.769531 C 125.79436 34.769531 123.5728 35.212673 121.41406 36.101562 C 119.25534 36.990451 117.79511 37.753751 117.0332 38.388672 C 116.33479 38.960101 115.15861 39.943018 113.50781 41.339844 C 112.49194 36.958891 111.47681 34.769531 110.46094 34.769531 z M 184.01758 34.769531 C 183.63662 34.769531 183.16128 34.864211 182.58984 35.054688 L 175.35156 37.435547 C 174.65315 37.626023 174.30273 37.974485 174.30273 38.482422 C 174.30273 38.863375 174.39937 39.340681 174.58984 39.912109 C 174.78032 40.420045 174.96968 41.02229 175.16016 41.720703 C 175.41412 42.355624 175.63764 43.688956 175.82812 45.720703 C 176.0186 47.752449 176.11328 50.292225 176.11328 53.339844 L 176.11328 101.625 C 176.11328 102.95833 176.33485 103.625 176.7793 103.625 C 177.28723 103.625 177.827 103.53032 178.39844 103.33984 L 186.39844 101.7207 C 187.03336 101.59372 187.47846 101.43461 187.73242 101.24414 C 188.04988 101.05366 188.20898 100.64078 188.20898 100.00586 L 188.20898 82.578125 C 191.38359 84.228918 194.68471 85.054688 198.11328 85.054688 C 209.79582 85.054688 215.63672 76.388021 215.63672 59.054688 C 215.63672 51.11818 214.2087 45.085968 211.35156 40.958984 C 208.55791 36.832 204.49349 34.769531 199.16016 34.769531 C 194.46174 34.769531 190.39927 36.419116 186.9707 39.720703 C 185.89134 36.419116 184.90646 34.769531 184.01758 34.769531 z M 243.83789 34.769531 C 237.42519 34.769531 232.37785 37.053571 228.69531 41.625 C 225.01277 46.132937 223.17188 52.229569 223.17188 59.912109 C 223.17188 67.594649 225.01277 73.72154 228.69531 78.292969 C 232.37785 82.800905 237.42519 85.054688 243.83789 85.054688 C 250.25059 85.054688 255.29793 82.800905 258.98047 78.292969 C 262.66301 73.72154 264.50391 67.594649 264.50391 59.912109 C 264.50391 52.229569 262.6308 46.132937 258.88477 41.625 C 255.20223 37.053571 250.1871 34.769531 243.83789 34.769531 z M 368.2207 34.769531 C 361.8715 34.769531 356.7939 37.150204 352.98438 41.912109 C 349.23834 46.610522 347.36523 52.769624 347.36523 60.388672 C 347.36523 68.769625 349.2686 74.991195 353.07812 79.054688 C 356.88764 83.054688 362.09409 85.054688 368.69727 85.054688 C 372.44329 85.054688 376.22172 84.45049 380.03125 83.244141 C 383.84078 81.974299 385.74609 80.705388 385.74609 79.435547 C 385.74609 79.054595 385.64946 78.706133 385.45898 78.388672 L 383.07812 72.673828 C 382.82416 72.165892 382.4757 71.912109 382.03125 71.912109 C 381.77728 71.912109 381.07841 72.198103 379.93555 72.769531 C 378.85618 73.277468 377.42816 73.785032 375.65039 74.292969 C 373.87261 74.800905 371.96729 75.054688 369.93555 75.054688 C 362.95142 75.054688 359.45898 71.086899 359.45898 63.150391 L 385.07812 63.150391 C 385.96701 63.150391 386.539 62.991288 386.79297 62.673828 C 387.11043 62.356368 387.26953 61.721913 387.26953 60.769531 C 387.26953 43.436197 380.91912 34.769531 368.2207 34.769531 z M 73.033203 43.625 C 77.604632 43.625 79.890625 47.181857 79.890625 54.292969 L 64.9375 54.292969 L 64.9375 53.816406 C 65.635913 47.022755 68.33479 43.625 73.033203 43.625 z M 367.55469 43.625 C 372.12611 43.625 374.41211 47.181857 374.41211 54.292969 L 359.45898 54.292969 L 359.45898 53.816406 C 360.1574 47.022755 362.85627 43.625 367.55469 43.625 z M 195.82812 44.292969 C 198.68526 44.292969 200.68526 45.56188 201.82812 48.101562 C 202.97099 50.577753 203.54102 54.388393 203.54102 59.53125 C 203.54102 65.37252 202.93878 69.499411 201.73242 71.912109 C 200.58957 74.324807 198.39826 75.53125 195.16016 75.53125 C 192.68397 75.53125 190.36772 74.927052 188.20898 73.720703 L 188.20898 47.912109 C 190.81216 45.499411 193.35193 44.292969 195.82812 44.292969 z M 243.83789 44.292969 C 246.88551 44.292969 248.94798 45.658513 250.02734 48.388672 C 251.10671 51.055339 251.64648 54.896236 251.64648 59.912109 C 251.64648 65.054967 251.10671 68.958333 250.02734 71.625 C 248.94798 74.228175 246.88551 75.53125 243.83789 75.53125 C 240.79027 75.53125 238.72584 74.197917 237.64648 71.53125 C 236.56712 68.864583 236.02734 64.991475 236.02734 59.912109 C 236.02734 54.896236 236.56712 51.055339 237.64648 48.388672 C 238.72584 45.658513 240.79027 44.292969 243.83789 44.292969 z M 319.68945 44.292969 C 320.45136 44.292969 321.15024 44.355438 321.78516 44.482422 C 322.42008 44.545914 322.99206 44.672805 323.5 44.863281 C 324.00793 45.053757 324.38861 45.21286 324.64258 45.339844 C 324.89655 45.466828 325.18254 45.658141 325.5 45.912109 C 325.88097 46.102585 326.10255 46.197266 326.16602 46.197266 L 326.16602 72.197266 C 325.5311 72.895678 325.05574 73.403243 324.73828 73.720703 C 324.42082 74.038164 323.72194 74.418837 322.64258 74.863281 C 321.62671 75.307725 320.45247 75.53125 319.11914 75.53125 C 316.07152 75.53125 313.97684 74.355065 312.83398 72.005859 C 311.69112 69.656653 311.11914 65.721076 311.11914 60.197266 C 311.11914 54.546472 311.69112 50.48205 312.83398 48.005859 C 314.04033 45.529669 316.32437 44.292969 319.68945 44.292969 z " id="path3366" />\n</svg>\n</div>\n</div>\n<div id="tempo_capa_botao_iniciar" class="trocaCor">Iniciar</div>\n<div id="tempo_capa_botao_creditos_fora">Créditos</div>\n<div id="tempo_capa_botao_creditos">Créditos</div>\n<div id="tempo_capa_logotipo">\n<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="200" height="85" viewBox="0 0 400 170" id="svg3513" version="1.1" inkscape:version="0.91 r13725" sodipodi:docname="logo_svg_code.svg">\n<defs id="defs3515" />\n<sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="1.4" inkscape:cx="121.16736" inkscape:cy="82.854529" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="false" units="px" inkscape:window-width="1360" inkscape:window-height="746" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" />\n<metadata id="metadata3518">\n<rdf:RDF>\n<cc:Work rdf:about="">\n<dc:format>image/svg+xml</dc:format>\n<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n<dc:title></dc:title>\n</cc:Work>\n</rdf:RDF>\n</metadata>\n<g inkscape:label="Camada 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-882.36216)">\n<path d="M 58.466797 0.31640625 C 52.555221 0.31640625 46.646584 4.1991688 42.166016 11.964844 L 0.001953125 84.998047 L 0 84.998047 L 0.001953125 85 L 42.166016 158.0332 C 51.134436 173.5678 65.811572 173.5678 74.777344 158.0332 L 116.94141 85 L 116.94336 84.998047 L 116.93945 84.998047 L 74.777344 11.964844 C 70.29214 4.1991688 64.378373 0.31640625 58.466797 0.31640625 z M 204.68945 32.072266 L 204.68945 50.457031 L 204.68945 51.777344 L 203.54688 51.117188 C 203.51638 51.099987 200.38735 49.322266 196.92578 49.322266 C 188.08449 49.322266 182.5918 56.297847 182.5918 67.523438 C 182.5918 78.921838 187.81258 85.726562 196.5625 85.726562 C 203.31414 85.726562 206.02356 82.443104 206.13281 82.302734 L 206.36133 82.005859 L 206.73242 82.005859 L 206.91211 82.519531 L 207.75391 84.994141 L 215.27148 84.994141 L 215.27148 32.072266 L 204.68945 32.072266 z M 228.36133 32.173828 C 224.47138 32.173828 222.41797 33.880306 222.41797 37.103516 C 222.41797 40.658436 224.08819 42.177734 228 42.177734 C 230.55049 42.177734 233.58203 41.295396 233.58203 37.103516 C 233.58203 34.247126 231.38656 32.173828 228.36133 32.173828 z M 148.19727 35.457031 L 148.19727 84.988281 L 178.10938 84.988281 L 178.10938 75.716797 L 160.05273 75.716797 L 159.29102 75.716797 L 159.29102 74.955078 L 159.29102 64.455078 L 159.29102 63.691406 L 160.05273 63.691406 L 173.36914 63.691406 L 173.36914 55.369141 L 160.05273 55.369141 L 159.29102 55.369141 L 159.29102 54.607422 L 159.29102 45.494141 L 159.29102 44.728516 L 160.05273 44.728516 L 178.10938 44.728516 L 178.10938 35.457031 L 148.19727 35.457031 z M 245.93164 40.791016 L 244.30078 49.433594 L 244.20898 49.90625 L 243.74609 50.025391 L 238.83984 51.335938 L 238.83984 56.552734 L 242.59961 56.552734 L 243.36133 56.552734 L 243.36133 57.314453 L 243.36133 73.869141 L 243.36328 73.869141 C 243.36328 82.842861 245.64101 85.724609 252.73828 85.724609 C 257.00432 85.724609 260.57923 84.371624 261.83594 83.833984 L 261.12891 77.945312 C 260.3933 78.096932 259.27081 78.275391 258.06641 78.275391 C 256.83024 78.275391 253.94531 78.276844 253.94531 73.871094 L 253.94531 57.314453 L 253.94531 56.552734 L 254.70898 56.552734 L 261.38477 56.552734 L 261.38477 50.052734 L 254.70898 50.052734 L 253.94531 50.052734 L 253.94531 49.292969 L 253.94531 40.791016 L 245.93164 40.791016 z M 281.74805 49.029297 C 270.22385 49.029297 265.08008 54.666137 265.08008 67.304688 C 265.07942 80.216037 270.06295 85.724609 281.74805 85.724609 C 293.33317 85.724609 298.27539 80.216037 298.27539 67.304688 C 298.27539 54.666137 293.17956 49.029297 281.74805 49.029297 z M 345.08594 49.103516 C 338.56803 49.103516 333.11689 50.952783 331.42188 51.595703 L 332.57227 58.693359 C 334.27392 58.258339 338.32068 57.353516 342.38477 57.353516 C 347.69101 57.353516 349.12695 58.282469 349.12695 64.824219 L 349.12695 65.634766 L 348.32031 65.583984 C 348.28451 65.582984 344.81842 65.369141 342.75195 65.369141 C 337.56092 65.369141 328.85156 66.766499 328.85156 76.130859 C 328.85156 82.361419 333.19526 85.652344 339.38477 85.652344 C 344.73271 85.652344 348.55074 83.474284 350.1875 80.964844 L 350.51172 80.962891 C 350.51172 83.713341 353.27063 85.140625 355.73438 85.140625 C 357.91474 85.140625 359.61742 84.459806 360.6543 83.166016 C 361.40316 82.235736 361.75259 81.021302 361.63672 79.826172 C 359.12728 79.370632 359.12891 76.271842 359.12891 74.888672 L 359.12891 63.876953 C 359.12891 53.457833 357.17626 49.103516 345.08594 49.103516 z M 323.35352 49.269531 C 316.28207 49.269531 313.61307 53.213408 313.31445 53.960938 L 313.125 54.447266 L 311.74219 50.001953 L 304.27734 50.001953 L 304.27734 84.945312 L 314.85938 84.945312 L 314.85938 60.599609 C 315.07324 60.289729 316.73793 57.958984 321.89453 57.958984 C 323.15653 57.958984 324.74984 58.218401 325.69336 58.394531 L 326.87891 49.554688 C 326.0645 49.436828 324.59698 49.269531 323.35352 49.269531 z M 222.70703 49.982422 L 222.70703 84.988281 L 233.29297 84.988281 L 233.29297 49.982422 L 222.70703 49.982422 z M 58.46875 51.871094 C 76.763805 51.871094 91.596595 66.701249 91.597656 84.998047 C 91.597656 84.998701 91.597656 84.999345 91.597656 85 C 91.596595 103.29349 76.763805 118.12891 58.46875 118.12891 C 40.172379 118.12891 25.341797 103.29244 25.341797 84.998047 L 25.339844 84.998047 C 25.341567 66.70059 40.173033 51.871094 58.46875 51.871094 z M 281.74805 55.457031 C 286.52061 55.457031 287.17773 61.152267 287.17773 67.304688 C 287.17773 73.533257 286.52128 79.298828 281.74805 79.298828 C 276.78546 79.298828 276.10156 73.533257 276.10156 67.304688 C 276.1009 61.152267 276.78546 55.457031 281.74805 55.457031 z M 200.86523 56.550781 C 202.62912 56.550781 204.20269 57.326275 204.26758 57.359375 L 204.68945 57.570312 L 204.68945 58.041016 L 204.68945 76.421875 L 204.68945 76.892578 L 204.26758 77.103516 C 204.20338 77.135316 202.62912 77.912109 200.86523 77.912109 C 197.96382 77.912109 193.09961 76.564054 193.09961 67.521484 C 193.09961 57.342044 199.04307 56.550781 200.86523 56.550781 z M 345.1582 70.701172 C 346.8572 70.701172 348.24189 70.844979 348.29883 70.849609 L 348.98047 70.923828 L 348.98047 71.609375 L 348.98242 71.609375 L 348.98242 74.53125 C 348.98242 74.53125 346.77744 78.523438 342.80273 78.523438 C 340.37473 78.523438 338.52148 77.284445 338.52148 75.109375 C 338.52148 73.783815 339.33485 70.701172 345.1582 70.701172 z M 168.42188 95.585938 L 168.42188 113.95117 L 168.42188 115.27344 L 167.27734 114.61133 C 167.24624 114.59283 164.11911 112.81641 160.6582 112.81641 C 151.81426 112.81641 146.32227 119.79128 146.32227 131.01758 C 146.32227 142.41458 151.54308 149.2207 160.29102 149.2207 C 167.04332 149.2207 169.75469 145.93657 169.86328 145.79688 L 170.0918 145.5 L 170.46484 145.5 L 170.63867 146.01562 L 171.48633 148.49023 L 179.00586 148.49023 L 179.00586 95.585938 L 168.42188 95.585938 z M 386.15234 95.585938 L 386.15234 141.08398 C 386.15234 146.78688 388.12628 149.2207 392.75781 149.2207 C 395.5705 149.2207 397.69732 148.45139 398.90039 146.99609 C 399.73135 145.99359 400.10368 144.69853 399.97656 143.29883 C 397.71409 143.17503 396.73828 141.9234 396.73828 139.1875 L 396.73828 95.585938 L 386.15234 95.585938 z M 374.14453 95.701172 C 370.25192 95.701172 368.19727 97.405073 368.19727 100.62695 C 368.19727 104.18386 369.86484 105.70117 373.7793 105.70117 C 376.32846 105.70117 379.36523 104.81884 379.36523 100.62695 C 379.36523 97.771233 377.16645 95.701172 374.14453 95.701172 z M 250.80859 98.347656 C 244.93625 98.347656 239.15178 98.778526 237.20117 98.941406 L 237.20117 148.67969 C 239.05246 148.86369 244.54781 149.33594 251.53516 149.33594 C 258.85225 149.33594 271.125 147.5024 271.125 135.2207 C 271.125 125.4981 262.01408 122.4617 261.01758 122.2207 L 261.01758 121.94922 C 261.61945 121.75922 268.9375 118.702 268.9375 111.29688 C 268.9375 102.58271 263.00485 98.347656 250.80859 98.347656 z M 251.75586 106.30469 C 256.1775 106.30469 258.71484 108.68388 258.71484 112.83008 C 258.71484 117.03587 256.08831 119.35352 251.31641 119.35352 L 248.61914 119.35352 L 247.85742 119.35352 L 247.85742 118.58984 L 247.85742 107.28516 L 247.85742 106.66211 L 248.46875 106.54102 C 248.51645 106.53042 249.66356 106.30469 251.75586 106.30469 z M 200.875 112.52539 C 189.34881 112.52539 184.20703 118.16288 184.20703 130.80078 C 184.20703 143.71278 189.19387 149.2207 200.875 149.2207 C 212.45813 149.2207 217.40039 143.71218 217.40039 130.80078 C 217.40039 118.16288 212.30452 112.52539 200.875 112.52539 z M 351.04883 112.52539 C 342.27308 112.52539 337.44141 116.6065 337.44141 124.01758 C 337.44141 129.46618 340.19789 132.56354 346.6582 134.36914 C 349.95026 135.32794 353.04688 136.23335 353.04688 138.74805 C 353.04688 141.91835 349.14505 141.91797 346.81836 141.91797 C 343.71897 141.91797 340.27275 140.85637 338.67969 140.29688 L 337.66602 146.95312 C 339.2134 147.55963 343.98468 149.2207 349.88086 149.2207 C 358.71884 149.2207 363.99609 144.8984 363.99609 137.6582 C 363.99675 132.2685 361.02488 129.11902 354.36328 127.45312 C 351.13412 126.61153 348.24414 125.64601 348.24414 123.07031 C 348.24414 120.19341 352.30459 120.19336 354.25586 120.19336 C 356.76265 120.19336 359.30113 120.74577 360.60352 121.07617 L 361.38086 114.04883 C 359.80171 113.56548 355.85781 112.52539 351.04883 112.52539 z M 317.25586 112.66992 C 310.73794 112.66992 305.28487 114.52047 303.58984 115.16406 L 304.74219 122.26367 C 306.44383 121.82857 310.49059 120.92188 314.55469 120.92188 C 319.86092 120.92188 321.29492 121.85078 321.29492 128.39258 L 321.29492 129.20508 L 320.48828 129.15234 C 320.45248 129.15234 316.9864 128.93555 314.91992 128.93555 C 309.7289 128.93555 301.01953 130.33422 301.01953 139.69922 C 301.01953 145.92912 305.36323 149.2207 311.55273 149.2207 C 316.90067 149.2207 320.71871 147.0433 322.35547 144.5332 L 322.67969 144.5332 C 322.67969 147.283 325.43859 148.70898 327.90234 148.70898 C 330.0827 148.70898 331.78734 148.02818 332.82422 146.73438 C 333.57308 145.80408 333.92251 144.58963 333.80664 143.39453 C 331.2972 142.93893 331.29688 139.83953 331.29688 138.45703 L 331.29688 127.44531 C 331.29688 117.02682 329.34617 112.66992 317.25586 112.66992 z M 296.0957 112.83789 C 289.02425 112.83789 286.35526 116.78243 286.05664 117.5293 L 285.86719 118.01562 L 284.48438 113.57031 L 277.02148 113.57031 L 277.02148 148.51172 L 287.60156 148.51172 L 287.60156 124.16797 C 287.81542 123.85807 289.48013 121.52734 294.63672 121.52734 C 295.89872 121.52734 297.49203 121.78679 298.43555 121.96289 L 299.62109 113.12305 C 298.80668 113.00519 297.33916 112.83789 296.0957 112.83789 z M 368.41211 113.50781 L 368.41211 148.51367 L 379.00195 148.51367 L 379.00195 113.50781 L 368.41211 113.50781 z M 200.875 118.95312 C 205.64756 118.95312 206.30664 124.64768 206.30664 130.80078 C 206.30664 137.02938 205.64756 142.79492 200.875 142.79492 C 195.91307 142.79492 195.22852 137.02938 195.22852 130.80078 C 195.22852 124.64768 195.91307 118.95312 200.875 118.95312 z M 164.59766 120.04688 C 166.36088 120.04688 167.93114 120.82362 168 120.85742 L 168.42188 121.06641 L 168.42188 121.53906 L 168.42188 139.91602 L 168.42188 140.38867 L 168 140.59961 C 167.9311 140.63161 166.36088 141.40625 164.59766 141.40625 C 161.69492 141.40625 156.83398 140.05813 156.83398 131.01953 C 156.83398 120.83743 162.7755 120.04688 164.59766 120.04688 z M 247.85742 126.58203 L 248.61914 126.58203 L 251.39258 126.58203 C 256.49157 126.58203 259.29883 129.20862 259.29883 133.97852 C 259.29883 138.81722 256.74446 141.37891 251.90039 141.37891 C 249.7187 141.37891 248.48788 141.07695 248.43359 141.06445 L 247.85742 140.92188 L 247.85742 140.32227 L 247.85742 127.34375 L 247.85742 126.58203 z M 317.32617 134.26953 C 319.02517 134.26953 320.4118 134.41327 320.46875 134.41797 L 321.15039 134.49219 L 321.15039 135.17773 L 321.15039 138.09961 C 321.15039 138.09961 318.94541 142.08984 314.9707 142.08984 C 312.54271 142.08984 310.69141 140.85283 310.69141 138.67773 C 310.69141 137.35223 311.50283 134.26953 317.32617 134.26953 z " transform="translate(0,882.36216)" id="path59" />\n</g>\n</svg>\n</div>\n</div>');

    // // CAPA TEMPLATE TEMPO
    EbsaGame.prepend('<div id="tempo_alerta_arraste" class="animated fadeIn"></div><div id="tempo_miolo">\n<div id="tempo_miolo_cobertura"></div>\n<div id="tempo_miolo_cobertura_instrucoes"></div>\n<div id="tempo_miolo_alerta_audio">\n<div id="tempo_miolo_alerta_audio_icone">\n<span id="tempo_miolo_alerta_audio_txt_on">Áudio ativado</span>\n<span id="tempo_miolo_alerta_audio_txt_off">Áudio desativado</span>\n</div>\n</div>\n<div id="tempo_miolo_cabecalho" class="trocaCor titulo_objeto_tempo">Nome do OED</div>\n<div id="tempo_miolo_cabecalho_base"></div>\n<div id="tempo_grupo_menu_template">\n<div id="tempo_grupo_btn_menu">\n<div id="tempo_btn_menu" class="trocaCor"></div>\n<div id="tempo_btn_menu_fora" class="trocaCor"></div>\n</div>\n<div id="tempo_grupo_btn_home">\n<div id="tempo_btn_home"></div>\n<div id="tempo_btn_home_linha"></div>\n</div>\n<div id="tempo_grupo_btn_instrucoes">\n<div class="tempo_btn_instrucoes_noClick"></div>\n<div id="tempo_btn_instrucoes"></div>\n<div id="tempo_btn_instrucoes_fora"></div>\n<div id="tempo_btn_instrucoes_linha"></div>\n</div>\n<div class="tempo_grupo_btn_mudo_noClick"></div>\n<div id="tempo_grupo_btn_mudo">\n<div id="tempo_btn_mudo"></div>\n<div id="tempo_btn_mudo_linha_off"></div>\n<div id="tempo_btn_mudo_fora"></div>\n<div id="tempo_btn_mudo_linha"></div>\n</div>\n</div>\n<div class="InstrucoesPrincipal"><div id="tempo_quadro_instrucoes">\n<span class="texto_instrucoes"></span>\n<span class="texto_navegabilidade"></span>\n<div id="tempo_area_abas">\n<div id="tempo_instrucoes_btn_fechar" Alt="Fechar." Title="Fechar."></div>\n<div id="tempo_aba_instrucoes">Instruções</div>\n<div id="tempo_aba_navegabilidade" class="abaNavegabilidade">Navegabilidade<div id="tempo_aba_navegabilidade_divisa"></div></div>\n<div id="tempo_instrucoes_guia_aba"></div>\n</div>\n</div>\n</div>\n</div>');
  }

  $('body').append('<div class="errorDisciplina"><img src="img/error_disciplina.png" alt=""></div><div class="errorAno"><img src="img/error_ano.png" alt=""></div>');


  // INSERINDO ELEMENTO DE ABERTURA
  if(CONFIG[0].abertura){
    if(CONFIG[0].abertura == 'sim'){
      $('body').prepend('<div class="abertura"></div>');
    }
  }

})();

// Chama função videoFull somente se objeto for = video

if(CONFIG[0].infoOed.tipo == 'video'){

	$('iframe').attr('src','');

	if( !(CONFIG[0].infoOed.template == 'praticando') ){
		$(".btn_menu").css("display","inherit");
	}

	$('#videoPrincipalOedVideo').append('<source src="conteudo/media/video/video.mp4" type="video/mp4">Seu navegador não suporta vídeo.');

	(function(window, document){
	    var seletor = function(selector,context){return(context||document).querySelector(selector)};
	    var video  = seletor("video"),
	        domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');

	    seletor(".iniciar, .btnIniciar, .praticando_btn_iniciar, #tempo_capa_botao_iniciar").addEventListener("click", function(){
	        seletor('#videoPrincipalOedVideo').style.display = 'block';
	        setTimeout(function(){
	            if(CONFIG[0].infoOed.template == 'praticando'){
						    animacao_saida_capa_praticando();
						  }else{
								  animacao_saida_capa();
						  }
	            video.play();
	            $('#videoPrincipalOedVideo').on('ended', function(){
	            	window.location.href = 'index.html';
	            });
	        },1300);
	    }, false);

	    var fullscreen = function(elem) {
	        var prefix;
	        // Mozilla and webkit intialise fullscreen slightly differently
	        for ( var i = -1, len = domPrefixes.length; ++i < len; ) {
	        prefix = domPrefixes[i].toLowerCase();
	        if(elem[prefix + 'EnterFullScreen']){
	            // Webkit uses EnterFullScreen for video
	            return prefix + 'EnterFullScreen';
	            break;
	        }else if(elem[prefix + 'RequestFullScreen']){
	            // Mozilla uses RequestFullScreen for all elements and webkit uses it for non video elements
	            return prefix + 'RequestFullScreen';
	            break;
	        }
	    }
	    return false;
	    };
	    // Will return fullscreen method as a string if supported e.g. "mozRequestFullScreen" || false;
	    var fullscreenvideo = fullscreen(document.createElement("video"));

	    // Webkit uses "requestFullScreen" for non video elements
	    var fullscreenother = fullscreen(document.createElement("iframe"));

	    // Should add prefixed events for potential ms/o or unprefixed support too

	    seletor(".iniciar, .btnIniciar, .praticando_btn_iniciar, #tempo_capa_botao_iniciar").addEventListener("click", function(){
	        // The test returns a string so we can easily call it on a click event
	        video[fullscreenvideo]();
	        video.style.display = "block";
	    }, false);
	})(this, this.document);
}

var Game = function(){
	animacao_saida_capa();
	document.querySelector(".conteudo").style.background="#ffffff";
};

$('.iniciar, .btnIniciar, .praticando_btn_iniciar, #tempo_capa_botao_iniciar').on('click', function(){
	if(!(CONFIG[0].infoOed.tipo == 'video')){
		new Game();
		chamar_funcao_frame();
	}
});

// ************** Configuração do jogo, arquivo se encontra em js/config.js **************

//Centralizando na tela o container EbsaGame
var centralizaEbsa = function(){
	var	larguraDocumento = $(window).width()
      , alturaDocumento = $(window).height();
	EbsaGame.css({
		'left': (larguraDocumento / 2) - 1024 / 2+'px',
		'top': (alturaDocumento / 2) - 660 / 2+'px'
	});
  $('.abertura').css({
    'left': (larguraDocumento / 2) - 1024 / 2+'px',
    'top': (alturaDocumento / 2) - 660 / 2+'px'
  });
};
centralizaEbsa();
// ************** Criando estrutura do template ***************

//Configurações do OED
(function(){
	//Configuração das disciplinas
	var infoOed = CONFIG[0].infoOed,
		infoCreditos = CONFIG[0].infoCreditos,
    infoTemplate = infoOed.template,
    botaoAudioDesabilitar = infoOed.botaoAudioDesabilitar,
    disciplina = infoOed.disciplina,
		ano = infoOed.ano,
    trocaCor = EbsaGame.find('.trocaCor'),
    trocaCorSvg = EbsaGame.find('.trocaCorSvg'),
    trocaAno = EbsaGame.find('.trocaAno'),
    textoInstrucoes = EbsaGame.find('.InstrucoesPrincipal').find('.texto_instrucoes'),
    textoNavegacao = EbsaGame.find('.InstrucoesPrincipal').find('.texto_navegabilidade'),
    tituloPrincipal = $('title'),
    titulosOED = $('.titulo_objeto, .tituloCapa, .titulo_objeto_praticando, .tempo_capa_titulo, .titulo_objeto_tempo'),
    tituloCredito = $('.quadroCreditos'),
    creditos = $('.creditos'),
    fullCreditos = infoCreditos.join('<br /><br />'),
    nomeDisciplinaCapa = $('.capaNomeDisciplina');

    // Aqui insere as classes(cores) das discplinas de acordo com o template
    // Botoes e Titulos

  // Troca cores
	for(var i = 0; i < trocaCor.length; i++){
		// var selfClass = $(trocaCor[i]).attr('class').replace('akpalo_','').replace(' trocaCor','');
		if(infoTemplate == 'praticando'){
			var selfTipoCor = $(trocaCor[i]).attr('data-cor-tipo');
			$(trocaCor[i]).addClass(infoTemplate+'_cor_'+selfTipoCor+'_ano'+ano);
			$(trocaCor[i]).removeClass('trocaCor');
		}else if(infoTemplate == 'tempo'){
      $(trocaCor[i]).addClass(infoTemplate+'_cor_'+'disciplina'+'_'+disciplina);
      $(trocaCor[i]).removeClass('trocaCor');
    }else{
			var selfClass = $(trocaCor[i]).attr('data-cor');
			$(trocaCor[i]).addClass(infoTemplate+'_'+selfClass+'_'+disciplina);
			$(trocaCor[i]).removeClass('trocaCor');
		}
	}

  // Títulos
  titulosOED.html(infoOed.titulo);
  tituloPrincipal.text($('.titulo_objeto, .titulo_objeto_tempo').text());
  // PROJETO OU COLEÇÃO
  tituloCredito.html(infoOed.tituloCreditoAkpalo);
  // Nome da disciplina
  nomeDisciplinaCapa.html(infoOed.disciplina);

  // Inserindo assentuação no titulo disciplina
  if(disciplina == 'portugues'){
    $('.capaNomeDisciplina').text('Português');
    $('body').addClass("akpalo_fundo_portugues");
  }else if(disciplina == 'matematica'){
    $('.capaNomeDisciplina').text('matemática');
    $('body').addClass("akpalo_fundo_matematica");
  }else if(disciplina == 'geografia'){
    $('.capaNomeDisciplina').text('geografia');
    $('body').addClass("akpalo_fundo_geografia");
  }else if(disciplina == 'historia'){
    $('.capaNomeDisciplina').text('história');
    $('body').addClass("akpalo_fundo_historia");
  }else if(disciplina == 'ciencias'){
    $('.capaNomeDisciplina').text('ciências');
    $('body').addClass("akpalo_fundo_ciencias");
  }else if(disciplina == 'ingles'){
    $('.capaNomeDisciplina').text('inglês');
    $('body').addClass("akpalo_fundo_matematica");
  }

  // Troca cor dos svg
  if(infoTemplate == 'tempo'){
    for(var i = 0; i < trocaCorSvg.length; i++){
      $(trocaCorSvg[i]).attr('class',infoTemplate+'_borda_'+'disciplina'+'_'+disciplina);
    }
  }


	// Função para inserir texto de instrução e texto de navegação
	textoInstrucoes.html(infoOed.instrucoes);
	textoNavegacao.html(infoOed.navegacao);

	// Senão tiver nenhum texto em navegação, não irá aparecer o mesmo.
	if(!(infoOed.navegacao.length > 1)){
		localStorage.setItem('novaNavegacao','sem navegacao');
		$('.abaNavegabilidade').hide();
	}

	// Inserindo Creditos
	creditos.append(fullCreditos);


	switch(infoTemplate){
		case 'akpalo':
			var disciplina = CONFIG[0].infoOed.disciplina;
			// VERIFICA DISCPLINAS PARA INSERIR UMA DEFAULT
			if( !(disciplina == 'portugues' || disciplina == 'matematica' || disciplina == 'historia' || disciplina == 'geografia' || disciplina == 'ciencias') ){
				$('.errorDisciplina').show();
			}else{
				$('.errorDisciplina').hide();
			}

			// Ajustando os créditos
			if(disciplina == 'portugues'){
				$('.disciplinaCreditos').html('<br />Língua Portuguesa').parent().css('top','18px');
			}

      $('body').prepend('<div id="loading"><img src="img/loader.gif" alt="Carregando"></div>');

			break;

		case 'apoema':

			var disciplina = CONFIG[0].infoOed.disciplina;
			// VERIFICA DISCPLINAS PARA INSERIR UMA DEFAULT
			if( !(disciplina == 'gramatica' )){
				$('.errorDisciplina').show();
			}else{
				$('.errorDisciplina').hide();
			}

			// FUNÇÕES TEMPLATE APOEMA
			var template = $('.Template-apoema'),
				capa = template.children('.capa'),
				creditos = capa.children('#creditos'),
				btnCredito = capa.children('#navHeader').children('.btnCreditos');


			// AJUSTANDO CSS DO TITULO DO OED
			$('.titulo_disciplina').css({
				'z-index':'0',
				'left':'500px',
				'top':'0px',
				'background':'none'
			});
			$('.titulo_objeto').addClass('titulo_apoema');
			$('.InstrucoesPrincipal').addClass('InstrucoesPrincipal-apoema');
			// LIMITANDO DIV COM OVERFLOW DOS CREDITOS
			capa.css('overflow','hidden');
			// INSERINDO NOME DO PROJETO NOS CREDITOS
			creditos.children('h2').append(CONFIG[0].infoOed.disciplina);

			var textCreditos = creditos.children('h2').text();
			if(textCreditos == 'portugues'){
				creditos.children('h2').text('Português');
			}else if(textCreditos == 'matematica'){
				creditos.children('h2').text('Matemática');
			}else if(textCreditos == 'historia'){
				creditos.children('h2').text('História');
			}else if(textCreditos == 'ciencias'){
				creditos.children('h2').text('Ciências');
			}else if(textCreditos == 'ingles'){
				creditos.children('h2').text('Inglês');
			}else if(textCreditos == 'gramatica'){
				creditos.children('h2').text('Gramática');
			}

			creditos.children('h2').prepend(CONFIG[0].infoOed.tituloCreditoApoema+' ');

			$('body').css('background','url(../img/bgBody_apoema.png) repeat');

			// AQUI: AÇÕES DOS CREDITOS, ALÉM DE SUBIR E DESCER.
			var acaoCreditos = function(){
				var textoCreditos = creditos.children('.boxText').children('.text-creditos');

				// ANIMAÇÃO TEXTO DOS CRÉDITOS SUBINDO
				var subirTexto = function(){
					var alturaBoxCreditos = textoCreditos.height();

					textoCreditos.animate({
						'marginTop': -alturaBoxCreditos+'px'
					}, 60000, 'linear', function(){
						textoCreditos.css('margin-top','370px');
						subirTexto();
					});
				}, stopTexto = function(){
					setTimeout(function(){
						textoCreditos.stop().css('margin-top','370px');
					}, 1000);
				};

				if(!(creditos.is(':visible'))){

					creditos.show().addClass('magictime slideLeftRetourn');
					setTimeout(function(){
						creditos.removeClass('magictime slideLeftRetourn');
					}, 1000);

					subirTexto();
				}else{
					stopTexto();
					creditos.addClass('magictime slideLeft');
					setTimeout(function(){
						creditos.removeClass('magictime slideLeft').hide();
					}, 1000);
				}
			};

			// FUNÇÃO DO BOTÃO NO BOTÃO CRÉDITOS
			$(btnCredito).on('click', function(){
				acaoCreditos();
			});
			$(creditos).on('click', function(){
				acaoCreditos();
			});

      $('body').prepend('<div id="loading">'+
        '<div id="tempo_preloader">'+
        '<div class="sk-folding-cube">'+
        '  <div class="sk-cube1 sk-cube"></div>'+
        '  <div class="sk-cube2 sk-cube"></div>'+
        '  <div class="sk-cube4 sk-cube"></div>'+
        '  <div class="sk-cube3 sk-cube"></div>'+
        '</div>'+
        '</div></div>'
      );

			break;

		case 'praticando':
			var disciplina = CONFIG[0].infoOed.disciplina;
			var ano = CONFIG[0].infoOed.ano;
			// VERIFICA DISCPLINAS PARA INSERIR UMA DEFAULT
			if( !(disciplina == 'matematica') ){
				$('.errorDisciplina').show();
			}else{
				$('.errorDisciplina').hide();
			}

      $('body').prepend('<div id="loading"><img src="img/loader.gif" alt="Carregando"></div>');

			// VERIFICA ANO PARA INSERIR UMA DEFAULT
			if( ano >= 0 && ano <= 5 ){
				$('.errorAno').show();
			}else{
				$('.errorAno').hide();
			}

			// Ajustando os créditos
			if(disciplina == 'portugues'){
				$('.disciplinaCreditos').html('<br />Língua Portuguesa').parent().css('top','18px');
			}

			$('body').css({
  		  'background-image':'url("img/praticando_fundo_body.png")',
  		  'background-repeat':'repeat',
  		  'background-size':'auto',
  		  'background-position':'center center',
  		  'overflow':'hidden',
  		  'font-family':'Museo500-Regular',
  		  '-webkit-user-select':'none',
  		  '-moz-user-select':'none',
  		  '-ms-user-select':'none',
  		  'user-select':'none'
		  });
  		$('.EbsaGame').css({
        'display':'none',
        'box-shadow': '0px 0px 20px #888888'
      });

  		$('.titulo_objeto').css({
  		  'width':'906px',
  		  'position':'absolute',
  		  'background-color': 'transparent',
  		  'position': 'relative',
  		  'padding': '0',
  		  'font-size': '28px',
  		  'color': '#ffffff',
  		  'box-shadow': 'none',
  		  'height': 'auto',
  		  'line-height': '70px',
  		  'font-weight': 'bold',
  		  'font-family': 'Museo500-Regular',
  		  'border': 'none',
  		  'text-indent': '24px',
  		  'left': '0',
  		  'top': '0',
  		  'border-top-left-radius': 'none',
  		  'border-top-right-radius': 'none',
  		  'border-bottom-right-radius': 'none',
  		  'border-bottom-left-radius': 'none',
  		  'z-index': '1',
  		  'float': 'none',
  		  'display': 'block'
  		});

  		$('.quadro_instrucoesT').find('.content').css({
  			'box-shadow': 'none',
  			'border-radius': '0px',
  			'padding':'0',
  			'display':'none',
  			'background':'transparent'
  		});

  		$('.quadro_instrucoesT').css('display','none');

    case 'tempo':

    if(botaoAudioDesabilitar){
      $('#tempo_grupo_btn_mudo').css({
        'opacity': '0.4'
      });
      $('.tempo_grupo_btn_mudo_noClick').show();
    }

    if( !(disciplina == 'portugues' || disciplina == 'matematica' || disciplina == 'historia' || disciplina == 'geografia' || disciplina == 'ciencias' || disciplina == 'espanhol' || disciplina == 'ingles') ){
        $('.errorDisciplina').show();
      }else{
        $('.errorDisciplina').hide();
      }


    $('body').css({
      'background-image':'url("img/tempo_fundo_body.png")',
      'background-repeat':'repeat',
      'background-size':'auto',
      'background-position':'center center',
      'overflow':'hidden'
    });

    $('.EbsaGame').css({
      'box-shadow':'0px 0px 20px  #888888',
      'display':'none'
    });

    $('body').prepend('<div id="loading"><img src="img/loader.gif" alt="Carregando"></div>');

		break;
	}

  // Função troca ano
  if(infoTemplate == 'akpalo'){
    var selfClassAno = $(trocaAno).attr('class').replace('akpalo_','').replace('_contagem','').replace(' trocaAno','');

    $(trocaAno).addClass(infoTemplate+'_'+selfClassAno+'_'+ano+'_'+disciplina);
    $(trocaAno).removeClass('trocaAno');
  }else{
    trocaAno.html(ano);
  }

})();

// ************** Redimensiona Elemento ***************
function redimensionaElemento() {
  var elemento = EbsaGame;
	var abertura = $('.abertura');

    var larguraJanela = $(window).width();
    var alturaJanela = $(window).height();
    var larguraInicialElemento = 1024;
    var alturaInicialElemento = 660;

    var relacaoAspecto = larguraInicialElemento / alturaInicialElemento;

	if(alturaJanela <= larguraJanela) {
		var alturaRedimensionada = alturaJanela;
		var larguraRedimensionada = alturaRedimensionada * relacaoAspecto;
		if (larguraJanela < larguraRedimensionada) {
			var larguraRedimensionada = larguraJanela;
			var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
		}
	}else {
		var larguraRedimensionada = larguraJanela;
		var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
	}

	var escalaLargura = ((larguraRedimensionada / larguraInicialElemento) * 100) / 100.1;
	var escalaAltura = ((alturaRedimensionada / alturaInicialElemento) * 100) / 100.1;
	if(escalaLargura <= 1){
		elemento.css({
      '-webkit-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
      '-moz-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
      '-ms-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
      '-o-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
      'transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')'
    });
    abertura.css({
			'-webkit-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-moz-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-ms-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-o-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')'
		});
	}else{
		elemento.css({
      /*'-webkit-transform': 'scale(1.1))',
      '-moz-transform': 'scale(1.1)',
      '-ms-transform': 'scale(1.1)',
      '-o-transform': 'scale(1.1)',
      'transform': 'scale(1.1)'*/
      '-webkit-transform': 'scale(1))',
      '-moz-transform': 'scale(1)',
      '-ms-transform': 'scale(1)',
      '-o-transform': 'scale(1)',
      'transform': 'scale(1)'
    });

    abertura.css({
			/*'-webkit-transform': 'scale(1.1))',
			'-moz-transform': 'scale(1.1)',
			'-ms-transform': 'scale(1.1)',
			'-o-transform': 'scale(1.1)',
			'transform': 'scale(1.1)'*/
			'-webkit-transform': 'scale(1))',
			'-moz-transform': 'scale(1)',
			'-ms-transform': 'scale(1)',
			'-o-transform': 'scale(1)',
			'transform': 'scale(1)'
		});
	}
};
redimensionaElemento();

var centerError = function(){
	var alturaTela = $(window).height();
	$('.errorDisciplina').children('img').css({
		'margin-top': (alturaTela / 2) - $('.errorDisciplina').children('img').height() / 2 +'px'
	});
};

(function(){
  centerError();
});

$(window).resize(function(){
	centralizaEbsa();
	redimensionaElemento();
	centerError();
});


localStorage.clear();
localStorage.removeItem("novaInstrucao");
localStorage.removeItem("novaNavegacao");
