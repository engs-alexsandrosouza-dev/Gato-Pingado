

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

        if (tamanhoFonte < 130) {
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
