// Verificando se o número é positivo, negativo ou nulo

const numero = 0;

if (numero > 0) {
    console.log('O número é POSITIVO!');
} else if (numero < 0) {
    console.log('O número é NEGATIVO!');
} else {
    console.log('O número é NULO!'); // Saída: O número é NULO!
}

// ----------------------------------------------------------------------------------------------------------------------
// Verificando se o número é par ou ímpar

const num = 9;

if (num % 2 === 0) {
    console.log('O número é PAR!');
} else {
    console.log('O número é ÍMPAR!'); // Saída: O número é ÍMPAR!
}

// ----------------------------------------------------------------------------------------------------------------------
// Verificando se um número é múltiplo de outro

const numero1 = 5;
const numero2 = 2;

if (numero1 % numero2 === 0) {
    console.log(`O ${numero1} é múltiplo de ${numero2}`);
} else {
    console.log(`O ${numero1} NÃO é múltiplo de ${numero2}`); // Saída: O 5 NÃO é múltiplo de 2
}

// ----------------------------------------------------------------------------------------------------------------------
// Verificando se o ano é bissexto

const ano = 2004;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`O ano de ${ano} é bissexto`); // Saída: O ano de 2004 é bissexto
} else {
    console.log(`O ano ${ano} NÃO é bissexto`);
}

// ----------------------------------------------------------------------------------------------------------------------
// Determinando o maior entre os três números

const num1 = 1;
const num2 = 1;
const num3 = 2;

if (num1 > num2 && num1 > num3) {
    console.log(`O ${num1} é maior que o ${num2} e o ${num3}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`O ${num2} é maior que o ${num1} e o ${num3}`);
} else {
    console.log(`O ${num3} é maior que o ${num1} e o ${num2}`); // Saída: O 2 é maior que o 1 e o 1
}

// ----------------------------------------------------------------------------------------------------------------------
// Desafio 1 DIO: Valor da viagem

const precoEtanol = 5.79;
const precoGasolina = 7;
const tipoCombustivel = 'etanol';
const kmPorLitros = 10;
const distanciaViagemPorKm = 100;

const litrosConsumidos = distanciaViagemPorKm / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const valorViagem = litrosConsumidos * precoEtanol;
    console.log(`Valor da viagem com etanol: R$ ${valorViagem.toFixed(2)}`);
} else {
    const valorViagem = litrosConsumidos * precoGasolina;
    console.log(`Valor da viagem com gasolina: R$ ${valorViagem.toFixed(2)}`);
} // Saída: Valor da viagem com etanol: R$ 57.90


// ----------------------------------------------------------------------------------------------------------------------
// Desafio 2 DIO: Média dos alunos

function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;

    if (media < 5) {
        console.log('Aluno REPROVADO!');
    } else if (media >= 5 && media <= 7) {
        console.log('Aluno em RECUPERAÇÃO!');
    } else {
        console.log('Aluno APROVADO');
    }
}

calcularMedia(3, 7, 4); // Saída: Aluno em RECUPERAÇÃO!

// ----------------------------------------------------------------------------------------------------------------------
// Desafio 3 DIO: IMC

const peso = 86;
const altura = 1.84;

const imc = peso / (altura * altura);
console.log(`IMC = ${imc.toFixed(2)}`); // Saída: IMC = 25.44

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
} // Saída: Acima do peso

// ----------------------------------------------------------------------------------------------------------------------
// Desafio 4 DIO: Valor pago em um produto

const precoEtiqueta = 100;
const formaDePagamento = 2;

if (formaDePagamento === 1) {
    const valorFinal = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log(`Valor com 10% de desconto: R$ ${valorFinal.toFixed(2)}`);
} else if (formaDePagamento === 2) {
    const valorFinal = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(`Valor com 15% de desconto: R$ ${valorFinal.toFixed(2)}`);
} else if (formaDePagamento === 3) {
    console.log(`Valor sem desconto: R$ ${precoEtiqueta.toFixed(2)}`);
} else if (formaDePagamento === 4) {
    const valorFinal = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log(`Valor com 10% de juros: R$ ${valorFinal.toFixed(2)}`);
} else {
    console.log("Forma de pagamento inválida");
} // Saída: Valor com 15% de desconto: R$ 85.00



