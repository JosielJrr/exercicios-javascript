// Herança usando __proto__ (forma antiga, mas ainda funcional)

const pessoa = {
    genero: 'homem'
};

const luiz = {
    nome: 'Luiz',
    idade: 24,
    __proto__: pessoa
};

console.log(luiz.genero); // Saída: homem

// ----------------------------------------------------------------------------------------------------------------------
// Criando um objeto com protótipo

const pessoaPrototype = {
    saudacao() {
        return `Olá, ${this.nome}!`;
    }
};

// Criando um novo objeto com pessoaPrototype como protótipo
const josiel = Object.create(pessoaPrototype);
josiel.nome = 'Josiel';

console.log(josiel.saudacao()); // Saída: Olá, Josiel!

// ----------------------------------------------------------------------------------------------------------------------
// Criando um objeto com protótipo de animal

let animalPrototype = {
    tipo: 'Desconhecido',
    fazerSom: function () {
        console.log('Fazendo algum som...');
    }
};

// Criando um objeto 'animal' que herda do protótipo animalPrototype
let animal = Object.create(animalPrototype);
animal.tipo = 'Mamífero';

console.log(animal.tipo); // Saída: Mamífero
animal.fazerSom(); // Saída: Fazendo algum som...

// ----------------------------------------------------------------------------------------------------------------------
// Definindo um protótipo base

let animalBase = {
    tipo: 'Desconhecido',
    fazerSom: function () {
        console.log('Fazendo algum som...');
    }
};

let bicho = Object.create(animalBase);
bicho.tipo = 'Mamífero';

// Criando outro objeto 'cachorro' que herda do protótipo bicho
let cachorro = Object.create(bicho);
cachorro.tipo = 'Cachorro';
cachorro.latir = function () {
    console.log('Au au!');
};

console.log(cachorro.tipo); // Saída: Cachorro
cachorro.fazerSom();        // Saída: Fazendo algum som...
cachorro.latir();           // Saída: Au au!

// ----------------------------------------------------------------------------------------------------------------------
// Criando um objeto com protótipo usando função construtora

function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}

Animal.prototype.falar = function () {
    return `O ${this.tipo} ${this.nome} faz um som.`;
};

const gato = new Animal('Thomas', 'Frajola');

console.log(gato.falar()); // Saída: O Frajola Thomas faz um som.

// ----------------------------------------------------------------------------------------------------------------------
// Extensão de protótipo: Individuo e Estudante

const Individuo = {
    nome: '',
    idade: 0,
    cumprimentar() {
        return `Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade`;
    }
};

const individuo1 = Object.create(Individuo);
individuo1.nome = 'Josiel';
individuo1.idade = 24;

console.log(individuo1.cumprimentar()); // Saída: Olá, me chamo Josiel e tenho 24 anos de idade

const estudante = Object.create(Individuo);
estudante.curso = '';
estudante.estudar = function () {
    return `${this.nome} está estudando ${this.curso}`;
};

const estudante1 = Object.create(estudante);
estudante1.nome = 'Maria';
estudante1.idade = 33;
estudante1.curso = 'Medicina';

console.log(estudante1.estudar()); // Saída: Maria está estudando Medicina

// ----------------------------------------------------------------------------------------------------------------------
// Criando e herdando protótipos de veículos

const Veiculo = {
    marca: '',
    modelo: '',
    ligar() {
        return `${this.marca} ${this.modelo} está ligado.`;
    }
};

const automovel = Object.create(Veiculo);
automovel.portas = 0;
automovel.abrirPortas = function () {
    return `Abrindo uma das ${this.portas} portas do ${this.marca} ${this.modelo}.`;
};

const Uno = Object.create(automovel);
Uno.marca = 'Uno';
Uno.modelo = 2015;
Uno.portas = 4;

console.log(Uno.ligar());          // Saída: Uno 2015 está ligado.
console.log(Uno.abrirPortas());    // Saída: Abrindo uma das 4 portas do Uno 2015.

const palio = Object.create(automovel);
palio.marca = 'Palio';
palio.modelo = 2010;
palio.portas = 4;

console.log(palio.ligar());        // Saída: Palio 2010 está ligado.
console.log(palio.abrirPortas());  // Saída: Abrindo uma das 4 portas do Palio 2010.

// ----------------------------------------------------------------------------------------------------------------------
// Extensão de protótipo com métodos adicionais

const ContaBancaria = {
    titular: '',
    saldo: 0,

    depositar(valor) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
    },
    sacar(valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente. Saldo atual: R$${this.saldo}.`;
        } else {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
        }
    }
};

const conta1 = Object.create(ContaBancaria);
conta1.titular = 'José';
conta1.saldo = 1000;

console.log(conta1.depositar(350));   // Saída: Depósito de R$350 realizado. Saldo atual: R$1350.
console.log(conta1.sacar(100));       // Saída: Saque de R$100 realizado. Saldo atual: R$1250.

const contaPoupanca = Object.create(ContaBancaria);
contaPoupanca.taxaDeJuros = 0;
contaPoupanca.renderJuros = function () {
    const juros = this.saldo * this.taxaDeJuros;
    this.saldo += juros;
    return `Juros de R$${juros.toFixed(2)} renderizados. Saldo atual: R$${this.saldo.toFixed(2)}.`;
};

const contaPoupanca1 = Object.create(contaPoupanca);
contaPoupanca1.titular = 'Ana';
contaPoupanca1.saldo = 1500;
contaPoupanca1.taxaDeJuros = 0.05;

console.log(contaPoupanca1.depositar(1000));    // Saída: Depósito de R$1000 realizado. Saldo atual: R$2500.
console.log(contaPoupanca1.renderJuros());      // Saída: Juros de R$125.00 renderizados. Saldo atual: R$2625.00.

// ----------------------------------------------------------------------------------------------------------------------
// Criando protótipo para biblioteca de livros

const livro = {
    titulo: '',
    autor: '',

    informacoes() {
        return `${this.titulo} por ${this.autor}.`;
    }
};

const livro1 = Object.create(livro);
livro1.titulo = 'Vidas Secas';
livro1.autor = 'Graciliano Ramos';

console.log(livro1.informacoes()); // Saída: Vidas Secas por Graciliano Ramos.

const livroDigital = Object.create(livro);
livroDigital.formato = '';
livroDigital.baixar = function () {
    return `Baixando ${this.titulo} de ${this.autor} em formato ${this.formato}.`;
};

const livroDigital1 = Object.create(livroDigital);
livroDigital1.titulo = 'O Cortiço';
livroDigital1.autor = 'Aluísio de Azevedo';
livroDigital1.formato = 'mobi';

console.log(livroDigital1.baixar()); // Saída: Baixando O Cortiço de Aluísio de Azevedo em formato mobi.

// ----------------------------------------------------------------------------------------------------------------------
// Criando uma hierarquia de animais

const quadrupede = {
    nome: 'Morcego',
    tipo: 'Mamífero',

    falar() {
        return 'Emitindo som...';
    }
};

const tigre = {
    __proto__: quadrupede,
    latir() {
        return 'roar';
    }
};

console.log(tigre.falar()); // Saída: Emitindo som...
console.log(tigre.latir()); // Saída: Au Au

// ----------------------------------------------------------------------------------------------------------------------
// Criando uma hierarquia de criaturas

const criatura = {
    nome: '',
    tipo: '',

    falar() {
        return `O ${this.tipo} ${this.nome} faz um som.`;
    }
};

const lobo = {
    uivar() {
        return `${this.nome} está uivando.`;
    }
};

Object.setPrototypeOf(lobo, criatura); // Estabelecendo herança

const lobo1 = Object.create(lobo);
lobo1.nome = 'Alfa';
lobo1.tipo = 'Lobo';

console.log(lobo1.falar()); // Saída: O Lobo Alfa faz um som.
console.log(lobo1.uivar()); // Saída: Alfa está uivando.

// ----------------------------------------------------------------------------------------------------------------------
// Estendendo protótipo de conta bancária

const ContaBanco = {
    titular: '',
    saldo: 0,

    depositar(valor) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
    },

    sacar(valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente. Saldo atual: R$${this.saldo}.`;
        }
        this.saldo -= valor;
        return `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
    }
};

// Estendendo o protótipo ContaBancaria para Conta Corrente
const ContaCorrente = Object.create(ContaBanco);
ContaCorrente.limite = 0;

ContaCorrente.usarLimite = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        return `Limite insuficiente. Saldo atual: R$${this.saldo}, Limite: R$${this.limite}.`;
    }
    this.saldo -= valor;
    return `Uso do limite de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
};

// Criando uma conta corrente com saldo e limite
const contaCorrente1 = Object.create(ContaCorrente);
contaCorrente1.saldo = 1000;
contaCorrente1.limite = 5000;

console.log(contaCorrente1.depositar(500)); // Saída: Depósito de R$500 realizado. Saldo atual: R$1500.
console.log(contaCorrente1.sacar(333));    // Saída: Saque de R$333 realizado. Saldo atual: R$1167.
console.log(contaCorrente1.usarLimite(400)); // Saída: Uso do limite de R$400 realizado. Saldo atual: R$767.


/*
NOTA:
Embora a herança via protótipos (__proto__, Object.create, Object.setPrototypeOf) funcione
e ajude a entender como o JavaScript lida com objetos, essa abordagem está em desuso.

Hoje, o padrão é usar a sintaxe moderna com `class`, `extends`, `constructor` e o operador `new`,
que tornam o código mais limpo, organizado e fácil de manter — além de ser mais familiar
pra quem vem de outras linguagens orientadas a objetos.
*/
