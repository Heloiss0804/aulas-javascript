/* Funçoes de acersso e manipulação de DOM

- querySelector () é uma função para selecionar UM ÚNICO elemendo da página (DOM).

-querySeletorAll() é uma funçao para selecionar VÁRIOS elementos na página (DOm).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS*/

/* Exemplo */

const titulo = document.querySelector("h1");
const textoDom = document.querySelector(".texto-dom");
const subtitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p,img,button");
console.log(varios);

/* Modificando elementos do DOM */
titulo.textContent = "Olá JavaScript!!";
textoDom.innerHTML = "<i>O Márcio será reprovado!!</i>"

/* Selecionar todos os links da lista de referências e colocar neles o atributo target valendo _blank */

const links = document.querySelectorAll(".lista-de-referencias a");
console.log(links);

links[0].setAttribute("target", "_blank");

// Se fosse um por um...
// links[0].setAttribute ("target","_blank");

for (let link of links) {
    /* Versão 1 (moderna, serve para qualquer atributo)
     link.setAttribute("target", "_blank"); */

    /* versão 2 ( usando atributos via propriedade)
    mais antiga , vale para atributos nativos do HTML */
    link.target = "_blank"

}

// Manipulando Eventos
const ex1 = document.querySelector("#exemplo01");

// Poderíamos também usar a função getelementByld em vez do querySeletor.A diferença é que ela só funciona para seleção através do ID. Obs.: ou usá-la NÃO COLOQUE #. 
// const ex1 = document.getElementByld("exemplo1");

const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

// Função Ouvinte de evento (Event Listener)
/* aplicado ao elemento ALVO do evento desejado ("click") e uma função para executar as ações a partir do evento.Obs.: esta função é considerada do tipo "anônima" é conhecida como "callback".*/

ex1.addEventListener("click", function () {
    // Acessamos o parágrafo vazio e colocamos um contéudo dentro dele.
    msg.innerHTML = "Olá 😋"

    // Modificar a página
    pagina.style.fontFamily = "Verdana"
})

// Ouvinte de evento para voltar ao normal (sem texto no parágrafo e com fonte padrão na página). o evento ocorrerá ao CLICAR DUAS VEZES no parágrafo da mensagem.
msg.addEventListener("dblclick", function () {
    msg.innerHTML = ""; // removendo contéudo do parágrafo
    pagina.style.fontFamily = "inital"; // voltando para fonte padrão
})



    /// Exemplo 02: modo noturno
const botaoAtivar = document.querySelector("#ativar");

botaoAtivar.addEventListener("click", function () {
    // Usamos o toggle do classList para alternar a aplicação/remoção da classe "noturno".Na prática, vira um liga/desliga.

    pagina.classList.toggle("noturno");

    //   Desafio! Faça aqui mesmo: trocar o texto do botão.
    //  Se a página estiver com a "desativar". Caso contrário, deve mostar a palavra "ativar". use if/else.

    if (pagina.classList.contains("noturno")) {
        botaoAtivar.innerHTML = "Desativar";

    } else { botaoAtivar.innerHTML = "Ativar";}
});

/* Sobre o duplo e o triplo sinal de igual */
let a = "10";
let b = 10;
let resultado = a == b;
console.log(resultado);

/* == compara VALORES
   === compara VALORES e TIPO DE DADO */





