if(CONFIG[0].infoOed.template == 'praticando'){

	var menus_ativados;
	function animacao_entrada_capa_praticando(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			document.querySelector("#praticando_btn_creditos").style. letterSpacing="-1px";
			document.querySelector("#praticando_area_abas").style. letterSpacing="-1px";
			document.querySelector("#praticando_cabecalho_linha_3").style. letterSpacing="-1px";
			document.querySelector(".praticando_capa_rotulo_colecao_sub").style. letterSpacing="4px";
		}
		menus_ativados=1;
		document.querySelector(".EbsaGame").style.display="inherit";
		//
		$(".EbsaGame").addClass("animacao puffIn");
		//
		setTimeout(function(){
			document.querySelector("#praticando_capa_chanfro_1").className="anima_capa_chanfro_1 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_2").className="anima_capa_chanfro_2 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_3").className="anima_capa_chanfro_2 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_4").className="anima_capa_chanfro_2 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_5").className="anima_capa_chanfro_3 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_6").className="anima_capa_chanfro_3 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_7").className="anima_capa_chanfro_3 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_8").className="anima_capa_chanfro_4 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_9").className="anima_capa_chanfro_5 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_10").className="anima_capa_chanfro_6 bounceInUp";
			document.querySelector("#praticando_capa_chanfro_11").className="anima_capa_chanfro_4 bounceInUp";

		}, 300);
		$("#praticando_capa_rotulo_colecao, #praticando_capa_rotulo_anuario").addClass("animacao zoomInLeft");
		$("#praticando_capa_rotulo_titulo, #praticando_capa_logotipo").addClass("animacao zoomInRight");
		setTimeout(function(){
			$(".EbsaGame").removeClass("animacao puffIn");
		}, 1000);
	}
	function animacao_saida_capa_praticando(){
		$(".conteudo").show().addClass("animacao zoomInUp");
		if( !(CONFIG[0].infoOed.tipo == 'video') ){

			$("#praticando_capa").addClass("animacao_1 bounceOutDown");
				document.querySelector("#praticando_capa_chanfro_1").className="anima_capa_chanfro_1 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_2").className="anima_capa_chanfro_2 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_3").className="anima_capa_chanfro_2 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_4").className="anima_capa_chanfro_2 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_5").className="anima_capa_chanfro_3 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_6").className="anima_capa_chanfro_3 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_7").className="anima_capa_chanfro_3 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_8").className="anima_capa_chanfro_4 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_9").className="anima_capa_chanfro_5 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_10").className="anima_capa_chanfro_6 bounceOutDown";
				document.querySelector("#praticando_capa_chanfro_11").className="anima_capa_chanfro_4 bounceOutDown";
			$("#praticando_capa_rotulo_colecao, #praticando_capa_rotulo_anuario").removeClass("animacao zoomInLeft");
			$("#praticando_capa_rotulo_titulo, #praticando_capa_logotipo").removeClass("animacao zoomInRight");
			$("#praticando_capa_rotulo_colecao, #praticando_capa_rotulo_anuario").addClass("animacao_1 zoomOutLeft");
			$("#praticando_capa_rotulo_titulo, #praticando_capa_logotipo").addClass("animacao_1 zoomOutRight");
		}

		setTimeout(function(){
			if(menus_ativados==1){
				animacao_saida_menus();
			}
		}, 4000);

	}
	$("#praticando_btn_menu").click(function() {
		menus_ativados=0;
		document.querySelector("#praticando_btn_menu_fora").style.display="inherit";
		document.querySelector("#praticando_grupo_btn_reiniciar").className="animacao_600s0 bounceInUp";
		document.querySelector("#praticando_grupo_btn_instrucoes").className="animacao_600s300 bounceInUp";
		setTimeout(function(){
			$("#praticando_cabecalho_linha_1").removeClass("animacao_linha_3_volta");
			$("#praticando_cabecalho_linha_2").removeClass("animacao_linha_4_volta");
			$("#praticando_cabecalho_linha_3").removeClass("animacao_linha_5_volta");
			$("#praticando_cabecalho_linha_4").removeClass("animacao_linha_6_volta");
			document.querySelector(".titulo_objeto").className="titulo_objeto animacao_1s0 bounceInRight";
			$("#praticando_cabecalho_linha_1").addClass("animacao_linha_3");
			$("#praticando_cabecalho_linha_2").addClass("animacao_linha_4");
			$("#praticando_cabecalho_linha_3").addClass("animacao_linha_5");
			$("#praticando_cabecalho_linha_4").addClass("animacao_linha_6");
		}, 300);
	});
	$("#praticando_btn_menu_fora, #praticando_grupo_cabecalho").click(function() {
		animacao_saida_menus();
	});
	$("#praticando_btn_instrucoes").click(function() {

		dadosDeInstrucaoNavegacao();


		$('.quadro_instrucoesT').css('display','table'); //By Tiago Lima
		$('.quadro_instrucoesT').find('.content').css('display','block'); //By Tiago Lima
		setTimeout(function(){
			$('.quadro_instrucoesT').find('.content').css('background','#fff'); //By Tiago Lima
		},1300);

		menus_ativados=0;
		document.querySelector("#praticando_quadro_instrucoes").style.display="inherit";
		document.querySelector("#praticando_btn_instrucoes_fora").style.display="inherit";
		$("#praticando_quadro_instrucoes").removeClass("animacao_0s1 bounceOutUp bounce");
		$("#praticando_quadro_instrucoes").addClass("animacao_0s1 bounceInDown");
		$("#img_teste").removeClass("animacao_blur_out");
		$("#img_teste").addClass("animacao_blur_in");
		// $("#praticando_quadro_instrucoes").css("margin-top", Math.round($("#praticando_quadro_instrucoes").outerHeight()/2-30)*(-1)+"px");
			// console.log(document.querySelector("#praticando_quadro_instrucoes").style.marginTop);
	});
	$("#praticando_btn_instrucoes_fora, #praticando_instrucoes_btn_fechar").click(function() {
		$('.quadro_instrucoesT').find('.content').css('background','transparent'); //By Tiago Lima
		menus_ativados=0;
		$("#praticando_quadro_instrucoes").removeClass("animacao_0s1 bounceInDown bounce");
		$("#praticando_quadro_instrucoes").addClass("animacao_0s1 bounceOutUp");
		setTimeout(function(){
			$('.quadro_instrucoesT').css('display','none'); //By Tiago Lima
			$('.quadro_instrucoesT').find('.content').css('display','none'); //By Tiago Lima
			document.querySelector("#praticando_btn_instrucoes_fora").style.display="none";
			document.querySelector("#praticando_quadro_instrucoes").style.display="none";
		}, 1300);
		$("#img_teste").removeClass("animacao_blur_in");
		$("#img_teste").addClass("animacao_blur_out");
	});
	$("#praticando_aba_navegabilidade").click(function() {
			document.querySelector(".texto_instrucoes").style.display="none";
			document.querySelector(".texto_navegabilidade").style.display="inherit";
			$("#praticando_quadro_instrucoes").removeClass("animacao_0s1 bounceInUp");
			document.querySelector("#praticando_instrucoes_guia_aba").style.left="282px";
		setTimeout(function(){
		}, 1000);
	});
	$("#praticando_aba_instrucoes").click(function() {
			document.querySelector(".texto_instrucoes").style.display="inherit";
			document.querySelector(".texto_navegabilidade").style.display="none";
			$("#praticando_quadro_instrucoes").removeClass("animacao_0s1 bounceInUp bounce");
			document.querySelector("#praticando_instrucoes_guia_aba").style.left="80px";
		setTimeout(function(){
		}, 1000);
	});
	$("#praticando_btn_reiniciar").click(function() {
		menus_ativados=0;
		$(".EbsaGame").addClass("animacao_0s1 flipOutY");
		setTimeout(function(){
			location.reload();
		 }, 1000);
		setTimeout(function(){
			$("#praticando_quadro_instrucoes").removeClass("animacao_500s0 bounce");
		}, 1000);
	});
	$("#praticando_btn_iniciar").click(function() {
		$("#praticando_creditos").stop();
		if( !(CONFIG[0].infoOed.tipo == 'video') ){
			animacao_saida_capa_praticando();
		}
		document.querySelector("#praticando_grupo_miolo").style.display="inherit";
		setTimeout(function(){
			document.querySelector("#praticando_capa").style.display="none";
		}, 2100);
	});
	$("#praticando_btn_iniciar").mouseover(function() {
			$("#praticando_btn_iniciar").stop();
			$("#praticando_capa_linha_9").stop();
			$( "#praticando_btn_iniciar" ).animate({
				right:"76px"
			  }, 800, function() {
			});
			$( "#praticando_capa_linha_9" ).animate({
				width:"202px"
			  }, 300, function() {
			});
		// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		// 	$("#praticando_creditos").stop();
		// 	if( !(CONFIG[0].infoOed.tipo == 'video') ){
		// 		animacao_saida_capa_praticando();
		// 	}
		// 	document.querySelector("#praticando_grupo_miolo").style.display="inherit";
		// 	setTimeout(function(){
		// 		document.querySelector("#praticando_capa").style.display="none";
		// 	}, 2100);
		// }
	});
	$("#praticando_btn_iniciar").mouseout(function() {
			$("#praticando_btn_iniciar").stop();
			$("#praticando_capa_linha_9").stop();
			$( "#praticando_btn_iniciar" ).animate({
				right:"96px"
			  }, 800, function() {
			  });
			$( "#praticando_capa_linha_9" ).animate({
				width:"220px"
			  }, 300, function() {
			});
	});
	$("#praticando_btn_creditos").click(function() {
		document.querySelector("#praticando_capa_painel_creditos").style.display="inherit";
		document.querySelector("#praticando_capa_painel_creditos").className="animacao_0s1 fadeInUp";
		setTimeout(function(){
			$( "#praticando_capa_rotulo_titulo" ).animate({
				top:"120px"
			  }, 600, function() {
				document.querySelector("#praticando_btn_creditos_fora").style.display="inherit";
			  });
		}, 300);
		altura_creditos=$("#praticando_creditos").height();
		document.querySelector("#praticando_creditos").style.top="312px";
		console.log(altura_creditos);
		$("#praticando_creditos").animate({top:(altura_creditos*-1)+'px'},(altura_creditos/20)*1100, "linear", function(){praticando_subir_creditos();});
	});
	$("#praticando_btn_creditos").mouseover(function() {
			$("#praticando_btn_creditos").stop();
			$("#praticando_btn_creditos_fora").stop();
			$( "#praticando_btn_creditos" ).animate({
				right:"144px"
			  }, 800, function() {
			});
			$( "#praticando_btn_creditos_fora" ).animate({
				width:"144px"
			  }, 800, function() {
			});
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				document.querySelector("#praticando_capa_painel_creditos").style.display="inherit";
				document.querySelector("#praticando_capa_painel_creditos").className="animacao_0s1 fadeInUp";
				setTimeout(function(){
					$( "#praticando_capa_rotulo_titulo" ).animate({
						top:"120px"
					  }, 600, function() {
						document.querySelector("#praticando_btn_creditos_fora").style.display="inherit";
					  });
				}, 300);
				altura_creditos=$("#praticando_creditos").height();
				document.querySelector("#praticando_creditos").style.top="312px";
				console.log(altura_creditos);
				$("#praticando_creditos").animate({top:(altura_creditos*-1)+'px'},(altura_creditos/20)*1100, "linear", function(){praticando_subir_creditos();});
			}
	});
	$("#praticando_btn_creditos").mouseout(function() {
			$("#praticando_btn_creditos").stop();
			$("#praticando_btn_creditos_fora").stop();
			$( "#praticando_btn_creditos" ).animate({
				right:"122px"
			  }, 800, function() {
			});
			$( "#praticando_btn_creditos_fora" ).animate({
				width:"122px"
			  }, 800, function() {
			});
	});
	function praticando_subir_creditos(){
		altura_creditos=$("#praticando_creditos").height();
		document.querySelector("#praticando_creditos").style.top="312px";
		console.log(altura_creditos);
		$("#praticando_creditos").animate({top:(altura_creditos*-1)+'px'},(altura_creditos/20)*1100, "linear", function(){praticando_subir_creditos();});
	}
	$("#praticando_btn_creditos_fora, #praticando_capa_painel_creditos").click(function() {
		$("#praticando_creditos").stop();
		document.querySelector("#praticando_btn_creditos_fora").style.display="none";
		document.querySelector("#praticando_capa_painel_creditos").style.display="inherit";
		document.querySelector("#praticando_capa_painel_creditos").className="animacao_0s1 fadeOutDown";
		$( "#praticando_capa_rotulo_titulo" ).animate({
			top:"232px"
			}, 1000, function() {
			});
	});

	function animacao_saida_menus(){
		if(menus_ativados==0){
			$("#img_teste").removeClass("animacao_blur_in");
			$("#img_teste").addClass("animacao_blur_out");
		}
		if(menus_ativados==1){
			$("#img_teste").removeClass("animacao_blur_in");
			$("#img_teste").removeClass("animacao_blur_out");
		}
		menus_ativados=0;
		document.querySelector("#praticando_cobertura_menus").style.display="inherit";
		document.querySelector("#praticando_btn_menu_fora").style.display="none";
		document.querySelector("#praticando_btn_instrucoes_fora").style.display="none";
		document.querySelector("#praticando_grupo_btn_reiniciar").className="animacao_600s300 bounceOutDown";
		document.querySelector("#praticando_grupo_btn_instrucoes").className="animacao_600s0 bounceOutDown";
		setTimeout(function(){
			$("#praticando_quadro_instrucoes").removeClass("animacao_0s1 bounceInUp");
			$("#praticando_cabecalho_linha_1").removeClass("animacao_linha_3");
			$("#praticando_cabecalho_linha_2").removeClass("animacao_linha_4");
			$("#praticando_cabecalho_linha_3").removeClass("animacao_linha_5");
			$("#praticando_cabecalho_linha_4").removeClass("animacao_linha_6");
			document.querySelector(".titulo_objeto").className="titulo_objeto animacao_500s0 bounceOutRight";
			$("#praticando_quadro_instrucoes").addClass("animacao bounceOutDown");
			$("#praticando_cabecalho_linha_1").addClass("animacao_linha_3_volta");
			$("#praticando_cabecalho_linha_2").addClass("animacao_linha_4_volta");
			$("#praticando_cabecalho_linha_3").addClass("animacao_linha_5_volta");
			$("#praticando_cabecalho_linha_4").addClass("animacao_linha_6_volta");
		}, 300);
		setTimeout(function(){
			$("#praticando_quadro_instrucoes").css('display','none').removeClass("animacao bounceOutDown animacao_0s1 bounceOutDown");
			$("#praticando_cobertura_menus").css('display','none');
		}, 1300);
	}

}
