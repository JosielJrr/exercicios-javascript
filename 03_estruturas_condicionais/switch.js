// Verificando o dia da semana

let diaSemana = 1;

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira"); // Saída: Segunda-feira
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Valor inválido para dia da semana");
}

// ----------------------------------------------------------------------------------------------------------------------
// Classificando notas com base na pontuação

/* 
  Crie um programa que recebe uma nota de 0 a 100 e retorna a classificação conforme a faixa de notas:
  - "A" para notas de 90 a 100
  - "B" para notas de 80 a 89
  - "C" para notas de 70 a 79
  - "D" para notas de 60 a 69
  - "F" para notas abaixo de 60
*/

function classificarNota(nota) {
    let classificacao;

    switch (true) {
        case (nota >= 90 && nota <= 100):
            classificacao = "A";
            break;
        case (nota >= 80 && nota < 90):
            classificacao = "B";
            break;
        case (nota >= 70 && nota < 80):
            classificacao = "C";
            break;
        case (nota >= 60 && nota < 70):
            classificacao = "D";
            break;
        case (nota >= 0 && nota < 60):
            classificacao = "F";
            break;
        default:
            classificacao = "Nota inválida";
    }

    return classificacao;
}

console.log(classificarNota(95));   // Saída: A
console.log(classificarNota(82));   // Saída: B
console.log(classificarNota(68));   // Saída: D
console.log(classificarNota(55));   // Saída: F
console.log(classificarNota(105));  // Saída: Nota inválida

// ----------------------------------------------------------------------------------------------------------------------
// Verificando se a cor é primária

function verificarCorPrimaria(cor) {
    let mensagem;

    switch (cor.toLowerCase()) {
        case 'vermelho':
            mensagem = 'A cor vermelho é quente';
            break;
        case 'azul':
            mensagem = 'A cor azul é fria';
            break;
        case 'amarelo':
            mensagem = 'A cor amarelo é quente';
            break;
        default:
            mensagem = 'Essa cor não é primária';
    }

    return mensagem;
}

console.log(verificarCorPrimaria('vermelho')); // Saída: A cor vermelho é quente
console.log(verificarCorPrimaria('azul'));     // Saída: A cor azul é fria
console.log(verificarCorPrimaria('amarelo'));  // Saída: A cor amarelo é quente
console.log(verificarCorPrimaria('verde'));    // Saída: Essa cor não é primária

// ----------------------------------------------------------------------------------------------------------------------
// Verificando operação de uma calculadora aritmética 

function calcularAritmeticos(valor1, operador, valor2) {
    let resultado;

    switch (operador) {
        case 'soma':
            resultado = valor1 + valor2;
            break;
        case 'subtracao':
            resultado = valor1 - valor2;
            break;
        case 'multiplicacao':
            resultado = valor1 * valor2;
            break;
        case 'divisao':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = 'error: Divisão por zero';
            }
            break;
        default:
            resultado = 'Operação não reconhecida';
    }

    return resultado;
}

console.log(calcularAritmeticos(10, 'soma', 10));           // Saída: 20
console.log(calcularAritmeticos(10, 'subtracao', 10));      // Saída: 0
console.log(calcularAritmeticos(10, 'multiplicacao', 10));  // Saída: 100
console.log(calcularAritmeticos(10, 'divisao', 10));        // Saída: 1

// ----------------------------------------------------------------------------------------------------------------------
// Verificando opções de menu

function menuOpcoes(opcao) {
    let mensagem = null;

    switch (opcao) {
        case 1:
            mensagem = 'Cadastro realizado com sucesso!';
            break;
        case 2:
            mensagem = 'Alteração realizada com sucesso!';
            break;
        case 3:
            mensagem = 'Exclusão realizada com sucesso!';
            break;
        case 4:
            mensagem = 'Consulta realizada com sucesso!';
            break;
        default:
            mensagem = 'Opção não reconhecida. Por favor, escolha uma opção válida.';
            break;
    }

    return mensagem;
}

console.log(menuOpcoes(1)); // Saída: Cadastro realizado com sucesso!
console.log(menuOpcoes(2)); // Saída: Alteração realizada com sucesso!
console.log(menuOpcoes(3)); // Saída: Exclusão realizada com sucesso!
console.log(menuOpcoes(4)); // Saída: Consulta realizada com sucesso!
console.log(menuOpcoes(5)); // Saída: Opção não reconhecida. Por favor, escolha uma opção válida.

// ----------------------------------------------------------------------------------------------------------------------
// Verificando tradução de palavras

function traduzirPalavras(palavra) {

    switch (palavra.toLowerCase()) {
        case 'hello':
            console.log('Olá'); 
            break;
        case 'goodbye':
            console.log('Adeus'); 
            break;
        case 'please':
            console.log('Por favor'); 
            break;
        case 'thank you':
            console.log('Obrigado'); 
            break;
        default:
            console.log('Tradução não encontrada'); 
    }
}

traduzirPalavras('hello');      // Saída: Olá
traduzirPalavras('goodbye');    // Saída: Adeus
traduzirPalavras('please');     // Saída: Por favor
traduzirPalavras('thank you');  // Saída: Obrigado
traduzirPalavras('Thank car'); // Saída: Tradução não encontrada
