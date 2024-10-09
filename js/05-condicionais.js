/* Comandos condicionais mais comuns:
if -> SE
else -> SENÃO*/

// Exemplo 1: condicional simples

let numero = 5;

if( numero > 10 ){
    console.log (numero);

}

// Exemplo 2: condicional composta

let aluno = "Klaibert";
let idade = 18;

/* Lógica: Verificar se o aluno é menor de idade ou maior de idade. */
if ( idade < 18 ){
console.log("É menor de idade");

} else {
    console.log("É maior de idade");
    
}

console.log("---\n");

/* Exercicios (Faça Aqui!!!) */

/* 1) Crie duas variáveis conforme a seguir;
Nota 1 (contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10) */

/* 2) Crie uma variavel chamada "Média" que receberá o valor calculado da média das duas notas informadas. DICA: você deve somar as duas notas e depois dividir por 2 */

/* 3) Programe uma condicional que verifique o valor da média calculada.Se a média for maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado" */

let nota1 = 4;
let nota2 = 8;

let soma = nota1 + nota2;
let media = soma / 2;

if (media >= 7){ 
    console.log(`${media} aprovado, parabéns`);
  
} else {
    console.log(`${media} Marcio, reprovado`);
    
 }

//  Shorthand if/else "curto e abreviado") usando operador ternário ?:
let situacao = media >= 7 ? "aprovado" : "repovado";

console.log(situacao);













