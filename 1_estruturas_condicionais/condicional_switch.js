// // EXEMPLO DE USO DO SWITCH PARA AVALIAR O DIA DA SEMANA:

// // Variável que representa o dia da semana (número de 0 a 6, onde 0 é domingo)
// let diaSemana = 1;

// // Switch avaliando o valor de diaSemana
// switch (diaSemana) {
//     case 0:
//         console.log("Domingo");
//         break;
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2:
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4:
//         console.log("Quinta-feira");
//         break;
//     case 5:
//         console.log("Sexta-feira");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Valor inválido para dia da semana");
// }

// ----------------------------------------------------------------------------------------------------------------------

// CLASSIFICAÇÃO DE NOTAS:

// Crie um programa que recebe uma nota de 0 a 100 e retorna a classificação conforme a faixa de notas: "A" para notas de 90 a 100, "B" para notas de 80 a 89, e assim por diante.

// function classificarNota(nota) {
//     let classificacao;

//     switch (true) {
//         case (nota >= 90 && nota <= 100):
//             classificacao = "A";
//             break;
//         case (nota >= 80 && nota < 90):
//             classificacao = "B";
//             break;
//         case (nota >= 70 && nota < 80):
//             classificacao = "C";
//             break;
//         case (nota >= 60 && nota < 70):
//             classificacao = "D";
//             break;
//         case (nota >= 0 && nota < 60):
//             classificacao = "F";
//             break;
//         default:
//             classificacao = "Nota inválida";
//     }

//     return classificacao;
// }

// // Exemplos de uso:
// console.log(classificarNota(95));  
// console.log(classificarNota(82)); 
// console.log(classificarNota(68));  
// console.log(classificarNota(55));  
// console.log(classificarNota(105));

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO DAS CORES PRIMÁRIAS:

// function verificarCorPrimaria(cor) {
//     let mensagem;

//     // converter todos os caracteres de uma string para letras minúsculas
//     switch (cor.toLowerCase()) {
//         case 'vermelho':
//             mensagem = 'A cor vermelho é quente';
//             break
//         case 'azul':
//             mensagem = 'A cor azul é fria';
//             break
//         case 'amarelo':
//             mensagem = 'A cor amarelo é quente';
//             break
//         default:
//             mensagem = 'Essa cor não é primária';
//     }
//     return mensagem
// }

// console.log(verificarCorPrimaria('vermelho'));
// console.log(verificarCorPrimaria('azul'));
// console.log(verificarCorPrimaria('amarelo'));
// console.log(verificarCorPrimaria('verde'))

// ----------------------------------------------------------------------------------------------------------------------

// CALCULADORA SIMPLES:

// function calcularAritmeticos(valor1, operador, valor2) {
//     let resultado;

//     switch (operador) {
//         case 'soma':
//             resultado = valor1 + valor2;
//             break
//         case 'subtracao':
//             resultado = valor1 - valor2;
//             break
//         case 'multiplicacao':
//             resultado = valor1 * valor2;
//             break
//         case 'divisao':
//             if (valor2 !== 0) {
//                 resultado = valor1 / valor2;
//             } else {
//                 resultado = 'error: Divisão por zero'
//             }
//             break
//         default:
//             resultado = 'Operação não reconhecida'
//     }
//     return resultado
// }

// console.log(calcularAritmeticos(10, 'soma', 10))
// console.log(calcularAritmeticos(10, 'subtracao', 10))
// console.log(calcularAritmeticos(10, 'multiplicacao', 10))
// console.log(calcularAritmeticos(10, 'divisao', 10))

// ----------------------------------------------------------------------------------------------------------------------

// MENU DE OPÇÕES:

// function menuOpcoes(opcao) {
//     let mensagem = null
//     switch(opcao) {
//         case 1:
//             mensagem = 'Cadastro realizado com sucesso!';
//             break;
//         case 2:
//             mensagem = 'Alteração realizada com sucesso!';
//             break;
//         case 3:
//             mensagem = 'Exclusão realizada com sucesso!';
//             break;
//         case 4:
//             mensagem = 'Consulta realizada com sucesso!';
//             break;
//         default:
//             mensagem = 'Opção não reconhecida. Por favor, escolha uma opção válida.';
//             break;
//     }
//     return mensagem;
// }

// console.log(menuOpcoes(1)); 
// console.log(menuOpcoes(2)); 
// console.log(menuOpcoes(3)); 
// console.log(menuOpcoes(4)); 
// console.log(menuOpcoes(5)); 

// ----------------------------------------------------------------------------------------------------------------------

// TRADUÇÃO DE PALAVRAS:

// function traduzirPalavras(palavra) {
//     switch (palavra.toLowerCase()) {
//         case 'hello':
//             console.log('Olá');
//             break
//         case 'goodbye':
//             console.log('Adeus');
//             break
//         case 'please':
//             console.log('Por favor');
//             break
//         case 'thank you':
//             console.log('Obrigado')
//             break
//         default:
//             console.log('Tradução não encontrada')
//     }
// }

// traduzirPalavras('hello');
// traduzirPalavras('goodbye');
// traduzirPalavras('please');
// traduzirPalavras('thank you');
// traduzirPalavras('Thank Ysou');

// ----------------------------------------------------------------------------------------------------------------------