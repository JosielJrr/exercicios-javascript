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

// ESTRUTURA DE REPETIÇÃO WHILE:

// let contador = 0;
// while (contador < 5) {
//     console.log(contador);
//     contador++;
// }

// ----------------------------------------------------------------------------------------------------------------------

// ESTRUTURA DE REPETIÇÃO DO...WHILE:

// let contador = 0;
// do {
//     console.log(contador);
//     contador++;
// } while (contador < 5);

// ----------------------------------------------------------------------------------------------------------------------