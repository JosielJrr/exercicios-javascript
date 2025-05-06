// Entendendo a estrutura de um array

const alunos = ['João', 'Vitor', 'Marina'];
console.log(alunos); // Saída: [ 'João', 'Vitor', 'Marina' ]
console.log(alunos[0]); // Saída: 'João'

// Adicionando um novo item no array
alunos[3] = 'Vinícius';
console.log(alunos); // Saída: [ 'João', 'Vitor', 'Marina', 'Vinícius' ]

// Substituindo um item por outro
alunos[3] = 'Pedro';
console.log(alunos); // Saída: [ 'João', 'Vitor', 'Marina', 'Pedro' ]

// ----------------------------------------------------------------------------------------------------------------------
// Array de números:

const n = [1, 2, 3, 4, 5];

console.log(n[2]); // Saída: 3

// ----------------------------------------------------------------------------------------------------------------------
// Array de strings:

const frutas = ['Uva', 'Tâmara', 'Melão'];

console.log(frutas[0]); // Saída: Uva
console.log(frutas);    // Saída: ['Uva', 'Tâmara', 'Melão']

// ----------------------------------------------------------------------------------------------------------------------
// Array de objetos:

const pessoas = [
    { nome: 'Josiel', idade: 24 },
    { nome: 'Júlia', idade: 35 }
];

console.log(pessoas[1].nome); // Saída: Júlia

// ----------------------------------------------------------------------------------------------------------------------
// Array heterogêneo:

const misturado = [1, 'texto', true, { nome: 'Josiel' }, [1, 2, 3]];
console.log(misturado); // Saída: [1, 'texto', true, { nome: 'Josiel' }, [1, 2, 3]]

// ----------------------------------------------------------------------------------------------------------------------
// Array Multidimensional:

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[1][2]); // Saída: 6

// ----------------------------------------------------------------------------------------------------------------------
// Modificando item do array:

const cantores = ['Josiel', 'Marcelo', 'Luiz'];

cantores[1] = 'Guilherme';

console.log(cantores); // Saída: ['Josiel', 'Guilherme', 'Luiz']

// ----------------------------------------------------------------------------------------------------------------------
// Operador Spread (...)

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2)  // Saída  [1, 2, 3, 4, 5]

// ----------------------------------------------------------------------------------------------------------------------
// Métodos para manipulação de arrays 
// forEach:

let numeros = [1, 2, 3, 4, 5];

// Usando forEach para iterar sobre cada elemento e imprimir no console
numeros.forEach((numero) => console.log(numero));  // Saída: 1, 2, 3, 4, 5

// forEach:

let clientes = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 40 }
];

// Função de callback que imprime o nome de cada pessoa
function imprimirNome(pessoa) {
    console.log(pessoa.nome);
}

clientes.forEach(imprimirNome); // Saída: 'João', 'Maria', 'Pedro'

// ----------------------------------------------------------------------------------------------------------------------
// Filter:

let valores = [10, 5, 20, 25, 15];

let valoresFiltrados = valores.filter((valor) => valor > 15);

console.log(valoresFiltrados); // Saída: [20, 25]

// Filter:

let elementos = [1, 2, 3, 4, 5];

let elementosPares = elementos.filter((elemento) => elemento % 2 === 0);

console.log(elementosPares); // Saída: [2, 4]

// ----------------------------------------------------------------------------------------------------------------------
// Map:

let digitos = [1, 2, 3, 4, 5];

const digitosDobrados = digitos.map((digito) => digito * 2);

console.log(digitosDobrados); // Saída: [2, 4, 6, 8, 10]

// Map:

class Professor {
    constructor(nome) {
        this.nome = nome;
    }
}

const nomes = ['Josiel', 'Gabriel', 'Pedro', 'Fernando', 'Alice'];

const professores = nomes.map(nome => new Professor(nome));

console.log(professores.map(professor => professor.nome)); // Saída: ['Josiel', 'Gabriel', 'Pedro', 'Fernando', 'Alice']

// ----------------------------------------------------------------------------------------------------------------------
// Reduce:

let entradas = [1, 2, 3, 4, 5];
let soma = entradas.reduce((previous, current) => previous + current, 0);
console.log(soma); // Saída: 15

// Reduce:

let palavras = ['Olá', 'mundo', '!', 'JavaScript', 'é', 'divertido'];

const frase = palavras.reduce((previous, current) => `${previous} ${current}`);

console.log(frase); // Saída: "Olá mundo ! JavaScript é divertido"

// Reduce:

let pares = [['chave1', 'valor1'], ['chave2', 'valor2'], ['chave3', 'valor3']];

let objeto = pares.reduce((previous, [chave, valor]) => {
    previous[chave] = valor;
    return previous;
}, {});

console.log(objeto); // Saída: { chave1: 'valor1', chave2: 'valor2', chave3: 'valor3' }

// ----------------------------------------------------------------------------------------------------------------------
// Join:

let valoresNuméricos = [1, 2, 3, 4, 5];
let concatenacao = valoresNuméricos.join('-');
console.log(concatenacao); // Saída: 1-2-3-4-5


class Artistas {
    constructor(nome) {
        this.nome = nome;
    }
}

// Join:

const artistas = [
    new Artistas('Josiel'),
    new Artistas('Gabriel'),
    new Artistas('Pedro'),
    new Artistas('Amanda'),
    new Artistas('Alice')
];

console.log(
    artistas.map((artista) => artista.nome)
        .filter((artista) => artista.startsWith('A'))
        .join(' / ')
); // Saída: Amanda / Alice

// ----------------------------------------------------------------------------------------------------------------------
// Length:

let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // Saída: 5

// ----------------------------------------------------------------------------------------------------------------------
// Unshift:

let err = [2, 3, 4];
arr.unshift(0, 1);

console.log(err); // Saída: [0, 1, 2, 3, 4]

// ----------------------------------------------------------------------------------------------------------------------
// Push:

let irr = [1, 2, 3];
irr.push(4, 5);

console.log(irr); // Saída: [1, 2, 3, 4, 5]

// ----------------------------------------------------------------------------------------------------------------------
// Shift:

let orr = [1, 2, 3];
let elementoRemovido = orr.shift();

console.log(orr); // Saída: [2, 3]
console.log(elementoRemovido); // Saída: 1

// ----------------------------------------------------------------------------------------------------------------------
// Pop:

let urr = [1, 2, 3];
let valorRemovido = urr.pop();

console.log(urr); // Saída: [1, 2]
console.log(valorRemovido); // Saída: 3

// ----------------------------------------------------------------------------------------------------------------------
// IsArray:

console.log(Array.isArray([1, 2, 3])); // Saída: true
console.log(Array.isArray("hello"));  // Saída: false

// ----------------------------------------------------------------------------------------------------------------------
// Splice:

let x = [1, 2, 3, 4, 5];
x.splice(2, 1, 6); // Remove 1 elemento do índice 2 e adiciona o número 6

console.log(x); // Saída: [1, 2, 6, 4, 5]

// ----------------------------------------------------------------------------------------------------------------------
// Reverse:

let y = [1, 2, 3, 4, 5];
y.reverse();

console.log(y); // Saída: [5, 4, 3, 2, 1]

// ----------------------------------------------------------------------------------------------------------------------
// // Desafio 1: Manipulando Lista de Números:

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numeros.forEach((numero) => console.log(numero)); // Saída: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// // Lista contendo apenas os números pares:
// numeros.filter((numero) => {
//     if (numero % 2 === 0) {
//         console.log(numero); // Saída: 2, 4, 6, 8, 10
//     }
// })

// // Lista contendo o dobro de cada número:
// numeros.map((numero) => console.log(numero * 2)); // Saída: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// // Soma de todos os números da lista:
// const soma = numeros.reduce((previous, current) => previous + current, 0);
// console.log(soma); // Saída: 55

// // Números separados por vírgulas:
// const numerosString = numeros.join(',');
// console.log(numerosString); // Saída: "1,2,3,4,5,6,7,8,9,10"

// ----------------------------------------------------------------------------------------------------------------------
// // Desafio 2: Manipulando Lista de Strings:

// const frutas = ['Abacate', 'Morango', 'Uva', 'Melancia', 'Banana'];
// frutas.forEach((fruta) => console.log(fruta));  // Saída: Abacate, Morango, Uva, Melancia, Banana

// // Lista contendo apenas os nomes que começam com a letra 'A':
// const frutasComA = frutas.filter((fruta) => fruta.startsWith('A'));
// console.log(frutasComA); // Saída: ['Abacate']

// // Lista contendo o comprimento de cada nome:
// frutas.map(fruta => console.log(fruta.length)); 
// // Saída: 7, 7, 3, 9, 6

// // Concatenar todos os nomes em uma única string, separados por um espaço:
// const frutasConcatenadas = frutas.reduce((previous, current) => previous + ' ' + current);
// console.log(frutasConcatenadas); // Saída: "Abacate Morango Uva Melancia Banana"

// // Frutas separadas por um ponto e vírgula:
// const frutasString = frutas.join('; ');
// console.log(frutasString); // Saída: "Abacate; Morango; Uva; Melancia; Banana"

// ----------------------------------------------------------------------------------------------------------------------
// Desafio 3: Manipulando Lista de Objetos:

const produtos = [
    { nome: 'Produto A', preco: 30 },
    { nome: 'Produto B', preco: 50 },
    { nome: 'Produto C', preco: 70 },
    { nome: 'Produto D', preco: 90 }
];

// Imprimir todos os produtos com nome e preço:
produtos.forEach(produto => console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}`));
// Saída: Nome: Produto A, Preço: 30, Nome: Produto B, Preço: 50, Nome: Produto C, Preço: 70, Nome: Produto D, Preço: 90

// Lista contendo apenas os produtos com preço maior que 50:
const produtosCaros = produtos.filter(produto => produto.preco > 50);
console.table(produtosCaros);

// Lista contendo apenas os nomes dos produtos:
produtos.map(produto => console.log(produto.nome));  // Saída: Produto A, Produto B, Produto C, Produto D

// Preço total de todos os produtos:
const somaPrecos = produtos.reduce((previous, current) => previous + current.preco, 0);
console.log(somaPrecos); // Saída: 240

// Produtos separados por uma barra vertical (|):
const nomesProdutosSeparados = produtos.map(produto => produto.nome).join(' | ');
console.log(nomesProdutosSeparados); // Saída: "Produto A | Produto B | Produto C | Produto D"

// ----------------------------------------------------------------------------------------------------------------------
// Novos Métodos de Manipulação de Listas:

// Encontra o produto com o nome 'Produto A' na lista de produtos:
const produtoA = produtos.find(produto => produto.nome === 'Produto A');
console.log(produtoA); // Saída: { nome: 'Produto A', preco: 30 }

// Encontra o índice do produto com o nome 'Produto B' na lista de produtos:
const indiceProdutoB = produtos.findIndex(produto => produto.nome === 'Produto B');
console.log(indiceProdutoB); // Saída: 1

// Verifica se existe algum produto com preço superior a 50 e retorna um valor booleano:
const acimaDe50 = produtos.some(produto => produto.preco > 50);
console.log(acimaDe50); // Saída: true

// Verifica se todos os produtos têm um preço superior a 60 e retorna um valor booleano:
const acimaDe60 = produtos.every(produto => produto.preco > 60);
console.log(acimaDe60); // Saída: false

