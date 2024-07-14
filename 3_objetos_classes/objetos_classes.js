// FUNCIONAMENTO DE UM OBJETO:

// const pessoa = {
//     nome: 'Josiel',
//     idade: 24,
//     cidade: 'Recife',
//     apresentar: function () {
//         console.log(`O meu nome é ${this.nome} tenho ${this.idade} anos de idade e moro em ${this.cidade}`);
//     }
// }

// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.cidade);
// console.log(pessoa);
// // Incrementou mais uma chave-valor ao objeto
// pessoa.altura = 1.84

// console.log(pessoa);
// // Deletou uma chave-valor
// delete pessoa.altura

// console.log(pessoa);
// // Substituiu o valor da propriedade nome
// pessoa.nome = 'Anderson'

// console.log(pessoa.nome);
// // Chamando o método (função) do objeto
// pessoa.apresentar();
// // Acessando dinamicamente um valor do objeto
// console.log(pessoa['idade']);

// ----------------------------------------------------------------------------------------------------------------------

// FUNCIONAMENTO DE UMA CLASSE:

// class Pessoa {
//     nome;
//     idade;
//     descrever() {
//         console.log(`O meu nome é ${this.nome} tenho ${this.idade} anos de idade`);
//     }
// }

// // Instância (OBJETOS) da classe (Modelo)
// const josiel = new Pessoa();
// josiel.nome = 'Josiel';
// josiel.idade = 24;

// console.log(josiel);
// josiel.descrever();

// ----------------------------------------------------------------------------------------------------------------------

// FUNCIONAMENTO DE UMA CLASSE CRIANDO INSTÂNCIAS COM CONSTRUCTOR:

// class Pessoa {

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2024 - idade;
//     }

//     descrever() {
//         console.log(`O meu nome é ${this.nome} tenho ${this.idade} anos de idade`);
//     }
// }

// const josiel = new Pessoa('Josiel', 24);
// console.log(josiel);
// josiel.descrever();

// ----------------------------------------------------------------------------------------------------------------------

// COMPARANDO IDADES COM FUNÇÕES RECEBENDO OBJETOS:

// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// function compararIdades(pessoa1, pessoa2) {
//     if (pessoa1.idade > pessoa2.idade) {
//         console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`);
//     } else if (pessoa1.idade < pessoa2.idade) {
//         console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`);
//     } else {
//         console.log(`${pessoa1.nome} e ${pessoa2.nome} possuem a mesma idade`);
//     }
// }

// // Criando instâncias da classe Pessoa
// const josiel = new Pessoa('Josiel', 24);
// const pedro = new Pessoa('Pedro', 22);

// // Comparando idades
// compararIdades(josiel, pedro);

// ----------------------------------------------------------------------------------------------------------------------

// CRIAÇÃO DE CLASSE E MÉTODO:

// class Carro {

//     constructor(marca, modelo, ano) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//     }

//     descrever() {
//         console.log(`O ${this.marca} modelo ${this.modelo} do ano de ${this.ano}`);
//     }
// }

// const palio = new Carro ('Pálio', 'segunda geração', 2010);

// palio.descrever();

// ----------------------------------------------------------------------------------------------------------------------

// MÉTODOS SET E GET:

// class Pessoa {

//     constructor(nome, idade) {
//         this._nome = nome;
//         this._idade = idade;
//     }

//     // Método get para acessar valor da propriedade nome:
//     get nome() {
//         return this._nome;
//     }

//     // Método set para validar e definir novos valores para propriedade nome:
//     set nome(novoNome) {
//         if (typeof novoNome === 'string' && novoNome.length > 0) {
//             this._nome = novoNome;
//         } else {
//             console.error('Nome inválido');
//         }
//     }

//     // Método get para acessar valor da propriedade idade:
//     get idade() {
//         return this._idade;
//     }

//     // Método set para validar e definir novos valores para propriedade idade:
//     set idade(novaIdade) {
//         if (typeof novaIdade === 'number' && novaIdade > 0) {
//             this._idade = novaIdade;
//         } else {
//             console.error('Idade inválida');
//         }
//     }
// }

// const pessoa = new Pessoa('Alice', 25);

// console.log(pessoa.nome); // Alice
// console.log(pessoa.idade); // 25

// pessoa.nome = 'Bob';
// pessoa.idade = 30;

// console.log(pessoa.nome); // Bob
// console.log(pessoa.idade); // 30

// pessoa.nome = ''; // Nome inválido
// pessoa.idade = -5; // Idade inválida

// ----------------------------------------------------------------------------------------------------------------------

// PROPRIEDADES E MÉTODOS STATIC:

// class Calculadora {
//     // Propriedade estática
//     static PI = 3.14159;

//     // Método estático
//     static soma(a, b) {
//         return a + b;
//     }

//     // Método estático
//     static areaDoCirculo(raio) {
//         return this.PI * raio * raio;
//     }
// }

// // Acessando a propriedade estática
// console.log(Calculadora.PI); // 3.14159

// // Chamando métodos estáticos
// console.log(Calculadora.soma(5, 7)); // 12
// console.log(Calculadora.areaDoCirculo(10)); // 314.159

// ----------------------------------------------------------------------------------------------------------------------

// HERDANDO CLASSES COM EXTENDS:

// class SuperClasse {

//     constructor(nome) {
//         this.nome = nome;
//     }

//     saudacao() {
//         return `Olá, meu nome é ${this.nome}`;
//     }
// }

// class SubClasse extends SuperClasse {
//     constructor(nome, idade) {
//         super(nome); // Chama o construtor da superclasse
//         this.idade = idade;
//     }

//     saudacao() {
//         return `${super.saudacao()} e eu tenho ${this.idade} anos`;
//     }
// }

// const pessoa = new SubClasse('Alice', 30);
// console.log(pessoa.saudacao()); // Olá, meu nome é Alice e eu tenho 30 anos

// ----------------------------------------------------------------------------------------------------------------------

// CALCULAR VALOR DE UM PERCURSO:

// class Carro {

//     constructor(marca, cor, gastoPorKm) {
//         this.marca = marca;
//         this.cor = cor;
//         this.gastoPorKm = gastoPorKm;
//     }

//     calcularViagem(valorCombustivel, distancia) {
//         return this.gastoPorKm * distancia * valorCombustivel;
//     }

// }

// const uno = new Carro('Uno', 'prata', 1 / 12);
// const palio = new Carro('Palio', 'preto', 1 / 10);

// console.log(uno.calcularViagem(5, 70).toFixed(2));
// console.log(palio.calcularViagem(5, 70));

// ----------------------------------------------------------------------------------------------------------------------

//  CALCULAR IMC:

// class Pessoa {

//     constructor(nome, peso, altura) {
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     calcularImc() {
//         return this.peso / (this.altura * this.altura);
//     }

//     classificarImc() {
//         const imc = this.calcularImc();
//         if (imc < 18.5) {
//             return 'Abaixo do peso';
//         } else if (imc >= 18.5 && imc < 25) {
//             return 'Peso normal';
//         } else if (imc >= 25 && imc < 30) {
//             return 'Acima do peso';
//         } else if (imc >= 30 && imc < 40) {
//             return 'Obeso';
//         } else {
//             return 'Obesidade grave';
//         }
//     }
// }

// const jose = new Pessoa('José', 70, 1.75);

// console.log(jose.calcularImc().toFixed(2));
// console.log(jose.classificarImc());

// ----------------------------------------------------------------------------------------------------------------------

// CALCULAR A ÁREA DE UM RETÂNGULO:

// class Rectangle {

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const rectangle1 = new Rectangle(30, 40);

// console.log(rectangle1.getArea());

// ----------------------------------------------------------------------------------------------------------------------

// DESCRIÇÃO DE UM CARRO:

// class Car {

//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getDescription() {
//         return `Este carro é um ${this.year} ${this.make} ${this.model}`;
//     }
// }

// const gol = new Car('Gol', 'Prata', 2010);
// const palio = new Car('Pálio', 'Preto', 2000);

// console.log(gol.getDescription());
// console.log(palio.getDescription());

// ----------------------------------------------------------------------------------------------------------------------

// CIRCUNFERÊNCIA DE UM CÍRCULO:

// class Circle {

//     constructor(radius) {
//         this.radius = radius;
//     }

//     getCircumference() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// const circle1 = new Circle(20);
// console.log(circle1.getCircumference().toFixed(2));

// ----------------------------------------------------------------------------------------------------------------------

// APROVAÇÃO ALUNOS:

// class Student {

//     constructor(name, grade) {
//         this.name = name;
//         this.grade = grade;
//     }

//     isPassing() {
//         return this.grade >= 7;
//     }
// }

// const josiel = new Student('Josiel', 8);
// console.log(josiel.isPassing());

// ----------------------------------------------------------------------------------------------------------------------

// CONTA BANCÁRIA:

// class BankAccount {

//     constructor(accountNumber, accountHolder, balance) {
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount
//         return this.balance;
//     }

//     withdraw(amount) {
//         if (amount <= this.balance) {
//             this.balance -= amount
//         } else {
//             console.log('Saldo insuficiente para saque.')
//         }
//         return this.balance;
//     }
// }

// const josiel = new BankAccount(86363577, 'Josiel', 500);
// console.log(josiel.deposit(50));
// console.log(josiel.withdraw(30));

// ----------------------------------------------------------------------------------------------------------------------

// CALCULAR ÁREA E PERÍMETRO DE UM RETÊNGULO:

// class Retangulo {

//     constructor(base, altura) {
//         this.base = base;
//         this.altura = altura;
//     }

//     calcularArea() {
//         return this.base * this.altura;
//     }

//     calcularPerimetro() {
//         return 2 * (this.base + this.altura);
//     }
// }

// const retangulo1 = new Retangulo(5, 3);
// console.log('Área:', retangulo1.calcularArea());
// console.log('Perímetro:', retangulo1.calcularPerimetro());

// ----------------------------------------------------------------------------------------------------------------------

// CALCULAR ÁREA:

// class Parede {

//     constructor(altura, largura) {
//         this.altura = altura;
//         this.largura = largura;
//     }

//     calcularArea() {
//         const area = this.largura * this.altura;
//         return area;
//     }

// }

// const paredeSala = new Parede(20, 15);

// console.log(paredeSala.calcularArea());

// ----------------------------------------------------------------------------------------------------------------------

// AUMENTO DE SALÁRIO:

// class Funcionario {

//     constructor(nome, salario) {
//         this.nome = nome;
//         this.salario = salario;
//     }

//     calcularAumento(desconto) {
//         return this.salario + (this.salario * (desconto / 100));
//     }
// }

// const josiel = new Funcionario('Josiel', 1000)

// console.log(`O funcionário ${josiel.nome} possui um salário de ${josiel.calcularAumento(15)}`);

// ----------------------------------------------------------------------------------------------------------------------