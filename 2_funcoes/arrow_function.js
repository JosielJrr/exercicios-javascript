// // ARROW FUNCTION QUE RETORNA O DOBRO DE UM NÚMERO:

// const dobrar = (num) => {
//     return num * 2;
// };

// console.log(dobrar(5));

// OU

// // Exemplo de arrow function com uma única linha de código
// const dobrar = num => num * 2;

// console.log(dobrar(5));

// ----------------------------------------------------------------------------------------------------------------------

// ARROW FUNCTION PARA SOMA:

// const soma = (a, b) => a + b;

// console.log(soma(3, 4));

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO DE VERIFICAÇÃO PAR OU ÍMPAR:

// const numParOuImpar = ((num) => {
//     if (num % 2 ===0) {
//         return `${num} é par`;
//     } else {
//         return `${num} é ímpar`;
//     }
// })

// console.log(numParOuImpar(9))

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO DE CALCULADORA BÁSICA:

// const calcularAritmetica = ((num1, operador, num2) => {
//     let resultado = null;

//     switch (operador.toLowerCase()) {
//         case 'soma':
//             resultado = num1 + num2;
//             break
//         case 'subtracao':
//             resultado = num1 - num2;
//             break
//         case 'multiplicacao':
//             resultado = num1 * num2;
//             break
//         case 'divisao':
//             if (num2 !== 0) {
//                 resultado = num1 / num2;
//             } else {
//                 resultado = 'error: Divivão por zero';
//             }
//             break
//         default:
//             resultado = 'Operação não reconhecida';
//     }
//     return resultado;
// })

// console.log(calcularAritmetica (10,'Soma', 10));

// OU

// const soma = ((num1, num2) => num1 + num2);
// const subtracao = ((num1, num2) => num1 - num2);
// const multiplicacao = ((num1, num2) => num1 * num2);
// const divisao = ((num1, num2) => {
//     if (num2 !== 0) {
//         return num1 / num2;
//     } else {
//         return 'error: Divivão por zero';
//     }
// });

// console.log(soma(10,10));

// ----------------------------------------------------------------------------------------------------------------------

// FUNÇÃO PARA ORDENAR NÚMEROS EM ORDEM CRESCENTE USANDO ARROW FUNCTION E SORT():

// const ordenarNumerosCrescente = (numeros) => {
//     // Utiliza o método sort() no array de números
//     numeros.sort((a, b) => a - b);
//     // Retorna o array ordenado em ordem crescente
//     return numeros;
// };

// // Função para ordenar números em ordem decrescente usando arrow function e sort()
// const ordenarNumerosDecrescente = (numeros) => {
//     // Utiliza o método sort() com função de comparação invertida
//     numeros.sort((a, b) => b - a);
//     // Retorna o array ordenado em ordem decrescente
//     return numeros;
// };

// // Exemplos de uso das funções de ordenação
// console.log(ordenarNumerosCrescente([5, 2, 9, 1, 5]));   // Saída: [1, 2, 5, 5, 9]
// console.log(ordenarNumerosDecrescente([5, 2, 9, 1, 5])); // Saída: [9, 5, 5, 2, 1]
// console.log(ordenarNumerosCrescente([-10, 0, 8, -5, 3]));   // Saída: [-10, -5, 0, 3, 8]
// console.log(ordenarNumerosDecrescente([-10, 0, 8, -5, 3])); // Saída: [8, 3, 0, -5, -10]

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO DA MAIORIDADE:

// const verificarMaiorIdade = ((idade) => idade >= 18);

// console.log(verificarMaiorIdade(29))

// ----------------------------------------------------------------------------------------------------------------------

