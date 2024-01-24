var tocando = true;
var count = 0;
var elementoClicado = false;
var elementoAtivo;
var transacaoIn = true;
var novoElemento;
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
}
var startGame = {
    init:function(){
        musica.stop().play();
        narracao.stop().play('intro');
        $('video').hide();
        $('video')[0].load();
        $('video')[0].play();
        var verifica = setInterval(function(){
            if($('video')[0].currentTime != 0 && tocando == true){
                $('video').show();
                tocando = false;
                clearInterval(verifica);
            }
        },300);
        setTimeout(function(){
            $('div.texto').removeClass('apresentacao');
        },3300);
    $("ul li").on("click",function(){
        var ele = $(this);
        novoElemento = ele.attr('data-regiao');
        $(".block").show();
        $(".btnGaleria").show(1500);
        narracao.stop().play(novoElemento);
        if(elementoAtivo != undefined){
            $('.info-'+elementoAtivo).removeClass('entra').addClass('sai');
            $('.texto p.text-'+elementoAtivo).hide(500);
            elementoClicado = true;
            transacaoIn = false;
        }else{
            $('.info-'+novoElemento).addClass('entra');
            elementoClicado = false;
            $('.texto p').hide(500,function(){
               $('.texto p.text-'+novoElemento).show(500); 

            });
        }
        elementoAtivo = novoElemento;
        $("ul li").removeClass('ativo');
        ele.addClass('ativo');
    });
        $('.graficos span:last-child').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(){
            if(transacaoIn){
                $(".block").hide();
            }
            if(elementoClicado){
                $('.info-'+novoElemento).addClass('entra');
                $('.texto p.text-'+novoElemento).show(500);
                transacaoIn = true;
            }
            $('.graficos').removeClass('sai');
            
            
            
        });
        $(".rslides").responsiveSlides({auto: false,pager: true,nav: true,prevText: "",nextText: "Próximo",manualControls: "",namespace: "rslides"});
        
        $('.btnFechar').on('click',function(){
            $(this).parent().hide(1000,function(){
                $('.galeria-'+novoElemento).hide();
                $('ul.menuPrincipal li').show();
            });
        });
        $('.btnGaleria').on('click',function(){
            $('.fotos_galeria').hide();
            $('.galeria-'+novoElemento).show();
            $('#galeria').show(1000);
            $('ul.menuPrincipal li').hide();
            $('ul.menuPrincipal li.botao-'+novoElemento).show();
        });
    }
}
