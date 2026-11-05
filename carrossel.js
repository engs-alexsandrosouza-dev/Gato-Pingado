
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
