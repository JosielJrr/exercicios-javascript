// VERIFICAR SE O NÚMERO É POSITIVO, NEGATIVO OU NULO:

// const numero = 0;

// if (numero > 0) {
//     console.log('O número é POSITIVO!');
// } else if (numero < 0) {
//     console.log('O número é NEGATIVO!');
// } else {
//     console.log('O número é NULO!');
// }

// ----------------------------------------------------------------------------------------------------------------------

// VERIFICAR SE O NÚMERO É PAR OU ÍMPAR:

// const numero = 9;

// if (numero % 2 === 0) {
//     console.log('O número é PAR!');
// } else {
//     console.log('O número é ÍMPAR!');
// }

// ----------------------------------------------------------------------------------------------------------------------

// VERIFICAR SE O NÚMERO É MÚLTIPLO DE OUTRO:

// const numero1 = 5;
// const numero2 = 2;

// if (numero1 % numero2 === 0) {
//     console.log(`O ${numero1} é múltiplo de ${numero2}`);
// } else {
//     console.log(`O ${numero1} NÃO é mútiplo de ${numero2}`);
// }

// ----------------------------------------------------------------------------------------------------------------------

// VERIFICAR SE O ANO É BISSEXTO:

// const ano = 2004;

// if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
//     console.log(`O ano de ${ano} é bissexto`);
// } else {
//     console.log(`O ano ${ano} NÃO é bissexto`);
// }

// ----------------------------------------------------------------------------------------------------------------------

// DETERMINAR O MAIOR ENTRE OS TRÊS NÚMEROS:

// const numero1 = 1;
// const numero2 = 1;
// const numero3 = 2;

// if (numero1 > numero2 && numero1 > numero3) {
//     console.log(`O ${numero1} é maior que o ${numero2} e o ${numero3}`);
// } else if (numero2 > numero1 && numero2 > numero3) {
//     console.log(`O ${numero2} é maior que o ${numero1} e o ${numero3}`);
// } else {
//     console.log(`O ${numero3} é maior que o ${numero1} e o ${numero2}`);
// }

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO 1 DIO: VALOR DE UMA VIAGEM:

// const precoEtanol = 5.79;
// const precoGasolina = 7;
// const tipoCombustivel = 'etanol';
// const kmPorLitros = 10;
// const distanciaViagemPorKm = 100;

// const litrosConsumidos = distanciaViagemPorKm / kmPorLitros;

// if (tipoCombustivel === 'etanol') {
//     const valorViagem = litrosConsumidos * precoEtanol;
//     console.log(valorViagem.toFixed(2));
// } else {
//     const valorViagem = litrosConsumidos * precoGasolina;
//     console.log(valorViagem.toFixed(2));
// }

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO 2 DIO: MÉDIA DOS ALUNOS:

// function calcularMedia(nota1, nota2, nota3) {
//     const media = (nota1 + nota2 + nota3) / 3;

//     if (media < 5) {
//         console.log('Aluno REPROVADO!');
//     } else if (media >= 5 && media <= 7) {
//         console.log('Aluno em RECUPERAÇÃO!');
//     } else {
//         console.log('Aluno APROVADO');
//     }
// }

// calcularMedia(3, 7, 4);

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO 3 DIO: IMC:

// const peso = 86;
// const altura = 1.84;

// const imc = peso / (altura * altura);
// console.log(`IMC = ${imc.toFixed(2)}`);

// if (imc < 18.5) {
//     console.log('Abaixo do peso');
// } else if (imc >= 18.5 && imc < 25) {
//     console.log('Peso normal');
// } else if (imc >= 25 && imc < 30) {
//     console.log('Acima do peso');
// } else if (imc >= 30 && imc < 40) {
//     console.log('Obeso');
// } else {
//     console.log('Obesidade grave');
// }

// ----------------------------------------------------------------------------------------------------------------------

// DESAFIO 4 DIO: VALOR PAGO EM UM PRODUTO:

// const precoEtiqueta = 100;
// const formaDePagamento = 2;

// if (formaDePagamento === 1) {
//     console.log(precoEtiqueta - (precoEtiqueta * 0.1));
// } else if (formaDePagamento === 2) {
//     console.log(precoEtiqueta - (precoEtiqueta * 0.15));
// } else if (formaDePagamento === 3) {
//     console.log(precoEtiqueta);
// } else if (formaDePagamento === 4) {
//     console.log(precoEtiqueta + (precoEtiqueta * 0.1));
// } else {
//     console.log("Forma de pagamento inválida");
// }

// ----------------------------------------------------------------------------------------------------------------------

