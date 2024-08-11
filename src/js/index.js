const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    //Lista de Eventos
    botao.addEventListener("click", () => {
        //Remover botão selecionado;
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        //Alterar para botão selecionado
        botao.classList.add("selecionado");

        //Remover informação ativa do botão selecionado anteriormente
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        //exibir informação referente ao botão selecionado
        informacoes[indice].classList.add("ativa");

        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        imagens[indice].classList.add("ativa");
    })


});