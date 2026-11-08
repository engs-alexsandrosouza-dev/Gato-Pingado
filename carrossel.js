
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona todos os slides do carrossel
    const slides = document.querySelectorAll(".carrossel .slide");

    // Seleciona os botões
    const anterior = document.querySelector(".carrossel .anterior");
    const proximo = document.querySelector(".carrossel .proximo");

    // Índice do slide atual
    let slideAtual = 0;

    // Verifica se os elementos foram encontrados
    if (slides.length === 0 || !anterior || !proximo) {
        console.error("Carrossel não encontrado!");
        return;
    }

    // Função para exibir um slide
    function mostrarSlide(indice) {

        // Ajusta o índice para permanecer dentro do vetor
        slideAtual = (indice + slides.length) % slides.length;

        // Esconde todos os slides
        slides.forEach(function(slide) {
            slide.classList.remove("ativo");
        });

        // Mostra apenas o slide selecionado
        slides[slideAtual].classList.add("ativo");
    }

    // Botão anterior
    anterior.addEventListener("click", function () {
        mostrarSlide(slideAtual - 1);
    });

    // Botão próximo
    proximo.addEventListener("click", function () {
        mostrarSlide(slideAtual + 1);
    });

    // Exibe o primeiro slide ao carregar
    mostrarSlide(0);
});


// CARROSSEL DOS GATOS FAVORITOS
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o container que possui os gatos
    const gatos = document.querySelector(".gatos-favoritos");

    // Seleciona as duas setas
    const anterior = document.querySelector(".gato-anterior");
    const proximo = document.querySelector(".gato-proximo");

    // Verifica se os elementos existem
    if (!gatos || !anterior || !proximo) {
        return;
    }

    function moverGatos(direcao) {

        // Localiza um cartão
        const gato = gatos.querySelector(".gato");

        if (!gato) {
            return;
        }

        // Descobre o tamanho do cartão
        const largura = gato.getBoundingClientRect().width;

        // Descobre o espaçamento entre os cartões
        const estilo = window.getComputedStyle(gatos);
        const espaco = parseFloat(estilo.columnGap) || 0;

        // Move a largura de um cartão mais o espaço
        gatos.scrollBy({
            left: (largura + espaco) * direcao,
            behavior: "smooth"
        });
    }

    // Seta esquerda
    anterior.addEventListener("click", function () {
        moverGatos(-1);
    });

    // Seta direita
    proximo.addEventListener("click", function () {
        moverGatos(1);
    });

});
