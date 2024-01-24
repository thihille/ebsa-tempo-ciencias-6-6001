/*!
 * Copyright 2016 Editora do Brasil
 * By: Tiago Juvenal de Lima
 * Email: tiago.lima@editoradobrasil.com.br

 * Foca no Código *

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

*/

var CONFIG = [
	{
		// INFORMAÇÕES PRINCIPAIS DO OED
		infoOed: {
			// Tipo do OED: objeto ou video
			tipo: 'objeto',
			// Template do OED: akpalo, apoema, praticando, tempo
			template: 'tempo',
			// Disciplina do OED AKPALO | portugues, matematica, historia, geografia, ciencias, arte
			// Disciplina do OED APOEMA | gramatica
			// Disciplina do OED PRATICANDO | matematica
			// Disciplina do OED TEMPO | portugues, matematica, historia, geografia, ciencias, espanhol, ingles
			disciplina: 'ciencias',
			// Ano
			ano: 6,
			// Título do OED
			titulo: 'Vulcões',
			// Texto de Instruções do OED
			instrucoes: '',
			// Texto de Navegação do OED
			navegacao: '',
			// Título do Crédito Akpalo, PROJETO OU COLEÇÃO
			tituloCreditoAkpalo: 'Coleção Akpalô',
			// Título do Crédito Apoema, PROJETO OU COLEÇÃO
			tituloCreditoApoema: 'Projeto Apoema',
      // Desabilitando botão de áudio
      botaoAudioDesabilitar: false  //true(sim) ou false(nao)
		},

    abertura: 'sim',

		// INFORMAÇÕES DO CRÉDITO
		infoCreditos: [
			// Cada inserção de credito, favor separar por virgula no fim ex: "TEXTO CRÉDITO",
			// Descartar a ultima linha q está comentado como "NÃO MEXER"

			// INICIO
			"<strong>Supervisão de arte, editoração e produção digital</strong><br>Adelaide Carolina Cerutti",
	      	"<strong>Coordenação de produção digital</strong><br>Daniel Cilli",
	      	"<strong>Web design</strong><br>Max Salvado, Renato Oliveira e Thiago Hille",
	      	"<strong>Assistência de design digital</strong><br>Ana Carolina Grignet",
	      	"<strong>Assistência de arte</strong><br>Livia Danielli",
	      	"<strong>Roteiro</strong><br>Claudia Ismania Samogy Costa",
	      	"<strong>Revisão</strong><br>Equipe Revisão",
            "<strong>Coordenação iconográfica</strong><br>Léo Burgos",
	      	"<strong>Pesquisa iconográfica</strong><br>Adriana Vaz Abrão",
            "<strong>Vídeo</strong><br>Leticia Bouyer/AFP/Vidéographie",
	      	"<strong>Imagens</strong><br>Gary Hincks/SPL/Latinstock; Anastasia Myasnikova/Shutterstock.com; Sakarin Sawasdinaka/Shutterstock.com; DEA/C.DANI/I.JESKE/Getty Images; Eric Broder Van Dyke/Shutterstock.com; Bertl123/iStockphoto.com; PatricioHidalgoP/iStockphoto.com; Vinzo/iStockphoto.com; ollirg/Shutterstock.com; Volodymyr Burdiak/Shutterstock.com; Graphics RF/Shutterstock.com; Andrea Danti/Shutterstock.com",
	      	"<strong>Locução</strong><br>Cidade 300",
	      	"<strong>Controle de processos editoriais</strong><br>Equipe CPE",
			// FIM

			// Fim dos Créditos, favor não mexer, se tirar essas aspas duplas vai dar bug ;)
			" "
		]
	}
];
