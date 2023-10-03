const modal = document.querySelector('[js-tela-escura]');
const btnX = document.querySelector('[js-modal-conteudo-btn-x]')
const modalFechado = document.querySelector('[js-modal-fechado]');


function fechaModal() {
    modal.classList.add('fechado');
}

btnX.addEventListener('click', fechaModal);

// notificaçoes
const btnNotificacao = document.querySelector('[js-notificacao-btn-x]');
const notificacoes = document.querySelector('[js-notificacoes]');

btnNotificacao.addEventListener('click', function () {
    notificacoes.classList.add('fechado');
});

//  BARRA DE NAVEGAÇÃO MOBILE INFERIOR 

// SELECIONA O BOTAO HAMBURGER DA BARRA INFERIOR MOBILE
const botaoHamburger = document.querySelectorAll('[js-btn-mobile-hamburger]');
// SELECIONA A BARRA LATERAL MOBILE 
const barraLateralMobile = document.querySelectorAll('[js-navegacao-mobile-lateral]');
//SELECIONA O BOTAO FECHAR DA BARRA LATERAL MOBILE
const botaoFechar = document.querySelectorAll('[js-mobile-btn-fechar]');
// SELECIONA A TELA SOBREPOSTA 
const telaSobreposta = document.querySelectorAll('[ js-tela-sobreposta]');



// CRIA UM LOOP INFINITO NOS BOTOES DA BARRA INFERIOR MOBILE
for (let i = 0; i < botaoHamburger.length; i++) {

    // FUNÇAO QUE REMOVE COISAS

    const barraLateralMobileFuncaoFechar = function () {
        // FAZ A BARRA LATERAL SUMIR REMOVENDO A CLASSE ATIVO
        barraLateralMobile[i].classList.remove('ativo');
        // FAZ A TELA SOBREPOSTA SUMIR 
        telaSobreposta[i].classList.remove('ativo');
    }

    // FUNÇÃO QUE ADICIONA COISAS

    botaoHamburger[i].addEventListener('click', function () {
        // FAZ A BARRA LATERAL MOBILE APARECER QUANDO CLICAR NO BOTAO
        barraLateralMobile[i].classList.add('ativo');
        // FAZ A TELA SOBREPOSTA APARECER QUANDO CLICAR NO BOTAO
        telaSobreposta[i].classList.add('ativo');

    });

    //  FUNÇÃO QUE FECHA COISAS

    // QUANDO CLICAR NO BOTAO FECHAR DA BARRA LATERAL MOBILE ELA SOME E A TELA SOBREPOSTA TAMBEM
    botaoFechar[i].addEventListener('click', barraLateralMobileFuncaoFechar);
    telaSobreposta[i].addEventListener('click', barraLateralMobileFuncaoFechar);
}

// VARIAVEIS DOS ACORDIONS
// TEMOS VARIOS BOTOES ACORDION POR ISSO USAMOS O QUERY SELECTOR ALL JUNTO COM O FOR
const botaoAcordion = document.querySelectorAll('[js-acordion-btn]');
const acordion = document.querySelectorAll('[js-acordion]');

// SELECIONA TODOS OS BOTOES COM O NOME JS-ACORDION-BTN
for (let i = 0; i < botaoAcordion.length; i++) {

    // O BOTAO DO ACORDION ESTA RECEBENDO A FUNÇÃO DE CLIQUE
    botaoAcordion[i].addEventListener('click', function () {


        // CHECA SE UM ELEMENTO CONTEM A CLASSE ATIVO  
        const botaoClicado = this.nextElementSibling.classList.contains('ativo');

        // SELECIONA TODOS OS ACORDION 
        for (let i = 0; i < acordion.length; i++) {

            if (botaoClicado) break;


        }


    });
}
