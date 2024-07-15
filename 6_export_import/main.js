// Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100. Faça um programa que receba 5 números dos alunos e mostre o maior número sorteado.

// const { gets, print } = require('./funcoes_auxiliares');

// let numeroAlunos = gets();
// let maiorValorEncontrado = 0;

// for (let i = 0; i < numeroAlunos; i++) {
//     const numeroSorteado = gets();
//     if (numeroSorteado > maiorValorEncontrado) {
//         maiorValorEncontrado = numeroSorteado;
//     }

// }

// print(maiorValorEncontrado);

// ----------------------------------------------------------------------------------------------------------------------

// CLASSIFICAR A MÉDIA DE UM ALUNO:

// const { gets, print } = require('./funcoes_auxiliares');

// const media = gets();

// if (media < 5) {
//     print('REPROVADO');
// } else if (media >= 5 && media < 7) {
//     print('RECUPERAÇÃO');
// } else {
//     print('APROVADO');
// }

// ----------------------------------------------------------------------------------------------------------------------

// MAIOR PAR E MAIOR ÍMPAR:

// const { gets, print } = require('./funcoes_auxiliares');

// const n = gets();
// let maiorNumeroPar = null;
// let menorNumeroImpar = null;

// for (let i = 0; i < n; i++) {
//     const numero = gets();

//     if (numero % 2 === 0) {
//         if (maiorNumeroPar === null || numero > maiorNumeroPar) {
//             maiorNumeroPar = numero;
//         }
//     } else {
//         if (menorNumeroImpar === null || numero < menorNumeroImpar) {
//             menorNumeroImpar = numero;
//         }
//     }
// }

// print(`Maior número par = ${maiorNumeroPar}`);
// print(`Menos número ímpar = ${menorNumeroImpar}`);

// ----------------------------------------------------------------------------------------------------------------------

// SALÁRIO A TRANSFERIR:

// const { gets, print } = require('./funcoes_auxiliares');

// const valorSalarioBruto = gets();
// const valorAdicionalDosBeneficios = gets();

// function calcularPorcentagem(valor, percentual) {
//     return valor * (percentual / 100);
// }

// function pagarPercentualDeImpostoComBaseNoSalario(salario) {
//     if (salario >= 0 && salario <= 1100) {
//         return 5;
//     } else if (salario >= 1100.01 && salario <= 2500) {
//         return 10;
//     } else {
//         return 15;
//     }
// }

// const salarioTransferir = valorSalarioBruto - (calcularPorcentagem(valorSalarioBruto, pagarPercentualDeImpostoComBaseNoSalario(valorSalarioBruto))) + valorAdicionalDosBeneficios;

// print(salarioTransferir);

// ----------------------------------------------------------------------------------------------------------------------

// MULTA POR ALTA VELOCIDADE:

// const { gets, print } = require('./funcoes_auxiliares');

// const velocidade = gets();
// let multa = 0;

// if (velocidade > 80) {
//     print('Multado');
// }

// for (let i = 80; i < velocidade; i++) {
//     multa = multa + 5;
// }

// print(multa)

// ----------------------------------------------------------------------------------------------------------------------

// PODE VOTAR?

// const { gets, print } = require('./funcoes_auxiliares');

// const anoNascimento = gets();
// const anoAtual = 2024;

// const idade = anoAtual - anoNascimento;

// if (idade >= 18) {
//     print(`Idade: ${idade} Pode votar!`);
// } else {
//     print(`Idade: ${idade} Não pode votar!`);
// }

// ----------------------------------------------------------------------------------------------------------------------
