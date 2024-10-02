// Declarando Array
let alunos =  ["Jon Oliva", "Picapau", "Branca de Neve"];

// Exibindo a estrutura do array
console.log(alunos);

// Acessando um elemento específico do array
console.log(`${alunos [2]} é vocalista da banda Slayes!🤘`);

// Crie um novo array contendo o nome de 7 coisas que você gosta...

let coisas = ["filmes", "séries", "cachorro"," gato", "academia", "jogos" ]

// Em seguida, mostre no console uma frase personalizada indicando o nome do segundo,quinto e setimo elemento do array.use concatenação ou template string.

console.log(`Eu gosto de assistir ${coisas [1]}, ir a ${coisas[4]} e assistir ${coisas[5]} do palmeiras.`);


/* Arrays como Matriz de 2 dimensões  */

const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express", ["Apache", "IIS"]]
];


// console.log(tecnologias);
console.log(tecnologias[2][4][0]);//Apache 
console.log(tecnologias[0][2]); //JavaScript 
console.log(tecnologias[1][0]); //Figma
console.log(tecnologias[2][3]);//Express
console.log(tecnologias[0][0]);// HTML5


 
 








