// Estrutura de repetição for

for (let i = 0; i < 10; i++) {
    console.log(i); // Saída: 0 até 9 (um por linha)
}

// ----------------------------------------------------------------------------------------------------------------------
// Contando caracteres em uma variável string

const nome = 'Josiel Alves da Silva Junior';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra); // Saída: cada letra da string em uma linha (incluindo espaços)
}

// ----------------------------------------------------------------------------------------------------------------------
// Calculando média

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(media.toFixed(1)); // Saída: 6.7

// ----------------------------------------------------------------------------------------------------------------------
// Gerando tabuada

const numero = 2;

for (let i = 1; i <= 10; i++) {
    console.log(i * numero); // Saída: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}

// ----------------------------------------------------------------------------------------------------------------------
// Filtrando números pares

for (let i = 0; i <= 10; i = i + 2) {
    console.log(i); // Saída: 0, 2, 4, 6, 8, 10
}

// OU

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {
    const n = num[i];

    if (n % 2 === 0) {
        console.log(n); // Saída: 2, 4, 6, 8, 10
    }
}

// OU

const numPares = [];

for (let i = 0; i < 10; i++) {
    const numPar = i % 2 === 0;
    if (numPar) {
        numPares.push(i);
    }
}

console.log(numPares); // Saída: [0, 2, 4, 6, 8]

// OU

const nPares = [];

for (let i = 0; i < 10; i = i + 2) {
    nPares.push(i);
}

console.log(nPares); // Saída: [0, 2, 4, 6, 8]

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 1 do Curso em Vídeo:

for (let i = 6; i <= 11; i++) {
    console.log(i); // Saída: 6, 7, 8, 9, 10, 11
}

// OU

const itens = [6, 7, 8, 9, 10, 11, 'Acabou!'];

for (let i = 0; i < itens.length; i++) {
    const item = itens[i];
    console.log(item); // Saída: 6, 7, 8, 9, 10, 11, 'Acabou!'
}

// OU

const numeros = [];

for (let i = 6; i <= 11; i++) {
    numeros.push(i);
}

console.log(numeros); // Saída: [6, 7, 8, 9, 10, 11]

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 2 do Curso em Vídeo:

for (let i = 10; i >= 3; i = i - 1) {
    console.log(i); // Saída: 10, 9, 8, 7, 6, 5, 4, 3
}

console.log('Acabou!'); // Saída: 'Acabou!'

// OU

const elementos = [10, 9, 8, 7, 6, 5, 4, 3, 'Acabou!'];

for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
    console.log(elemento); // Saída: 10, 9, 8, 7, 6, 5, 4, 3, 'Acabou!'
}

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 3 do Curso em Vídeo:

for (let i = 0; i <= 18; i = i + 3) {
    console.log(i); // Saída: 0, 3, 6, 9, 12, 15, 18
}

console.log('Acabou!'); // Saída: 'Acabou!'

// OU

const valores = [0, 3, 6, 9, 12, 15, 18, 'Acabou!'];

for (let i = 0; i < valores.length; i++) {
    const valor = valores[i];
    console.log(valor); // Saída: 0, 3, 6, 9, 12, 15, 18, 'Acabou!'
}

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 4 do Curso em Vídeo:

for (let i = 100; i >= 0; i = i - 5) {
    console.log(i); // Saída: 100, 95, 90, ..., 5, 0
}

console.log('Acabou!'); // Saída: 'Acabou!'

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 5 do Curso em Vídeo:

const valor = 35;

for (let i = 1; i < valor; i++) {
    console.log(i); // Saída: 1, 2, 3, ..., 34
}

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 6 do Curso em Vídeo:

for (let i = 30; i >= 1; i = i - 1) {
    if (i % 4 === 0) {
        console.log([i]); // Saída: [28], [24], [20], [16], [12], [8], [4]
    } else {
        console.log(i); // Saída: 30, 29, 27, 26, 25, 23, 22, ..., 5, 3, 2, 1
    }
}

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafios 7 e 8 do Curso em Vídeo:

const valorInicial = 30;
const valorFinal = 10;
const incremento = 2;

if (valorInicial < valorFinal) {
    for (let i = valorInicial; i <= valorFinal; i = i + incremento) {
        console.log(i);
    }
} else {
    for (let i = valorInicial; i >= valorFinal; i = i - incremento) {
        console.log(i); // Saída: 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10
    }
}

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 9 do Curso em Vídeo:

let somatorio = 0;

for (let i = 6; i <= 100; i = i + 2) {
    somatorio = somatorio + i;
}

console.log(somatorio); // Saída: 2544

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 10 do Curso em Vídeo:

let acumulado = 0;
for (let i = 500; i >= 0; i = i - 50) {
    acumulado = acumulado + i;
}

console.log(acumulado); // Saída: 2750

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 11 do Curso em Vídeo:

const dados = [2, 6, 7, 8, 4, 5, 2];

let total = 0;

for (let i = 0; i < dados.length; i++) {
    const dado = dados[i];
    total = total + dado;
}

console.log(total); // Saída: 34

// ----------------------------------------------------------------------------------------------------------------------
// Resolvendo desafio 12 do Curso em Vídeo:

const sequencia = [3, 4, 6, 7, 2, 3];

for (let i = 0; i < sequencia.length; i++) {
    const valorAtual = sequencia[i];

    if (valorAtual % 2 === 0) {
        console.log(`${valorAtual} = PAR`);
    } else {
        console.log(`${valorAtual} = ÍMPAR`);
    }
}

// ----------------------------------------------------------------------------------------------------------------------
// Contagem de 1 a 10

for (let i = 1; i <= 10; i++) {
    console.log(i); // Saída: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// ----------------------------------------------------------------------------------------------------------------------
// Números pares

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i); // Saída: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    }
}

// ----------------------------------------------------------------------------------------------------------------------
// Calculando fatorial

function calcularFatorial(n) {
    let fatorial = 1;

    for (let i = 1; i <= n; i++) {
        fatorial *= i; // Multiplica fatorial pelo valor de i a cada iteração
    }

    return fatorial;
}

let n = 5;

console.log("O fatorial de " + n + " é: " + calcularFatorial(n)); // Saída: O fatorial de 5 é: 120

// ----------------------------------------------------------------------------------------------------------------------
// Estrutura de repetição while

let contador = 0;

while (contador < 5) {
    console.log(contador); // Saída: 0, 1, 2, 3, 4
    contador++;
}

// ----------------------------------------------------------------------------------------------------------------------
// Estrutura de repetição do...while

let i = 0;
do {
    console.log(i); // Saída: 0, 1, 2, 3, 4
    i++;
} while (i < 5);
