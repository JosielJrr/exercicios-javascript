// Demonstração de coerção de tipos e uso de typeof

console.log("5" - 2); // Saída: 3 — string '5' é convertida para número e subtraída
console.log("5" + 3); // Saída: '53' — + concatena quando há string

const idade = "42";
console.log(typeof idade); // Saída: string
const idadeConvertida = Number(idade);
console.log(typeof idadeConvertida); // Saída: number

const maiorIdade = 1;
console.log(typeof maiorIdade); // Saída: number
const maiorIdadeConvertida = Boolean(maiorIdade);
console.log(maiorIdadeConvertida); // Saída: true

const qtdProdutos = 52;
console.log(typeof qtdProdutos); // Saída: number
const qtdProdutosConvertido = String(qtdProdutos);
console.log(typeof qtdProdutosConvertido); // Saída: string

// -----------------------------------------------------------------------------------------------------

// Demonstração de tipos primitivos com o operador typeof

const nome = "Josiel";
console.log(typeof nome); // Saída: string

const produtos = 55;
const altura = 1.88;
console.log(typeof produtos); // Saída: number
console.log(typeof altura); // Saída: number
console.log(typeof +Infinity); // Saída: number
console.log(typeof -Infinity); // Saída: number
console.log(typeof NaN); // Saída: number

const aprovado = true;
console.log(typeof aprovado); // Saída: boolean

let aluno;
console.log(typeof aluno); // Saída: undefined

let y = null;
console.log(typeof y); // Saída: object — comportamento peculiar do JS

let sym = Symbol('description');
console.log(typeof sym); // Saída: symbol

let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // Saída: bigint

const Pessoa = {
    nome: "Josiel",
    Idade: 25
};
console.log(typeof Pessoa); // Saída: object
