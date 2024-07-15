// // DEFININDO UMA FUNÇÃO CONSTRUTORA:

// function Carro(marca, modelo, ano) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.ano = ano;
// }

// // Adicionando um método através do prototype
// Carro.prototype.descricao = function () {
//     return `${this.marca} ${this.modelo} (${this.ano})`;
// };

// // Criando objetos usando a função construtora
// const carro1 = new Carro('Toyota', 'Corolla', 2020);
// const carro2 = new Carro('Honda', 'Civic', 2021);

// // Usando o método adicionado via prototype
// console.log(carro1.descricao());
// console.log(carro2.descricao());

// ----------------------------------------------------------------------------------------------------------------------

// function Carro(marca, modelo) {
//     this.marca = marca;
//     this.modelo = modelo;
// }
// let meuCarro = new Carro('Toyota', 'Corolla'); // Usando função construtora com `new`
// let outroCarro = {
//     cor: 'Prata'
// };
// Carro.call(outroCarro, 'Honda', 'Civic'); // Usando `call` para inicializar um objeto existente.

// console.log(meuCarro);
// console.log(outroCarro);

// ----------------------------------------------------------------------------------------------------------------------

// CRIAR E ESTENDER PROTÓTIPO DE PESSOA:

// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// Pessoa.prototype.cumprimentar = function () {
//     return `Olá, meu nome é ${this.nome}.`;
// };

// const Pessoa1 = new Pessoa('Josiel', 24)
// console.log(Pessoa1.cumprimentar())

// ----------------------------------------------------------------------------------------------------------------------

// function Pessoa(nome) {
//     this.nome = nome;
// }

// Pessoa.prototype.idade = 20;
// Pessoa.prototype.saudacao = function () {
//     return `Olá, me chamo ${this.nome}, tenho ${this.idade} anos`;
// }

// const pessoa1 = new Pessoa('Josiel');

// console.log(pessoa1.saudacao())

// ----------------------------------------------------------------------------------------------------------------------

