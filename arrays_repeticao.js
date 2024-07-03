// ENTENDENDO A ESTRUTURA DE UM ARRAY:

// const alunos = ['João', 'Vitor', 'Marina'];

// // Imprime todo o array
// console.log(alunos);
// // Imprime apenas o primero
// console.log(alunos[0]);

// // Formas de adicionar um novo ítem no array
// alunos.push('Renan');
// alunos[4] = 'Vinícius';
// console.log(alunos); 

// // Substituir um ítem por outro
// alunos[4] = 'Pedro';
// console.log(alunos);

// // Remove e retorna o último elemento de um array.
// console.log(alunos.pop());
// console.log(alunos);

// // Remove e retorna o primeiro elemento de um array.
// console.log(alunos.shift());
// console.log(alunos);

// ----------------------------------------------------------------------------------------------------------------------

// ARRAY DE NÚMEROS DE 1 A 5:

// const numeros = [1, 2, 3, 4, 5];

// console.log(numeros[2]);

// ----------------------------------------------------------------------------------------------------------------------

// ARRAY DE STRINGS: 

// const frustas = ['Uva', 'Tâmara', 'Melão'];

// console.log(frustas[0]);

// ----------------------------------------------------------------------------------------------------------------------

// ARRAY PESSOAS:

// const pessoas = [{ nome: 'Josiel', idade: 24 },
// { nome: 'Júlia', idade: 35 }
// ];

// console.log(pessoas[1].nome);

// ----------------------------------------------------------------------------------------------------------------------

// MODIFICANDO ÍTEM DO ARRAY:

// const frutas = ['Uva', 'Tâmara', 'Melão'];

// frutas[1] = 'Morango';

// console.log(frutas[1]);

// ----------------------------------------------------------------------------------------------------------------------

// ESTRUTURA DE REPETIÇÃO FOR:

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// ----------------------------------------------------------------------------------------------------------------------

// CONTADOR DE LETRA EM UMA VARIÁVEL STRING:

// const nome = 'Josiel Alves da Silva Junior';

// for (let i = 0; i < nome.length; i++) {
//     const letra = nome[i];
//     console.log(letra);
// }

// ----------------------------------------------------------------------------------------------------------------------

// CALCULANDO MÉDIA:

// const notas = [];

// notas.push(5);
// notas.push(7);
// notas.push(8);

// let soma = 0;

// for (let i = 0; i < notas.length; i++) {
//     const nota = notas[i];
//     soma = soma + nota;
// }

// const media = soma / notas.length;

// console.log(media.toFixed(1));

// ----------------------------------------------------------------------------------------------------------------------

// TABUADA:

// const numero = 2;
// for (let i = 1; i <= 10; i++) {
//     console.log(i * numero);
// }

// ----------------------------------------------------------------------------------------------------------------------

// NÚMEROS PARES:

// for (let i = 0; i <= 10; i = i + 2) {

//     console.log(i)
// }

// OU

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     const numero = numeros[i];

//     if (numero % 2 === 0) {
//         console.log(numero)
//     }
// }

// OU

// const numerosPares = [];

// for (let i = 0; i < 10; i++) {
//     const numeroPar = i % 2 === 0;
//     if (numeroPar) {
//         numerosPares.push(i);
//     }
// }

// console.log(numerosPares);

// OU

// const numerosPares = [];

// for (let i = 0; i < 10; i = i + 2) {
//     numerosPares.push(i);
// }

// console.log(numerosPares);

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 1:

// for (let i = 6; i <= 11; i++) {

//     console.log(i);
// }

// OU

// const itens = [6, 7, 8, 9, 10, 11, 'Acabou!']

// for (let i = 0; i < itens.length; i++) {
//     const iten = itens[i];
//     console.log(iten);
// }

// OU

// const numeros = [];

// for (let i = 6; i <= 11; i++) {

//     numeros.push(i);
// }

// console.log(numeros);

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 2:

// for (let i = 10; i >= 3; i = i - 1) {

//     console.log(i);
// }

// console.log('Acabou!');

// OU

// const itens = [10, 9, 8, 7, 6, 5, 4, 3, 'Acabou!'];

// for (let i = 0; i < itens.length; i++) {
//     const iten = itens[i];

//     console.log(iten);
// }

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 3:

// for (let i = 0; i <= 18; i = i + 3) {
//     console.log(i);
// }

// console.log('Acabou!');

// OU

// const itens = [0, 3, 6, 9, 12, 15, 18, 'Acabou!'];

// for (let i = 0; i < itens.length; i++) {
//     const iten = itens[i];
//     console.log(iten);
// }

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 4:

// for (let i = 100; i >= 0; i = i - 5) {
//     console.log(i);
// }

// console.log('Acabou!');

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 5:

// const valor = 35;

// for (let i = 1; i < valor; i++) {
//     console.log(i);
// }

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 6:

// for (let i = 30; i >= 1; i = i - 1) {
//     if (i % 4 === 0) {
//         console.log([i]);
//     } else {
//         console.log(i);
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 7 E 8:

// const valorInicial = 30;
// const valorFinal = 10;
// const incremento = 2;

// if (valorInicial < valorFinal) {
//     for (let i = valorInicial; i <= valorFinal; i = i + incremento) {
//         console.log(i);

//     }
// } else {
//     for (let i = valorInicial; i >= valorFinal; i = i - incremento) {
//         console.log(i);

//     }
// }

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 9:

// let soma = 0;

// for (let i = 6; i <= 100; i = i + 2) {
//     soma = soma + i;

// }

// console.log(soma);

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 10:

// let soma = 0;
// for (let i = 500; i >= 0; i = i - 50) {
//     soma = soma + i;

// }

// console.log(soma);

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 11:

// const numeros = [2, 6, 7, 8, 4, 5, 2];

// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//     const numero = numeros[i];
//     soma = soma + numero;

// }

// console.log(soma);

// ----------------------------------------------------------------------------------------------------------------------

//CURSO EM VÍDEO - DESAFIO 12:

// const numeros = [3, 4, 6, 7, 2, 3];

// for (let i = 0; i < numeros.length; i++) {
//     const numero = numeros[i];

//     if (numero % 2 === 0) {
//         console.log(`${numero} = PAR`);
//     } else {
//         console.log(`${numero} = ÍMPAR`);
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------

//CONTAGEM DE 1 A 10:

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// ----------------------------------------------------------------------------------------------------------------------

//NÚMEROS PARES:

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------

//SOMA DE UM ARRAY:

// const numeros = [4, 3, 5, 6, 2, 7, 8, 1, 4, 18];

// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//     const numero = numeros[i];
//     soma = soma + numero;
// }

// console.log(soma);

// ----------------------------------------------------------------------------------------------------------------------

//FATORIAL:

// function calcularFatorial(n) {
//     let fatorial = 1; // Inicializa a variável fatorial com 1
//     for (let i = 1; i <= n; i++) {
//         fatorial *= i; // Multiplica fatorial pelo valor de i a cada iteração
//     }
//     return fatorial; // Retorna o resultado final
// }

// // Exemplo de uso:
// let numero = 5;
// console.log("O fatorial de " + numero + " é: " + calcularFatorial(numero));

// ----------------------------------------------------------------------------------------------------------------------

// MANIPULANDO LISTAS:
// forEach:

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

// MANIPULANDO LISTAS:
// filter:

// Array de números
// let numeros = [10, 5, 20, 25, 15];

// let numerosFiltrados = numeros.filter((numero) => numero > 15);

// console.log(numerosFiltrados);

// ----------------------------------------------------------------------------------------------------------------------

// let numeros = [1, 2, 3, 4, 5];

// let numerosPares = numeros.filter((numero) => numero % 2 === 0);

// console.log(numerosPares);

// ----------------------------------------------------------------------------------------------------------------------

// MANIPULANDO LISTAS:
// map:

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

// MANIPULANDO LISTAS:
// Reduce:

// let numeros = [1, 2, 3, 4, 5];
// let soma = numeros.reduce((previous, current) => previous + current, 0);
// console.log(soma);

// ----------------------------------------------------------------------------------------------------------------------

// let palavras = ['Olá', 'mundo', '!', 'JavaScript', 'é', 'divertido'];

// const frase = palavras.reduce((previus, current) => `${previus} ${current}`)

// console.log(frase)

// ----------------------------------------------------------------------------------------------------------------------
// Criar um objeto a partir de um array de pares chave-valor:

// let pares = [['chave1', 'valor1'], ['chave2', 'valor2'], ['chave3', 'valor3']];
// let objeto = pares.reduce((previous, [chave, valor]) => {
//     previous[chave] = valor;
//     return previous;
// }, {});
// console.log(objeto);

// ----------------------------------------------------------------------------------------------------------------------

// MANIPULANDO LISTAS:
// join:

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

// Desafio 1: Manipulação Básica de Lista:

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

// Desafio 2: Manipulação de Lista de Strings:

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

// Desafio 3: Manipulação de Lista de Objetos:

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

// Estrutura de repetição while:

// let contador = 0;
// while (contador < 5) {
//     console.log(contador);
//     contador++;
// }

// ----------------------------------------------------------------------------------------------------------------------

// Estrutura de repetição do...while:

// let contador = 0;
// do {
//     console.log(contador);
//     contador++;
// } while (contador < 5);

// ----------------------------------------------------------------------------------------------------------------------