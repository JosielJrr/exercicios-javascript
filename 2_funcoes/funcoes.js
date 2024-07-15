//DIGA MEU NOME:

// function sayMyName (name) {
//     console.log(`Meu nome é ${name}`);
// }

// sayMyName ('Josiel');
// sayMyName ('Pedro');

// ----------------------------------------------------------------------------------------------------------------------

// FIRST-CLASS FUNCTIONS - ATRIBUINDO UMA FUNÇÃO A UMA VARIÁVEL:

// function saudacao() {
//     return 'Olá!';
// }

// const mensagem = saudacao;  // Função atribuída a uma variável
// console.log(mensagem());  

// ----------------------------------------------------------------------------------------------------------------------

// HIGHER-ORDER FUNCTIONS - FUNÇÕES QUE RECEBEM OUTRAS FUNÇÕES COMO ARGUMENTOS:

// function executa(func) {
//     return func();
// }

// function saudacao() {
//     return 'Olá!';
// }

// console.log(executa(saudacao)); 

// ----------------------------------------------------------------------------------------------------------------------

// CLOSURES OU FECHAMENTOS:

// function funcaoExterna() {
//     let variavelExterna = 'Eu sou uma variável externa';

//     function funcaoInterna() {
//         console.log(variavelExterna); // A função interna acessa a variável externa
//     }

//     // Retorna a função interna, criando um closure
//     return funcaoInterna;
// }

// // Chama a função externa para obter a função interna
// let exemploClosure = funcaoExterna();

// // Agora podemos chamar a função que foi retornada
// exemploClosure(); // Isso vai imprimir: "Eu sou uma variável externa"

// ----------------------------------------------------------------------------------------------------------------------

// MÉTODOS CALL E APPLY PARA INVOCAR FUNÇÕES:

// let pessoa = {
//     nome: 'João',
//     saudacao: function (greeting) {
//         console.log(greeting + ' ' + this.nome);
//     }
// };

// let pessoa2 = {
//     nome: 'Maria'
// };

// // Usando o método `call`
// pessoa.saudacao.call(pessoa2, 'Olá'); // Saída: Olá Maria

// // Usando o método `apply`
// pessoa.saudacao.apply(pessoa2, ['Oi']); // Saída: Oi Maria

// ----------------------------------------------------------------------------------------------------------------------

// CALCULADORA ARITMÉTICA:

// function soma(x, y) {
//     return x + y;
// }

// function subtracao(x, y) {
//     return x - y;
// }

// function multiplicacao(x, y) {
//     return x * y;
// }

// function divisao(x, y) {
//     return x / y;
// }

// function calcular(x, operação, y) {
//     console.log(operação(x,y));
// }

// calcular(10, soma, 35);

// ----------------------------------------------------------------------------------------------------------------------

// VALOR AO QUADRADO:

// function quadrado(valor) {
//     return valor * valor;
// }

// const valorQuadrado = quadrado(10);

// console.log(valorQuadrado);

// ----------------------------------------------------------------------------------------------------------------------

// ICREMENTAR JUROS:

// function icrementarJuros(valor, juros) {
//     return (juros / 100) * valor + valor;
// }

// console.log(icrementarJuros(150, 15));

// ----------------------------------------------------------------------------------------------------------------------

// EXEMPLO DE FUNÇÃO MAIN (PRINCIPAL) AUTO-INVOCADA COM O DESAFIO IMC:

// function calcularIMC(peso, altura) {
//     return peso / (altura * altura);
// }

// function classificarIMC(imc) {
//     if (imc < 18.5) {
//         return 'Abaixo do peso';
//     } else if (imc >= 18.5 && imc < 25) {
//         return 'Peso normal';
//     } else if (imc >= 25 && imc < 30) {
//         return 'Acima do peso';
//     } else if (imc >= 30 && imc < 40) {
//         return 'Obeso';
//     } else {
//         return 'Obesidade grave';
//     }
// }

// // MAIN
// (function () {
//     const peso = 84;
//     const altura = 1.84;

//     const imc = calcularIMC(peso, altura);
//     console.log(classificarIMC(imc));
// })();

// ----------------------------------------------------------------------------------------------------------------------

// VERIFICAR A MAIOR IDADE:

// function verificarIdade(idade) {
//     if (idade >= 18) {
//         console.log('Maior de idade');
//     } else {
//         console.log("Menor de idade");
//     }
// }

// verificarIdade (20);

// OU

// function verificarIdade(idade) {
//     if (idade >= 18) {
//         return 'Maior de idade';
//     } else {
//         return "Menor de idade";
//     }
// }

// console.log(verificarIdade (5));

// ----------------------------------------------------------------------------------------------------------------------

// VALOR PAGO EM UM PRODUTO:

// function aplicarDesconto(precoEtiqueta, desconto) {
//     return precoEtiqueta - (precoEtiqueta * (desconto / 100));
// }

// function aplicarJuros(precoEtiqueta, desconto) {
//     return precoEtiqueta + (precoEtiqueta * (desconto / 100));
// }

// const precoEtiqueta = 100;
// const formaDePagamento = 6;

// function verificarFormaDePagamento(formaDePagamento) {
//     if (formaDePagamento === 1) {
//         return aplicarDesconto(precoEtiqueta, 10);
//     } else if (formaDePagamento === 2) {
//         return aplicarDesconto(precoEtiqueta, 15);
//     } else if (formaDePagamento === 3) {
//         return precoEtiqueta;
//     } else if (formaDePagamento === 4) {
//         return aplicarJuros(precoEtiqueta, 10);
//     } else {
//         return 'Forma de pagamento inválida';
//     }
// }

// console.log(verificarFormaDePagamento(formaDePagamento));

// ----------------------------------------------------------------------------------------------------------------------

// VERIFICAR SE O NÚMERO É PAR:

// function verificarNumero(numero) {
//     if (numero % 2 === 0) {
//         console.log(`O ${numero} é PAR!`);
//     } else {
//         console.log(`O ${numero} é ÍMPAR!`);
//     }
// }

// verificarNumero(3);

// ----------------------------------------------------------------------------------------------------------------------

// CALCULAR A ÁREA DE UM RETÂNGULO:

// function calcularAreaRetangulo(largura, altura) {
//     return largura * altura;
// }

// console.log(calcularAreaRetangulo(40, 20));

// ----------------------------------------------------------------------------------------------------------------------

// FUNÇÃO DE SOMA:

// function somar (numero1, numero2) {
//     return numero1 + numero2;
// }

// console.log(somar(15,7));

// ----------------------------------------------------------------------------------------------------------------------

// VERIFICAR MAIOR NÚMERO:

// function verificarMaiorNumero(numero1, numero2) {
//     if (numero1 > numero2) {
//         return `O número ${numero1} é maior que o número ${numero2}`;
//     } else {
//         return `O número ${numero2} é maior que o número ${numero1}`;
//     }
// }
// console.log(verificarMaiorNumero(3, 5));

// ----------------------------------------------------------------------------------------------------------------------

// CONVERTER DE REAL PARA DÓLAR:

// const valorDolar = 3.45;

// function converterDolares(valorReal) {
//     return valorReal / valorDolar;
// }

// console.log(converterDolares(10).toFixed(2));

// ----------------------------------------------------------------------------------------------------------------------

// EQUAÇÃO DO SEGUNDO GRAU, CALCULAR DELTA:

// function calcularSegundoGrau (a, b, c){
//     return (b * b) - 4 * a * c;
// }

// console.log(calcularSegundoGrau(5, 3, 6));

// ----------------------------------------------------------------------------------------------------------------------

// CALCULAR DESCONTO:

// function aplicarDesconto (valor, desconto) {
//     return valor - (valor * (desconto / 100));
// }

// console.log(aplicarDesconto(100,15));

// ----------------------------------------------------------------------------------------------------------------------

// SOMA COM INVOCAÇÃO CALL:

// function calcularSoma(a, b) {
//     console.log(a + b);
// }

// const numeros = {
//     a: 10,
//     b: 10,
// }

// calcularSoma.call(null, numeros.a, numeros.b);

// ----------------------------------------------------------------------------------------------------------------------
