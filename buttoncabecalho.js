
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

    // AUMENTAR E DIMINUIR FONTE

    let tamanhoFonte = 100;

    const aumentar = document.getElementById("aumentar-fonte");
    const diminuir = document.getElementById("diminuir-fonte");

    if (aumentar) {

        aumentar.addEventListener("click", function() {

            if (tamanhoFonte < 150) {

                tamanhoFonte += 10;

                document.documentElement.style.fontSize = tamanhoFonte + "%";

            }

        });

    }

    if (diminuir) {

        diminuir.addEventListener("click", function() {

            if (tamanhoFonte > 80) {

                tamanhoFonte -= 10;

                document.documentElement.style.fontSize = tamanhoFonte + "%";

            }

        });

    }

    // ALTO CONTRASTE

    const botaoContraste = document.getElementById("alto-contraste");

    if (botaoContraste) {

        botaoContraste.addEventListener("click", function() {

            const ativado = document.body.classList.toggle("alto-contraste");

            botaoContraste.setAttribute("aria-pressed", String(ativado));

        });

    }

}); 
