var guardavalor;
var countFotos;
var newApp = {
    id: $("#app"),
    divTitulo: $("#app").children('.titulo'),
    divNFotos: $("#app").children(".headerApp").children(".nFotos").children("span"),
    divFotos: $("#app").children(".contentApp").children(".fotos"),
    divLegendas: $("#app").children(".contentApp").children(".legendas"),
    divTexto: $("#app").children(".footerApp").children(".texto"),
    btnNext:0
}
var clear = {
    run: function(){
        newApp.divTitulo.html("");
        newApp.divFotos.children("img").remove();
        newApp.divLegendas.children("p").remove();
        newApp.btnNext = 0;
    }
}

//Conteúdos
var esportes = {
    titulo: "titulo.png",
    path: "img/esportes/",
    fotos: {
        src: [
            "01.jpg",
            "02.jpg",
            "03.jpg"
        ],
        legenda: [
            "legenda 1",
            "legenda 2",
            "legenda 3"
        ]
    },
    texto: "Muitas pessoas se reúnem para praticar atividades esportivas. Além de saudáveis e divertidos, os esportes propiciam o companheirismo e a união.<br />Observe alguns exemplos desses grupos.",
    run:function(){
        //Limpa os dados da janela
        clear.run();
        //Add titulo
        newApp.divTitulo.html("<img src='"+this.path+this.titulo+"' alt='' />");
        newApp.divTexto.html(this.texto);
        //Carrega e add imagens
        for(var f = 0; f < this.fotos.src.length; f++){
            countFotos = f;
            var count = f +1;
            newApp.divFotos.append("<img src='"+this.path+this.fotos.src[f]+"' alt='' />");
            newApp.divFotos.children("img").eq(0).addClass("ativo");
            newApp.divNFotos.eq(0).text("1");
            newApp.divNFotos.eq(1).text(count);
        }
        //Carrega e add legendas das imagens
        for(var l = 0; l < this.fotos.legenda.length; l++){
            newApp.divLegendas.append("<p>"+this.fotos.legenda[l]+"</p>");
            newApp.divLegendas.children("p").eq(0).addClass("ativo"); 
        }
    }
};
var escolas = {
    titulo: "titulo.png",
    path: "img/escolas/",
    fotos: {
        src: [
            "01.jpg",
            "02.jpg",
            "03.jpg"
        ],
        legenda: [
            "legenda 1",
            "legenda 2",
            "legenda 3"
        ]
    },
    texto: "As pessoas se reúnem na escola para aprender e ensinar. Além disso, elas fazem amizades, brincam, praticam esportes, entre outras atividades.<br />Veja nas fotografias alguns exemplos de escolas.",
    run:function(){
        //Limpa os dados da janela
        clear.run();
        //Add titulo
        newApp.divTitulo.html("<img src='"+this.path+this.titulo+"' alt='' />");
        newApp.divTexto.html(this.texto);
        //Carrega e add imagens
        for(var f = 0; f < this.fotos.src.length; f++){
            countFotos = f;
            var count = f +1;
            newApp.divFotos.append("<img src='"+this.path+this.fotos.src[f]+"' alt='' />");
            newApp.divFotos.children("img").eq(0).addClass("ativo");
            newApp.divNFotos.eq(0).text("1");
            newApp.divNFotos.eq(1).text(count);
        }
        //Carrega e add legendas das imagens
        for(var l = 0; l < this.fotos.legenda.length; l++){
            newApp.divLegendas.append("<p>"+this.fotos.legenda[l]+"</p>");
            newApp.divLegendas.children("p").eq(0).addClass("ativo"); 
        }
    }
};
var trabalhos = {
    titulo: "titulo.png",
    path: "img/trabalhos/",
    fotos: {
        src: [
            "01.jpg",
            "02.jpg",
            "03.jpg"
        ],
        legenda: [
            "legenda 1",
            "legenda 2",
            "legenda 3"
        ]
    },
    texto: "Há diferentes tipos de trabalho e as pessoas se reúnem em ambientes diversos para realizá-los.<br />Conheça alguns exemplos desses grupos.",
    run:function(){
        //Limpa os dados da janela
        clear.run();
        //Add titulo
        newApp.divTitulo.html("<img src='"+this.path+this.titulo+"' alt='' />");
        newApp.divTexto.html(this.texto);
        //Carrega e add imagens
        for(var f = 0; f < this.fotos.src.length; f++){
            countFotos = f;
            var count = f +1;
            newApp.divFotos.append("<img src='"+this.path+this.fotos.src[f]+"' alt='' />");
            newApp.divFotos.children("img").eq(0).addClass("ativo");
            newApp.divNFotos.eq(0).text("1");
            newApp.divNFotos.eq(1).text(count);
        }
        //Carrega e add legendas das imagens
        for(var l = 0; l < this.fotos.legenda.length; l++){
            newApp.divLegendas.append("<p>"+this.fotos.legenda[l]+"</p>");
            newApp.divLegendas.children("p").eq(0).addClass("ativo"); 
        }
    }
};
var religioes = {
    titulo: "titulo.png",
    path: "img/religioes/",
    fotos: {
        src: [
            "01.jpg",
            "02.jpg",
            "03.jpg"
        ],
        legenda: [
            "legenda 1",
            "legenda 2",
            "legenda 3"
        ]
    },
    texto: "Muitos grupos são formados por pessoas que têm a mesma fé, ou seja, praticam a mesma religião. Há variados tipos de cerimônias e templos religiosos no mundo. Algumas religiões chegam a reunir milhões de pessoas em determinados eventos. Observe alguns exemplos.",
    run:function(){
        //Limpa os dados da janela
        clear.run();
        //Add titulo
        newApp.divTitulo.html("<img src='"+this.path+this.titulo+"' alt='' />");
        newApp.divTexto.html(this.texto);
        //Carrega e add imagens
        for(var f = 0; f < this.fotos.src.length; f++){
            countFotos = f;
            var count = f +1;
            newApp.divFotos.append("<img src='"+this.path+this.fotos.src[f]+"' alt='' />");
            newApp.divFotos.children("img").eq(0).addClass("ativo");
            newApp.divNFotos.eq(0).text("1");
            newApp.divNFotos.eq(1).text(count);
        }
        //Carrega e add legendas das imagens
        for(var l = 0; l < this.fotos.legenda.length; l++){
            newApp.divLegendas.append("<p>"+this.fotos.legenda[l]+"</p>");
            newApp.divLegendas.children("p").eq(0).addClass("ativo"); 
        }
    }
};
var artes = {
    titulo: "titulo.png",
    path: "img/artes/",
    fotos: {
        src: [
            "01.jpg",
            "02.jpg",
            "03.jpg"
        ],
        legenda: [
            "legenda 1",
            "legenda 2",
            "legenda 3"
        ]
    },
    texto: "As atividades artísticas também são exemplos de organização social. As pessoas se reúnem para realizar diferentes formas de arte. Observe alguns exemplos.",
    run:function(){
        //Limpa os dados da janela
        clear.run();
        //Add titulo
        newApp.divTitulo.html("<img src='"+this.path+this.titulo+"' alt='' />");
        newApp.divTexto.html(this.texto);
        //Carrega e add imagens
        for(var f = 0; f < this.fotos.src.length; f++){
            countFotos = f;
            var count = f +1;
            newApp.divFotos.append("<img src='"+this.path+this.fotos.src[f]+"' alt='' />");
            newApp.divFotos.children("img").eq(0).addClass("ativo");
            newApp.divNFotos.eq(0).text("1");
            newApp.divNFotos.eq(1).text(count);
        }
        //Carrega e add legendas das imagens
        for(var l = 0; l < this.fotos.legenda.length; l++){
            newApp.divLegendas.append("<p>"+this.fotos.legenda[l]+"</p>");
            newApp.divLegendas.children("p").eq(0).addClass("ativo"); 
        }
    }
};

var mutiroes = {
    titulo: "titulo.png",
    path: "img/mutiroes/",
    fotos: {
        src: [
            "01.jpg",
            "02.jpg",
            "03.jpg"
        ],
        legenda: [
            "legenda 1",
            "legenda 2",
            "legenda 3"
        ]
    },
    texto: "Os mutirões são grupos de pessoas reunidas para fazer atividades que beneficiarão todos. Observe alguns exemplos desses grupos.",
    run:function(){
        //Limpa os dados da janela
        clear.run();
        //Add titulo
        newApp.divTitulo.html("<img src='"+this.path+this.titulo+"' alt='' />");
        newApp.divTexto.html(this.texto);
        //Carrega e add imagens
        for(var f = 0; f < this.fotos.src.length; f++){
            countFotos = f;
            var count = f +1;
            newApp.divFotos.append("<img src='"+this.path+this.fotos.src[f]+"' alt='' />");
            newApp.divFotos.children("img").eq(0).addClass("ativo");
            newApp.divNFotos.eq(0).text("1");
            newApp.divNFotos.eq(1).text(count);
        }
        //Carrega e add legendas das imagens
        for(var l = 0; l < this.fotos.legenda.length; l++){
            newApp.divLegendas.append("<p>"+this.fotos.legenda[l]+"</p>");
            newApp.divLegendas.children("p").eq(0).addClass("ativo"); 
        }
    }
};

