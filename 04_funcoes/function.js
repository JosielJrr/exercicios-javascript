// Dizendo meu nome

function sayMyName(name) {
    console.log(`Meu nome é ${name}`);
}

sayMyName('Josiel'); // saída: Meu nome é Josiel
sayMyName('Luiz');  // saída: Meu nome é Luiz

// ----------------------------------------------------------------------------------------------------------------------
// First-class functions - atribuindo uma função a uma variável

const saudar = function () {
    console.log("Olá!");
};

saudar(); // saída: Olá!

// ----------------------------------------------------------------------------------------------------------------------
// Higher-order functions - funções que recebem outras funções como argumento

function executar(func) {
    return func();
}

function saudacao() {
    return 'Olá!';
}

console.log(executar(saudacao));  // Saída: Olá!

// ----------------------------------------------------------------------------------------------------------------------
// Closures - funções que têm acesso ao escopo da função externa, mesmo após ela ter sido executada

function funcaoPai() {
    let variavelExterna = 'Eu sou uma variável da função pai';

    function funcaoFilha() {
        console.log(variavelExterna);  // A função filha acessa a variável da função pai
    }
    return funcaoFilha;   // Retorna a função filha, criando um closure
}

let exemploClosure = funcaoPai();  // Chama a função pai para obter a função filha

// Agora podemos chamar a função que foi retornada (função filha)
exemploClosure();  // Saída: "Eu sou uma variável da função pai"

// ----------------------------------------------------------------------------------------------------------------------
// Métodos call e apply para invocar funções com diferentes contextos (this)

let pessoa = {
    nome: 'João',
    saudacao: function (greeting) {
        console.log(greeting + ' ' + this.nome);
    }
};

let pessoa2 = {
    nome: 'Maria'
};

// Usando o método `call` para invocar a função `saudacao` com o contexto de `pessoa2`
pessoa.saudacao.call(pessoa2, 'Olá'); // Saída: Olá Maria

// Usando o método `apply` para invocar a função `saudacao` com o contexto de `pessoa2`
pessoa.saudacao.apply(pessoa2, ['Oi']); // Saída: Oi Maria

// ----------------------------------------------------------------------------------------------------------------------
// Calculadora aritmética

function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    return x / y;
}

function calcular(x, operacao, y) {
    console.log(operacao(x, y));
}

calcular(10, soma, 35);  // Saída: 45 (10 + 35)
// ----------------------------------------------------------------------------------------------------------------------
// Verificando o cálculo do valor ao quadrado

function quadrado(valor) {
    return valor * valor;
}

const valorQuadrado = quadrado(10);

console.log(valorQuadrado);  // Saída: 100

// ----------------------------------------------------------------------------------------------------------------------
// Verificando o incremento de juros

function incrementarJuros(valor, juros) {
    return (juros / 100) * valor + valor;
}

console.log(incrementarJuros(150, 15));  // Saída: 172.5

// ----------------------------------------------------------------------------------------------------------------------
// Verificando o cálculo de IMC e classificação

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

// Função Main auto-invocada 
(function () {
    const peso = 84;
    const altura = 1.84;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));  // Saída: Peso normal
})();

// ----------------------------------------------------------------------------------------------------------------------
// Verificando a maioridade

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log("Menor de idade");
    }
}

verificarIdade(20);  // Saída: Maior de idade

// ----------------------------------------------------------------------------------------------------------------------
// Verificando o valor pago em um produto

function aplicarDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * (desconto / 100));
}

function aplicarJuros(precoEtiqueta, desconto) {
    return precoEtiqueta + (precoEtiqueta * (desconto / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 6;

function verificarFormaDePagamento(formaDePagamento) {
    if (formaDePagamento === 1) {
        return aplicarDesconto(precoEtiqueta, 10);
    } else if (formaDePagamento === 2) {
        return aplicarDesconto(precoEtiqueta, 15);
    } else if (formaDePagamento === 3) {
        return precoEtiqueta;
    } else if (formaDePagamento === 4) {
        return aplicarJuros(precoEtiqueta, 10);
    } else {
        return 'Forma de pagamento inválida';
    }
}

console.log(verificarFormaDePagamento(formaDePagamento));  // Saída: Forma de pagamento inválida

// ----------------------------------------------------------------------------------------------------------------------
// Verificando se o número é par

function verificarNumero(numero) {
    if (numero % 2 === 0) {
        console.log(`O ${numero} é PAR!`);
    } else {
        console.log(`O ${numero} é ÍMPAR!`);
    }
}

verificarNumero(3);  // Saída: O 3 é ÍMPAR!

// ----------------------------------------------------------------------------------------------------------------------
// Calculando a área de um retângulo

function areaRetangulo(largura, altura) {
    return largura * altura;
}

console.log(areaRetangulo(40, 20));  // Saída: 800

// ----------------------------------------------------------------------------------------------------------------------
// Somando dois números

function somar(numero1, numero2) {
    return numero1 + numero2;
}

console.log(somar(15, 7));  // Saída: 22

// ----------------------------------------------------------------------------------------------------------------------
// Verificando o maior número entre dois valores

function verificarMaiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return `O número ${numero1} é maior que o número ${numero2}`;
    } else {
        return `O número ${numero2} é maior que o número ${numero1}`;
    }
}

console.log(verificarMaiorNumero(3, 5));  // Saída: O número 5 é maior que o número 3

// ----------------------------------------------------------------------------------------------------------------------
// Convertendo de Real para Dólar

const valorDolar = 3.45;

function converterDolares(valorReal) {
    return valorReal / valorDolar;
}

console.log(converterDolares(10).toFixed(2));  // Saída: 2.90

// ----------------------------------------------------------------------------------------------------------------------
// Calculando o delta da equação do segundo grau

function calcularSegundoGrau(a, b, c) {
    return (b * b) - 4 * a * c;
}

console.log(calcularSegundoGrau(5, 3, 6));  // Saída: -111

// ----------------------------------------------------------------------------------------------------------------------
// Calculando desconto aplicado sobre um valor

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

console.log(aplicarDesconto(100, 15));  // Saída: 85

// ----------------------------------------------------------------------------------------------------------------------
// Somando dois valores com this e call

function calcularSomaComContexto(extra) {
    return this.a + this.b + extra;
}

const numeros = {
    a: 5,
    b: 15
};

const resultado = calcularSomaComContexto.call(numeros, 10);
console.log(resultado);  // Saída: 30

