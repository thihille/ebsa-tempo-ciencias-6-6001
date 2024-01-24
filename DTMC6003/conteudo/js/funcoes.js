'use strict';

// var erro = new Howl({  urls: ['media/audio/erro.mp3','media/audio/erro.ogg']});
// var certo = new Howl({  urls: ['media/audio/acerto.mp3','media/audio/acerto.ogg']});
var loop;
var fala_atual;
fala_atual="fala_linha_1";
// FUNÇÃO PARA TESTAR O SOM
// window.onload = function(){
// 	var btnAudioTeste = document.querySelector('.testeAudio');

// 	btnAudioTeste.addEventListener('click', function(){
// 		narracao2.stop().play('text5');
// 	});
// }
var startGame = {

	stage3: function(){
		var stage = $('.stage3');
		var btnSim = stage.children('.btnSim');
		var btnNao = stage.children('.btnNao');
		var agulha = stage.children('.content').children('.img3');
		var bexiga = stage.children('.content').children('.img2');
		var textbox = stage.children('.textBox');
		var textOfBox = textbox.children('p');
			

		stage.fadeIn(1000);
		$('#fala_texto_1').fadeIn(1000);
		//
		btnSim.on('click', function(){
			cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
			narracao1.stop();
			narracao2.stop();
			toc.stop().play();
			$(this).css('backgroundImage','url(img/bg_btn_click.png)');
			$('.filme').show();
			agulha.animate({
				'left':'380px'
			}, 2000, 'linear');
			setTimeout(function(){
				bexiga.css({'left':'68px','bottom':'6px'}).hide().attr('src','img/content_img2_stage3_mucha.png').fadeIn(200);
				document.querySelector("#pisca_fase_1").style.display="none";
				document.querySelector("#pisca_fase_2").style.display="inherit";
				document.querySelector("#menina").src="img/menina_help2.png";
			}, 1500);
			setTimeout(function(){
				narracao1.stop();
				narracao2.stop().play('text4');
					//
					//setTimeout(function(){
						fala_atual="fala_linha_4";
						cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_4.gif";
						document.querySelector("#fala_texto_1").style.left="94px";
						document.querySelector("#fala_texto_1").style.top="544px";
						console.log("./img/fala_linha_7.gif / narracao2.stop().play('text4')"); /**/
					//}, 300);
					setTimeout(function(){
						if(fala_atual=="fala_linha_4"){
							document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 10900);
					//					
				textbox.hide();
				/*textbox.hide().html('<span id="balao_acerto_balao" style="position:absolute; top:51px; left:-68px;"><img src="./img/balao_pergunta_balao.png"/><span>').fadeIn(500);*/
				document.querySelector("#balao_pergunta_balao").innerHTML='<img src="./img/balao_acerto_balao.png"/>';
				textbox.show().addClass('bounceIn animated');
			}, 3000);
			setTimeout(function(){
				var jogados = $('.stage1').children('.textBox').children('p').children('span.jogado')
				if(jogados.length == 2){
					setTimeout( function(){
						//window.location.href = 'index.html';
						$( "body" ).fadeOut( 1000, function() { window.parent.location.href = "../index.html" });
					}, 2000);
				}else{
					setTimeout( function(){
						stage.fadeOut(300);
						$('#fala_texto_1').fadeOut(200);fade_cobertura();
						//						
						$('.stage1').fadeIn(1000);
						//$('#fala_texto_1').fadeIn(1000);
						//						
						$('.filme').hide();
					}, 1000);
				}
			},12000);
		});
		btnNao.on('click', function(){
			cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
			narracao1.stop();
			narracao2.stop();
			toc.stop().play();
			$(this).css('backgroundImage','url(img/bg_btn_click.png)');
			$('.filme').show();
			agulha.animate({
				'left':'380px'
			}, 2000, 'linear');
			setTimeout(function(){
				bexiga.css({'left':'68px','bottom':'6px'}).hide().attr('src','img/content_img2_stage3_mucha.png').fadeIn(500);
				document.querySelector("#pisca_fase_1").style.display="none";
				document.querySelector("#pisca_fase_2").style.display="inherit";				
				document.querySelector("#menina").src="img/menina_help2.png";
			}, 1500);
			setTimeout(function(){
				narracao1.stop();
				narracao2.stop().play('text5');
					//
					fala_atual="fala_linha_5";
					setTimeout(function(){
						cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_5.gif";
						document.querySelector("#fala_texto_1").style.left="94px";
						document.querySelector("#fala_texto_1").style.top="544px";
						console.log("./img/fala_linha_8.gif / narracao2.stop().play('text5')"); /**/
					}, 400);
					setTimeout(function(){
						if(fala_atual=="fala_linha_5"){
						cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 9000);
					//					
				textbox.hide();
				/*textOfBox.hide().html('<span id="balao_erro_balao" style="position:absolute; top:51px; left:-68px;"><img src="./img/balao_pergunta_balao.png"/><span>').fadeIn(500);*/
				document.querySelector("#balao_pergunta_balao").innerHTML='<img src="./img/balao_erro_balao.png"/>';
				textbox.show().addClass('bounceIn animated');
			}, 3000);
			setTimeout(function(){
				var jogados = $('.stage1').children('.textBox').children('p').children('span.jogado')
				if(jogados.length == 2){
					setTimeout( function(){
						//window.location.href = 'index.html';
						$( "body" ).fadeOut( 1000, function() { window.parent.location.href = "../index.html" });
					}, 2000);
				}else{
					setTimeout( function(){
						stage.fadeOut(300);
						$('#fala_texto_1').fadeOut(200);fade_cobertura();
						//						
						$('.stage1').fadeIn(1000);
						//$('#fala_texto_1').fadeIn(1000);
						//						
						$('.filme').hide();
					}, 1000);
				}
			},12000);
		});
	},

	stage2: function(){
		var stage = $('.stage2');
		var btnSim = stage.children('.btnSim');
		var btnNao = stage.children('.btnNao');
		var seringa = stage.children('.content').children('.img2');
		var textbox = stage.children('.textBox');
		var textOfBox = textbox.children('p');
			
		btnSim.html('Sim');
		btnNao.html('Não').css('line-height', '50px');

		stage.fadeIn(1000);
		$('#fala_texto_1').fadeIn(1000);
		//
		btnSim.on('click', function(){
			cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
			narracao1.stop();
			narracao2.stop();
			toc.stop().play();
			$('.filme').show();
			$(this).css('backgroundImage','url(img/bg_btn_click.png)');
			seringa.animate({
				'left':'100px'
			}, 1500, 'linear');
			setTimeout(function(){
				narracao1.stop();
				narracao2.stop().play('text1');
					fala_atual="fala_linha_4";
					//setTimeout(function(){
						cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_7.gif";
						document.querySelector("#fala_texto_1").style.left="94px";
						document.querySelector("#fala_texto_1").style.top="544px";
						console.log("./img/fala_linha_4.gif / narracao2.stop().play('text1')"); /**/
					//}, 400);
					setTimeout(function(){
						if(fala_atual=="fala_linha_4"){
						cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 12500);				
				//
				textbox.hide();
				/*textOfBox.hide().html('<span id="balao_acerto_seringa" style="position:absolute; top:51px; left:-68px;"><img src="./img/balao_pergunta_balao.png"/><span>').fadeIn(500);*/
				document.querySelector("#balao_pergunta_seringa").innerHTML='<img src="./img/balao_acerto_seringa.png"/>';
				textbox.show().addClass('bounceIn animated');
			}, 2000);
			setTimeout(function(){
				var jogados = $('.stage1').children('.textBox').children('p').children('span.jogado')
				if(jogados.length == 2){
					setTimeout( function(){
						//window.location.href = 'index.html';
						$( "body" ).fadeOut( 1000, function() { window.parent.location.href = "../index.html" });
					}, 2000);
				}else{
					setTimeout( function(){
						stage.fadeOut(300);
						$('#fala_texto_1').fadeOut(200);fade_cobertura();
						//						
						$('.stage1').fadeIn(1000);
						//$('#fala_texto_1').fadeIn(1000);
						//						
						$('.filme').hide();
					}, 1000);
				}
			},14500);
		});
		btnNao.on('click', function(){
			cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
			narracao1.stop();
			narracao2.stop();
			toc.stop().play();
			$(this).css('backgroundImage','url(img/bg_btn_click.png)');
			$('.filme').show();
			seringa.animate({
				'left':'85px'
			}, 1500, 'linear');
			setTimeout(function(){
				narracao1.stop();
				narracao2.stop().play('text2');
				//
					fala_atual="fala_linha_5b";
					setTimeout(function(){
						cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_8.gif";
						document.querySelector("#fala_texto_1").style.left="94px";
						document.querySelector("#fala_texto_1").style.top="544px";
						console.log("./img/fala_linha_5.gif / narracao2.stop().play('text2')"); /**/
					}, 500);
					setTimeout(function(){
						if(fala_atual=="fala_linha_5b"){
							cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 11500);				
				//				
				textbox.hide();
				/*textOfBox.hide().html('<span id="balao_erro_seringa" style="position:absolute; top:51px; left:-68px;"><img src="./img/balao_pergunta_balao.png"/><span>').fadeIn(500);*/
				document.querySelector("#balao_pergunta_seringa").innerHTML='<img src="./img/balao_erro_seringa.png"/>';
				textbox.show().addClass('bounceIn animated');
			}, 2000);
			setTimeout(function(){
				var jogados = $('.stage1').children('.textBox').children('p').children('span.jogado')
				if(jogados.length == 2){
					setTimeout( function(){
						//window.location.href = 'index.html';
						$( "body" ).fadeOut( 1000, function() { window.parent.location.href = "../index.html" });
					}, 2000);
				}else{
					setTimeout( function(){
						stage.fadeOut(300);
						$('#fala_texto_1').fadeOut(200);fade_cobertura();
						//						
						$('.stage1').fadeIn(1000);
						//$('#fala_texto_1').fadeIn(1000);
						//						
						$('.filme').hide();
					}, 1000);
				}
			},13200);
		});
	},
	

	stage1: function(){
		var stage = $('.stage1');
		var menina = stage.children('img#menina');
		var textbox = stage.children('.textBox');
		var textOfBox = textbox.children('p');
		narracao1.stop().play('text1');
		//
		fala_atual="fala_linha_1";
		cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_1.gif";
					setTimeout(function(){
						if(fala_atual=="fala_linha_1"){
						cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 30000);
		setTimeout(function(){
			
			// Inicia a animação CSS
			
			function glowMenina(onOff){
				var glow = $('#menina_on');


				if( onOff == 'on' ){
					if( !glow.hasClass('on') ) glow.addClass('on');
					if( glow.hasClass('off') ) glow.removeClass('off');

					loop = setInterval(function(){
						glow.fadeIn(1000).fadeOut(1000);
					},2000);
				}

				else if( onOff == 'off' ){
					if( !glow.hasClass('off') ) glow.addClass('off');
					if( glow.hasClass('on') ) glow.removeClass('on');

					glow.fadeOut(1000);
					clearInterval(loop);
					// window.clearInterval();
				}

			}

			glowMenina('on');

			menina.css('cursor','pointer').one('click', function(){
				document.querySelector("#fala_texto_1").className="fadeIn animated500";
				//$('#fala_texto_1').fadeIn(500);
				narracao1.stop();
				glowMenina('off');
				document.querySelector("#pisca_fase_1").style.display="none";
				setTimeout(function(){
					document.querySelector("#pisca_fase_2").style.display="inherit";
				}, 1000);
				$(this).css('cursor','default')
					   .hide()
					   .css({'top':'100px','left':'50px'})
					   .attr('src','img/menina_help.png')
					   .delay(100)
					   .fadeIn(500);

				textbox.css({
					'width':'235px',
					'top':'230px',
					'left':'285px',
					'padding':'0 10px'
				});
				fala_atual="fala_linha_2";
				narracao1.stop().play('text2');
				cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_2.gif";
				document.querySelector("#fala_texto_1").style.left="152px";
				document.querySelector("#fala_texto_1").style.top="266px";
					setTimeout(function(){
						if(fala_atual=="fala_linha_2"){
							cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 12100);				
				//
				textOfBox.html('Estava pensando também em como responder, de forma prática, a duas questões: <br /><span class="questionOne efeitoTextShadow">O ar tem massa?</span><br /> <span class="questionTwo efeitoTextShadow">O ar ocupa espaço?</span><br /> Vamos ver...');

				// GAME 01 - AGULHA E BALAO
				textOfBox.children('.questionTwo').one('click', function(){
					$(this).removeClass('efeitoTextShadow');
					fade_cobertura();
					narracao1.stop();
					narracao1.stop().play('text3');
					fala_atual="fala_linha_6";
					setTimeout(function(){
						cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_6.gif";
						document.querySelector("#fala_texto_1").style.left="94px";
						document.querySelector("#fala_texto_1").style.top="544px";
						console.log("./img/fala_linha_6.gif / narracao1.stop().play('text3')"); /**/
					}, 400);
					setTimeout(function(){
						if(fala_atual=="fala_linha_6"){
							cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 10000);
					stage.hide();
					startGame.stage2();

					$(this).css({'cursor':'default', 'fontFamily':'vagroundedstd-light'})
						   .addClass('jogado');
				});

				// GAME 02 - SIRINGA
				textOfBox.children('.questionOne').one('click', function(){
					$(this).removeClass('efeitoTextShadow');
					fade_cobertura();
					narracao1.stop();
					narracao2.stop().play('text3');
				//
					fala_atual="fala_linha_3";
					setTimeout(function(){
						cronometro();document.querySelector("#fala_linha_1").src="./img/fala_linha_3.gif";
						document.querySelector("#fala_texto_1").style.left="94px";
						document.querySelector("#fala_texto_1").style.top="544px";
						console.log("./img/fala_linha_6.gif / narracao2.stop().play('text3')"); /**/
					}, 400);
					setTimeout(function(){
						if(fala_atual=="fala_linha_3"){
							cronometro();document.querySelector("#fala_linha_1").src="./img/plan_1b.png";
						}
					}, 9000);				
				//					
					narracao1.stop();

					stage.hide();
					startGame.stage3();

					$(this).css({'cursor':'default', 'fontFamily':'vagroundedstd-light'})
						   .addClass('jogado');

				});

			});
		}, 7500);
	},
	
	init: function(){
		sound.play();
		startGame.stage1();
		$('.actionOptions').off('click').css('cursor','default');
	}
}


//
function cronometro(){
	/*var ghjghfjd;
	ghjghfjd=0;
	setInterval(function(){
		ghjghfjd++; 
		console.log(ghjghfjd)
		}, 1000);*/
}

function fade_cobertura(){
	document.querySelector("#fala_cobertura").style.display="inherit";
	document.querySelector("#fala_texto_1").style.left="94px";
	document.querySelector("#fala_texto_1").style.top="544px";
	document.querySelector("#fala_cobertura").className="fadeOut animated";
	$("#fala_cobertura").fadeOut(1000);
	setTimeout(function(){
		document.querySelector("#fala_cobertura").style.display="none";
	}, 1100);
}