
// FOREACH:

// // Definindo um array de números
// let numeros = [1, 2, 3, 4, 5];

// // Usando forEach para iterar sobre cada elemento e imprimir no console
// numeros.forEach((numero) => console.log(numero));

// ----------------------------------------------------------------------------------------------------------------------

// // Definindo um array de objetos
// let pessoas = [
//     { nome: 'João', idade: 30 },
//     { nome: 'Maria', idade: 25 },
//     { nome: 'Pedro', idade: 40 }
// ];

// // Função de callback que imprime o nome de cada pessoa
// function imprimirNome(pessoa) {
//     console.log(pessoa.nome);
// }

// // Usando forEach com a função de callback
// pessoas.forEach(imprimirNome);

// ----------------------------------------------------------------------------------------------------------------------

// FILTER:

// Array de números
// let numeros = [10, 5, 20, 25, 15];

// let numerosFiltrados = numeros.filter((numero) => numero > 15);

// console.log(numerosFiltrados);

// ----------------------------------------------------------------------------------------------------------------------

// let numeros = [1, 2, 3, 4, 5];

// let numerosPares = numeros.filter((numero) => numero % 2 === 0);

// console.log(numerosPares);

// ----------------------------------------------------------------------------------------------------------------------

// MAP:

// let numeros = [1, 2, 3, 4, 5];

// const numerosDobrados = numeros.map((numero) => numero * 2);

// console.log(numerosDobrados); 

// ----------------------------------------------------------------------------------------------------------------------

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }

// const pessoas = [new Pessoa('Josiel'), new Pessoa('Gabriel'), new Pessoa('Pedro'), new Pessoa('Fernando'), new Pessoa('Alice')];

// const nomesPessoas = pessoas.map((pessoas) => pessoas.nome);

// console.log(nomesPessoas);

// ----------------------------------------------------------------------------------------------------------------------

// REDUCE:

// let numeros = [1, 2, 3, 4, 5];
// let soma = numeros.reduce((previous, current) => previous + current, 0);
// console.log(soma);

// ----------------------------------------------------------------------------------------------------------------------

// let palavras = ['Olá', 'mundo', '!', 'JavaScript', 'é', 'divertido'];

// const frase = palavras.reduce((previus, current) => `${previus} ${current}`)

// console.log(frase)

// ----------------------------------------------------------------------------------------------------------------------

// CRIAR UM OBJETO A PARTIR DE UM ARRAY DE PARES CHAVE-VALOR:

// let pares = [['chave1', 'valor1'], ['chave2', 'valor2'], ['chave3', 'valor3']];
// let objeto = pares.reduce((previous, [chave, valor]) => {
//     previous[chave] = valor;
//     return previous;
// }, {});
// console.log(objeto);

// ----------------------------------------------------------------------------------------------------------------------

// JOIN:

// let numeros = [1, 2, 3, 4, 5];
// let concatenacao = numeros.join('-');
// console.log(concatenacao); 

// ----------------------------------------------------------------------------------------------------------------------]

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }

// const pessoas = [new Pessoa('Josiel'), new Pessoa('Gabriel'), new Pessoa('Pedro'), new Pessoa('Amanda'), new Pessoa('Alice')];

// console.log(pessoas.map((pessoa) => pessoa.nome).filter((pessoa) => pessoa.startsWith('A')).join(' / '));

// ----------------------------------------------------------------------------------------------------------------------]

// DESAFIO 1: MANIPULAÇÃO BÁSICA DE LISTA:

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numeros.forEach((numero) => console.log(numero));

// // lista contendo apenas os números pares.
// numeros.filter((numero) => {
//     if (numero % 2 === 0) {
//         console.log(numero);
//     }
// })

// // lista contendo o dobro de cada número:
// numeros.map((numero) => console.log(numero * 2));

// // soma de todos os números da lista:
// const soma = numeros.reduce((previus, current) => previus + current, 0);
// console.log(soma);

// // números separados por vírgulas:
// const numerosString = numeros.join(',');
// console.log(numerosString);

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO 2: MANIPULAÇÃO DE LISTA DE STRINGS:

// const frutas = ['Abacate', 'Morango', 'Uva', 'Melancia', 'Banana'];

// frutas.forEach((fruta) => console.log(fruta));

// // nova lista contendo apenas os nomes que começam com a letra 'A'.
// const frutasComA = frutas.filter((fruta) => fruta.startsWith('A'));
// console.log(frutasComA);

// // nova lista contendo o comprimento de cada nome.
// frutas.map(fruta => console.log(fruta.length));

// // concatenar todos os nomes em uma única string, separados por um espaço.
// const frutasConcatenadas = frutas.reduce((previus, current) => previus + ' ' + current);
// console.log(frutasConcatenadas);

// // criar uma string com todos os nomes separados por um ponto e vírgula.
// const frutasString = frutas.join('; ');
// console.log(frutasString);

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO 3: MANIPULAÇÃO DE LISTA DE OBJETOS:

// const produtos = [
//     { nome: 'Produto A', preco: 30 },
//     { nome: 'Produto B', preco: 50 },
//     { nome: 'Produto C', preco: 70 },
//     { nome: 'Produto D', preco: 90 }
// ];

// produtos.forEach(produto => console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}`));

// // nova lista contendo apenas os produtos com preço maior que 50.
// const produtosCaros = produtos.filter(produto => produto.preco > 50 );
// console.log(produtosCaros);

// //  nova lista contendo apenas os nomes dos produtos.
// produtos.map(produto => console.log(produto.nome));

// // calcular o preço total de todos os produtos.
// const somaPrecos = produtos.reduce((previus, current) => previus + current.preco,0);
// console.log(somaPrecos);

// // string com todos os nomes dos produtos separados por uma barra vertical (|).
// const nomesString = produtos.map(produto => produto.nome).join(' | ');
// console.log(nomesString); 

// ----------------------------------------------------------------------------------------------------------------------