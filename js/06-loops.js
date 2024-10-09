/* Principais comandos de repetições 

-while -> ENQUANTO
-for -> PARA

São comandos de uso geral, existem em praticamente qualquer linguagem de programação.
*/

// Exemplo 1: While

let contador = 1;
while (contador <= 5) {
    console.log("valor do contador é:" + contador);
    contador++; // ++ operador de incremento

}

console.log("---\n");

// Exemplo 2: for
for (let contador = 1; contador <= 10; contador++) {
    // alert ("Oiee pela " +contador+ "a vez")
    console.log("Oiee pela " + contador + "a vez");

}

console.log("chega chato pra caramba");

/* Nomenclatura para variáveis de controle 
Embora possamos dar qualquer nome (como contador por exemplo), geralmente são usadas as letras i, j ou k (ou outras letras se necessário). */

for (let i = 1; i <= 3; i++) {
    console.log("valor de i é" + i);


}

console.log("\n---");

/* Loops exclusivos de Js para estrutura de dados */

// for/of -> loop para array
const cores = ["Azul", "Amarelo", "vermelho", "laranja", "rosa", "preto"]

for (const valor of cores) {
    console.log(valor);

}

// Usando for tradicional
// Guardando o tamanho do array uma vez (fazendo cache do array)
for (let i = 0; i < cores.length; i++) {

    // Usamos i dentro dos colchetes como índice dinâmico do array.
    console.log(cores[i]);

}


// for/in -> loop para objetos

const pessoa = {
    nome: "Fulano da Silva",
    idade: 4,
    cidade: "São Paulo",
    estado: "SP",
    email: "fulano@provedor.com",
    time: "Palmeiras"
}

for (const prop in pessoa) {
    // Mostrar somente o nome da propriedade
    console.log(prop);

    // Mostra somente o valor da propriedade
    console.log(pessoa[prop]);


}

console.log("\n---");

// Exercicios
/* 1) Faça um array chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "indentificador"(com valores 1,2 e 3) e uma propriedade "nome" (com os nomes dos cliente: "Goku","Naruto", "Shiryu"). */

// 2) Faça um lopp ( qualquer um do que vimos) e mostre no console os dados de cada cliente conforme a seguir:
/*
 - cliente:"Goku, id: 1"
 - cliente:"Naruto", id: 2
 - cliente:"Shiryu", id: 3
 
 */

const clientes = [
    { identificador: 1, nome: "Goku" },
    { identificador: 2, nome: "Naruto" },
    { identificador: 3, nome: "Shiryu" }

]


for (const identificador of clientes) {
    console.log(identificador);
};


for (const item of clientes) {
    console.log(`-Nome: ${item.nome}, Identificador: ${item.identificador}, `);
}

