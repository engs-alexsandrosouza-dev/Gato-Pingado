// MENU DE ACESSIBILIDADE

document.addEventListener("DOMContentLoaded", function() {

    const botaoAbrir = document.getElementById("abrir-acessibilidade");
    const painel = document.getElementById("painel-acessibilidade");

    // ABRIR E FECHAR O MENU

    if (botaoAbrir && painel) {

        botaoAbrir.addEventListener("click", function() {

            const estaAberto = botaoAbrir.getAttribute("aria-expanded") === "true";

            painel.hidden = estaAberto;

            botaoAbrir.setAttribute("aria-expanded", String(!estaAberto));

        });

        // FECHAR AO CLICAR FORA

        document.addEventListener("click", function(event) {

            if (!event.target.closest(".acessibilidade-botao")) {

                painel.hidden = true;

                botaoAbrir.setAttribute("aria-expanded", "false");

            }

        });

    }

    // Guarda o tamanho inicial da fonte.
    let tamanhoFonte = 100;

    // Seleciona os botões.
    const diminuirFonte = document.getElementById("diminuir-fonte");
    const aumentarFonte = document.getElementById("aumentar-fonte");
    const altoContraste = document.getElementById("alto-contraste");

    // Diminui o texto em 10%.
    diminuirFonte.addEventListener("click", function () {

        if (tamanhoFonte > 80) {
            tamanhoFonte -= 10;

            document.documentElement.style.fontSize =
                tamanhoFonte + "%";
        }

    });

    // Aumenta o texto em 10%.
    aumentarFonte.addEventListener("click", function () {

        if (tamanhoFonte < 150) {
            tamanhoFonte += 10;

            document.documentElement.style.fontSize =
                tamanhoFonte + "%";
        }

    });

    // Ativa ou desativa o alto contraste.
    altoContraste.addEventListener("click", function () {

        const ativado = document.body.classList.toggle("alto-contraste");

        altoContraste.setAttribute("aria-pressed", ativado);

    });

});