// Verificando o dobro de um número

const dobrar = (num) => {
    return num * 2;
};

console.log(dobrar(5));  // Saída: 10

// Exemplo de arrow function com uma única linha de código

const triplicar = num => num * 3;

console.log(triplicar(5));  // Saída: 15

// ----------------------------------------------------------------------------------------------------------------------
// Verificando a soma 

const somar = (a, b) => a + b;

console.log(somar(3, 4)); // Saída: 7

// ----------------------------------------------------------------------------------------------------------------------
// Verificando se o número é par ou ímpar

const numParOuImpar = ((num) => {
    if (num % 2 === 0) {
        return `${num} é par`;
    } else {
        return `${num} é ímpar`;
    }
});

console.log(numParOuImpar(9)); // Saída: 9 é ímpar

// ----------------------------------------------------------------------------------------------------------------------
// Calculadora aritmética

const calcularAritmetica = ((num1, operador, num2) => {
    let resultado = null;

    switch (operador.toLowerCase()) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'error: Divisão por zero';
            }
            break;
        default:
            resultado = 'Operação não reconhecida';
    }

    return resultado;
});

console.log(calcularAritmetica(10, 'Soma', 10)); // Saída: 20

// ----------------------------------------------------------------------------------------------------------------------
// Verificando operações

const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const multiplicacao = (num1, num2) => num1 * num2;
const divisao = (num1, num2) => {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return 'error: Divisão por zero';
    }
};

console.log(soma(10, 10));          // Saída: 20
console.log(subtracao(15, 5));      // Saída: 10
console.log(multiplicacao(5, 4));   // Saída: 20
console.log(divisao(20, 2));        // Saída: 10
console.log(divisao(20, 0));        // Saída: error: Divisão por zero

// ----------------------------------------------------------------------------------------------------------------------
// Ordenando números em ordem crescente e decrescente

const ordenarNumerosCrescente = (numeros) => {
    numeros.sort((a, b) => a - b); // ordenando em ordem crescente (menor para maior)
    return numeros;
};

const ordenarNumerosDecrescente = (numeros) => {
    numeros.sort((a, b) => b - a); // ordenando em ordem decrescente (maior para menor)
    return numeros;
};

console.log(ordenarNumerosCrescente([5, 2, 9, 1, 5]));       // Saída: [1, 2, 5, 5, 9]
console.log(ordenarNumerosDecrescente([5, 2, 9, 1, 5]));     // Saída: [9, 5, 5, 2, 1]
console.log(ordenarNumerosCrescente([-10, 0, 8, -5, 3]));    // Saída: [-10, -5, 0, 3, 8]
console.log(ordenarNumerosDecrescente([-10, 0, 8, -5, 3]));  // Saída: [8, 3, 0, -5, -10]

// ----------------------------------------------------------------------------------------------------------------------
// Verificando se é maior de idade

const verificarMaiorIdade = (idade) => idade >= 18;

console.log(verificarMaiorIdade(29)); // saída: true



