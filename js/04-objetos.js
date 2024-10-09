// Exemplo 1: objeto com dados da pessoa

const pessoa = {
    nome: "Chaves",
    idade: 10,
    cidade: "São Paulo",
    estado: "SP"
};

// Exibindo estruturas do objeto
console.log(pessoa);

// Acessando determinadas propriedades
console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}`);

// Exemplo 2: objeto com array
const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As duas torres",
        "o Retorno do Rei"
    ]
}

//Exibindo a estrutura
console.log(livro);

// Acesso usando nome da pro. e o índice do array desta prop.
console.log(livro.volumes[1]);

// Exemplo 3: array de objetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Senhor dos Anéis",
        autor: "J.R.R. Tolkein"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    }
];

console.log(livros[1].autor);

/*  Crie um objeto chamado "aluno" contendo os seguintes dados:
Nome Completo
Data de Nascimento
Lista de telefones (fixo e celular)
(DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): rua, número e bairro
Mostre no console o nome do aluno, o telefone celular e o bairro em que mora.*/

const aluno = {
   
    nomeCompleto: "Heloisa Germano Bussi",
    dataDeNascimento: "08/04/1988",
    tel: ["11-2684-6534", "11-97484-1666"],
    endereco: {
        rua: "Rua coronel Meireles",
        numero: "12",
        bairro: "Penha"
    }

}
console.log(aluno.nomeCompleto);
console.log(aluno.tel[1]);
console.log(aluno.endereco.bairro);









