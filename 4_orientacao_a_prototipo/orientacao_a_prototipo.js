// const pessoa = {
//     genero: 'homem'
// };
// const josiel = {
//     nome: 'Josiel',
//     idade: 24,
//     __proto__: pessoa
// };
// console.log(josiel.genero);

// ----------------------------------------------------------------------------------------------------------------------

// // Definindo um objeto protótipo
// const pessoaPrototype = {
//     saudacao() {
//         return `Olá, ${this.nome}!`;
//     }
// };
// // Criando um novo objeto com pessoaPrototype como protótipo
// const josiel = Object.create(pessoaPrototype);
// josiel.nome = 'Josiel';
// console.log(josiel.saudacao()); 

// ----------------------------------------------------------------------------------------------------------------------

// // Definindo um objeto protótipo
// let animalPrototype = {
//     tipo: 'Desconhecido',
//     fazerSom: function () {
//         console.log('Fazendo algum som...');
//     }
// };

// // Criando um objeto 'animal' que herda do protótipo animalPrototype
// let animal = Object.create(animalPrototype);
// animal.tipo = 'Mamífero';

// // Testando métodos e propriedades
// console.log(animal.tipo);
// animal.fazerSom();

// ----------------------------------------------------------------------------------------------------------------------

// // Definindo um protótipo base
// let animalPrototype = {
//     tipo: 'Desconhecido',
//     fazerSom: function () {
//         console.log('Fazendo algum som...');
//     }
// };

// // Criando um novo objeto 'animal' que herda do protótipo animalPrototype
// let animal = Object.create(animalPrototype);
// animal.tipo = 'Mamífero';

// // Criando outro objeto 'cachorro' que herda do protótipo animal
// let cachorro = Object.create(animal);
// cachorro.tipo = 'Cachorro';
// cachorro.latir = function () {
//     console.log('Au au!');
// };

// // Testando métodos e propriedades
// console.log(cachorro.tipo); 
// cachorro.fazerSom(); 
// cachorro.latir(); 

// ----------------------------------------------------------------------------------------------------------------------

// Criando um Objeto com Protótipo em uma função construtora:

// function Animal(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// Animal.prototype.falar = function() {
//     return `O ${this.tipo} ${this.nome} faz um som.`;
// }

// const cachorro = new Animal('Rex', 'Golden');

// console.log (cachorro.falar());

// ----------------------------------------------------------------------------------------------------------------------

// Criar e Extender Prototipo de Pessoa:

// const Pessoa = {
//     nome: '',
//     idade: 0,
//     cumprimentar() {
//         return `Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade`;
//     }
// }

// const pessoa1 = Object.create(Pessoa);
// pessoa1.nome = 'Josiel';
// pessoa1.idade = 24;

// console.log(pessoa1.cumprimentar());

// const Estudante = Object.create(Pessoa);
// Estudante.curso = '';
// Estudante.estudar = function (){
//     return `${this.nome} está estudando ${this.curso}`;
// }

// const Estudante1 = Object.create(Estudante);
// Estudante1.nome = 'Maria';
// Estudante1.idade = 33;
// Estudante1.curso = 'Medicina';

// console.log(Estudante1.estudar());

// ----------------------------------------------------------------------------------------------------------------------

// Criando e Herdando Prototipos de Veículos:

// const Veiculo = {
//     marca: '',
//     modelo: '',
//     ligar() {
//         return `${this.marca} ${this.modelo} está ligado.`;
//     }
// }

// const Carro = Object.create(Veiculo)
// Carro.portas = 0;
// Carro.abrirPortas = function () {
//     return `Abrindo uma das ${this.portas} portas do ${this.marca} ${this.modelo}.`;
// }

// const Uno = Object.create(Carro);
// Uno.marca = 'Uno';
// Uno.modelo = 2015;
// Uno.portas = 4;

// console.log(Uno.ligar());
// console.log(Uno.abrirPortas());

// const palio = Object.create(Carro);
// palio.marca = 'Palio';
// palio.modelo = 2010;
// palio.portas = 4;

// console.log(palio.ligar());
// console.log(palio.abrirPortas());

// ----------------------------------------------------------------------------------------------------------------------

// Extensão de Protótipo com Métodos Adicionais:

// const ContaBancaria = {
//     titular: '',
//     saldo: 0,

//     depositar(valor) {
//         this.saldo += valor;
//         return `Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
//     },
//     sacar(valor) {
//         if (valor > this.saldo) {
//             return `Saldo insuficiente. Saldo atual: R$${this.saldo}.`;
//         } else {
//             this.saldo -= valor;
//             return `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
//         }
//     }
// }

// const Conta1 = Object.create(ContaBancaria);
// Conta1.titular = 'José';
// Conta1.saldo = 1000;

// console.log(Conta1.depositar(350));
// console.log(Conta1.sacar(100));

// const ContaPoupanca = Object.create(ContaBancaria)
// ContaPoupanca.taxaDeJuros = 0;
// ContaPoupanca.renderJuros = function () {
//     const juros = this.saldo * this.taxaDeJuros;
//     this.saldo += juros;
//     return `Juros de R$${juros.toFixed(2)} renderizados. Saldo atual: R$${this.saldo.toFixed(2)}.`;
// };

// const ContaPoupanca1 = Object.create(ContaPoupanca);
// ContaPoupanca1.titutar = 'Ana';
// ContaPoupanca1.saldo = 1500;
// ContaPoupanca1.taxaDeJuros = 0.05;

// console.log(ContaPoupanca1.depositar(1000));
// console.log(ContaPoupanca1.renderJuros());

// ----------------------------------------------------------------------------------------------------------------------

//  Criando Protótipo para Biblioteca de Livros:

// const Livro = {
//     titulo: '',
//     autor: '',

//     informacoes() {
//         return `${this.titulo} por ${this.autor}.`;
//     }
// }

// const Livro1 = Object.create(Livro);
// Livro1.titulo = 'Vidas Secas';
// Livro1.autor = 'Graciliano Ramos';

// console.log(Livro1.informacoes())

// const LivroDigital = Object.create(Livro);
// LivroDigital.formato = '';
// LivroDigital.baixar = function () {
//     return `Baixando ${this.titulo} de ${this.autor} em formato ${this.formato}.`;
// }

// const LivroDigital1 = Object.create(LivroDigital);
// LivroDigital1.titulo = 'O Cortiço';
// LivroDigital1.autor = 'Aluísio de Azevedo';
// LivroDigital1.formato = 'mobi';

// console.log(LivroDigital1.baixar())

// ----------------------------------------------------------------------------------------------------------------------

//  Criar uma Hierarquia de Animais:

// const animal = {
//     nome: 'Morcego',
//     tipo: 'Mamiféro',

//     falar() {
//         return 'Emitindo som...';
//     }
// }

// const cachorro = {
//     __proto__: animal,
//     latir() {
//         return 'Au Au';
//     }
// }

// console.log(cachorro.falar());
// console.log(cachorro.latir());

// ----------------------------------------------------------------------------------------------------------------------

//  Criar uma Hierarquia de Animais:

// const Animal = {
//     nome: '',
//     tipo: '',

//     falar() {
//         return `O ${this.tipo} ${this.nome} faz um som.`;
//     }
// }

// const Cachorro = {
//     latir() {
//         return `${this.nome} está latindo.`;
//     }
// }

// Cachorro.__proto__ = Animal;

// const Cachorro1 = Object.create(Cachorro);
// Cachorro1.nome = 'Lilo';
// Cachorro1.tipo = 'Vira-Lata';

// console.log(Cachorro1.falar());
// console.log(Cachorro1.latir());

// ----------------------------------------------------------------------------------------------------------------------

// Extender Prototipo de ContaBancaria:

// const ContaBancaria = {
//     titular: '',
//     saldo: 0,

//     depositar(valor) {
//         this.saldo += valor;
//         return `Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
//     },
//     sacar(valor) {
//         if (valor > this.saldo) {
//             return `Saldo insuficiente. Saldo atual: R$${this.saldo}.`;
//         }
//         this.saldo -= valor;
//         return `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
//     }
// }

// const ContaCorrente = {
//     __proto__: ContaBancaria,
//     limite: 0,

//     usarLimite: function (valor) {
//         if (valor > (this.saldo + this.limite)) {
//             return `Limite insuficiente. Saldo atual: R$${this.saldo}, Limite: R$${this.limite}.`;
//         }
//         this.saldo -= valor;
//         return `Uso do limite de R$${valor} realizado. Saldo atual: R$${this.saldo}.`;
//     }
// }

// const ContaCorrente1 = Object.create(ContaCorrente);
// ContaCorrente1.saldo = 1000;
// ContaCorrente1.limite = 5000;

// console.log(ContaCorrente1.depositar(500))
// console.log(ContaCorrente1.sacar(333))
// console.log(ContaCorrente1.usarLimite(400))

// ----------------------------------------------------------------------------------------------------------------------