// ANIMAÇÃO SURGIMENTO DE FOTOS E TEXTOS
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {

    window.addEventListener('scroll', function () {
        animeScroll();
    })
};
// FIM ANIMAÇÃO SURGIMENTO DE FOTOS E TEXTOS






// EFEITO PARA MENU - INDICADOR DE PÁGINA ATUAL COM TRAÇADO
// OBTENDO A DIV GERAL DO MENU PELO ID E ARMAZENANDO EM UMA VARIAVEL
var btnContainer = document.getElementById("links-topo");

// OBTENDO TODOS OS BOTÕES DO MENU PELA SUA CLASSE E ARMAZENANDO EM UMA VARIAVEL
var btns = btnContainer.getElementsByClassName("itensmenu");

// ADICIONADO UM CONTADOR PARA PERCORRER OS BOTÕES ADICIONANDO A CLASSE ACTIVE AO BOTÃO ATUAL/CLICADO
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};
// FIM EFEITO PARA MENU - INDICADOR DE PÁGINA ATUAL COM TRAÇADO



// TRANSIÇÃO AUTOMATICA SLIDEBAR TOPO //

let count = 1;
document.getElementById("botao1").checked = true;

setInterval(function () {
    nextImage();
}, 4000)


function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("botao" + count).checked = true;

};

// FIM TRANSIÇÃO AUTOMATICA SLIDEBAR TOPO//




// INICIO SLIDEBAR CLIENTES COM ARQUIVOS DE BIBLIOTECA JQUERY SLICK //

$('.cardsclientes').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
});


// FIM SLIDEBAR CLIENTES //









