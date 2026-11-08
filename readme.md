
# 🐾 Gato café & Adoção de Gatos — Projeto de IHC

> Website responsivo e acessível desenvolvido para a disciplina de **Interação Humano-Computador (IHC)**, combinando a experiência de uma cafeteria aconchegante com a conscientização e incentivo à adoção responsável de felinos.

🔗 **Link do Site no GitHub Pages:**  

---

## 👥 Integrantes e divisão de tarefas

O projeto foi dividido entre quatro integrantes, com cada participante responsável pelo desenvolvimento de páginas específicas e pela colaboração em elementos gerais do site.

| Integrante | Responsabilidades |
|---|---|
| **Marya Motta** | Página inicial, redes sociais e desenvolvimento do cabeçalho. |
| **Isabely Gislaine** | Cardápio, adoção, implementação dos recursos de acessibilidade e padronização visual das páginas, criação do readme. |
| **Emily Sequineu** | Página Sobre Nós, página Os Gatos e desenvolvimento do rodapé (footer). |
| **Alexandre** | Página Delivery, página Perfil e seleção das imagens utilizadas no projeto. |

---

## 🎨 Paleta de Cores e Identidade Visual

A escolha foi fundamentada nos conceitos de **Psicologia das Cores** e **Acessibilidade Visual** (estudados em — *Cores, Tipografia e Acessibilidade*):

```css
:root {
    --cor-caramel: #A87756;     /* Caramelo: Acolhimento, aconchego e calidez */
    --cor-warmBeige: #D6BAA2;   /* Bege Quente: Tom neutro para fundos secundários e divisórias */
    --cor-cream: #F0E0C7;       /* Creme: Fundo principal claro, reduzindo a fadiga visual */
    --cor-espresso: #422B23;    /* Espresso: Cor de alta legibilidade para textos e estrutura */
    --cor-rust: #8F513A;        /* rust: Destaque para botões e chamadas para ação */
}
```

### Justificativa Teórica das Cores

* **Contraste e Legibilidade (Normas WCAG 2.1):** O texto principal utiliza a cor `--cor-espresso` (`#422B23`) sobre o fundo `--cor-cream` (`#F0E0C7`), garantindo uma taxa de contraste superior a **4.5:1 (Nível AA)**, o que facilita a leitura para pessoas com baixa visão ou em ambientes muito iluminados.

* **Modelo Mental e Afetividade (UX):** A combinação de tons terrosos e cremosos remete à estética de um café artesanal e ao conforto de estar na companhia de animais, estabelecendo uma conexão emocional imediata com o usuário.

---

## 🧠 Conceitos de IHC Aplicados no Design

### 1. Usabilidade (ISO 9241-11)

A usabilidade foi trabalhada para garantir **Eficácia, Eficiência e Satisfação**:

* **Eficácia:** O fluxo de navegação permite que o usuário alcance objetivos primários (adotar um gato ou fazer um pedido no cardápio) sem ambiguidades.

* **Eficiência:** O `Header` padronizado está presente em todas as 8 telas, permitindo acesso direto a qualquer página com no máximo 1 clique, minimizando o esforço de navegação.
* **Consistência:** A padronização de estilos assegura que tipografia, tamanhos de botões e comportamentos visuais mantenham padrão idêntico em todo o site.

### 2. Experiência do Usuário (UX)

* **Redução da Carga Cognitiva (Reconhecimento em vez de Relembrança):** Elementos interativos utilizam metáforas visuais claras (ícones de pata, carrinho, usuário e redes sociais). O usuário não precisa memorizar comandos ou localizar menus escondidos.
* **Design Emocional:** As páginas  utilizam um tom empático e cards destacados, transformando a navegação em uma experiência agradável e motivadora.

### 3. Acessibilidade (WCAG)

Na estrutura global:

* **Semântica HTML5:** Utilização rigorosa das tags `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`, permitindo que leitores de tela interpretem a hierarquia da página.

* **Textos Alternativos (`alt`):** Todas as imagens possuem o atributo `alt` detalhado, descrevendo os gatos e produtos para deficientes visuais.
* **Indicadores de Foco Visível:** Links e botões possuem contorno destacado ao serem navegados via tecla `Tab`.
* **Opção de aumentar e diminuir fonte:** Botão de acessibilidade que permite ao usuário ajustar o tamanho da fonte em toda a aplicação.
* **Modo de Alto Contraste:** Botão de acessibilidade que altera a paleta de cores para uma versão de alto contraste, melhorando a legibilidade para pessoas com baixa visão ou daltonismo.

### 4. Responsividade e Adaptabilidade

* **Layouts Flexíveis:** Utilização de **Flexbox** no cabeçalho e rodapé, e **CSS Grid** na galeria de gatos e itens do cardápio.
* **Media Queries:** Breakpoints ajustados para garantir usabilidade perfeita em celulares, tablets e monitores desktop.

---

## 📐 Heurísticas de Nielsen e Modelos Cognitivos

1. **Visibilidade do Status do Sistema (Heurística #1):**
   * Indicador visual ativo no menu superior destacando em qual página o usuário se encontra no momento.
   * Feedbacks visuais (`:hover`, `:active`) em botões de envio em formulários.
2. **Correspondência entre o Sistema e o Mundo Real (Heurística #2):**
   * Terminologia familiar (Cardápio, Adoção, Perfil, Delivery), evitando jargões técnicos de programação.
3. **Prevenção de Erros (Heurística #5):**
   * Formulários de Adoção e Delivery contam com validação nativa HTML5 (`required`, `type="email"`, `type="tel"`) para evitar envios incompletos.
4. **Affordance e Signos Visualmente Evidentes:**
   * Botões como *"Quero Adotar"* e *"Fazer Pedido"* possuem affordance explícita: cantos arredondados, elevação visual e mudança de cor ao passar o ponteiro do mouse.
5. **Minimização dos Golfos de Norman:**
   * **Golfo de Execução reduzido:** Botões de ação direta e menus acessíveis diminuem o esforço mental necessário para planejar e executar uma tarefa.
   * **Golfo de Avaliação reduzido:** Respostas visuais imediatas permitem que o usuário avalie instantaneamente se sua ação foi bem-sucedida.

---

## 🛠️ Tecnologias Utilizadas

* **HTML:** Estruturação semântica e acessível.
* **CSS:** Variáveis customizadas, Flexbox, CSS Grid e Media Queries para responsividade.
* **javaScript:** implementação de funcionalidades interativas e recursos de acessibilidade.
* **Git & GitHub:** Controle de versão com commits individuais de cada integrante.
* **GitHub Pages:** Hospedagem e publicação da aplicação web.

---

## 🚀 Como Visualizar o Projeto Localmente

1. Clone o repositório no seu computador:

   git clone [suspicious link removed]

2. Entre no diretório do projeto:

   cd NOME-DO-REPOSITORIO

3. Abra o arquivo `index.html` em qualquer navegador web.
