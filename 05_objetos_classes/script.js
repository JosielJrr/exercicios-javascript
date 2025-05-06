// Mostrando o funcionamento de um objeto

const pessoa = {
    nome: 'Josiel',
    idade: 24,
    cidade: 'Recife',
    apresentar: function () {
        console.log(`O meu nome é ${this.nome}, tenho ${this.idade} anos de idade e moro em ${this.cidade}`);
    }
};

console.log(pessoa.nome); // Saída: Josiel
console.log(pessoa.idade); // Saída: 24
console.log(pessoa.cidade); // Saída: Recife
console.log(pessoa); // Saída: objeto completo com nome, idade, cidade e apresentar()

pessoa.altura = 1.84;  // Adicionando uma nova propriedade ao objeto

console.log(pessoa); // Saída: objeto com a nova propriedade altura

delete pessoa.altura;  // Deletando a propriedade altura do objeto
console.log(pessoa); // Saída: objeto sem a propriedade altura

// Substituindo o valor da propriedade nome
pessoa.nome = 'Anderson';

console.log(pessoa.nome); // Saída: Anderson

pessoa.apresentar(); // Saída: O meu nome é Anderson tenho 24 anos de idade e moro em Recife

console.log(pessoa['idade']); // Saída: 24

// ----------------------------------------------------------------------------------------------------------------------
// Mostrando o funcionamento de uma classe

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`O meu nome é ${this.nome} tenho ${this.idade} anos de idade`);
    }
}

// Criando uma instância (objeto) da classe
const pessoa1 = new Pessoa();
pessoa1.nome = 'Josiel';
pessoa1.idade = 24;

console.log(pessoa1); // Saída: Pessoa { nome: 'Josiel', idade: 24 }
pessoa1.descrever(); // Saída: O meu nome é Josiel tenho 24 anos de idade

// ----------------------------------------------------------------------------------------------------------------------
// Mostrando o funcionamento de uma classe criando instâncias com constructor

class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = new Date().getFullYear() - idade;
    }

    descrever() {
        console.log(`O meu nome é ${this.nome} tenho ${this.idade} anos de idade`);
    }
}

const aluno1 = new Aluno('Josiel', 25);
console.log(aluno1); // Saída: Pessoa { nome: 'Josiel', idade: 25, anoDeNascimento: 2000 }
aluno1.descrever(); // Saída: O meu nome é Josiel tenho 25 anos de idade

// ----------------------------------------------------------------------------------------------------------------------
// Comparando idades com funções recebendo objetos

class Individuo {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function compararIdades(individuo1, individuo2) {
    if (individuo1.idade > individuo2.idade) {
        console.log(`${individuo1.nome} é mais velho(a) que ${individuo2.nome}`);
    } else if (individuo1.idade < individuo2.idade) {
        console.log(`${individuo2.nome} é mais velho(a) que ${individuo1.nome}`);
    } else {
        console.log(`${individuo1.nome} e ${individuo2.nome} possuem a mesma idade`);
    }
}

const individuo1 = new Individuo('Josiel', 24);
const individuo2 = new Individuo('Pedro', 22);

compararIdades(individuo1, individuo2); // Saída: Josiel é mais velho(a) que Pedro

// ----------------------------------------------------------------------------------------------------------------------
// Criação de classe e método
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever() {
        console.log(`${this.marca} modelo ${this.modelo} do ano de ${this.ano}`);
    }
}

const carro1 = new Carro('Pálio', 'segunda geração', 2010);

carro1.descrever(); // Saída: O Pálio modelo segunda geração do ano de 2010

// ----------------------------------------------------------------------------------------------------------------------
// Métodos set e get com propriedades privadas 

class Colaborador {
    #nome;  // Propriedade privada real
    #idade; // Propriedade privada real

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    // Método get para acessar valor da propriedade nome
    get nome() {
        return this.#nome;
    }

    // Método set para validar e definir novos valores para propriedade nome
    set nome(novoNome) {
        if (typeof novoNome === 'string' && novoNome.length > 0) {
            this.#nome = novoNome;
        } else {
            console.error('Nome inválido');
        }
    }

    // Método get para acessar valor da propriedade idade
    get idade() {
        return this.#idade;
    }

    // Método set para validar e definir novos valores para propriedade idade
    set idade(novaIdade) {
        if (typeof novaIdade === 'number' && novaIdade > 0) {
            this.#idade = novaIdade;
        } else {
            console.error('Idade inválida');
        }
    }
}

const colaborador1 = new Colaborador('Alice', 25);

console.log(colaborador1.nome); // Saída: Alice
console.log(colaborador1.idade); // Saída: 25

colaborador1.nome = 'Bob';
colaborador1.idade = 30;

console.log(colaborador1.nome); // Saída: Bob
console.log(colaborador1.idade); // Saída: 30

colaborador1.nome = ''; // Nome inválido
colaborador1.idade = -5; // Idade inválida

// ----------------------------------------------------------------------------------------------------------------------
// Propriedades e métodos static

class Calculadora {
    static PI = 3.14159;  // Propriedade estática

    // Método estático
    static soma(a, b) {
        return a + b;
    }

    // Método estático
    static areaDoCirculo(raio) {
        return this.PI * raio * raio;
    }
}

console.log(Calculadora.PI); // Saída: 3.14159

console.log(Calculadora.soma(5, 7)); // Saída: 12
console.log(Calculadora.areaDoCirculo(10)); // Saída: 314.159

// ----------------------------------------------------------------------------------------------------------------------
// Herdando classes com extends

class SuperClasse {
    constructor(nome) {
        this.nome = nome;
    }

    saudacao() {
        return `Olá, meu nome é ${this.nome}`;
    }
}

class SubClasse extends SuperClasse {
    constructor(nome, idade) {
        super(nome); // Chama o construtor da superclasse
        this.idade = idade;
    }

    saudacao() {
        return `${super.saudacao()} e eu tenho ${this.idade} anos`;
    }
}

const colaborador = new SubClasse('Alice', 30);
console.log(colaborador.saudacao()); // Saída: Olá, meu nome é Alice e eu tenho 30 anos

// ----------------------------------------------------------------------------------------------------------------------
// Calculando custo de viagem de carro

class Automovel {
    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularViagem(valorCombustivel, distancia) {
        return this.gastoPorKm * distancia * valorCombustivel;
    }

}

const automovel1 = new Automovel('Uno', 'prata', 1 / 12);
const automovel2 = new Automovel('Palio', 'preto', 1 / 10);

console.log(automovel1.calcularViagem(5, 70).toFixed(2)); // Saída: 29.17
console.log(automovel2.calcularViagem(5, 70).toFixed(2)); // Saída: 35.00

// ----------------------------------------------------------------------------------------------------------------------
// Calculando e classificando IMC

class Paciente {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
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
}

const paciente1 = new Paciente('José', 70, 1.75);

console.log(paciente1.calcularImc().toFixed(2)); // Saída: 22.86
console.log(paciente1.classificarImc()); // Saída: Peso normal

// ----------------------------------------------------------------------------------------------------------------------
// Calculando a área de um retângulo

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    getArea() {
        return this.largura * this.altura;
    }
}

const retangulo1 = new Retangulo(30, 40);

console.log(retangulo1.getArea()); // Saída: 1200

// ----------------------------------------------------------------------------------------------------------------------
// Descrevendo um veículo

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    getDescricao() {
        return `Este veículo é um ${this.ano} ${this.marca} ${this.modelo}`;
    }
}

const veiculo1 = new Veiculo('Gol', 'Prata', 2010);
const veiculo2 = new Veiculo('Pálio', 'Preto', 2000);

console.log(veiculo1.getDescricao()); // Saída: Este veículo é um 2010 Gol Prata
console.log(veiculo2.getDescricao()); // Saída: Este veículo é um 2000 Pálio Preto

// ----------------------------------------------------------------------------------------------------------------------
// Calculando a circunferência de um círculo

class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    getCircunferencia() {
        return 2 * Math.PI * this.raio;
    }
}

const circulo1 = new Circulo(20);
console.log(circulo1.getCircunferencia().toFixed(2)); // Saída: 125.66

// ----------------------------------------------------------------------------------------------------------------------
// Aprovando alunos

class Estudante {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    estaAprovado() {
        return this.nota >= 7;
    }
}

const estudante1 = new Estudante('Josiel', 8);
console.log(estudante1.estaAprovado()); // Saída: true

// ----------------------------------------------------------------------------------------------------------------------
// Gerenciando conta bancária

class ContaBancaria {
    constructor(numeroConta, titular, saldo) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        return this.saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente para saque.');
        }
        return this.saldo;
    }
}

const cliente1 = new ContaBancaria(2545847, 'Josiel', 500);
console.log(cliente1.depositar(50)); // Saída: 550
console.log(cliente1.sacar(30)); // Saída: 520

// ----------------------------------------------------------------------------------------------------------------------
// Calculando área e perímetro de um retângulo

class Rectangle {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}

const rectangle1 = new Rectangle(5, 3);
console.log('Área:', rectangle1.calcularArea()); // Saída: Área: 15
console.log('Perímetro:', rectangle1.calcularPerimetro()); // Saída: Perímetro: 16

// ----------------------------------------------------------------------------------------------------------------------
// Calculando área da Parede

class Parede {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea() {
        const area = this.largura * this.altura;
        return area;
    }
}

const paredeSala = new Parede(20, 15);

console.log(paredeSala.calcularArea()); // Saída: 300

// ----------------------------------------------------------------------------------------------------------------------
// Calculando aumento de salário

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularAumento(desconto) {
        return this.salario + (this.salario * (desconto / 100));
    }
}

const funcionario1 = new Funcionario('Josiel', 12000)

console.log(`O funcionário ${funcionario1.nome} possui um salário de ${funcionario1.calcularAumento(15)}`);
// Saída: O funcionário Josiel possui um salário de 13800
