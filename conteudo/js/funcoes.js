'use strict';
var videos_completos;
var videos_completos="nao";
var popupFinal = false;
var final = false;
var startGame = {

	verificaTelas: function(){
		var telasJogadas = $('.telaJogada');
		if(telasJogadas.length == 6){
			if(popupFinal == false){
				startGame.popupInicial('Clique nas setas vermelhas para acompanhar <br />as animações do ciclo.', function(){
					videos_completos="sim"
					narracao4.stop().play('text3');
                    final = true;
					parar_videos_antes();
				});
				popupFinal = true;
			}		

			$('.abrir').show().off('click').on('click', function(){
				var id = this.id;
                if(final){
                    sound.volume(.1);
                }
				$(this).addClass('telaVista');
				if(id == 'fase1'){
					$('.fase1').fadeIn(1000);
					$('.fase1').children('.contentVideo').show().addClass('bounceIn animated');
					setTimeout(function(){
						$('.fase1').children('.contentVideo').removeClass('bounceIn animated');
					}, 1000);
					$('.fase1').children('.contentVideo').on('click', function(){
					$('.fase1').children('.contentVideo').children('video')[0].src="media/video/evaporacao_t_leg.mp4";
					$('.fase1').children('.contentVideo').children('video')[0].play();
						$('.fase1').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase1').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase1').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
					parar_videos_antes();
					$('.fase1').children('.contentVideo').children('video')[0].play();
					$('.fase1').children('.contentVideo').children('video').on('ended', function(){
						$('.fase1').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase1').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase1').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
				}else if(id == 'fase2'){
					$('.fase2').fadeIn(1000);
					$('.fase2').children('.contentVideo').show().addClass('bounceIn animated');
					setTimeout(function(){
						$('.fase2').children('.contentVideo').removeClass('bounceIn animated');
					}, 1000);
					$('.fase2').children('.contentVideo').on('click', function(){
						$('.fase2').children('.contentVideo').children('video')[0].play();
						$('.fase2').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase2').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase2').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
					parar_videos_antes();
					$('.fase2').children('.contentVideo').children('video')[0].play();
					$('.fase2').children('.contentVideo').children('video').on('ended', function(){
						$('.fase2').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase2').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase2').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
				}else if(id == 'fase3'){
					$('.fase3').fadeIn(1000);
					$('.fase3').children('.contentVideo').show().addClass('bounceIn animated');
					setTimeout(function(){
						$('.fase3').children('.contentVideo').removeClass('bounceIn animated');
					}, 1000);
					$('.fase3').children('.contentVideo').on('click', function(){
						$('.fase3').children('.contentVideo').children('video')[0].play();
						$('.fase3').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase3').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase3').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
					parar_videos_antes();
					$('.fase3').children('.contentVideo').children('video')[0].play();
					$('.fase3').children('.contentVideo').children('video').on('ended', function(){
						$('.fase3').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase3').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase3').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
				}else if(id == 'fase4'){
					$('.fase4').fadeIn(1000);
					$('.fase4').children('.contentVideo').show().addClass('bounceIn animated');
					setTimeout(function(){
						$('.fase4').children('.contentVideo').removeClass('bounceIn animated');
					}, 1000);
					$('.fase4').children('.contentVideo').on('click', function(){
						$('.fase4').children('.contentVideo').children('video')[0].play();
						$('.fase4').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase4').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase4').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
					parar_videos_antes();
					$('.fase4').children('.contentVideo').children('video')[0].play();
					$('.fase4').children('.contentVideo').children('video').on('ended', function(){
						$('.fase4').children('.contentVideo').addClass('bounceOut animated');
						setTimeout(function(){
							$('.fase4').children('.contentVideo').removeClass('bounceOut animated').hide();
							$('.fase4').fadeOut(1000);
							if($('.telaVista').length == 4){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							}
						}, 1000);
					});
				}
			});				
		}
	},

	popupInicial: function(text, audio){
		var popup = $('.popupInicial');
		var content = popup.children('.content');
		var close = content.children('.close');

		content.children('p').html(text);
		popup.fadeIn(1000);
		setTimeout(function(){
			content.show().addClass('lightSpeedIn animated');
			setTimeout(function(){
				audio();
				content.removeClass('lightSpeedIn animated');
			}, 1000);
		}, 1000);

		close.on('click', function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			narracao1.stop();
			document.querySelector(".popupInicial").style.display="none";
		}else{			
			//
			setTimeout(function(){
				$('.fase1').children('.contentVideo').children('video')[0].pause();
				$('.fase2').children('.contentVideo').children('video')[0].pause();
				$('.fase3').children('.contentVideo').children('video')[0].pause();
				$('.fase4').children('.contentVideo').children('video')[0].pause();
				//alert("Parando!");
				$('.fase1').children('.contentVideo').children('video')[0].currentTime = 0;
				$('.fase2').children('.contentVideo').children('video')[0].currentTime = 0;
				$('.fase3').children('.contentVideo').children('video')[0].currentTime = 0;
				$('.fase4').children('.contentVideo').children('video')[0].currentTime = 0;
			}, 200);			
			//

            if(final){
                sound.volume(.1);
            }
			parar_videos_antes();
			narracao1.stop();
			narracao2.stop();
			narracao3.stop();
			narracao4.stop();
			var that = $(this);
			$(that).parent().addClass('lightSpeedOut animated');
			setTimeout(function(){
				$(that).parent().parent().fadeOut(1000);
				$('.setaGame1').addClass('bounce1').css('opacity','1');
				setTimeout(function(){
					$('.setaGame2').addClass('bounce2').css('opacity','1');
				}, 500);
				setTimeout(function(){
					$('.setaGame3, .setaGame3_1').addClass('bounce').css('opacity','1');
				}, 1000);
				setTimeout(function(){
					$('.setaGame4').addClass('bounce').css('opacity','1');
					$('.setaGame4_1').addClass('bounce2').css('opacity','1');
				}, 1500);
				$(that).parent().removeClass('lightSpeedOut animated').hide();
			}, 1000);
			}
		});
	},

	abrirPerguntas: function(){
		var abrir = $('.abrir');

		abrir.off('click').on('click', function(){
			toc.stop().play();
			var id = this.id;
			$(this).hide();
            if(final){
                sound.stop().fadeIn(0.1,1000);
            }
			if($(this).hasClass('openFase1')){
				setTimeout(function(){
					narracao1.stop().play('text2');
                    
				}, 1000);
				$('.setaGame1').css({'opacity':'0.3'}).removeClass('bounce1').addClass('telaJogada');
			}else if($(this).hasClass('openFase2')){
				setTimeout(function(){
					narracao2.stop().play('text3');
				}, 1000);
                
				$('.setaGame2').css({'opacity':'0.3'}).removeClass('bounce2').addClass('telaJogada');
			}else if($(this).hasClass('openFase3')){
				setTimeout(function(){
					narracao3.stop().play('text1');
				}, 1000);
                
				$('.openFase3_1').hide();
				$('.setaGame3_1').css({'opacity':'0.3'}).removeClass('bounce').addClass('telaJogada');
				$('.setaGame3').css({'opacity':'0.3'}).removeClass('bounce').addClass('telaJogada');
			}else if($(this).hasClass('openFase3_1')){
				setTimeout(function(){
					narracao3.stop().play('text1');
				}, 1000);
                
				$('.openFase3').hide();
				$('.setaGame3').css({'opacity':'0.3'}).removeClass('bounce').addClass('telaJogada');
				$('.setaGame3_1').css({'opacity':'0.3'}).removeClass('bounce').addClass('telaJogada');
			}else if($(this).hasClass('openFase4')){
				setTimeout(function(){
					narracao4.stop().play('text1');
				}, 1000);
				$('.setaGame4').css({'opacity':'0.3'}).removeClass('bounce').addClass('telaJogada');
				$('.setaGame4_1').css({'opacity':'0.3'}).removeClass('bounce2').addClass('telaJogada');
			}else if($(this).hasClass('openFase4_1')){
				setTimeout(function(){
					narracao4.stop().play('text1');
				}, 1000);
				$('.setaGame4').css({'opacity':'0.3'}).removeClass('bounce');
				$('.setaGame4_1').css({'opacity':'0.3'}).removeClass('bounce2').addClass('telaJogada');
			}

			$('.'+id).fadeIn(1000);
			setTimeout(function(){
				$('.'+id).children('.content').show().addClass('bounceIn animated');
				setTimeout(function(){
					var selfResp = $('.'+id).children('.content').children('.perguntas').children('ul').children('li');
					$('.'+id).children('.content').removeClass('bounceIn animated');

					for(var i=0; i<selfResp.length; i++){
						selfResp.eq(i).show().addClass('lightSpeedIn animated');
						setTimeout(function(){
							selfResp.removeClass('lightSpeedIn animated');
						}, 1000);
					}
				}, 1000);
			}, 1000);
		});
	},

	perguntas: function(){
		var pergunta = $('.perguntas').children('ul').children('li');
		pergunta.off('click').on('click', function(){
            if(final){
                sound.volume(.1);
            }			var id = $(this).children('div').attr('id');
			var selfContent = $(this).parent().parent().parent();
			var selfVideo = $(this).parent().parent().parent().siblings('.contentVideo');
			var popup = selfContent.parent(); 
			var btnClose = selfVideo.children('.close');
			if(this.id = id){
				//$(this).parent().parent().parent().siblings('.contentVideo').css("display", "inherit");
				
				narracao1.stop();
				narracao2.stop();
				narracao3.stop();
				narracao4.stop();
				acert.stop().play();
				parar_videos_antes();
				$(this).addClass('flash animated');
				setTimeout(function(){
					selfContent.hide();
					selfVideo.show().addClass('bounceIn animated');
					setTimeout(function(){
						selfVideo.removeClass('bounceIn animated');
					}, 1000);
				
					
					selfVideo.children('video')[0].play();
					sound.fadeOut(0,1000);
					btnClose.on('click', function(){
						//
						setTimeout(function(){
							$('.fase1').children('.contentVideo').children('video')[0].pause();
							$('.fase2').children('.contentVideo').children('video')[0].pause();
							$('.fase3').children('.contentVideo').children('video')[0].pause();
							$('.fase4').children('.contentVideo').children('video')[0].pause();
							//alert("Parando!");
							$('.fase1').children('.contentVideo').children('video')[0].currentTime = 0;
							$('.fase2').children('.contentVideo').children('video')[0].currentTime = 0;
							$('.fase3').children('.contentVideo').children('video')[0].currentTime = 0;
							$('.fase4').children('.contentVideo').children('video')[0].currentTime = 0;
						}, 200);			
						//						
						
						//
						selfVideo.children('video')[0].pause();
						selfVideo.addClass('bounceOut animated');
						setTimeout(function(){
							selfVideo.removeClass('bounceOut animated').hide();
							popup.fadeOut(1000);
							if(final){
                                sound.stop().fadeIn(0.1,1000);
                            }else{
                                sound.stop().fadeIn(0.5,1000);
                            }
							setTimeout(function(){
								startGame.verificaTelas();
							}, 1000);
						}, 1000);
					});
					selfVideo.children('video').on('ended', function(){
						selfVideo.addClass('bounceOut animated');
						setTimeout(function(){
							selfVideo.removeClass('bounceOut animated').hide();
							popup.fadeOut(1000);
                            if(final){
                                sound.stop().fadeIn(0.1,1000);
                            }else{
                                sound.stop().fadeIn(0.5,1000);
                            }
							setTimeout(function(){
								startGame.verificaTelas();
							}, 1000);
						}, 1000);
					});
				},1500);
					parar_videos_antes();
					$('.fase1').children('.contentVideo').children('video')[0].src="media/video/evaporacao_t_leg.mp4";
					$('.fase2').children('.contentVideo').children('video')[0].src="media/video/condensacao_t_leg.mp4";
					$('.fase3').children('.contentVideo').children('video')[0].src="media/video/precipitacao_t_leg.mp4";
					$('.fase4').children('.contentVideo').children('video')[0].src="media/video/infiltracao_t_leg.mp4";
					//
					//$('.fase1').children('.contentVideo').children('video')[0].pause();
					//$('.fase2').children('.contentVideo').children('video')[0].pause();
					//$('.fase3').children('.contentVideo').children('video')[0].pause();
					//$('.fase4').children('.contentVideo').children('video')[0].pause();
					////alert("Parando!");
					//$('.fase1').children('.contentVideo').children('video')[0].currentTime = 0;
					//$('.fase2').children('.contentVideo').children('video')[0].currentTime = 0;
					//$('.fase3').children('.contentVideo').children('video')[0].currentTime = 0;
					//$('.fase4').children('.contentVideo').children('video')[0].currentTime = 0;
					//					
			}
			else{
				erro.stop().play();
			}
		});
	},

	
	
	
	init: function(){
		sound.play();
		if(final){
            sound.volume(.1);
        }
		startGame.perguntas();
		startGame.abrirPerguntas();
		startGame.popupInicial('A constante movimentação da água na natureza é chamada de “ciclo da água”, que muda continuamente de estado físico. O infográfico a seguir mostra um esquema do ciclo da água. As setas vermelhas representam as quatro etapas do ciclo. Clique em uma seta para testar seus conhecimentos.', function(){
			narracao1.stop().play('text1');
		});
	}
}

function parar_videos_antes(){
	setTimeout(function(){ 
	/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		sound.stop();
	}else{*/	
	//$('.fase1').children('.contentVideo').children('video')[0].pause();
	//$('.fase2').children('.contentVideo').children('video')[0].pause();
	//$('.fase3').children('.contentVideo').children('video')[0].pause();
	//$('.fase4').children('.contentVideo').children('video')[0].pause();
	////alert("Parando!");
	//$('.fase1').children('.contentVideo').children('video')[0].currentTime = 0;
	//$('.fase2').children('.contentVideo').children('video')[0].currentTime = 0;
	//$('.fase3').children('.contentVideo').children('video')[0].currentTime = 0;
	//$('.fase4').children('.contentVideo').children('video')[0].currentTime = 0;
	//
	//$('.fase1').children('.contentVideo').children('video')[0].src="";
	//$('.fase2').children('.contentVideo').children('video')[0].src="";
	//$('.fase3').children('.contentVideo').children('video')[0].src="";
	//$('.fase4').children('.contentVideo').children('video')[0].src="";

if(videos_completos=="sim")	{
setTimeout(function(){
	//sound.stop().fadeIn(0.5,1000);
	//alert(123);
	/*$('.fase1').children('.contentVideo').children('video')[0].pause();
	$('.fase2').children('.contentVideo').children('video')[0].pause();
	$('.fase3').children('.contentVideo').children('video')[0].pause();
	$('.fase4').children('.contentVideo').children('video')[0].pause();*/
	////alert("Parando!");
	/*$('.fase1').children('.contentVideo').children('video')[0].currentTime = 0;
	$('.fase2').children('.contentVideo').children('video')[0].currentTime = 0;
	$('.fase3').children('.contentVideo').children('video')[0].currentTime = 0;
	$('.fase4').children('.contentVideo').children('video')[0].currentTime = 0; */
	}, 100);	
}

}, 200);
}
//}

function funcao_sair_fullscreen(){
	//alert("123");
	document.webkitCancelFullScreen();
	document.mozCancelFullScreen(); 
	
}
/*
function iniciar_com_tap(){
	sound.play();
	sound.stop;
	//
	startGame.init();
	clearInterval(verificar_inicio_cnd);
}
*/

