// Definindo uma função construtora

function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

// Adicionando um método através do prototype
Carro.prototype.descricao = function () {
    return `${this.marca} ${this.modelo} (${this.ano})`;
};

// Criando objetos usando a função construtora
const carro1 = new Carro('Toyota', 'Corolla', 2020);
const carro2 = new Carro('Honda', 'Civic', 2021);

console.log(carro1.descricao()); // Saída: Toyota Corolla (2020)
console.log(carro2.descricao()); // Saída: Honda Civic (2021)

// ----------------------------------------------------------------------------------------------------------------------

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

let meuCarro = new Carro('Toyota', 'Corolla');

let outroCarro = {
    cor: 'Prata'
};

// Usando `call` para inicializar um objeto existente
Carro.call(outroCarro, 'Honda', 'Civic');

console.log(meuCarro); // Saída: Carro { marca: 'Toyota', modelo: 'Corolla' }
console.log(outroCarro); // Saída: { cor: 'Prata', marca: 'Honda', modelo: 'Civic' }

// ----------------------------------------------------------------------------------------------------------------------
// Criando e estendendo protótipo de pessoa
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.cumprimentar = function () {
    return `Olá, meu nome é ${this.nome}.`;
};

const Pessoa1 = new Pessoa('Josiel', 24);
console.log(Pessoa1.cumprimentar()); // Saída: Olá, meu nome é Josiel.

// ----------------------------------------------------------------------------------------------------------------------
// Definindo função construtora para pessoa
function Pessoa(nome) {
    this.nome = nome;
}

// Adicionando propriedades e métodos ao protótipo
Pessoa.prototype.idade = 20;
Pessoa.prototype.saudacao = function () {
    return `Olá, me chamo ${this.nome}, tenho ${this.idade} anos`;
};

const pessoa1 = new Pessoa('Josiel');

console.log(pessoa1.saudacao()); // Saída: Olá, me chamo Josiel, tenho 20 anos


