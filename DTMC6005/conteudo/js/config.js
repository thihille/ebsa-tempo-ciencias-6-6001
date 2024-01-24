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
			// Disciplina do OED AKPALO | portugues, matematica, historia, geografia, ciencias
			// Disciplina do OED APOEMA | gramatica
			// Disciplina do OED PRATICANDO | matematica
			// Disciplina do OED TEMPO | portugues, matematica, historia, geografia, ciencias, espanhol, ingles
			disciplina: 'ciencias',
			// Ano
			ano: 6,
			// Título do OED
			titulo: 'Aquecimento global',
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
			"<strong>Supervisão de arte, editoração e produção digital</strong><br/> Adelaide Carolina Cerutti",
			"<strong>Coordenação de produção digital</strong><br/> Daniel Cilli",
			"<strong>Web design</strong><br/>Max Salvado, Thiago Hille e Tiago Lima",
			"<strong>Assistência de design digital</strong><br>Rodrigo Guedes",
			"<strong>Assistência de arte</strong><br/> Livia Danielli",
			"<strong>Roteiro</strong><br/> Renato Macedo de Almeida",
			"<strong>Revisão</strong><br/> Equipe Revisão",
			"<strong>Coordenação de iconografia</strong><br/> Léo Burgos",
			"<strong>Pesquisa iconográfica</strong><br/> Jonathan Santos",
			"<strong>Imagens</strong><br/> Nicemonkey/Shutterstock<br>TyBy/Shutterstock<br>Arabesc/Dreamstime.com<br>Jerome Moreaux/Dreamstime.com <br>Slaviana/Dreamstime.com<br>petr73/Shutterstock<br>Craig Aurness/Corbis/Latinstock<br>Mick Tsikas/Reuters/Corbis/Latinstock<br>Gus Ruelas/Reuters/Latinstock<br>Lunae Parracho/Reuters/Latinstock<br>Ricardo Moraes/Reuters/Latinstock<br>Peter Davey/FLPA/Minden Pictures/Latinstock<br>Orjan F. Ellingvag/Dagens Naringsliv/Corbis/Latinstock<br>Karen Kasmauski/Corbis/Latinstock<br>Robin Utrecht Fotografie/HillCreek Pictures/Corbis/Latinstock<br>Ricardo Moraes/Reuters/Latinstock<br>Samrat35/Dreamstime.com<br>Eranga Jayawardena/ /AP/Corbis/Glow Images<br>Robert Harding/Latinstock<br>Klaus Hackenberg/Corbis/Latinstock<br>Antoine Gyori/Sygma/Corbis/Latinstock<br>Larry Downing/Reuters/Latinstock<br>Ed Murray/Corbis/Latinstock<br>Kimimasa Mayama/Reuters/Latinstock<br>NASA/Science Faction/Corbis/Latinstock<br>Yu Xiangquan/Xinhua Press/Corbis/Latinstock<br>Stringer Shanghai/Reuters/Latinstock<br>Soe Zeya Tun/Reuters/Corbis/Latinstock<br>Danemo/Dreamstime.com",
			"<strong>Locução</strong><br/> Carla Rebelo",
			"<strong>Áudio</strong><br/> soundsnap.com",
			"<strong>Controle de processos editoriais</strong><br/> Equipe CPE",
			// FIM

			// Fim dos Créditos, favor não mexer, se tirar essas aspas duplas vai dar bug ;)
			" "
		]
	}
];
